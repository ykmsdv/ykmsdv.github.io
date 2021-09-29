(function(t){function e(e){for(var n,i,s=e[0],c=e[1],l=e[2],d=0,f=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},r={app:0},o=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0e92":function(t,e,a){"use strict";a("fad3")},"12f3":function(t,e,a){"use strict";a("8afe")},"294d":function(t,e,a){"use strict";a("9ea8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{staticClass:"grey lighten-5 pa-0",attrs:{fluid:""}},[a("v-main",[a("About"),a("Visualizations")],1),a("Footer"),a("div",{attrs:{id:"tooltip"}})],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{id:"about"}},[a("v-row",{staticClass:"text-center mt-4",attrs:{justify:"center"}},[a("v-col",{staticClass:"mt-2 pa-0",attrs:{cols:"12"}},[a("h1",{staticClass:" mb-3"},[t._v(" What we fought and fight for: "),a("span",[t._v("The History of Activism")])])]),a("v-col",{staticClass:"mt-0 mb-10",attrs:{cols:"7",xs:"12"}},[a("p",{staticClass:"font-weight-regular"},[t._v(" This project visualizes historical artifacts related to activism and political movements in the Smithsonian Institution Museums. The data and images are sources from the Smithsonian API. The used search term was for “Memorabilia and Ephemera – Political and Activist Ephemera.” The constraints for the resulting query was that all artifacts should have an image that has a CC0 license. As of September 28th, 2021, this search yields 173 artifacts spanning 1830s – 2010s. ")]),a("p",{staticClass:"font-weight-regular"},[t._v(" I wanted to focus on this topic as in recent years we have seen an uptick in activism, spanning multiple movements such as race, immigration, women’s rights, lgbt rights, and general demand for equality across all populations. These fights are not new and it is fascinating to see how the artifacts and visuals associated with activism have evolved throughout time. The fact that the Smithsonian museums contain ephemera dating back to the 18th century speaks to the importance of these artifacts in preserving history and human’s plight for change. ")])])],1)],1)},s=[],c={name:"About",data:function(){return{}}},l=c,u=(a("12f3"),a("2877")),d=a("6544"),f=a.n(d),p=a("62ad"),v=a("a523"),h=a("0fd9"),m=Object(u["a"])(l,i,s,!1,null,"e5dce722",null),g=m.exports;f()(m,{VCol:p["a"],VContainer:v["a"],VRow:h["a"]});var b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticStyle:{background:"#ddd"},attrs:{padless:""}},[a("v-col",{staticClass:"text-left",staticStyle:{"font-size":"9pt"},attrs:{cols:"6"}},[t._v(" MSDV ")]),a("v-col",{staticClass:"text-right",staticStyle:{"font-size":"9pt"},attrs:{cols:"6"}},[t._v(" © "),a("a",{attrs:{href:"mailto:yoana.kosturska@gmail.com"}},[t._v("Yoana Kosturska")]),t._v(" - "+t._s((new Date).getFullYear())+" ")])],1)},y=[],w={name:"Footer"},_=w,x=(a("294d"),a("553a")),C=Object(u["a"])(_,b,y,!1,null,null,null),k=C.exports;f()(C,{VCol:p["a"],VFooter:x["a"]});var j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},["heatmap"===t.value?a("Heatmap"):t._e()],1)],1)},V=[],S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"heatmap"},[a("h2",{staticClass:"mt-4"},[t._v("Topics of Preserved Artifacts 1860-2010")]),a("v-row",{staticClass:"mt-4 mb-6",attrs:{justify:"center"}},[a("div",{staticClass:"svg-container",attrs:{id:"heatmap-legend"}}),a("div",{staticClass:"svg-container",attrs:{id:"heatmap"}})]),t.activeCell.hasOwnProperty("label")?a("Modal",{attrs:{data:t.activeCell},on:{closeDialog:function(e){t.activeCell={}}}}):t._e()],1)},O=[],A=(a("99af"),a("5698")),E=a("c46f"),T=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{scrollable:"","max-width":"1000px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{attrs:{id:"modal"}},[a("v-card-title",[a("h3",[t._v(" "+t._s(t.data.data.length)+" Artifacts for "+t._s(t.data.label)+" in the "+t._s(t.data.year)),a("span",[t._v("s")])]),a("v-spacer"),a("v-card-actions",[a("v-btn",{attrs:{color:"grey darken-1",text:"",small:"",outlined:""},on:{click:t.closeDialog}},[a("v-icon",{attrs:{small:"",color:"grey darken-1"}},[t._v("mdi-close")]),t._v(" Close ")],1)],1)],1),a("v-divider"),a("v-card",{staticClass:"justify-center ma-0 pa-0"},[a("v-card-actions",{staticClass:"justify-center pa-0"},[a("v-checkbox",{attrs:{label:"Show Sensitive (Blurred) Content"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}}),a("v-tooltip",{attrs:{right:"",color:"black","max-width":"300"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,r=e.attrs;return[a("v-icon",t._g(t._b({staticClass:"ml-1",staticStyle:{"margin-top":"-12px"},attrs:{color:"grey",dark:"",small:""}},"v-icon",r,!1),n),[t._v(" mdi-comment-question-outline ")])]}}])},[a("div",[t._v(" Blurs out sensitive words and images. Every effort has been made to arrive at a complete list of sensitive words, however given the dynamic content of the project, some content may have been missed. Please, contact me if you notice anything that requires a trigger warning. ")])])],1)],1),a("v-divider"),a("v-card-text",{staticStyle:{"min-height":"400px"}},[a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{dense:""}},t._l(t.data.data,(function(e){return a("v-col",{key:e.id,attrs:{sm:"6",xs:"12",md:"6"}},[a("v-card",[a("v-carousel",{attrs:{height:"400","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(e.media,(function(n,r){return a("v-carousel-item",{key:r,staticClass:"white--text align-end",class:t.checkContent(e.isSensitive,"Image"),attrs:{src:"assets/images/screen_"+n+".jpeg",contain:"","max-height":"400",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.2)"}})})),1),a("div",{class:t.checkContent(e.isSensitive,"Description")},[a("v-card-title",[t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",[a("div",{staticClass:"meta-data"},[a("span",[t._v(" On Exhibit: "+t._s(t._f("onExhibit")(e.isExhibited))+" ")]),a("span",[t._v(" In Museum: "+t._s(e.unitCode)+" ")])]),a("v-card-actions",{staticClass:"pa-0 mt-4 mb-5"},[a("v-spacer"),a("a",{attrs:{href:e.record_link,target:"_blank"}},[a("v-btn",{attrs:{color:"grey darken-3",text:"",small:"",outlined:""}},[a("v-icon",{staticClass:"pr-1",attrs:{small:"",color:"grey darken-3"}},[t._v("mdi-bank")]),t._v(" Visit ")],1)],1)],1)],1),a("v-card-text",{domProps:{textContent:t._s(e.description[0])}})],1)],1)],1)})),1)],1)],1)],1)],1)],1)},M=[],P={name:"modal",props:{data:Object},data:function(){return{checkbox:!1,dialog:!0}},watch:{data:{handler:function(t){console.log(t),this.dialog=!0},deep:!0}},filters:{onExhibit:function(t){return t?"Yes":"No"}},methods:{checkContent:function(t,e){return this.checkbox?"showSensitive":t?"hideSensitive".concat(e):void 0},closeDialog:function(){this.dialog=!1,this.$emit("closeDialog")}}},z=P,D=(a("0e92"),a("8336")),$=a("b0af"),B=a("99d9"),I=a("5e66"),R=a("3e35"),q=a("ac7c"),F=a("169a"),Y=a("ce7e"),H=a("132d"),J=a("2fa4"),K=a("3a2f"),N=Object(u["a"])(z,T,M,!1,null,null,null),W=N.exports;f()(N,{VBtn:D["a"],VCard:$["a"],VCardActions:B["a"],VCardSubtitle:B["b"],VCardText:B["c"],VCardTitle:B["d"],VCarousel:I["a"],VCarouselItem:R["a"],VCheckbox:q["a"],VCol:p["a"],VContainer:v["a"],VDialog:F["a"],VDivider:Y["a"],VIcon:H["a"],VRow:h["a"],VSpacer:J["a"],VTooltip:K["a"]});var X={name:"Heatmap",data:function(){return{store:window.Store,activeCell:{}}},components:{Modal:W},watch:{"store.data":function(t){t.length&&this.render()}},mounted:function(){this.store.data.length&&this.render()},methods:{render:function(){var t=this;A["j"]("#heatmap svg").remove();var e=this.store.data,a={top:40,right:280,bottom:30,left:280},n=800,r=1100,o=n+a.left+a.right,i=r+a.top+a.bottom,s=A["j"]("#heatmap").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 ".concat(o," ").concat(i)).classed("svg-content",!0).append("g").attr("transform","translate("+a.left+","+a.top+")"),c=1,l=[],u=(E["a"](e).groupBy("topic").mapObject((function(t,e){return E["b"](t,"date")})).mapObject((function(t,e){return E["d"](t,(function(t,a){t.length>c&&l.push({label:e,year:+a,data:t})}))})).value(),E["a"](l).pluck("data").flatten().pluck("date").unique().value()),d=E["a"](l).pluck("label").sortBy(E["c"]).reverse().value(),f=g(u),p=A["h"]().range([0,n]).domain(f).padding(.02),v=A["h"]().range([r,0]).domain(d).padding(.02),h=A["i"]().interpolator(A["e"]).domain([0,15]);function m(t,e){var a=A["j"]("#tooltip").node().getBoundingClientRect().height;A["k"](".heatmap-rect").attr("stroke","none"),A["j"](t.srcElement).attr("stroke","#999"),A["j"]("#tooltip").style("display","block").style("left",t.pageX+20+"px").style("top",t.pageY-a/2+"px").html("<span class='topic'>".concat(e.label,"</span> <br> ").concat(e.data.length," artifacts in ").concat(e.year,"s"))}function g(){var t=[],e=A["g"](u);e-=10;var a=A["f"](u);while(a>e)e+=10,t.push(e);return t}s.append("g").style("font-size",12).call(A["d"](p)).call((function(t){return t.selectAll(".tick text").attr("dy",-5)})).call((function(t){return t.selectAll(".tick text").text((function(t){return t+"s"}))})).call((function(t){return t.select(".domain").remove()})),s.append("g").style("font-size",12).attr("transform","translate(0,"+r+")").call(A["a"](p)).call((function(t){return t.select(".domain").remove()})).call((function(t){return t.selectAll(".tick text").text((function(t){return t+"s"}))})),s.append("g").style("font-size",13).call(A["b"](v)).call((function(t){return t.select(".domain").remove()})).call((function(t){return t.selectAll(".tick line").remove()})),s.append("g").style("font-size",13).attr("transform","translate("+n+",0)").call(A["c"](v)).call((function(t){return t.select(".domain").remove()})).call((function(t){return t.selectAll(".tick line").remove()})),s.selectAll().data(d).enter().append("line").attr("x1",(function(t){return p(t)})).attr("x2",n).attr("y1",(function(t){return v(t)})).attr("y2",(function(t){return v(t)})).attr("stroke","#f2f2f2").style("opacity",.7),s.selectAll().data(l).enter().append("rect").attr("class","heatmap-rect").attr("x",(function(t){return p(t.year)})).attr("y",(function(t){return v(t.label)})).attr("width",p.bandwidth()).attr("height",v.bandwidth()).style("fill",(function(t){return h(t.data.length)})).on("mouseover",(function(t,e){return m(t,e)})).on("mouseout",(function(){A["k"](".heatmap-rect").attr("stroke","none"),A["j"]("#tooltip").style("display","none")})).on("click",(function(e,a){return t.activeCell=a}))}}},G=X,L=(a("5c8d"),Object(u["a"])(G,S,O,!1,null,"f8384210",null)),Q=L.exports;f()(L,{VContainer:v["a"],VRow:h["a"]});var U={name:"Visualizations",components:{Heatmap:Q},data:function(){return{value:"heatmap"}}},Z=U,tt=Object(u["a"])(Z,j,V,!1,null,null,null),et=tt.exports;f()(tt,{VContainer:v["a"],VRow:h["a"]});var at=a("bc3a"),nt=a.n(at),rt={name:"App",components:{About:g,Footer:k,Visualizations:et},data:function(){return{store:window.Store}},created:function(){var t=this;nt.a.get("data/formatted_dataset.json").then((function(e){t.store.data=e.data})).catch((function(t){console.log(t)}))}},ot=rt,it=(a("cf25"),a("7496")),st=a("f6c4"),ct=Object(u["a"])(ot,r,o,!1,null,null,null),lt=ct.exports;f()(ct,{VApp:it["a"],VContainer:v["a"],VMain:st["a"]});var ut=a("f309");n["a"].use(ut["a"]);var dt=new ut["a"]({});n["a"].config.productionTip=!1,n["a"].config.debug=!0,n["a"].config.devtools=!0,window.Store={data:[]},new n["a"]({vuetify:dt,render:function(t){return t(lt)}}).$mount("#app")},"5c8d":function(t,e,a){"use strict";a("ec5c")},"8afe":function(t,e,a){},"9ea8":function(t,e,a){},cf25:function(t,e,a){"use strict";a("fea6")},ec5c:function(t,e,a){},fad3:function(t,e,a){},fea6:function(t,e,a){}});