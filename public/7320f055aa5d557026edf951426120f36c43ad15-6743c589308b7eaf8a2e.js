(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"9eSz":function(e,t,i){"use strict";var a=i("5NKs");t.__esModule=!0,t.default=void 0;var r,n=a(i("v06X")),d=a(i("XEEL")),o=a(i("uDP2")),l=a(i("j8BX")),s=a(i("q1tI")),f=a(i("17x9")),c=function(e){var t=(0,l.default)({},e),i=t.resolutions,a=t.sizes,r=t.critical;return i&&(t.fixed=i,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},u=function(e){var t=e.media;return!!t&&(w&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,i=e.fixed,a=g(t||i||[]);return a&&a.src},g=function(e){if(w&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(u);if(-1!==t)return e[t];var i=e.findIndex((function(e){return void 0===e.media}));if(-1!==i)return e[i]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),i=p(t);return h[i]||!1},x="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,w="undefined"!=typeof window,b=w&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return s.default.createElement(s.default.Fragment,{key:t},a&&s.default.createElement("source",{type:"image/webp",media:r,srcSet:a,sizes:n}),s.default.createElement("source",{media:r,srcSet:i,sizes:n}))}))}function S(e){var t=[],i=[];return e.forEach((function(e){return(e.media?t:i).push(e)})),[].concat(t,i)}function j(e){return e.map((function(e){var t=e.src,i=e.media,a=e.tracedSVG;return s.default.createElement("source",{key:t,media:i,srcSet:a})}))}function I(e){return e.map((function(e){var t=e.src,i=e.media,a=e.base64;return s.default.createElement("source",{key:t,media:i,srcSet:a})}))}function z(e,t){var i=e.srcSet,a=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?a:i)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var i=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return i&&(i.observe(e),y.set(e,t)),function(){i.unobserve(e),y.delete(e)}},E=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',i=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',d=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",s=e.loading?'loading="'+e.loading+'" ':"",f=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?z(e,!0):"")+z(e)})).join("")+"<img "+s+d+o+i+a+t+n+r+l+f+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=s.default.forwardRef((function(e,t){var i=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,d=e.ariaHidden,o=s.default.createElement(k,(0,l.default)({ref:t,src:i},n,{ariaHidden:d}));return a.length>1?s.default.createElement("picture",null,r(a),o):o})),k=s.default.forwardRef((function(e,t){var i=e.sizes,a=e.srcSet,r=e.src,n=e.style,d=e.onLoad,f=e.onError,c=e.loading,u=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return s.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:i,srcSet:a,src:r},g,{onLoad:d,onError:f,ref:t,loading:c,draggable:u,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:f.default.object,onError:f.default.func,onLoad:f.default.func};var L=function(e){function t(t){var i;(i=e.call(this,t)||this).seenBefore=w&&m(t),i.isCritical="eager"===t.loading||t.critical,i.addNoScript=!(i.isCritical&&!t.fadeIn),i.useIOSupport=!x&&b&&!i.isCritical&&!i.seenBefore;var a=i.isCritical||w&&(x||!i.useIOSupport);return i.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!i.seenBefore&&t.fadeIn},i.imageRef=s.default.createRef(),i.placeholderRef=t.placeholderRef||s.default.createRef(),i.handleImageLoaded=i.handleImageLoaded.bind((0,n.default)(i)),i.handleRef=i.handleRef.bind((0,n.default)(i)),i}(0,d.default)(t,e);var i=t.prototype;return i.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},i.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},i.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},i.handleImageLoaded=function(){var e,t,i;e=this.props,t=c(e),(i=p(t))&&(h[i]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},i.render=function(){var e=c(this.props),t=e.title,i=e.alt,a=e.className,r=e.style,n=void 0===r?{}:r,d=e.imgStyle,o=void 0===d?{}:d,f=e.placeholderStyle,u=void 0===f?{}:f,p=e.placeholderClassName,h=e.fluid,m=e.fixed,x=e.backgroundColor,w=e.durationFadeIn,b=e.Tag,y=e.itemProp,S=e.loading,z=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:C?1:0,transition:L?"opacity "+w+"ms":"none"},o),_="boolean"==typeof x?"lightgray":x,N={transitionDelay:w+"ms"},P=(0,l.default)({opacity:this.state.imgLoaded?0:1},L&&N,o,u),V={title:t,alt:this.state.isVisible?"":i,style:P,className:p,itemProp:y};if(h){var T=h,H=g(h);return s.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},s.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),_&&s.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&N)}),H.base64&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:V,imageVariants:T,generateSources:I}),H.tracedSVG&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:V,imageVariants:T,generateSources:j}),this.state.isVisible&&s.default.createElement("picture",null,v(T),s.default.createElement(k,{alt:i,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:z})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:i,title:t,loading:S},H,{imageVariants:T}))}}))}if(m){var W=m,q=g(m),X=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete X.display,s.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:X,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},_&&s.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:_,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},L&&N)}),q.base64&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:V,imageVariants:W,generateSources:I}),q.tracedSVG&&s.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:V,imageVariants:W,generateSources:j}),this.state.isVisible&&s.default.createElement("picture",null,v(W),s.default.createElement(k,{alt:i,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:z})),this.addNoScript&&s.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:E((0,l.default)({alt:i,title:t,loading:S},q,{imageVariants:W}))}}))}return null},t}(s.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=f.default.shape({width:f.default.number.isRequired,height:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string}),_=f.default.shape({aspectRatio:f.default.number.isRequired,src:f.default.string.isRequired,srcSet:f.default.string.isRequired,sizes:f.default.string.isRequired,base64:f.default.string,tracedSVG:f.default.string,srcWebp:f.default.string,srcSetWebp:f.default.string,media:f.default.string,maxWidth:f.default.number,maxHeight:f.default.number});function N(e){return function(t,i,a){var r;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+a+"`, but their values are both `undefined`.");f.default.checkPropTypes(((r={})[i]=e,r),t,"prop",a)}}L.propTypes={resolutions:R,sizes:_,fixed:N(f.default.oneOfType([R,f.default.arrayOf(R)])),fluid:N(f.default.oneOfType([_,f.default.arrayOf(_)])),fadeIn:f.default.bool,durationFadeIn:f.default.number,title:f.default.string,alt:f.default.string,className:f.default.oneOfType([f.default.string,f.default.object]),critical:f.default.bool,crossOrigin:f.default.oneOfType([f.default.string,f.default.bool]),style:f.default.object,imgStyle:f.default.object,placeholderStyle:f.default.object,placeholderClassName:f.default.string,backgroundColor:f.default.oneOfType([f.default.string,f.default.bool]),onLoad:f.default.func,onError:f.default.func,onStartLoad:f.default.func,Tag:f.default.string,itemProp:f.default.string,loading:f.default.oneOf(["auto","lazy","eager"]),draggable:f.default.bool};var P=L;t.default=P},FSkn:function(e,t,i){"use strict";var a=i("q1tI"),r=i.n(a),n=i("Wbzz"),d=i("9eSz"),o=i.n(d);t.a=function(e){return r.a.createElement(n.StaticQuery,{query:"1022643890",render:function(t){var i=t.images.edges.find((function(t){return t.node.relativePath.includes(e.filename)}));return i?r.a.createElement(o.a,{alt:e.alt,fluid:i.node.childImageSharp.fluid}):null}})}},hiXJ:function(e,t,i){"use strict";i.d(t,"h",(function(){return n})),i.d(t,"g",(function(){return d})),i.d(t,"a",(function(){return o})),i.d(t,"f",(function(){return l})),i.d(t,"i",(function(){return s})),i.d(t,"j",(function(){return f})),i.d(t,"b",(function(){return c})),i.d(t,"d",(function(){return u})),i.d(t,"c",(function(){return p})),i.d(t,"k",(function(){return g})),i.d(t,"e",(function(){return h}));var a=i("vOnD"),r=i("ZMKu"),n=Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ProjectSkillsContainer",componentId:"ft16yj-0"})(["box-sizing:border-box;background:var(--change);color:#17223b;padding:10px;margin:50px 0;width:100%;overflow:hidden;.skill-flex{max-width:850px;margin:auto;display:flex;@media (max-width:768px){flex-direction:column;}.tech-list{width:40%;padding-bottom:20px;@media (max-width:768px){width:100%;}&:first-child{flex-grow:2;width:60%;padding-right:30px;@media (max-width:768px){width:100%;padding-right:0;}}a{color:#17223b;text-decoration:underline;font-weight:700;font-size:1.3rem;}p{font-weight:450;font-size:1rem;}ul{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;li{box-sizing:border-box;font-weight:450;font-size:1rem;padding-right:0.5rem;}}}}.about-flex{max-width:850px;margin:auto;display:flex;@media (max-width:768px){flex-direction:column;}.tech-list{&:first-child{width:50%;padding-right:15px;@media (max-width:768px){width:100%;padding-right:0;}}&:nth-child(2){width:50%;padding-left:15px;@media (max-width:768px){width:100%;padding-left:0;}}ul{list-style-type:none;padding:0;display:flex;flex-wrap:wrap;li{box-sizing:border-box;font-weight:450;font-size:1rem;padding-right:0.5rem;}}}}"]),d=Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ProjectOneColumnFlex",componentId:"ft16yj-1"})(["display:flex;max-width:900px;margin:50px auto;"]),o=(Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ProjectTwoColumnFlex",componentId:"ft16yj-2"})(["display:flex;flex-direction:row;max-width:900px;margin:50px auto;"]),Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__Column",componentId:"ft16yj-3"})(["box-sizing:border-box;flex-grow:1;width:100%;box-shadow:3px 3px 4px #000;video{display:block;}"])),l=a.default.p.withConfig({displayName:"projectStyles__ProjectCopy",componentId:"ft16yj-4"})(["max-width:650px;color:var(--text);font-size:1.3rem;font-weight:450;margin:0 auto 50px auto;text-align:center;"]),s=(Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ProjectOneColumnFlexPadding",componentId:"ft16yj-5"})(["box-sizing:border-box;display:flex;max-width:900px;margin:50px auto;padding:20px;background:var(--change);@media (max-width:768px){padding:10px;}"]),Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ProjectTwoColumnFlexPadding",componentId:"ft16yj-6"})(["box-sizing:border-box;display:flex;flex-wrap:wrap;width:100%;max-width:900px;flex-direction:row;margin:50px auto;padding:20px;overflow:hidden;background:var(--change);@media (max-width:768px){flex-direction:column;padding:10px;}"])),f=Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ProjectTwoRowFlexPadding",componentId:"ft16yj-7"})(["box-sizing:border-box;display:flex;flex-wrap:wrap;width:100%;max-width:900px;flex-direction:row;margin:50px auto;padding:20px;overflow:hidden;background:var(--change);@media (max-width:768px){flex-direction:column;padding:10px;}"]),c=Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ColumnOne",componentId:"ft16yj-8"})(["box-sizing:border-box;flex-grow:1;width:33%;overflow:hidden;margin-right:10px;box-shadow:3px 3px 4px #000;video{display:block;}@media (max-width:768px){margin-right:0;margin-bottom:10px;width:100%;}"]),u=Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ColumnTwo",componentId:"ft16yj-9"})(["box-sizing:border-box;flex-grow:1;width:33%;overflow:hidden;margin-left:10px;box-shadow:3px 3px 4px #000;video{display:block;}@media (max-width:768px){margin-left:0;width:100%;}"]),p=Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__ColumnThree",componentId:"ft16yj-10"})(["box-sizing:border-box;width:100%;overflow:hidden;flex-grow:2;margin-top:20px;box-shadow:3px 3px 4px #000;video{display:block;}@media (max-width:768px){margin-top:10px;width:100%;}"]),g=Object(a.default)(r.b.div).withConfig({displayName:"projectStyles__RowColumn",componentId:"ft16yj-11"})(["box-sizing:border-box;flex-grow:1;width:33%;overflow:hidden;box-shadow:3px 3px 4px #000;&:first-child{margin-bottom:20px;margin-right:10px;@media (max-width:768px){margin-right:0;margin-left:0;margin-bottom:10px;width:100%;}}&:nth-child(2){margin-left:10px;margin-bottom:20px;@media (max-width:768px){margin-right:0;margin-left:0;margin-bottom:10px;width:100%;}}&:nth-child(3){margin-right:10px;@media (max-width:768px){margin-right:0;margin-left:0;margin-bottom:10px;width:100%;}}&:nth-child(4){margin-left:10px;@media (max-width:768px){margin-right:0;margin-left:0;margin-bottom:10px;width:100%;}}video{display:block;}@media (max-width:768px){margin-right:0;margin-left:0;margin-bottom:10px;width:100%;}"]),h=a.default.div.withConfig({displayName:"projectStyles__HumanRotate",componentId:"ft16yj-12"})([".top-fun{position:relative;height:500px;width:100%;overflow:hidden;.magazine-rotate{position:absolute;top:50%;left:50%;transform-style:preserve-3d;will-change:transform;pointer-events:none;.face{position:absolute;background-size:cover;overflow:hidden;}.face-cover{height:31vw;width:22vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) translateZ(0.5vw);}.face-side{height:31vw;width:1vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateY(90deg) translateZ(11vw);}.face-spine{height:31vw;width:1vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateY(-90deg) translateZ(11vw);}.face-top{height:1vw;width:22vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateX(90deg) translateZ(15.5vw);}.face-bottom{height:1vw;width:22vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateX(-90deg) translateZ(15.5vw);}.face-back{height:31vw;width:22vw;background:#f5ca36;transform:translateX(-50%) translateY(-50%) rotateY(-180deg) translateZ(0.5vw);}}}"])}}]);
//# sourceMappingURL=7320f055aa5d557026edf951426120f36c43ad15-6743c589308b7eaf8a2e.js.map