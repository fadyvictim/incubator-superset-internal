# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#   http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
"""Compatibility layer for different database engines

This modules stores logic specific to different database engines. Things
like time-related functions that are similar but not identical, or
information as to expose certain features or not and how to expose them.

For instance, Hive/Presto supports partitions and have a specific API to
list partitions. Other databases like Vertica also support partitions but
have different API to get to them. Other databases don't support partitions
at all. The classes here will use a common interface to specify all this.

The general idea is to use static classes and an inheritance scheme.
"""
import inspect
import logging
import pkgutil
from importlib import import_module
from pathlib import Path
from typing import Any, Dict, List, Type

from pkg_resources import iter_entry_points

from superset.db_engine_specs.base import BaseEngineSpec

logger = logging.getLogger(__name__)


def is_engine_spec(attr: Any) -> bool:
    return (
        inspect.isclass(attr)
        and issubclass(attr, BaseEngineSpec)
        and attr != BaseEngineSpec
    )


def get_engine_specs() -> Dict[str, Type[BaseEngineSpec]]:
    engine_specs: List[Type[BaseEngineSpec]] = []

    # load standard engines
    db_engine_spec_dir = str(Path(__file__).parent)
    for module_info in pkgutil.iter_modules([db_engine_spec_dir], prefix="."):
        module = import_module(module_info.name, package=__name__)
        engine_specs.extend(
            getattr(module, attr)
            for attr in module.__dict__
            if is_engine_spec(getattr(module, attr))
        )

    # load additional engines from external modules
    for ep in iter_entry_points("superset.db_engine_specs"):
        try:
            engine_spec = ep.load()
        except Exception:  # pylint: disable=broad-except
            logger.warning("Unable to load engine spec: %s", engine_spec)
            continue
        engine_specs.append(engine_spec)

    # build map from name/alias -> spec
    engine_specs_map: Dict[str, Type[BaseEngineSpec]] = {}
    for engine_spec in engine_specs:
        names = [engine_spec.engine]
        if engine_spec.engine_aliases:
            names.extend(engine_spec.engine_aliases)

        for name in names:
            engine_specs_map[name] = engine_spec

    return engine_specs_map
