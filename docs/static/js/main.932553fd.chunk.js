(this["webpackJsonpais-outage-web"]=this["webpackJsonpais-outage-web"]||[]).push([[0],{38:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),o=(a(38),a(14)),i=a.n(o),l=a(25),d=a(26),u=a(27),m=a(33),b=a(32),h=a(29),p=a.n(h),j=a(30),f=a(64),v=a(66),g=a(65),O=a(31),x=a.n(O),y=a(8),k=a.n(y),M=(a(59),a.p+"static/media/test2.a49320f8.geojson"),C=a(1),I=k()("2016-01-01 00:00:00"),S=k()("2017-12-31 23:59:59"),w=function(e){Object(m.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1,selectedInterval:[I,S],temporarySelectedInterval:[I,S],data:void 0},e.errorHandler=function(t){var a=t.error;return e.setState({error:a})},e.onChangeCallback=function(t){e.setState({temporarySelectedInterval:t}),e.debouncedSelectedInterval(t)},e.debouncedSelectedInterval=Object(j.debounce)((function(t){e.setState({selectedInterval:t})}),500),e.formatTick=function(e){return k()(e).format("MMM 'YY")},e.style=function(e){return{weight:3,opacity:1,color:"red",dashArray:"3",fillOpacity:0}},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()(M);case 2:t=e.sent,a=t.data,this.setState({data:a});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.selectedInterval,n=e.temporarySelectedInterval;return Object(C.jsxs)("div",{className:"ais-wrapper",children:[Object(C.jsxs)(f.a,{id:"mapid",center:[52.377956,4.89707],zoom:9,scrollWheelZoom:!0,children:[Object(C.jsx)(v.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(C.jsx)(v.a,{url:"https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"}),t&&Object(C.jsx)(g.a,{data:t,style:this.style})]}),Object(C.jsxs)("div",{className:"time-range-section",children:[Object(C.jsxs)("div",{className:"time-range-details",children:[Object(C.jsxs)("div",{className:"from",children:[Object(C.jsx)("b",{children:"From"})," ",k()(a[0]).format("D MMMM 'YY HH:mm")]}),Object(C.jsxs)("div",{className:"to",children:[Object(C.jsx)("b",{children:"To"})," ",k()(a[1]).format("D MMMM 'YY HH:mm")]})]}),Object(C.jsx)(x.a,{containerClassName:"time-container",timelineInterval:[I,S],selectedInterval:n,onUpdateCallback:this.errorHandler,onChangeCallback:this.onChangeCallback,formatTick:this.formatTick,ticksNumber:24})]})]})}}]),a}(r.a.Component),N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,67)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))};s.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(w,{})}),document.getElementById("root")),N()}},[[61,1,2]]]);
//# sourceMappingURL=main.932553fd.chunk.js.map