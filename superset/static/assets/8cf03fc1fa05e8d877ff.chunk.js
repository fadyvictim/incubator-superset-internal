(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1076:function(t,e,i){},2824:function(t,e,i){"use strict";i.d(e,"a",(function(){return T}));var n=i(1464),a=i(1075),o=i(784),r=i(785),s=i(2862);function c(t,e){var i=s.c([],e,t);return s.b(i,i,1/i[3]),i}var l=i(2826),u=i(2809),p=i(2857);function h(t,e){if(!t)throw new Error(e||"@math.gl/web-mercator: assertion failed.")}var d=Math.PI,f=d/4,g=d/180,m=180/d;function v(t){return Math.pow(2,t)}function b(t){var e=Object(a.a)(t,2),i=e[0],n=e[1];h(Number.isFinite(i)),h(Number.isFinite(n)&&n>=-90&&n<=90,"invalid latitude");var o=n*g;return[512*(i*g+d)/(2*d),512*(d+Math.log(Math.tan(f+.5*o)))/(2*d)]}function y(t){var e=Object(a.a)(t,2),i=e[0],n=e[1],o=i/512*(2*d)-d,r=2*(Math.atan(Math.exp(n/512*(2*d)-d))-f);return[o*m,r*m]}function _(t){var e=t.latitude,i=t.longitude,n=t.highPrecision,a=void 0!==n&&n;h(Number.isFinite(e)&&Number.isFinite(i));var o={},r=Math.cos(e*g),s=512/360/r,c=512/4003e4/r;if(o.unitsPerMeter=[c,c,c],o.metersPerUnit=[1/c,1/c,1/c],o.unitsPerDegree=[512/360,s,c],o.degreesPerUnit=[.703125,1/s,1/c],a){var l=g*Math.tan(e*g)/r,u=512/360*l/2,p=512/4003e4*l,d=p/s*c;o.unitsPerDegree2=[0,u,p],o.unitsPerMeter2=[d,0,d]}return o}function x(t){var e=t.height,i=t.pitch,n=t.bearing,a=t.altitude,o=t.scale,r=t.center,s=void 0===r?null:r,c=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];return l.o(c,c,[0,0,-a]),l.k(c,c,-i*g),l.m(c,c,n*g),o/=e,l.n(c,c,[o,o,o]),s&&l.o(c,c,p.d([],s)),c}function w(t){var e=t.width,i=t.height,n=t.pitch,a=function(t){var e=t.width,i=t.height,n=t.altitude,a=void 0===n?1.5:n,o=t.pitch,r=void 0===o?0:o,s=t.nearZMultiplier,c=void 0===s?1:s,l=t.farZMultiplier,u=void 0===l?1:l,p=r*g,h=Math.atan(.5/a),d=Math.sin(h)*a/Math.sin(Math.min(Math.max(Math.PI/2-p-h,.01),Math.PI-.01));return{fov:2*h,aspect:e/i,focalDistance:a,near:c,far:(Math.sin(p)*d+a)*u}}({width:e,height:i,altitude:t.altitude,pitch:n,nearZMultiplier:t.nearZMultiplier,farZMultiplier:t.farZMultiplier}),o=a.fov,r=a.aspect,s=a.near,c=a.far;return l.i([],o,r,s,c)}function P(t,e){var i=Object(a.a)(t,3),n=i[0],o=i[1],r=i[2],s=void 0===r?0:r;return h(Number.isFinite(n)&&Number.isFinite(o)&&Number.isFinite(s)),c(e,[n,o,s,1])}function C(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=Object(a.a)(t,3),o=n[0],r=n[1],s=n[2];if(h(Number.isFinite(o)&&Number.isFinite(r),"invalid pixel coordinate"),Number.isFinite(s)){var l=c(e,[o,r,s,1]);return l}var p=c(e,[o,r,0,1]),d=c(e,[o,r,1,1]),f=p[2],g=d[2],m=f===g?0:((i||0)-f)/(g-f);return u.d([],p,d,m)}function j(t){var e=t.width,i=t.height,n=t.bounds,o=t.minExtent,r=void 0===o?0:o,s=t.maxZoom,c=void 0===s?24:s,l=t.padding,u=void 0===l?0:l,p=t.offset,d=void 0===p?[0,0]:p,f=Object(a.a)(n,2),g=Object(a.a)(f[0],2),m=g[0],v=g[1],b=Object(a.a)(f[1],2),y=b[0],_=b[1];if(Number.isFinite(u)){u={top:u,bottom:u,left:u,right:u}}else h(Number.isFinite(u.top)&&Number.isFinite(u.bottom)&&Number.isFinite(u.left)&&Number.isFinite(u.right));var x=new R({width:e,height:i,longitude:0,latitude:0,zoom:0}),w=x.project([m,_]),P=x.project([y,v]),C=[Math.max(Math.abs(P[0]-w[0]),r),Math.max(Math.abs(P[1]-w[1]),r)],j=[e-u.left-u.right-2*Math.abs(d[0]),i-u.top-u.bottom-2*Math.abs(d[1])];h(j[0]>0&&j[1]>0);var M=j[0]/C[0],S=j[1]/C[1],k=(u.right-u.left)/2/M,O=(u.bottom-u.top)/2/S,E=[(P[0]+w[0])/2+k,(P[1]+w[1])/2+O],A=x.unproject(E),F=Math.min(c,x.zoom+Math.log2(Math.abs(Math.min(M,S))));return h(Number.isFinite(F)),{longitude:A[0],latitude:A[1],zoom:F}}var M=Math.PI/180;function S(t){var e,i,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=t.width,o=t.height,r=t.unproject,s={targetZ:n},c=r([0,o],s),l=r([a,o],s),u=Math.atan(.5/t.altitude),p=(90-t.pitch)*M;return u>p-.01?(e=k(t,0,n),i=k(t,a,n)):(e=r([0,0],s),i=r([a,0],s)),[c,l,i,e]}function k(t,e,i){var n=t.pixelUnprojectionMatrix,a=c(n,[e,0,1,1]),o=c(n,[e,t.height,1,1]),r=(i*t.distanceScales.unitsPerMeter[2]-a[2])/(o[2]-a[2]),s=y(u.d([],a,o,r));return s[2]=i,s}var R=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{width:1,height:1},i=e.width,n=e.height,a=e.latitude,r=void 0===a?0:a,s=e.longitude,c=void 0===s?0:s,l=e.zoom,u=void 0===l?0:l,p=e.pitch,h=void 0===p?0:p,d=e.bearing,f=void 0===d?0:d,g=e.altitude,m=void 0===g?1.5:g,y=e.nearZMultiplier,P=void 0===y?.02:y,C=e.farZMultiplier,j=void 0===C?1.01:C;Object(o.a)(this,t),i=i||1,n=n||1;var M=v(u);m=Math.max(.75,m);var S=b([c,r]);S[2]=0,this.projectionMatrix=w({width:i,height:n,pitch:h,altitude:m,nearZMultiplier:P,farZMultiplier:j}),this.viewMatrix=x({height:n,scale:M,center:S,pitch:h,bearing:f,altitude:m}),this.width=i,this.height=n,this.scale=M,this.latitude=r,this.longitude=c,this.zoom=u,this.pitch=h,this.bearing=f,this.altitude=m,this.center=S,this.distanceScales=_(this),this._initMatrices(),this.equals=this.equals.bind(this),this.project=this.project.bind(this),this.unproject=this.unproject.bind(this),this.projectPosition=this.projectPosition.bind(this),this.unprojectPosition=this.unprojectPosition.bind(this),Object.freeze(this)}return Object(r.a)(t,[{key:"_initMatrices",value:function(){var t=this.width,e=this.height,i=this.projectionMatrix,n=this.viewMatrix,a=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];l.g(a,a,i),l.g(a,a,n),this.viewProjectionMatrix=a;var o=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1];l.n(o,o,[t/2,-e/2,1]),l.o(o,o,[1,-1,0]),l.g(o,o,a);var r=l.e([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],o);if(!r)throw new Error("Pixel project matrix not invertible");this.pixelProjectionMatrix=o,this.pixelUnprojectionMatrix=r}},{key:"equals",value:function(e){return e instanceof t&&(e.width===this.width&&e.height===this.height&&l.b(e.projectionMatrix,this.projectionMatrix)&&l.b(e.viewMatrix,this.viewMatrix))}},{key:"project",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.topLeft,n=void 0===i||i,o=this.projectPosition(t),r=P(o,this.pixelProjectionMatrix),s=Object(a.a)(r,2),c=s[0],l=s[1],u=n?l:this.height-l;return 2===t.length?[c,u]:[c,u,r[2]]}},{key:"unproject",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.topLeft,n=void 0===i||i,o=e.targetZ,r=void 0===o?void 0:o,s=Object(a.a)(t,3),c=s[0],l=s[1],u=s[2],p=n?l:this.height-l,h=r&&r*this.distanceScales.unitsPerMeter[2],d=C([c,p,u],this.pixelUnprojectionMatrix,h),f=this.unprojectPosition(d),g=Object(a.a)(f,3),m=g[0],v=g[1],b=g[2];return Number.isFinite(u)?[m,v,b]:Number.isFinite(r)?[m,v,r]:[m,v]}},{key:"projectPosition",value:function(t){var e=b(t),i=Object(a.a)(e,2);return[i[0],i[1],(t[2]||0)*this.distanceScales.unitsPerMeter[2]]}},{key:"unprojectPosition",value:function(t){var e=y(t),i=Object(a.a)(e,2);return[i[0],i[1],(t[2]||0)*this.distanceScales.metersPerUnit[2]]}},{key:"projectFlat",value:function(t){return b(t)}},{key:"unprojectFlat",value:function(t){return y(t)}},{key:"getMapCenterByLngLatPosition",value:function(t){var e=t.lngLat,i=C(t.pos,this.pixelUnprojectionMatrix),n=b(e),a=u.a([],n,u.e([],i));return y(u.a([],this.center,a))}},{key:"getLocationAtPoint",value:function(t){var e=t.lngLat,i=t.pos;return this.getMapCenterByLngLatPosition({lngLat:e,pos:i})}},{key:"fitBounds",value:function(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.width,a=this.height,o=j(Object.assign({width:n,height:a,bounds:e},i)),r=o.longitude,s=o.latitude,c=o.zoom;return new t({width:n,height:a,longitude:r,latitude:s,zoom:c})}},{key:"getBounds",value:function(t){var e=this.getBoundingRegion(t),i=Math.min.apply(Math,Object(n.a)(e.map((function(t){return t[0]})))),a=Math.max.apply(Math,Object(n.a)(e.map((function(t){return t[0]}))));return[[i,Math.min.apply(Math,Object(n.a)(e.map((function(t){return t[1]}))))],[a,Math.max.apply(Math,Object(n.a)(e.map((function(t){return t[1]}))))]]}},{key:"getBoundingRegion",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return S(this,t.z||0)}}]),t}();var O=i(101);const E=[-90,90],A=[-180,180];function F([t,e],[i,n],a=.25){return t<e?[t,e]:[Math.max(i,t-a),Math.min(n,e+a)]}function T(t,{points:e,width:i,height:n,minExtent:a,maxZoom:o,offset:r,padding:s=20}){const{bearing:c,pitch:l}=t,u=function(t){const e=F(Object(O.extent)(t,t=>t[1]),E),i=F(Object(O.extent)(t,t=>t[0]),A);return[[i[0],e[0]],[i[1],e[1]]]}(e);try{return{...j({bounds:u,width:i,height:n,minExtent:a,maxZoom:o,offset:r,padding:s}),bearing:c,pitch:l}}catch(t){console.error("Could not fit viewport",t)}return t}},2838:function(t,e,i){"use strict";i.d(e,"a",(function(){return s}));var n=i(13),a=i.n(n);const o=[1,0,1,0,0,0,0];function r(t,e){const i=parseInt(a()(e).format("x"),10);return parseInt(a()(e).add(t).format("x"),10)-i}function s(t,e){const i=a()(Math.min(...t)),n=a()(Math.max(...t));let s,c,l;if(e.includes("/")){const t=e.split("/",2);t[0].endsWith("Z")?(c=a()(t[0]),s=a.a.duration(t[1])):(c=a()(t[1]),s=a.a.duration(t[0]))}else s=a.a.duration(e),c=function(t,e){const i=a()(t).subtract(e),n=t.toArray(),r=i.toArray(),s=n.map((t,e)=>r[e]!==t).indexOf(!0),c=n.map((t,e)=>{if(e===s){const i=t-r[e];return t-(t-o[e])%i}return e<s||-1===s?t:o[e]});return a()(c)}(i,s);const u=i.valueOf();for(l=c.clone();l.valueOf()<u;)l.add(s);for(;l.valueOf()>u;)l.subtract(s);let p;const h=n.valueOf();for(p=c.clone();p.valueOf()>h;)p.subtract(s);for(;p.valueOf()<h;)p.add(s);const d=null!=e?[l,l.clone().add(s)]:[l,p],f=t.every(t=>null===t);return{start:parseInt(l.format("x"),10),end:parseInt(p.format("x"),10),getStep:r.bind(this,s),values:d.map(t=>parseInt(t.format("x"),10)),disabled:f}}},2841:function(t,e,i){"use strict";i.d(e,"a",(function(){return b}));var n=i(1),a=i.n(n),o=i(2),r=i.n(o),s=i(2840),c=i(726),l=i.n(c),u=i(7),p=i(958),h=i.n(p);i(1076),i(2848);function d(t){return a.a.createElement("span",{className:"BootstrapSliderWrapper"},a.a.createElement(h.a,t))}i(2849);const f={start:r.a.number.isRequired,step:r.a.number.isRequired,end:r.a.number.isRequired,values:r.a.array.isRequired,onChange:r.a.func,loopDuration:r.a.number,maxFrames:r.a.number,orientation:r.a.oneOf(["horizontal","vertical"]),reversed:r.a.bool,disabled:r.a.bool,range:r.a.bool};class g extends a.a.PureComponent{constructor(t){super(t),this.state={intervalId:null};const e=t.end-t.start,i=Math.min(t.maxFrames,e/t.step),n=e/i;this.intervalMilliseconds=t.loopDuration/i,this.increment=n<t.step?t.step:n-n%t.step,this.onChange=this.onChange.bind(this),this.play=this.play.bind(this),this.pause=this.pause.bind(this),this.stepBackward=this.stepBackward.bind(this),this.stepForward=this.stepForward.bind(this),this.getPlayClass=this.getPlayClass.bind(this),this.formatter=this.formatter.bind(this)}componentDidMount(){l.a.bind(["space"],this.play)}componentWillUnmount(){l.a.unbind(["space"])}onChange(t){this.props.onChange(t.target.value),null!=this.state.intervalId&&this.pause()}getPlayClass(){return null==this.state.intervalId?"fa fa-play fa-lg slider-button":"fa fa-pause fa-lg slider-button"}play(){if(!this.props.disabled)if(null!=this.state.intervalId)this.pause();else{const t=setInterval(this.stepForward,this.intervalMilliseconds);this.setState({intervalId:t})}}pause(){clearInterval(this.state.intervalId),this.setState({intervalId:null})}stepForward(){const{start:t,end:e,step:i,values:n,disabled:a}=this.props;if(a)return;const o=(Array.isArray(n)?n:[n,n+i]).map(t=>t+this.increment),r=o[1]>e?o[0]-t:0;this.props.onChange(o.map(t=>t-r))}stepBackward(){const{start:t,end:e,step:i,values:n,disabled:a}=this.props;if(a)return;const o=(Array.isArray(n)?n:[n,n+i]).map(t=>t-this.increment),r=o[0]<t?e-o[1]:0;this.props.onChange(o.map(t=>t+r))}formatter(t){if(this.props.disabled)return Object(u.c)("Data has no time steps");let e=t;return Array.isArray(t)?t[0]===t[1]&&(e=[t[0]]):e=[t],e.map(t=>new Date(t).toUTCString()).join(" : ")}render(){const{start:t,end:e,step:i,orientation:n,reversed:o,disabled:r,range:s,values:c}=this.props;return(a.a.createElement("div",{className:"play-slider"},a.a.createElement("div",{className:"play-slider-controls padded"},a.a.createElement("i",{className:"fa fa-step-backward fa-lg slider-button ",onClick:this.stepBackward}),a.a.createElement("i",{className:this.getPlayClass(),onClick:this.play}),a.a.createElement("i",{className:"fa fa-step-forward fa-lg slider-button ",onClick:this.stepForward})),a.a.createElement("div",{className:"play-slider-scrobbler padded"},a.a.createElement(d,{value:s?c:c[0],range:s,formatter:this.formatter,change:this.onChange,min:t,max:e,step:i,orientation:n,reversed:o,disabled:r?"disabled":"enabled"}))))}}function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}g.propTypes=f,g.defaultProps={onChange:()=>{},loopDuration:15e3,maxFrames:100,orientation:"horizontal",reversed:!1,disabled:!1,range:!0};const v={getLayers:r.a.func.isRequired,start:r.a.number.isRequired,end:r.a.number.isRequired,getStep:r.a.func,values:r.a.array.isRequired,aggregation:r.a.bool,disabled:r.a.bool,viewport:r.a.object.isRequired,children:r.a.node,mapStyle:r.a.string,mapboxApiAccessToken:r.a.string.isRequired,setControlValue:r.a.func,onValuesChange:r.a.func,width:r.a.number.isRequired,height:r.a.number.isRequired};class b extends a.a.PureComponent{constructor(...t){super(...t),m(this,"containerRef",a.a.createRef()),m(this,"setTooltip",t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)})}render(){const{start:t,end:e,getStep:i,disabled:n,aggregation:o,children:r,getLayers:c,values:l,onValuesChange:u,viewport:p,setControlValue:h,mapStyle:d,mapboxApiAccessToken:f,height:m,width:v}=this.props,b=c(l);return a.a.createElement("div",null,a.a.createElement(s.a,{ref:this.containerRef,viewport:p,layers:b,setControlValue:h,mapStyle:d,mapboxApiAccessToken:f,bottomMargin:n?0:20,width:v,height:m}),!n&&a.a.createElement(g,{start:t,end:e,step:i(t),values:l,range:!o,onChange:u}),r)}}b.propTypes=v,b.defaultProps={aggregation:!1,disabled:!1,mapStyle:"light",setControlValue:()=>{},onValuesChange:()=>{}}},2848:function(t,e,i){},2849:function(t,e,i){},2855:function(t,e,i){"use strict";i.d(e,"b",(function(){return P})),i.d(e,"a",(function(){return C}));var n=i(1),a=i.n(n),o=i(2),r=i.n(o),s=i(305),c=i(2840),l=i(423),u=i(2841),p=i(2858),h=i(2870),d=i(2838),f=i(2836),g=i(2824);function m(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}const{getScale:v}=l.b;const b={formData:r.a.object.isRequired,mapboxApiKey:r.a.string.isRequired,setControlValue:r.a.func.isRequired,viewport:r.a.object.isRequired,getLayer:r.a.func.isRequired,getPoints:r.a.func.isRequired,payload:r.a.object.isRequired,onAddFilter:r.a.func,width:r.a.number.isRequired,height:r.a.number.isRequired};class y extends a.a.PureComponent{constructor(t){super(t),m(this,"containerRef",a.a.createRef()),m(this,"setTooltip",t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)}),this.state=this.getStateFromProps(t),this.getLayers=this.getLayers.bind(this),this.onValuesChange=this.onValuesChange.bind(this),this.toggleCategory=this.toggleCategory.bind(this),this.showSingleCategory=this.showSingleCategory.bind(this)}UNSAFE_componentWillReceiveProps(t){t.payload.form_data!==this.state.formData&&this.setState({...this.getStateFromProps(t)})}onValuesChange(t){this.setState({values:Array.isArray(t)?t:[t,t+this.state.getStep(t)]})}getStateFromProps(t,e){const i=t.payload.data.features||[],n=i.map(t=>t.__timestamp),a=function(t,e){const i=t.color_picker||{r:0,g:0,b:0,a:1},n=[i.r,i.g,i.b,255*i.a],a=v(t.color_scheme),o={};return e.forEach(e=>{if(null!=e.cat_color&&!o.hasOwnProperty(e.cat_color)){let r;r=t.dimension?Object(h.hexToRGB)(a(e.cat_color),255*i.a):n,o[e.cat_color]={color:r,enabled:!0}}}),o}(t.formData,i);if(e&&t.payload.form_data===e.formData)return{...e,categories:a};const o=t.payload.form_data.time_grain_sqla||t.payload.form_data.granularity||"P1D",{start:r,end:s,getStep:c,values:l,disabled:u}=Object(d.a)(n,o),{width:p,height:f,formData:m}=t;let{viewport:b}=t;return m.autozoom&&(b=Object(g.a)(b,{width:p,height:f,points:t.getPoints(i)})),{start:r,end:s,getStep:c,values:l,disabled:u,viewport:b,selected:[],lastClick:0,formData:t.payload.form_data,categories:a}}getLayers(t){const{getLayer:e,payload:i,formData:n,onAddFilter:a}=this.props;let o=i.data.features?[...i.data.features]:[];if(o=this.addColor(o,n),n.js_data_mutator){o=Object(f.a)(n.js_data_mutator)(o)}o=t[0]===t[1]||t[1]===this.end?o.filter(e=>e.__timestamp>=t[0]&&e.__timestamp<=t[1]):o.filter(e=>e.__timestamp>=t[0]&&e.__timestamp<t[1]);const r=this.state.categories;return n.dimension&&(o=o.filter(t=>r[t.cat_color]&&r[t.cat_color].enabled)),[e(n,{...i,data:{...i.data,features:o}},a,this.setTooltip)]}addColor(t,e){const i=e.color_picker||{r:0,g:0,b:0,a:1},n=v(e.color_scheme);return t.map(t=>{let a;return e.dimension?(a=Object(h.hexToRGB)(n(t.cat_color),255*i.a),{...t,color:a}):t})}toggleCategory(t){const e=this.state.categories[t],i={...this.state.categories,[t]:{...e,enabled:!e.enabled}};Object.values(i).every(t=>!t.enabled)&&Object.values(i).forEach(t=>{t.enabled=!0}),this.setState({categories:i})}showSingleCategory(t){const e={...this.state.categories};Object.values(e).forEach(t=>{t.enabled=!1}),e[t].enabled=!0,this.setState({categories:e})}render(){return a.a.createElement("div",{style:{position:"relative"}},a.a.createElement(u.a,{ref:this.containerRef,getLayers:this.getLayers,start:this.state.start,end:this.state.end,getStep:this.state.getStep,values:this.state.values,disabled:this.state.disabled,viewport:this.state.viewport,mapboxApiAccessToken:this.props.mapboxApiKey,mapStyle:this.props.formData.mapbox_style,setControlValue:this.props.setControlValue,width:this.props.width,height:this.props.height},a.a.createElement(p.a,{categories:this.state.categories,toggleCategory:this.toggleCategory,showSingleCategory:this.showSingleCategory,position:this.props.formData.legend_position,format:this.props.formData.legend_format})))}}function _(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}y.propTypes=b;const x={formData:r.a.object.isRequired,payload:r.a.object.isRequired,setControlValue:r.a.func.isRequired,viewport:r.a.object.isRequired,onAddFilter:r.a.func,width:r.a.number.isRequired,height:r.a.number.isRequired},w={onAddFilter(){}};function P(t,e){class i extends a.a.PureComponent{constructor(t){super(t),_(this,"containerRef",a.a.createRef()),_(this,"setTooltip",t=>{const{current:e}=this.containerRef;e&&e.setTooltip(t)});const{width:i,height:n,formData:o}=t;let{viewport:r}=t;o.autozoom&&(r=Object(g.a)(r,{width:i,height:n,points:e(t.payload.data.features)})),this.state={viewport:r,layer:this.computeLayer(t)},this.onViewportChange=this.onViewportChange.bind(this)}UNSAFE_componentWillReceiveProps(t){const e={...t.formData,viewport:null},i={...this.props.formData,viewport:null};Object(s.isEqual)(e,i)&&t.payload===this.props.payload||this.setState({layer:this.computeLayer(t)})}onViewportChange(t){this.setState({viewport:t})}computeLayer(e){const{formData:i,payload:n,onAddFilter:a}=e;return t(i,n,a,this.setTooltip)}render(){const{formData:t,payload:e,setControlValue:i,height:n,width:o}=this.props,{layer:r,viewport:s}=this.state;return a.a.createElement(c.a,{ref:this.containerRef,mapboxApiAccessToken:e.data.mapboxApiKey,viewport:s,layers:[r],mapStyle:t.mapbox_style,setControlValue:i,width:o,height:n,onViewportChange:this.onViewportChange})}}return i.propTypes=x,i.defaultProps=w,i}function C(t,e){function i(i){const{formData:n,payload:o,setControlValue:r,viewport:s,width:c,height:l}=i;return(a.a.createElement(y,{formData:n,mapboxApiKey:o.data.mapboxApiKey,setControlValue:r,viewport:s,getLayer:t,payload:o,getPoints:e,width:c,height:l}))}return i.propTypes=x,i.defaultProps=w,i}},2858:function(t,e,i){"use strict";i.d(e,"a",(function(){return l}));var n=i(1),a=i.n(n),o=i(2),r=i.n(o),s=i(385);i(2863);const c={categories:r.a.object,toggleCategory:r.a.func,showSingleCategory:r.a.func,format:r.a.string,position:r.a.oneOf([null,"tl","tr","bl","br"])};class l extends a.a.PureComponent{format(t){if(!this.props.format)return t;const e=parseFloat(t);return Object(s.b)(this.props.format,e)}formatCategoryLabel(t){if(!this.props.format)return t;if(t.includes(" - ")){const e=t.split(" - ");return this.format(e[0])+" - "+this.format(e[1])}return this.format(t)}render(){if(0===Object.keys(this.props.categories).length||null===this.props.position)return null;const t=Object.entries(this.props.categories).map(([t,e])=>{const i={color:"rgba("+e.color.join(", ")+")"},n=e.enabled?"◼":"◻";return a.a.createElement("li",{key:t},a.a.createElement("a",{href:"#",onClick:()=>this.props.toggleCategory(t),onDoubleClick:()=>this.props.showSingleCategory(t)},a.a.createElement("span",{style:i},n)," ",this.formatCategoryLabel(t)))}),e={position:"absolute",["t"===this.props.position.charAt(0)?"top":"bottom"]:"0px",["r"===this.props.position.charAt(1)?"right":"left"]:"10px"};return a.a.createElement("div",{className:"legend",style:e},a.a.createElement("ul",{className:"categories"},t))}}l.propTypes=c,l.defaultProps={categories:{},toggleCategory:()=>{},showSingleCategory:()=>{},format:null,position:"tr"}},2863:function(t,e,i){},3366:function(t,e,i){"use strict";i.r(e),i.d(e,"getLayer",(function(){return j}));var n=i(784),a=i(785),o=i(955),r=i(603),s=i(2763),c=i(956),l=i(3004),u=i(2910),p=i(4305),h=i(3361),d=i(3074),f="#define SHADER_NAME arc-layer-fragment-shader\n\nprecision highp float;\n\nvarying vec4 vColor;\n\nvoid main(void) {\n  gl_FragColor = vColor;\n  gl_FragColor = picking_filterHighlightColor(gl_FragColor);\n  gl_FragColor = picking_filterPickingColor(gl_FragColor);\n}\n",g=p.a.fp64LowPart,m=[0,0,0,255],v={fp64:!1,getSourcePosition:{type:"accessor",value:function(t){return t.sourcePosition}},getTargetPosition:{type:"accessor",value:function(t){return t.targetPosition}},getSourceColor:{type:"accessor",value:m},getTargetColor:{type:"accessor",value:m},getWidth:{type:"accessor",value:1},getHeight:{type:"accessor",value:1},getTilt:{type:"accessor",value:0},widthUnits:"pixels",widthScale:{type:"number",value:1,min:0},widthMinPixels:{type:"number",value:0,min:0},widthMaxPixels:{type:"number",value:Number.MAX_SAFE_INTEGER,min:0},getStrokeWidth:{deprecatedFor:"getWidth"}},b=function(t){function e(){return Object(n.a)(this,e),Object(o.a)(this,Object(r.a)(e).apply(this,arguments))}return Object(c.a)(e,t),Object(a.a)(e,[{key:"getShaders",value:function(){return this.use64bitProjection()?{vs:"#define SHADER_NAME arc-layer-vertex-shader-64\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\n\nattribute vec4 instancePositions;\nattribute vec4 instancePositions64Low;\n\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\n\nuniform float numSegments;\nuniform float opacity;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\n\nvarying vec4 vColor;\n\nvec2 paraboloid_fp64(vec2 source[2], vec2 target[2], float ratio) {\n\n  vec2 x[2];\n  vec2_mix_fp64(source, target, ratio, x);\n  vec2 center[2];\n  vec2_mix_fp64(source, target, 0.5, center);\n\n  vec2 dSourceCenter = vec2_distance_fp64(source, center);\n  vec2 dXCenter = vec2_distance_fp64(x, center);\n  return mul_fp64(sum_fp64(dSourceCenter, dXCenter), sub_fp64(dSourceCenter, dXCenter));\n}\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  vec2 offset_screenspace = dir_screenspace * offset_direction * width / 2.0;\n  vec2 offset_clipspace = project_pixel_size_to_clipspace(offset_screenspace);\n\n  return offset_clipspace;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvoid get_pos_fp64(vec2 source[2], vec2 target[2], float segmentRatio, out vec2 position[4]) {\n\n  vec2 vertex_height = paraboloid_fp64(source, target, segmentRatio);\n\n  vec2 position_temp[2];\n\n  vec2_mix_fp64(source, target, segmentRatio, position_temp);\n\n  position[0] = position_temp[0];\n  position[1] = position_temp[1];\n\n  if (vertex_height.x < 0.0 || (vertex_height.x == 0.0 && vertex_height.y <= 0.0)) {\n    vertex_height = vec2(0.0, 0.0);\n  }\n\n  position[2] = sqrt_fp64(vertex_height);\n  position[3] = vec2(1.0, 0.0);\n}\n\nvoid main(void) {\n  vec2 projected_source_coord[2];\n  vec2 projected_target_coord[2];\n\n  project_position_fp64(instancePositions.xy, instancePositions64Low.xy, projected_source_coord);\n  project_position_fp64(instancePositions.zw, instancePositions64Low.zw, projected_target_coord);\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);\n\n  vec2 curr_pos_modelspace[4];\n\n  get_pos_fp64(projected_source_coord, projected_target_coord, segmentRatio,\n    curr_pos_modelspace);\n\n  vec2 next_pos_modelspace[4];\n\n  get_pos_fp64(projected_source_coord, projected_target_coord, nextSegmentRatio,\n    next_pos_modelspace);\n\n  vec4 curr_pos_clipspace = project_common_position_to_clipspace_fp64(curr_pos_modelspace);\n  vec4 next_pos_clipspace = project_common_position_to_clipspace_fp64(next_pos_modelspace);\n  float widthPixels = clamp(\n    project_size_to_pixel(instanceWidths * widthScale),\n    widthMinPixels, widthMaxPixels\n  );\n\n  vec2 offset = getExtrusionOffset(next_pos_clipspace.xy - curr_pos_clipspace.xy, positions.y, widthPixels);\n\n  gl_Position = curr_pos_clipspace + vec4(offset, 0.0, 0.0);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio) / 255.;\n  vColor = vec4(color.rgb, color.a * opacity);\n  picking_setPickingColor(instancePickingColors);\n}\n",fs:f,modules:["project64","picking"]}:{vs:"#define SHADER_NAME arc-layer-vertex-shader\n\nattribute vec3 positions;\nattribute vec4 instanceSourceColors;\nattribute vec4 instanceTargetColors;\nattribute vec4 instancePositions;\nattribute vec4 instancePositions64Low;\nattribute vec3 instancePickingColors;\nattribute float instanceWidths;\nattribute float instanceHeights;\nattribute float instanceTilts;\n\nuniform float numSegments;\nuniform float opacity;\nuniform float widthScale;\nuniform float widthMinPixels;\nuniform float widthMaxPixels;\n\nvarying vec4 vColor;\n\nfloat paraboloid(vec2 source, vec2 target, float ratio) {\n\n  vec2 x = mix(source, target, ratio);\n  vec2 center = mix(source, target, 0.5);\n\n  float dSourceCenter = distance(source, center);\n  float dXCenter = distance(x, center);\n  return (dSourceCenter + dXCenter) * (dSourceCenter - dXCenter);\n}\nvec2 getExtrusionOffset(vec2 line_clipspace, float offset_direction, float width) {\n  vec2 dir_screenspace = normalize(line_clipspace * project_uViewportSize);\n  dir_screenspace = vec2(-dir_screenspace.y, dir_screenspace.x);\n\n  vec2 offset_screenspace = dir_screenspace * offset_direction * width / 2.0;\n  vec2 offset_clipspace = project_pixel_size_to_clipspace(offset_screenspace);\n\n  return offset_clipspace;\n}\n\nfloat getSegmentRatio(float index) {\n  return smoothstep(0.0, 1.0, index / (numSegments - 1.0));\n}\n\nvec3 getPos(vec2 source, vec2 target, float segmentRatio) {\n  float vertexHeight = sqrt(max(0.0, paraboloid(source, target, segmentRatio))) * instanceHeights;\n\n  float tiltAngle = radians(instanceTilts);\n  vec2 tiltDirection = normalize(target - source);\n  vec2 tilt = vec2(-tiltDirection.y, tiltDirection.x) * vertexHeight * sin(tiltAngle);\n\n  return vec3(\n    mix(source, target, segmentRatio) + tilt,\n    vertexHeight * cos(tiltAngle)\n  );\n}\n\nvoid main(void) {\n  vec2 source = project_position(vec3(instancePositions.xy, 0.0), instancePositions64Low.xy).xy;\n  vec2 target = project_position(vec3(instancePositions.zw, 0.0), instancePositions64Low.zw).xy;\n\n  float segmentIndex = positions.x;\n  float segmentRatio = getSegmentRatio(segmentIndex);\n  float indexDir = mix(-1.0, 1.0, step(segmentIndex, 0.0));\n  float nextSegmentRatio = getSegmentRatio(segmentIndex + indexDir);\n\n  vec3 currPos = getPos(source, target, segmentRatio);\n  vec3 nextPos = getPos(source, target, nextSegmentRatio);\n  vec4 curr = project_common_position_to_clipspace(vec4(currPos, 1.0));\n  vec4 next = project_common_position_to_clipspace(vec4(nextPos, 1.0));\n  float widthPixels = clamp(\n    project_size_to_pixel(instanceWidths * widthScale),\n    widthMinPixels, widthMaxPixels\n  );\n  vec2 offset = getExtrusionOffset((next.xy - curr.xy) * indexDir, positions.y, widthPixels);\n  gl_Position = curr + vec4(offset, 0.0, 0.0);\n\n  vec4 color = mix(instanceSourceColors, instanceTargetColors, segmentRatio) / 255.;\n  vColor = vec4(color.rgb, color.a * opacity);\n  picking_setPickingColor(instancePickingColors);\n}\n",fs:f,modules:["picking"]}}},{key:"initializeState",value:function(){this.getAttributeManager().addInstanced({instancePositions:{size:4,transition:!0,accessor:["getSourcePosition","getTargetPosition"],update:this.calculateInstancePositions},instancePositions64Low:{size:4,accessor:["getSourcePosition","getTargetPosition"],update:this.calculateInstancePositions64Low},instanceSourceColors:{size:4,type:5121,transition:!0,accessor:"getSourceColor",defaultValue:m},instanceTargetColors:{size:4,type:5121,transition:!0,accessor:"getTargetColor",defaultValue:m},instanceWidths:{size:1,transition:!0,accessor:"getWidth",defaultValue:1},instanceHeights:{size:1,transition:!0,accessor:"getHeight",defaultValue:1},instanceTilts:{size:1,transition:!0,accessor:"getTilt",defaultValue:0}})}},{key:"updateState",value:function(t){var i=t.props,n=t.oldProps,a=t.changeFlags;if(Object(s.a)(Object(r.a)(e.prototype),"updateState",this).call(this,{props:i,oldProps:n,changeFlags:a}),i.fp64!==n.fp64){var o=this.context.gl;this.state.model&&this.state.model.delete(),this.setState({model:this._getModel(o)}),this.getAttributeManager().invalidateAll()}}},{key:"draw",value:function(t){var e=t.uniforms,i=this.context.viewport,n=this.props,a=n.widthUnits,o=n.widthScale,r=n.widthMinPixels,s=n.widthMaxPixels,c="pixels"===a?i.distanceScales.metersPerPixel[2]:1;this.state.model.setUniforms(Object.assign({},e,{widthScale:o*c,widthMinPixels:r,widthMaxPixels:s})).draw()}},{key:"_getModel",value:function(t){for(var e=[],i=0;i<50;i++)e=e.concat([i,-1,0,i,1,0]);var n=new h.a(t,Object.assign({},this.getShaders(),{id:this.props.id,geometry:new d.a({drawMode:5,attributes:{positions:new Float32Array(e)}}),isInstanced:!0,shaderCache:this.context.shaderCache}));return n.setUniforms({numSegments:50}),n}},{key:"calculateInstancePositions",value:function(t,e){var i=e.startRow,n=e.endRow,a=this.props,o=a.data,r=a.getSourcePosition,s=a.getTargetPosition,c=t.value,u=i*t.size,p=Object(l.a)(o,i,n),h=p.iterable,d=p.objectInfo,f=!0,g=!1,m=void 0;try{for(var v,b=h[Symbol.iterator]();!(f=(v=b.next()).done);f=!0){var y=v.value;d.index++;var _=r(y,d);c[u++]=_[0],c[u++]=_[1];var x=s(y,d);c[u++]=x[0],c[u++]=x[1]}}catch(t){g=!0,m=t}finally{try{f||null==b.return||b.return()}finally{if(g)throw m}}}},{key:"calculateInstancePositions64Low",value:function(t,e){var i=e.startRow,n=e.endRow,a=this.use64bitPositions();if(t.constant=!a,a){var o=this.props,r=o.data,s=o.getSourcePosition,c=o.getTargetPosition,u=t.value,p=i*t.size,h=Object(l.a)(r,i,n),d=h.iterable,f=h.objectInfo,m=!0,v=!1,b=void 0;try{for(var y,_=d[Symbol.iterator]();!(m=(y=_.next()).done);m=!0){var x=y.value;f.index++;var w=s(x,f);u[p++]=g(w[0]),u[p++]=g(w[1]);var P=c(x,f);u[p++]=g(P[0]),u[p++]=g(P[1])}}catch(t){v=!0,b=t}finally{try{m||null==_.return||_.return()}finally{if(v)throw b}}}else t.value=new Float32Array(4)}}]),e}(u.a);b.layerName="ArcLayer",b.defaultProps=v;var y=i(1),_=i.n(y),x=i(7),w=i(2843),P=i(2855),C=i(2844);function j(t,e,i,n){const a=e.data.features,o=t.color_picker,r=t.target_color_picker;return new b({data:a,getSourceColor:t=>t.sourceColor||t.color||[o.r,o.g,o.b,255*o.a],getTargetColor:t=>t.targetColor||t.color||[r.r,r.g,r.b,255*r.a],id:"path-layer-"+t.slice_id,strokeWidth:t.stroke_width?t.stroke_width:3,...Object(w.a)(t,n,(s=t,t=>_.a.createElement("div",{className:"deckgl-tooltip"},_.a.createElement(C.a,{label:Object(x.c)("Start (Longitude, Latitude)")+": ",value:t.object.sourcePosition[0]+", "+t.object.sourcePosition[1]}),_.a.createElement(C.a,{label:Object(x.c)("End (Longitude, Latitude)")+": ",value:t.object.targetPosition[0]+", "+t.object.targetPosition[1]}),s.dimension&&_.a.createElement(C.a,{label:s.dimension+": ",value:""+t.object.cat_color}))))});var s}e.default=Object(P.a)(j,(function(t){const e=[];return t.forEach(t=>{e.push(t.sourcePosition),e.push(t.targetPosition)}),e}))},726:function(t,e,i){var n;!function(a,o,r){if(a){for(var s,c={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},l={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},u={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},p={option:"alt",command:"meta",return:"enter",escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},h=1;h<20;++h)c[111+h]="f"+h;for(h=0;h<=9;++h)c[h+96]=h.toString();b.prototype.bind=function(t,e,i){return t=t instanceof Array?t:[t],this._bindMultiple.call(this,t,e,i),this},b.prototype.unbind=function(t,e){return this.bind.call(this,t,(function(){}),e)},b.prototype.trigger=function(t,e){return this._directMap[t+":"+e]&&this._directMap[t+":"+e]({},t),this},b.prototype.reset=function(){return this._callbacks={},this._directMap={},this},b.prototype.stopCallback=function(t,e){return!((" "+e.className+" ").indexOf(" mousetrap ")>-1)&&(!function t(e,i){return null!==e&&e!==o&&(e===i||t(e.parentNode,i))}(e,this.target)&&("INPUT"==e.tagName||"SELECT"==e.tagName||"TEXTAREA"==e.tagName||e.isContentEditable))},b.prototype.handleKey=function(){var t=this;return t._handleKey.apply(t,arguments)},b.addKeycodes=function(t){for(var e in t)t.hasOwnProperty(e)&&(c[e]=t[e]);s=null},b.init=function(){var t=b(o);for(var e in t)"_"!==e.charAt(0)&&(b[e]=function(e){return function(){return t[e].apply(t,arguments)}}(e))},b.init(),a.Mousetrap=b,t.exports&&(t.exports=b),void 0===(n=function(){return b}.call(e,i,e,t))||(t.exports=n)}function d(t,e,i){t.addEventListener?t.addEventListener(e,i,!1):t.attachEvent("on"+e,i)}function f(t){if("keypress"==t.type){var e=String.fromCharCode(t.which);return t.shiftKey||(e=e.toLowerCase()),e}return c[t.which]?c[t.which]:l[t.which]?l[t.which]:String.fromCharCode(t.which).toLowerCase()}function g(t){return"shift"==t||"ctrl"==t||"alt"==t||"meta"==t}function m(t,e,i){return i||(i=function(){if(!s)for(var t in s={},c)t>95&&t<112||c.hasOwnProperty(t)&&(s[c[t]]=t);return s}()[t]?"keydown":"keypress"),"keypress"==i&&e.length&&(i="keydown"),i}function v(t,e){var i,n,a,o=[];for(i=function(t){return"+"===t?["+"]:(t=t.replace(/\+{2}/g,"+plus")).split("+")}(t),a=0;a<i.length;++a)n=i[a],p[n]&&(n=p[n]),e&&"keypress"!=e&&u[n]&&(n=u[n],o.push("shift")),g(n)&&o.push(n);return{key:n,modifiers:o,action:e=m(n,o,e)}}function b(t){var e=this;if(t=t||o,!(e instanceof b))return new b(t);e.target=t,e._callbacks={},e._directMap={};var i,n={},a=!1,r=!1,s=!1;function c(t){t=t||{};var e,i=!1;for(e in n)t[e]?i=!0:n[e]=0;i||(s=!1)}function l(t,i,a,o,r,s){var c,l,u,p,h=[],d=a.type;if(!e._callbacks[t])return[];for("keyup"==d&&g(t)&&(i=[t]),c=0;c<e._callbacks[t].length;++c)if(l=e._callbacks[t][c],(o||!l.seq||n[l.seq]==l.level)&&d==l.action&&("keypress"==d&&!a.metaKey&&!a.ctrlKey||(u=i,p=l.modifiers,u.sort().join(",")===p.sort().join(",")))){var f=!o&&l.combo==r,m=o&&l.seq==o&&l.level==s;(f||m)&&e._callbacks[t].splice(c,1),h.push(l)}return h}function u(t,i,n,a){e.stopCallback(i,i.target||i.srcElement,n,a)||!1===t(i,n)&&(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1}(i),function(t){t.stopPropagation?t.stopPropagation():t.cancelBubble=!0}(i))}function p(t){"number"!=typeof t.which&&(t.which=t.keyCode);var i=f(t);i&&("keyup"!=t.type||a!==i?e.handleKey(i,function(t){var e=[];return t.shiftKey&&e.push("shift"),t.altKey&&e.push("alt"),t.ctrlKey&&e.push("ctrl"),t.metaKey&&e.push("meta"),e}(t),t):a=!1)}function h(t,e,o,r){function l(e){return function(){s=e,++n[t],clearTimeout(i),i=setTimeout(c,1e3)}}function p(e){u(o,e,t),"keyup"!==r&&(a=f(e)),setTimeout(c,10)}n[t]=0;for(var h=0;h<e.length;++h){var d=h+1===e.length?p:l(r||v(e[h+1]).action);m(e[h],d,r,t,h)}}function m(t,i,n,a,o){e._directMap[t+":"+n]=i;var r,s=(t=t.replace(/\s+/g," ")).split(" ");s.length>1?h(t,s,i,n):(r=v(t,n),e._callbacks[r.key]=e._callbacks[r.key]||[],l(r.key,r.modifiers,{type:r.action},a,t,o),e._callbacks[r.key][a?"unshift":"push"]({callback:i,modifiers:r.modifiers,action:r.action,seq:a,level:o,combo:t}))}e._handleKey=function(t,e,i){var n,a=l(t,e,i),o={},p=0,h=!1;for(n=0;n<a.length;++n)a[n].seq&&(p=Math.max(p,a[n].level));for(n=0;n<a.length;++n)if(a[n].seq){if(a[n].level!=p)continue;h=!0,o[a[n].seq]=1,u(a[n].callback,i,a[n].combo,a[n].seq)}else h||u(a[n].callback,i,a[n].combo);var d="keypress"==i.type&&r;i.type!=s||g(t)||d||c(o),r=h&&"keydown"==i.type},e._bindMultiple=function(t,e,i){for(var n=0;n<t.length;++n)m(t[n],e,i)},d(t,"keypress",p),d(t,"keydown",p),d(t,"keyup",p)}}("undefined"!=typeof window?window:null,"undefined"!=typeof window?document:null)}}]);