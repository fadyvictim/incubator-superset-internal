(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{3925:function(t,e,n){},4313:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),o=n(2),i=n.n(o),l=function(t,e){let n,r;if(void 0===e)for(const e of t)null!=e&&(void 0===n?e>=e&&(n=r=e):(n>e&&(n=e),r<e&&(r=e)));else{let a=-1;for(let o of t)null!=(o=e(o,++a,t))&&(void 0===n?o>=o&&(n=r=o):(n>o&&(n=o),r<o&&(r=o)))}return[n,r]},s=Math.sqrt(50),c=Math.sqrt(10),u=Math.sqrt(2);function f(t,e,n){var r=(e-t)/Math.max(0,n),a=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,a);return a>=0?(o>=s?10:o>=c?5:o>=u?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(o>=s?10:o>=c?5:o>=u?2:1)}var h=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN},m=function(t){let e=t,n=t;function r(t,e,r,a){for(null==r&&(r=0),null==a&&(a=t.length);r<a;){const o=r+a>>>1;n(t[o],e)<0?r=o+1:a=o}return r}return 1===t.length&&(e=(e,n)=>t(e)-n,n=function(t){return(e,n)=>h(t(e),n)}(t)),{left:r,center:function(t,n,a,o){null==a&&(a=0),null==o&&(o=t.length);const i=r(t,n,a,o-1);return i>a&&e(t[i-1],n)>-e(t[i],n)?i-1:i},right:function(t,e,r,a){for(null==r&&(r=0),null==a&&(a=t.length);r<a;){const o=r+a>>>1;n(t[o],e)>0?a=o:r=o+1}return r}}};const d=m(h),g=d.right;d.left,m((function(t){return null===t?NaN:+t})).center;var p=g,y=n(139),v=function(t){return+t},M=[0,1];function b(t){return t}function w(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:(n=isNaN(e)?NaN:.5,function(){return n});var n}function N(t,e,n){var r=t[0],a=t[1],o=e[0],i=e[1];return a<r?(r=w(a,r),o=n(i,o)):(r=w(r,a),o=n(o,i)),function(t){return o(r(t))}}function O(t,e,n){var r=Math.min(t.length,e.length)-1,a=new Array(r),o=new Array(r),i=-1;for(t[r]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++i<r;)a[i]=w(t[i],t[i+1]),o[i]=n(e[i],e[i+1]);return function(e){var n=p(t,e,1,r)-1;return o[n](a[n](e))}}function k(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown())}function x(){var t,e,n,r,a,o,i=M,l=M,s=y.a,c=b;function u(){var t,e,n,s=Math.min(i.length,l.length);return c!==b&&(t=i[0],e=i[s-1],t>e&&(n=t,t=e,e=n),c=function(n){return Math.max(t,Math.min(e,n))}),r=s>2?O:N,a=o=null,f}function f(e){return isNaN(e=+e)?n:(a||(a=r(i.map(t),l,s)))(t(c(e)))}return f.invert=function(n){return c(e((o||(o=r(l,i.map(t),y.c)))(n)))},f.domain=function(t){return arguments.length?(i=Array.from(t,v),u()):i.slice()},f.range=function(t){return arguments.length?(l=Array.from(t),u()):l.slice()},f.rangeRound=function(t){return l=Array.from(t),s=y.e,u()},f.clamp=function(t){return arguments.length?(c=!!t||b,u()):c!==b},f.interpolate=function(t){return arguments.length?(s=t,u()):s},f.unknown=function(t){return arguments.length?(n=t,f):n},function(n,r){return t=n,e=r,u()}}function S(){return x()(b,b)}function j(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t)}return this}var A=n(75),X=function(t,e,n,r){var a,o=function(t,e,n){var r=Math.abs(e-t)/Math.max(0,n),a=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/a;return o>=s?a*=10:o>=c?a*=5:o>=u&&(a*=2),e<t?-a:a}(t,e,n);switch((r=Object(A.d)(null==r?",f":r)).type){case"s":var i=Math.max(Math.abs(t),Math.abs(e));return null!=r.precision||isNaN(a=Object(A.f)(o,i))||(r.precision=a),Object(A.c)(r,i);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(a=Object(A.g)(o,Math.max(Math.abs(t),Math.abs(e))))||(r.precision=a-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(a=Object(A.e)(o))||(r.precision=a-2*("%"===r.type))}return Object(A.a)(r)};function C(t){var e=t.domain;return t.ticks=function(t){var n=e();return function(t,e,n){var r,a,o,i,l=-1;if(n=+n,(t=+t)===(e=+e)&&n>0)return[t];if((r=e<t)&&(a=t,t=e,e=a),0===(i=f(t,e,n))||!isFinite(i))return[];if(i>0)for(t=Math.ceil(t/i),e=Math.floor(e/i),o=new Array(a=Math.ceil(e-t+1));++l<a;)o[l]=(t+l)*i;else for(i=-i,t=Math.ceil(t*i),e=Math.floor(e*i),o=new Array(a=Math.ceil(e-t+1));++l<a;)o[l]=(t+l)/i;return r&&o.reverse(),o}(n[0],n[n.length-1],null==t?10:t)},t.tickFormat=function(t,n){var r=e();return X(r[0],r[r.length-1],null==t?10:t,n)},t.nice=function(n){null==n&&(n=10);var r,a,o=e(),i=0,l=o.length-1,s=o[i],c=o[l],u=10;for(c<s&&(a=s,s=c,c=a,a=i,i=l,l=a);u-- >0;){if((a=f(s,c,n))===r)return o[i]=s,o[l]=c,e(o);if(a>0)s=Math.floor(s/a)*a,c=Math.ceil(c/a)*a;else{if(!(a<0))break;s=Math.ceil(s*a)/a,c=Math.floor(c*a)/a}r=a}return t},t}function D(){return(D=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}const E=["#313695","#4575b4","#74add1","#abd9e9","#fee090","#fdae61","#f46d43","#d73027"],R={className:i.a.string,width:i.a.number,height:i.a.number,data:i.a.arrayOf(i.a.shape({y:i.a.number})).isRequired,bands:i.a.number,colors:i.a.arrayOf(i.a.string),colorScale:i.a.string,mode:i.a.string,offsetX:i.a.number,title:i.a.string,yDomain:i.a.arrayOf(i.a.number)},q={className:"",width:800,height:20,bands:E.length>>1,colors:E,colorScale:"series",mode:"offset",offsetX:0,title:"",yDomain:void 0};class P extends a.a.PureComponent{componentDidMount(){this.drawChart()}componentDidUpdate(){this.drawChart()}componentWillUnmount(){this.canvas=null}drawChart(){if(this.canvas){const{data:t,yDomain:e,width:n,height:r,bands:a,colors:o,colorScale:i,offsetX:s,mode:c}=this.props,u="change"===i?t.map(e=>D({},e,{y:e.y-t[0].y})):t,f=this.canvas.getContext("2d");f.imageSmoothingEnabled=!1,f.clearRect(0,0,n,r),f.setTransform(1,0,0,1,0,0),f.translate(.5,.5);const h=n/u.length,m=Math.floor(Math.max(0,-s/h)),d=Math.floor(Math.min(u.length,m+n/h));if(m>u.length)return;const[g,p]=e||l(u,t=>t.y),y=function t(){var e=S();return e.copy=function(){return k(e,t())},j.apply(e,arguments),C(e)}().domain([0,Math.max(-g,p)]).range([0,r]);let v,M,b=!1;for(let t=0;t<a;t+=1){f.fillStyle=o[a+t],M=(t+1-a)*r,y.range([a*r+M,M]);for(let t=m;t<d;t++)v=u[t].y,v<=0?b=!0:void 0!==v&&f.fillRect(s+t*h,y(v),h+1,y(0)-y(v))}if(b){"offset"===c&&(f.translate(0,r),f.scale(1,-1));for(let t=0;t<a;t++){f.fillStyle=o[a-t-1],M=(t+1-a)*r,y.range([a*r+M,M]);for(let t=m;t<d;t++)v=u[t].y,v>=0||f.fillRect(s+t*h,y(-v),h+1,y(0)-y(-v))}}}}render(){const{className:t,title:e,width:n,height:r}=this.props;return(a.a.createElement("div",{className:"horizon-row "+t},a.a.createElement("span",{className:"title"},e),a.a.createElement("canvas",{ref:t=>{this.canvas=t},width:n,height:r})))}}P.propTypes=R,P.defaultProps=q;var H=P;n(3925);const T={className:i.a.string,width:i.a.number,height:i.a.number,seriesHeight:i.a.number,data:i.a.arrayOf(i.a.shape({key:i.a.arrayOf(i.a.string),values:i.a.arrayOf(i.a.shape({y:i.a.number}))})).isRequired,bands:i.a.number,colors:i.a.arrayOf(i.a.string),colorScale:i.a.string,mode:i.a.string,offsetX:i.a.number},z={className:"",width:800,height:600,seriesHeight:20,bands:Math.floor(E.length/2),colors:E,colorScale:"series",mode:"offset",offsetX:0};class F extends a.a.PureComponent{render(){const{className:t,width:e,height:n,data:r,seriesHeight:o,bands:i,colors:s,colorScale:c,mode:u,offsetX:f}=this.props;let h;if("overall"===c){const t=r.reduce((t,e)=>t.concat(e.values),[]);h=l(t,t=>t.y)}return(a.a.createElement("div",{className:"superset-legacy-chart-horizon "+t,style:{height:n}},r.map(t=>a.a.createElement(H,{key:t.key,width:e,height:o,title:t.key.join(", "),data:t.values,bands:i,colors:s,colorScale:c,mode:u,offsetX:f,yDomain:h}))))}}F.propTypes=T,F.defaultProps=z;e.default=F}}]);