(this["webpackJsonpais-outage-web"]=this["webpackJsonpais-outage-web"]||[]).push([[0],{38:function(e,t,n){},59:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(13),s=n.n(o),c=(n(38),n(10)),i=n.n(c),l=n(15),u=n(26),d=n(27),j=n(33),g=n(32),h=n(29),f=n.n(h),p=n(30),m=n(64),v=n(66),b=n(65),y=n(31),O=n.n(y),x=n(4),S=n.n(x),_=(n(59),{2016:{2:"2016_02.geojson",3:"2016_03.geojson",4:"2016_04.geojson",5:"2016_05.geojson",6:"2016_06.geojson",7:"2016_07.geojson",8:"2016_08.geojson",9:"2016_09.geojson",10:"2016_10.geojson",11:"2016_11.geojson",12:"2016_12.geojson"},2017:{1:"2017_01.geojson",2:"2017_02.geojson",3:"2017_03.geojson",4:"2017_04.geojson",5:"2017_05.geojson",6:"2017_06.geojson",7:"2017_07.geojson",8:"2017_08.geojson"}}),k=n(1),I=S()("2016-02-01 00:00:00"),M=S()("2017-08-31 23:59:59"),w="https://vdesgrange.github.io/ais-outage-web",C=function(e){Object(j.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(u.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={error:!1,selectedInterval:[I,M],temporarySelectedInterval:[I,M],data:[]},e.dataSorter=function(e){},e.fileLoader=function(){var t=Object(l.a)(i.a.mark((function t(n){var r;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(n),t.next=3,Promise.all(n.filter((function(e){return e})).map((function(e){return f.a.get("".concat(w,"/data/").concat(e)).then((function(e){return e.data}))})));case 3:r=t.sent,e.setState({data:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.fileSearch=function(e,t){for(var n=e.year(),r=t.year(),a=e.month()+1,o=t.month()+1,s="",c=[],i=n;i<=r;i++)for(var l=i===r?o:12,u=i===n?a:1;u<=l;u++)s=_[i.toString()][u.toString()],c.push(s);return c},e.errorHandler=function(t){var n=t.error;return e.setState({error:n})},e.onChangeCallback=function(t){e.setState({temporarySelectedInterval:t}),e.debouncedSelectedInterval(t)},e.debouncedSelectedInterval=Object(p.debounce)((function(t){e.setState({selectedInterval:t})}),500),e.formatTick=function(e){return S()(e).format("MMM 'YY")},e.getFeatureStyle=function(e){var t=e.properties.type;return{weight:3,opacity:1,color:["#00A19D","#FFB344","#E05D5D"][t],dashArray:[void 0,void 0,5][t]}},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e,t){var n=this.state.selectedInterval;if(t.selectedInterval!==this.state.selectedInterval){var r=S()(n[0]),a=S()(n[1]),o=this.fileSearch(r,a);this.fileLoader(o)}}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,r=t.selectedInterval,a=t.temporarySelectedInterval;return Object(k.jsxs)("div",{className:"ais-wrapper",children:[Object(k.jsxs)(m.a,{id:"mapid",center:[52.377956,4.89707],zoom:10,scrollWheelZoom:!0,children:[Object(k.jsx)(v.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),Object(k.jsx)(v.a,{url:"https://tiles.openseamap.org/seamark/{z}/{x}/{y}.png"}),n&&n.length&&n.map((function(t){return Object(k.jsx)(b.a,{data:t,style:e.getFeatureStyle})}))]}),Object(k.jsxs)("div",{className:"time-range-section",children:[Object(k.jsxs)("div",{className:"time-range-details",children:[Object(k.jsxs)("div",{className:"from",children:[Object(k.jsx)("b",{children:"From"})," ",S()(r[0]).format("D MMMM 'YY HH:mm")]}),Object(k.jsxs)("div",{className:"to",children:[Object(k.jsx)("b",{children:"To"})," ",S()(r[1]).format("D MMMM 'YY HH:mm")]})]}),Object(k.jsx)(O.a,{containerClassName:"time-container",timelineInterval:[I,M],selectedInterval:a,onUpdateCallback:this.errorHandler,onChangeCallback:this.onChangeCallback,formatTick:this.formatTick,ticksNumber:24})]})]})}}]),n}(a.a.Component),F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),o(e),s(e)}))};s.a.render(Object(k.jsx)(a.a.StrictMode,{children:Object(k.jsx)(C,{})}),document.getElementById("root")),F()}},[[61,1,2]]]);
//# sourceMappingURL=main.4ee645e2.chunk.js.map