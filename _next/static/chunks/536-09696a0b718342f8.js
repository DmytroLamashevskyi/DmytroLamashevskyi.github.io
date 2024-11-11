"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{2361:(e,t,r)=>{r.d(t,{u:()=>n});function n(e,[t,r]){return Math.min(r,Math.max(t,e))}},6402:(e,t,r)=>{r.d(t,{B:()=>a});var n=r(2265),o=r(7437),l=r(1584),i=r(1538);function a(e){let t=e+"CollectionProvider",[r,a]=function(e,t=[]){let r=[],l=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return l.scopeName=e,[function(t,l){let i=n.createContext(l),a=r.length;function s(t){let{scope:r,children:l,...s}=t,c=r?.[e][a]||i,u=n.useMemo(()=>s,Object.values(s));return(0,o.jsx)(c.Provider,{value:u,children:l})}return r=[...r,l],s.displayName=t+"Provider",[s,function(r,o){let s=o?.[e][a]||i,c=n.useContext(s);if(c)return c;if(void 0!==l)return l;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(l,...t)]}(t),[s,c]=r(t,{collectionRef:{current:null},itemMap:new Map}),u=e=>{let{scope:t,children:r}=e,l=n.useRef(null),i=n.useRef(new Map).current;return(0,o.jsx)(s,{scope:t,itemMap:i,collectionRef:l,children:r})};u.displayName=t;let d=e+"CollectionSlot",f=n.forwardRef((e,t)=>{let{scope:r,children:n}=e,a=c(d,r),s=(0,l.e)(t,a.collectionRef);return(0,o.jsx)(i.g7,{ref:s,children:n})});f.displayName=d;let p=e+"CollectionItemSlot",v="data-radix-collection-item",h=n.forwardRef((e,t)=>{let{scope:r,children:a,...s}=e,u=n.useRef(null),d=(0,l.e)(t,u),f=c(p,r);return n.useEffect(()=>(f.itemMap.set(u,{ref:u,...s}),()=>void f.itemMap.delete(u))),(0,o.jsx)(i.g7,{[v]:"",ref:d,children:a})});return h.displayName=p,[{Provider:u,Slot:f,ItemSlot:h},function(t){let r=c(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll("[".concat(v,"]")));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},a]}},7513:(e,t,r)=>{r.d(t,{gm:()=>l});var n=r(2265);r(7437);var o=n.createContext(void 0);function l(e){let t=n.useContext(o);return e||t||"ltr"}},23:(e,t,r)=>{r.d(t,{Ns:()=>q,fC:()=>K,gb:()=>C,l_:()=>$,q4:()=>A});var n=r(2265),o=r(5171),l=r(1383),i=r(8324),a=r(1584),s=r(5137),c=r(7513),u=r(1336),d=r(2361),f=r(8149),p=r(7437),v="ScrollArea",[h,w]=(0,i.b)(v),[m,b]=h(v),g=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,type:l="hover",dir:i,scrollHideDelay:s=600,...u}=e,[d,f]=n.useState(null),[v,h]=n.useState(null),[w,b]=n.useState(null),[g,x]=n.useState(null),[y,S]=n.useState(null),[C,R]=n.useState(0),[E,T]=n.useState(0),[j,_]=n.useState(!1),[P,D]=n.useState(!1),M=(0,a.e)(t,e=>f(e)),N=(0,c.gm)(i);return(0,p.jsx)(m,{scope:r,type:l,dir:N,scrollHideDelay:s,scrollArea:d,viewport:v,onViewportChange:h,content:w,onContentChange:b,scrollbarX:g,onScrollbarXChange:x,scrollbarXEnabled:j,onScrollbarXEnabledChange:_,scrollbarY:y,onScrollbarYChange:S,scrollbarYEnabled:P,onScrollbarYEnabledChange:D,onCornerWidthChange:R,onCornerHeightChange:T,children:(0,p.jsx)(o.WV.div,{dir:N,...u,ref:M,style:{position:"relative","--radix-scroll-area-corner-width":C+"px","--radix-scroll-area-corner-height":E+"px",...e.style}})})});g.displayName=v;var x="ScrollAreaViewport",y=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,children:l,asChild:i,nonce:s,...c}=e,u=b(x,r),d=n.useRef(null),f=(0,a.e)(t,d,u.onViewportChange);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("style",{dangerouslySetInnerHTML:{__html:"\n[data-radix-scroll-area-viewport] {\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  -webkit-overflow-scrolling: touch;\n}\n[data-radix-scroll-area-viewport]::-webkit-scrollbar {\n  display: none;\n}\n:where([data-radix-scroll-area-viewport]) {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n:where([data-radix-scroll-area-content]) {\n  flex-grow: 1;\n}\n"},nonce:s}),(0,p.jsx)(o.WV.div,{"data-radix-scroll-area-viewport":"",...c,asChild:i,ref:f,style:{overflowX:u.scrollbarXEnabled?"scroll":"hidden",overflowY:u.scrollbarYEnabled?"scroll":"hidden",...e.style},children:function(e,t){let{asChild:r,children:o}=e;if(!r)return"function"==typeof t?t(o):t;let l=n.Children.only(o);return n.cloneElement(l,{children:"function"==typeof t?t(l.props.children):t})}({asChild:i,children:l},e=>(0,p.jsx)("div",{"data-radix-scroll-area-content":"",ref:u.onContentChange,style:{minWidth:u.scrollbarXEnabled?"fit-content":void 0},children:e}))})]})});y.displayName=x;var S="ScrollAreaScrollbar",C=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,l=b(S,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:a}=l,s="horizontal"===e.orientation;return n.useEffect(()=>(s?i(!0):a(!0),()=>{s?i(!1):a(!1)}),[s,i,a]),"hover"===l.type?(0,p.jsx)(R,{...o,ref:t,forceMount:r}):"scroll"===l.type?(0,p.jsx)(E,{...o,ref:t,forceMount:r}):"auto"===l.type?(0,p.jsx)(T,{...o,ref:t,forceMount:r}):"always"===l.type?(0,p.jsx)(j,{...o,ref:t}):null});C.displayName=S;var R=n.forwardRef((e,t)=>{let{forceMount:r,...o}=e,i=b(S,e.__scopeScrollArea),[a,s]=n.useState(!1);return n.useEffect(()=>{let e=i.scrollArea,t=0;if(e){let r=()=>{window.clearTimeout(t),s(!0)},n=()=>{t=window.setTimeout(()=>s(!1),i.scrollHideDelay)};return e.addEventListener("pointerenter",r),e.addEventListener("pointerleave",n),()=>{window.clearTimeout(t),e.removeEventListener("pointerenter",r),e.removeEventListener("pointerleave",n)}}},[i.scrollArea,i.scrollHideDelay]),(0,p.jsx)(l.z,{present:r||a,children:(0,p.jsx)(T,{"data-state":a?"visible":"hidden",...o,ref:t})})}),E=n.forwardRef((e,t)=>{var r,o;let{forceMount:i,...a}=e,s=b(S,e.__scopeScrollArea),c="horizontal"===e.orientation,u=Y(()=>v("SCROLL_END"),100),[d,v]=(r="hidden",o={hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}},n.useReducer((e,t)=>{let r=o[e][t];return null!=r?r:e},r));return n.useEffect(()=>{if("idle"===d){let e=window.setTimeout(()=>v("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(e)}},[d,s.scrollHideDelay,v]),n.useEffect(()=>{let e=s.viewport,t=c?"scrollLeft":"scrollTop";if(e){let r=e[t],n=()=>{let n=e[t];r!==n&&(v("SCROLL"),u()),r=n};return e.addEventListener("scroll",n),()=>e.removeEventListener("scroll",n)}},[s.viewport,c,v,u]),(0,p.jsx)(l.z,{present:i||"hidden"!==d,children:(0,p.jsx)(j,{"data-state":"hidden"===d?"hidden":"visible",...a,ref:t,onPointerEnter:(0,f.M)(e.onPointerEnter,()=>v("POINTER_ENTER")),onPointerLeave:(0,f.M)(e.onPointerLeave,()=>v("POINTER_LEAVE"))})})}),T=n.forwardRef((e,t)=>{let r=b(S,e.__scopeScrollArea),{forceMount:o,...i}=e,[a,s]=n.useState(!1),c="horizontal"===e.orientation,u=Y(()=>{if(r.viewport){let e=r.viewport.offsetWidth<r.viewport.scrollWidth,t=r.viewport.offsetHeight<r.viewport.scrollHeight;s(c?e:t)}},10);return B(r.viewport,u),B(r.content,u),(0,p.jsx)(l.z,{present:o||a,children:(0,p.jsx)(j,{"data-state":a?"visible":"hidden",...i,ref:t})})}),j=n.forwardRef((e,t)=>{let{orientation:r="vertical",...o}=e,l=b(S,e.__scopeScrollArea),i=n.useRef(null),a=n.useRef(0),[s,c]=n.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=k(s.viewport,s.content),d={...o,sizes:s,onSizesChange:c,hasThumb:!!(u>0&&u<1),onThumbChange:e=>i.current=e,onThumbPointerUp:()=>a.current=0,onThumbPointerDown:e=>a.current=e};function f(e,t){return function(e,t,r){let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ltr",o=O(r),l=t||o/2,i=r.scrollbar.paddingStart+l,a=r.scrollbar.size-r.scrollbar.paddingEnd-(o-l),s=r.content-r.viewport;return U([i,a],"ltr"===n?[0,s]:[-1*s,0])(e)}(e,a.current,s,t)}return"horizontal"===r?(0,p.jsx)(_,{...d,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=H(l.viewport.scrollLeft,s,l.dir);i.current.style.transform="translate3d(".concat(e,"px, 0, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollLeft=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollLeft=f(e,l.dir))}}):"vertical"===r?(0,p.jsx)(P,{...d,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){let e=H(l.viewport.scrollTop,s);i.current.style.transform="translate3d(0, ".concat(e,"px, 0)")}},onWheelScroll:e=>{l.viewport&&(l.viewport.scrollTop=e)},onDragScroll:e=>{l.viewport&&(l.viewport.scrollTop=f(e))}}):null}),_=n.forwardRef((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=b(S,e.__scopeScrollArea),[s,c]=n.useState(),u=n.useRef(null),d=(0,a.e)(t,u,i.onScrollbarXChange);return n.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,p.jsx)(N,{"data-orientation":"horizontal",...l,ref:d,sizes:r,style:{bottom:0,left:"rtl"===i.dir?"var(--radix-scroll-area-corner-width)":0,right:"ltr"===i.dir?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":O(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.x),onDragScroll:t=>e.onDragScroll(t.x),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollLeft+t.deltaX;e.onWheelScroll(n),function(e,t){return e>0&&e<t}(n,r)&&t.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&o({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:V(s.paddingLeft),paddingEnd:V(s.paddingRight)}})}})}),P=n.forwardRef((e,t)=>{let{sizes:r,onSizesChange:o,...l}=e,i=b(S,e.__scopeScrollArea),[s,c]=n.useState(),u=n.useRef(null),d=(0,a.e)(t,u,i.onScrollbarYChange);return n.useEffect(()=>{u.current&&c(getComputedStyle(u.current))},[u]),(0,p.jsx)(N,{"data-orientation":"vertical",...l,ref:d,sizes:r,style:{top:0,right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":O(r)+"px",...e.style},onThumbPointerDown:t=>e.onThumbPointerDown(t.y),onDragScroll:t=>e.onDragScroll(t.y),onWheelScroll:(t,r)=>{if(i.viewport){let n=i.viewport.scrollTop+t.deltaY;e.onWheelScroll(n),function(e,t){return e>0&&e<t}(n,r)&&t.preventDefault()}},onResize:()=>{u.current&&i.viewport&&s&&o({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:V(s.paddingTop),paddingEnd:V(s.paddingBottom)}})}})}),[D,M]=h(S),N=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,sizes:l,hasThumb:i,onThumbChange:c,onThumbPointerUp:u,onThumbPointerDown:d,onThumbPositionChange:v,onDragScroll:h,onWheelScroll:w,onResize:m,...g}=e,x=b(S,r),[y,C]=n.useState(null),R=(0,a.e)(t,e=>C(e)),E=n.useRef(null),T=n.useRef(""),j=x.viewport,_=l.content-l.viewport,P=(0,s.W)(w),M=(0,s.W)(v),N=Y(m,10);function L(e){E.current&&h({x:e.clientX-E.current.left,y:e.clientY-E.current.top})}return n.useEffect(()=>{let e=e=>{let t=e.target;(null==y?void 0:y.contains(t))&&P(e,_)};return document.addEventListener("wheel",e,{passive:!1}),()=>document.removeEventListener("wheel",e,{passive:!1})},[j,y,_,P]),n.useEffect(M,[l,M]),B(y,N),B(x.content,N),(0,p.jsx)(D,{scope:r,scrollbar:y,hasThumb:i,onThumbChange:(0,s.W)(c),onThumbPointerUp:(0,s.W)(u),onThumbPositionChange:M,onThumbPointerDown:(0,s.W)(d),children:(0,p.jsx)(o.WV.div,{...g,ref:R,style:{position:"absolute",...g.style},onPointerDown:(0,f.M)(e.onPointerDown,e=>{0===e.button&&(e.target.setPointerCapture(e.pointerId),E.current=y.getBoundingClientRect(),T.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",x.viewport&&(x.viewport.style.scrollBehavior="auto"),L(e))}),onPointerMove:(0,f.M)(e.onPointerMove,L),onPointerUp:(0,f.M)(e.onPointerUp,e=>{let t=e.target;t.hasPointerCapture(e.pointerId)&&t.releasePointerCapture(e.pointerId),document.body.style.webkitUserSelect=T.current,x.viewport&&(x.viewport.style.scrollBehavior=""),E.current=null})})})}),L="ScrollAreaThumb",A=n.forwardRef((e,t)=>{let{forceMount:r,...n}=e,o=M(L,e.__scopeScrollArea);return(0,p.jsx)(l.z,{present:r||o.hasThumb,children:(0,p.jsx)(W,{ref:t,...n})})}),W=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,style:l,...i}=e,s=b(L,r),c=M(L,r),{onThumbPositionChange:u}=c,d=(0,a.e)(t,e=>c.onThumbChange(e)),v=n.useRef(),h=Y(()=>{v.current&&(v.current(),v.current=void 0)},100);return n.useEffect(()=>{let e=s.viewport;if(e){let t=()=>{if(h(),!v.current){let t=X(e,u);v.current=t,u()}};return u(),e.addEventListener("scroll",t),()=>e.removeEventListener("scroll",t)}},[s.viewport,h,u]),(0,p.jsx)(o.WV.div,{"data-state":c.hasThumb?"visible":"hidden",...i,ref:d,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:(0,f.M)(e.onPointerDownCapture,e=>{let t=e.target.getBoundingClientRect(),r=e.clientX-t.left,n=e.clientY-t.top;c.onThumbPointerDown({x:r,y:n})}),onPointerUp:(0,f.M)(e.onPointerUp,c.onThumbPointerUp)})});A.displayName=L;var I="ScrollAreaCorner",F=n.forwardRef((e,t)=>{let r=b(I,e.__scopeScrollArea),n=!!(r.scrollbarX&&r.scrollbarY);return"scroll"!==r.type&&n?(0,p.jsx)(z,{...e,ref:t}):null});F.displayName=I;var z=n.forwardRef((e,t)=>{let{__scopeScrollArea:r,...l}=e,i=b(I,r),[a,s]=n.useState(0),[c,u]=n.useState(0),d=!!(a&&c);return B(i.scrollbarX,()=>{var e;let t=(null===(e=i.scrollbarX)||void 0===e?void 0:e.offsetHeight)||0;i.onCornerHeightChange(t),u(t)}),B(i.scrollbarY,()=>{var e;let t=(null===(e=i.scrollbarY)||void 0===e?void 0:e.offsetWidth)||0;i.onCornerWidthChange(t),s(t)}),d?(0,p.jsx)(o.WV.div,{...l,ref:t,style:{width:a,height:c,position:"absolute",right:"ltr"===i.dir?0:void 0,left:"rtl"===i.dir?0:void 0,bottom:0,...e.style}}):null});function V(e){return e?parseInt(e,10):0}function k(e,t){let r=e/t;return isNaN(r)?0:r}function O(e){let t=k(e.viewport,e.content),r=e.scrollbar.paddingStart+e.scrollbar.paddingEnd;return Math.max((e.scrollbar.size-r)*t,18)}function H(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ltr",n=O(t),o=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,l=t.scrollbar.size-o,i=t.content-t.viewport,a=(0,d.u)(e,"ltr"===r?[0,i]:[-1*i,0]);return U([0,i],[0,l-n])(a)}function U(e,t){return r=>{if(e[0]===e[1]||t[0]===t[1])return t[0];let n=(t[1]-t[0])/(e[1]-e[0]);return t[0]+n*(r-e[0])}}var X=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{},r={left:e.scrollLeft,top:e.scrollTop},n=0;return!function o(){let l={left:e.scrollLeft,top:e.scrollTop},i=r.left!==l.left,a=r.top!==l.top;(i||a)&&t(),r=l,n=window.requestAnimationFrame(o)}(),()=>window.cancelAnimationFrame(n)};function Y(e,t){let r=(0,s.W)(e),o=n.useRef(0);return n.useEffect(()=>()=>window.clearTimeout(o.current),[]),n.useCallback(()=>{window.clearTimeout(o.current),o.current=window.setTimeout(r,t)},[r,t])}function B(e,t){let r=(0,s.W)(t);(0,u.b)(()=>{let t=0;if(e){let n=new ResizeObserver(()=>{cancelAnimationFrame(t),t=window.requestAnimationFrame(r)});return n.observe(e),()=>{window.cancelAnimationFrame(t),n.unobserve(e)}}},[e,r])}var K=g,$=y,q=F},7239:(e,t,r)=>{r.d(t,{VY:()=>q,aV:()=>K,fC:()=>B,xz:()=>$});var n=r(2265),o=r(8149),l=r(8324),i=r(6402),a=r(1584),s=r(7437),c=r(3201),u=r(5171),d=r(5137),f=r(1715),p=r(7513),v="rovingFocusGroup.onEntryFocus",h={bubbles:!1,cancelable:!0},w="RovingFocusGroup",[m,b,g]=(0,i.B)(w),[x,y]=function(e,t=[]){let r=[],o=()=>{let t=r.map(e=>n.createContext(e));return function(r){let o=r?.[e]||t;return n.useMemo(()=>({[`__scope${e}`]:{...r,[e]:o}}),[r,o])}};return o.scopeName=e,[function(t,o){let l=n.createContext(o),i=r.length;function a(t){let{scope:r,children:o,...a}=t,c=r?.[e][i]||l,u=n.useMemo(()=>a,Object.values(a));return(0,s.jsx)(c.Provider,{value:u,children:o})}return r=[...r,o],a.displayName=t+"Provider",[a,function(r,a){let s=a?.[e][i]||l,c=n.useContext(s);if(c)return c;if(void 0!==o)return o;throw Error(`\`${r}\` must be used within \`${t}\``)}]},function(...e){let t=e[0];if(1===e.length)return t;let r=()=>{let r=e.map(e=>({useScope:e(),scopeName:e.scopeName}));return function(e){let o=r.reduce((t,{useScope:r,scopeName:n})=>{let o=r(e)[`__scope${n}`];return{...t,...o}},{});return n.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return r.scopeName=t.scopeName,r}(o,...t)]}(w,[g]),[S,C]=x(w),R=n.forwardRef((e,t)=>(0,s.jsx)(m.Provider,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(m.Slot,{scope:e.__scopeRovingFocusGroup,children:(0,s.jsx)(E,{...e,ref:t})})}));R.displayName=w;var E=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,orientation:l,loop:i=!1,dir:c,currentTabStopId:w,defaultCurrentTabStopId:m,onCurrentTabStopIdChange:g,onEntryFocus:x,preventScrollOnEntryFocus:y=!1,...C}=e,R=n.useRef(null),E=(0,a.e)(t,R),T=(0,p.gm)(c),[j=null,_]=(0,f.T)({prop:w,defaultProp:m,onChange:g}),[D,M]=n.useState(!1),N=(0,d.W)(x),L=b(r),A=n.useRef(!1),[W,I]=n.useState(0);return n.useEffect(()=>{let e=R.current;if(e)return e.addEventListener(v,N),()=>e.removeEventListener(v,N)},[N]),(0,s.jsx)(S,{scope:r,orientation:l,dir:T,loop:i,currentTabStopId:j,onItemFocus:n.useCallback(e=>_(e),[_]),onItemShiftTab:n.useCallback(()=>M(!0),[]),onFocusableItemAdd:n.useCallback(()=>I(e=>e+1),[]),onFocusableItemRemove:n.useCallback(()=>I(e=>e-1),[]),children:(0,s.jsx)(u.WV.div,{tabIndex:D||0===W?-1:0,"data-orientation":l,...C,ref:E,style:{outline:"none",...e.style},onMouseDown:(0,o.M)(e.onMouseDown,()=>{A.current=!0}),onFocus:(0,o.M)(e.onFocus,e=>{let t=!A.current;if(e.target===e.currentTarget&&t&&!D){let t=new CustomEvent(v,h);if(e.currentTarget.dispatchEvent(t),!t.defaultPrevented){let e=L().filter(e=>e.focusable);P([e.find(e=>e.active),e.find(e=>e.id===j),...e].filter(Boolean).map(e=>e.ref.current),y)}}A.current=!1}),onBlur:(0,o.M)(e.onBlur,()=>M(!1))})})}),T="RovingFocusGroupItem",j=n.forwardRef((e,t)=>{let{__scopeRovingFocusGroup:r,focusable:l=!0,active:i=!1,tabStopId:a,...d}=e,f=(0,c.M)(),p=a||f,v=C(T,r),h=v.currentTabStopId===p,w=b(r),{onFocusableItemAdd:g,onFocusableItemRemove:x}=v;return n.useEffect(()=>{if(l)return g(),()=>x()},[l,g,x]),(0,s.jsx)(m.ItemSlot,{scope:r,id:p,focusable:l,active:i,children:(0,s.jsx)(u.WV.span,{tabIndex:h?0:-1,"data-orientation":v.orientation,...d,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{l?v.onItemFocus(p):e.preventDefault()}),onFocus:(0,o.M)(e.onFocus,()=>v.onItemFocus(p)),onKeyDown:(0,o.M)(e.onKeyDown,e=>{if("Tab"===e.key&&e.shiftKey){v.onItemShiftTab();return}if(e.target!==e.currentTarget)return;let t=function(e,t,r){var n;let o=(n=e.key,"rtl"!==r?n:"ArrowLeft"===n?"ArrowRight":"ArrowRight"===n?"ArrowLeft":n);if(!("vertical"===t&&["ArrowLeft","ArrowRight"].includes(o))&&!("horizontal"===t&&["ArrowUp","ArrowDown"].includes(o)))return _[o]}(e,v.orientation,v.dir);if(void 0!==t){if(e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;e.preventDefault();let r=w().filter(e=>e.focusable).map(e=>e.ref.current);if("last"===t)r.reverse();else if("prev"===t||"next"===t){"prev"===t&&r.reverse();let n=r.indexOf(e.currentTarget);r=v.loop?function(e,t){return e.map((r,n)=>e[(t+n)%e.length])}(r,n+1):r.slice(n+1)}setTimeout(()=>P(r))}})})})});j.displayName=T;var _={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function P(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=document.activeElement;for(let n of e)if(n===r||(n.focus({preventScroll:t}),document.activeElement!==r))return}var D=r(1383),M="Tabs",[N,L]=(0,l.b)(M,[y]),A=y(),[W,I]=N(M),F=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,onValueChange:o,defaultValue:l,orientation:i="horizontal",dir:a,activationMode:d="automatic",...v}=e,h=(0,p.gm)(a),[w,m]=(0,f.T)({prop:n,onChange:o,defaultProp:l});return(0,s.jsx)(W,{scope:r,baseId:(0,c.M)(),value:w,onValueChange:m,orientation:i,dir:h,activationMode:d,children:(0,s.jsx)(u.WV.div,{dir:h,"data-orientation":i,...v,ref:t})})});F.displayName=M;var z="TabsList",V=n.forwardRef((e,t)=>{let{__scopeTabs:r,loop:n=!0,...o}=e,l=I(z,r),i=A(r);return(0,s.jsx)(R,{asChild:!0,...i,orientation:l.orientation,dir:l.dir,loop:n,children:(0,s.jsx)(u.WV.div,{role:"tablist","aria-orientation":l.orientation,...o,ref:t})})});V.displayName=z;var k="TabsTrigger",O=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:n,disabled:l=!1,...i}=e,a=I(k,r),c=A(r),d=X(a.baseId,n),f=Y(a.baseId,n),p=n===a.value;return(0,s.jsx)(j,{asChild:!0,...c,focusable:!l,active:p,children:(0,s.jsx)(u.WV.button,{type:"button",role:"tab","aria-selected":p,"aria-controls":f,"data-state":p?"active":"inactive","data-disabled":l?"":void 0,disabled:l,id:d,...i,ref:t,onMouseDown:(0,o.M)(e.onMouseDown,e=>{l||0!==e.button||!1!==e.ctrlKey?e.preventDefault():a.onValueChange(n)}),onKeyDown:(0,o.M)(e.onKeyDown,e=>{[" ","Enter"].includes(e.key)&&a.onValueChange(n)}),onFocus:(0,o.M)(e.onFocus,()=>{let e="manual"!==a.activationMode;p||l||!e||a.onValueChange(n)})})})});O.displayName=k;var H="TabsContent",U=n.forwardRef((e,t)=>{let{__scopeTabs:r,value:o,forceMount:l,children:i,...a}=e,c=I(H,r),d=X(c.baseId,o),f=Y(c.baseId,o),p=o===c.value,v=n.useRef(p);return n.useEffect(()=>{let e=requestAnimationFrame(()=>v.current=!1);return()=>cancelAnimationFrame(e)},[]),(0,s.jsx)(D.z,{present:l||p,children:r=>{let{present:n}=r;return(0,s.jsx)(u.WV.div,{"data-state":p?"active":"inactive","data-orientation":c.orientation,role:"tabpanel","aria-labelledby":d,hidden:!n,id:f,tabIndex:0,...a,ref:t,style:{...e.style,animationDuration:v.current?"0s":void 0},children:n&&i})}})});function X(e,t){return"".concat(e,"-trigger-").concat(t)}function Y(e,t){return"".concat(e,"-content-").concat(t)}U.displayName=H;var B=F,K=V,$=O,q=U}}]);