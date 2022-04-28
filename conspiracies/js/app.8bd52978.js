(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,i=1;i<a.length;i++){var l=a[i];0!==o[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},o={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"28cc":function(t,e,a){},"294d":function(t,e,a){"use strict";a("9ea8")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("v-main",{staticStyle:{"min-height":"100vh"}},[a("div",{attrs:{id:"tooltip"}}),a("About"),a("Dropdown"),a("Buttons"),a("Bar")],1)],1),a("Footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"text-center",attrs:{justify:"center"}},[a("v-col",{staticClass:"ma-0 mt-6 pa-0",attrs:{cols:"12"}},[a("h1",{staticClass:"display-2 font-weight-light mb-3"},[t._v(" What do you believe in? ")]),a("h2",{staticClass:"ma-0 pa-0 mb-10",staticStyle:{"font-weight":"300","font-size":"16pt"}},[t._v("Measuring Belief in Conspiracy Theories")])]),a("v-col",{staticClass:"ma-0 mb-10",attrs:{cols:"7",xs:"12",md:"8"}},[a("p",[t._v('Conspiracy theories and the belief in them have exponentially grown in the last few years and are increasingly influencing public opinion and life. Therefore, it is of great importance to analyze what we know historically about what makes certain groups more likely to subscribe to such believes and see if there are any strategies successfully employed in the past to unite people who are likely to be divided by such believes. With this project I want to explore which conspiracy theories are most "popular" and if there is any pattern in the way different demographic groups respond to the 15 prompts. ')]),a("p",[t._v("This project visualizes the data collected based on the Generic Conspiracist Beliefs (GCB) scale "),a("a",{attrs:{href:"https://www.frontiersin.org/articles/10.3389/fpsyg.2013.00279/full"}},[t._v("(link to paper: https://www.frontiersin.org/articles/10.3389/fpsyg.2013.00279/full)")]),t._v(". The data was collected by Open Psychometrics through a self-reported online survey "),a("a",{attrs:{href:"https://openpsychometrics.org/tests/GCBS/"}},[t._v("(https://openpsychometrics.org/tests/GCBS/)")]),t._v(" in 2016. The GCB scale includes 15 questions related to important facets of conspiracism, and respondents can answer them on a 5-point scale: from strongly disagree to strongly agree. After the initial 15 questions, respondents are asked to complete an additional survey with the listed demographics metrics, and only respondents over 13 years of age who agree to have their data collected and used for research are provided in the dataset. ")])])],1)},i=[],l={name:"About",data:function(){return{}}},c=l,u=(a("6419"),a("2877")),d=a("6544"),p=a.n(d),f=a("62ad"),h=a("0fd9"),v=Object(u["a"])(c,s,i,!1,null,null,null),g=v.exports;p()(v,{VCol:f["a"],VRow:h["a"]});var m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.dataIsReady?a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"12"}},[a("v-combobox",{attrs:{dark:"",color:"green accent-2",items:t.questions,"item-text":"label","item-value":"value",label:"Select a question","return-object":""},model:{value:t.selectedValue,callback:function(e){t.selectedValue=e},expression:"selectedValue"}})],1)],1):t._e()},b=[],y=a("53ca"),w=a("5530"),D=a("2f62"),j={name:"Dropdown",data:function(){return{selectedValue:""}},computed:Object(w["a"])(Object(w["a"])({},Object(D["d"])(["questions"])),{},{dataIsReady:function(){return"object"===Object(y["a"])(this.questions)}}),mounted:function(){this.$store.dispatch("fetchDictionary"),this.selectedValue={label:"The spread of certain viruses and/or diseases is the result of the deliberate, concealed efforts of some organization",value:"Q4"}},watch:{selectedValue:function(t){this.setDropdownValue({selectedQuestion:t})}},methods:Object(w["a"])({},Object(D["c"])(["setDropdownValue"]))},O=j,_=a("2b5d"),x=Object(u["a"])(O,m,b,!1,null,null,null),C=x.exports;p()(x,{VCol:f["a"],VCombobox:_["a"],VRow:h["a"]});var V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-row",{staticClass:"mb-6",attrs:{align:"center",justify:"center"}},[a("v-btn-toggle",{attrs:{group:""},model:{value:t.selectedBtn,callback:function(e){t.selectedBtn=e},expression:"selectedBtn"}},[a("v-col",{attrs:{cols:"12",align:"center"}},t._l(t.demographics,(function(e,n){return a("v-btn",{key:n,staticClass:"mr-2 mb-2",attrs:{dark:"",text:"",outlined:"",color:"white accent-3",value:e}},[t._v(" "+t._s(e.btn_label)+" ")])})),1)],1)],1)},B=[],k={name:"Buttons",computed:Object(w["a"])({},Object(D["d"])(["demographics","selectedDemographics"])),data:function(){return{selectedBtn:""}},watch:{selectedBtn:function(t){this.setButtonValue({selectedBtnValue:t})}},mounted:function(){},methods:Object(w["a"])({},Object(D["c"])(["setButtonValue"]))},A=k,F=a("8336"),G=a("a609"),S=Object(u["a"])(A,V,B,!1,null,null,null),R=S.exports;p()(S,{VBtn:F["a"],VBtnToggle:G["a"],VCol:f["a"],VRow:h["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-12",attrs:{id:"viz"}},[a("h2",{staticClass:"mb-3"},[t._v(t._s(t.selectedQuestion.label))]),a("div",{staticClass:"mt-0 mb-0",attrs:{id:"legend"}},[t.hasDemographics?t._l(t.getLegendLabels,(function(e,n){return a("span",{key:n,staticClass:"legendItem"},[a("span",{staticStyle:{display:"inline-block"}},[a("span",{staticClass:"square",style:{backgroundColor:t.getLegendColor(e)}}),a("span",[t._v(t._s(e))])])])})):t._e()],2)])},M=[],q=(a("99af"),a("d81d"),a("d3b7"),a("159b"),a("ddb0"),a("5698")),E=a("c46f"),I={name:"Bar",data:function(){return{}},computed:Object(w["a"])(Object(w["a"])(Object(w["a"])({},Object(D["d"])(["selectedQuestion","selectedDemographics","answers"])),Object(D["b"])(["getGroupedData"])),{},{getLegendLabels:function(){return E["a"](this.getGroupedData).pluck("values").flatten().pluck("label").uniq().sortBy().value()},hasDemographics:function(){return this.selectedDemographics&&"function"!=typeof this.selectedDemographics},dataIsReady:function(){return!(!this.getGroupedData||!this.getGroupedData.length)}}),mounted:function(){this.dataIsReady&&this.render(this.getGroupedData)},watch:{dataIsReady:function(){this.render(this.getGroupedData)},selectedQuestion:function(){this.dataIsReady&&(this.hasDemographics?this.render_grouped(this.getGroupedData):this.render(this.getGroupedData))},selectedDemographics:function(){this.hasDemographics?this.render_grouped(this.getGroupedData):this.render(this.getGroupedData)}},methods:{render:function(t){if(this.dataIsReady){q["h"]("#viz svg").remove();var e={top:20,right:20,bottom:30,left:40},a=960-e.left-e.right,n=400-e.top-e.bottom,o=a+e.left+e.right,r=n+e.top+e.bottom,s=q["h"]("#viz").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 ".concat(o," ").concat(r)).classed("svg-content",!0).append("g").attr("transform","translate("+e.left+","+e.top+")"),i=q["e"]().range([0,a]).domain(t.map((function(t){return t.label}))).padding([.5]),l=q["d"](t,(function(t){return t.value}))>45?q["d"](t,(function(t){return t.value})):45,c=q["f"]().range([n,0]).domain([0,l]),u=this;s.append("g").attr("transform","translate(0,"+n+")").attr("class","xAxis").call(q["a"](i)),s.append("g").attr("class","yAxis").call(q["b"](c)).call((function(t){return t.selectAll("text").text((function(t){return t+"%"}))})),s.selectAll("rect").data(t).enter().append("rect").attr("class","bar").attr("x",(function(t){return i(t.label)})).attr("width",i.bandwidth()).attr("y",(function(t){return c(t.value)})).attr("height",(function(t){return n-c(t.value)})).attr("fill","#f0f8ff").attr("stroke","#222").on("mouseenter",this.tooltipIn).on("mousemove",(function(t,e){var a='\n                                <span style="font-weight: 600"> '.concat(e.label," </span>\n                                <strong> ").concat(e.value,"%</strong> of prompt respondents\n                                <span>(").concat(e.rowValue," respondents)</span>\n                                ");q["h"](this).transition().duration(100).style("opacity",1),u.tooltipMove(t,a)})).on("mouseleave",this.tooltipOut)}},render_grouped:function(t){var e=this;if(this.dataIsReady){q["h"]("#viz svg").remove();var a={top:20,right:20,bottom:30,left:40},n=960-a.left-a.right,o=400-a.top-a.bottom,r=n+a.left+a.right,s=o+a.top+a.bottom,i=q["h"]("#viz").append("svg").attr("preserveAspectRatio","xMinYMin meet").attr("viewBox","0 0 ".concat(r," ").concat(s)).classed("svg-content",!0).append("g").attr("transform","translate("+a.left+","+a.top+")"),l=[];t.forEach((function(t){return l.push(t.label)}));var c=[];t.forEach((function(t){return t.values.forEach((function(t){return c.push(+t.value)}))}));var u=[];t.forEach((function(t){return t.values.forEach((function(t){return u.push(t.label)}))}));var d=q["e"]().range([0,n]).domain(l).padding([this.getLegendLabels.length>5?.2:.5]),p=q["d"](c)>45?q["d"](c):45,f=q["f"]().range([o,0]).domain([0,p]),h=q["e"]().range([0,d.bandwidth()]).padding([.01]);i.append("g").attr("transform","translate(0,"+o+")").attr("class","xAxis").call(q["a"](d)),i.append("g").attr("class","yAxis").call(q["b"](f)).call((function(t){return t.selectAll("text").text((function(t){return t+"%"}))}));var v=this;t.forEach((function(t){var a=i.append("g").attr("transform","translate(".concat(d(t.label),", 0)"));h.domain(E["e"](t.values.map((function(t){return t.label})))),a.selectAll(".bar").data(t.values).enter().append("rect").attr("class","bar").attr("x",(function(t){return h(t.label)})).attr("y",(function(t){return f(t.value)})).attr("width",h.bandwidth()).attr("height",(function(t){return o-f(t.value)})).attr("fill",(function(t){return e.getLegendColor(t.label)})).attr("stroke","#222").on("mouseenter",e.tooltipIn).on("mousemove",(function(e,a){var n="",o=v.selectedDemographics.btn_label;n="Age"===o?"".concat(a.label," years old respondents"):"Family size"===o?" family of ".concat(a.label," respondents"):"Voted"===o?"Yes"==a.label?" respondents who voted":" respondents who didn't vote":"English native"===o?"Yes"==a.label?" native respondents":" non-native respondents":"".concat(a.label," respondents");var r="\n                                <span> ".concat(o,": ").concat(a.label,'</span>\n                                <span style="font-weight: 600">').concat(a.value,"% (").concat(a.rowValue," ").concat(1===a.rowValue?"person":"people",") of <i>").concat(n,'</i> \n                                 said \n                                <strong>"').concat(t.label,'"</strong> </span>\n\n                                ');q["h"](this).transition().duration(100).style("opacity",1),v.tooltipMove(e,r)})).on("mouseleave",e.tooltipOut)}))}},tooltipIn:function(){q["i"](".bar").transition().duration(100).style("opacity",.7);var t=q["h"]("#tooltip");t.style("display","block")},tooltipMove:function(t,e){var a=q["h"]("#tooltip"),n=a.node().getBoundingClientRect().height,o=a.node().getBoundingClientRect().width;a.style("left",t.pageX-o/2+"px").style("top",t.pageY-(n+20)+"px").html(e)},tooltipOut:function(){q["i"](".bar").transition().duration(300).style("opacity",1);var t=q["h"]("#tooltip");t.style("display","none")},getLegendColor:function(t){var e=q["g"]().domain(this.getLegendLabels).range(["#DAA1CD","#9ADCDA","#AAD927","#FFD440","#DF725A","#3FDFD3","#FFC0CB","#57FF9A","#FBFF27"]);return e(t)}}},L=I,T=(a("8904"),Object(u["a"])(L,z,M,!1,null,null,null)),P=T.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{attrs:{padless:"",dark:""}},[a("v-col",{staticClass:"text-left",staticStyle:{"font-size":"9pt"},attrs:{cols:"6"}},[t._v(" MSDV ")]),a("v-col",{staticClass:"text-right",staticStyle:{"font-size":"9pt"},attrs:{cols:"6"}},[t._v(" © "),a("a",{attrs:{href:"mailto:yoana.kosturska@gmail.com"}},[t._v("Yoana Kosturska")]),t._v(" - "+t._s((new Date).getFullYear())+" ")])],1)},$=[],Y={name:"Footer"},J=Y,W=(a("294d"),a("553a")),K=Object(u["a"])(J,Q,$,!1,null,null,null),N=K.exports;p()(K,{VCol:f["a"],VFooter:W["a"]});var X={name:"App",components:{About:g,Dropdown:C,Buttons:R,Bar:P,Footer:N},data:function(){return{}},mounted:function(){this.$store.dispatch("fetchData")}},H=X,U=(a("cf25"),a("7496")),Z=a("a523"),tt=a("f6c4"),et=Object(u["a"])(H,o,r,!1,null,null,null),at=et.exports;p()(et,{VApp:U["a"],VContainer:Z["a"],VMain:tt["a"]});a("b680"),a("4de4"),a("25f0"),a("ac1f"),a("5319");var nt=a("bc3a"),ot=a.n(nt);n["a"].use(D["a"]);var rt=new D["a"].Store({state:{questions:Object,demographics:Object,answers:Object,selectedQuestion:Object,selectedDemographics:Object,data:Object},getters:{getGroupedData:function(t){var e=t.selectedQuestion,a=t.selectedDemographics;function n(t,e){return(e/t*100).toFixed(1)}function o(e){if("function"!==typeof a&&void 0!==a){var n=t.selectedDemographics.value;if("0"==e)return"No Answer";if("age"===n||"familysize"===n)return+e;var o=t.selectedDemographics.values.filter((function(t){return t.value.toString()===e}));return!!o.length&&o[0].label.replace(/\*/g,"")}}if("function"===typeof e||void 0===e)return!1;if("function"===typeof t.data||void 0===t.data)return!1;if("function"!=typeof a&&void 0!=a){var r=t.selectedDemographics.value,s={},i=E["a"](t.data).groupBy(e.value).mapObject((function(t,e){var n=E["a"](t).groupBy(a.value).mapObject((function(t){return t.length})).value();E["d"](n,(function(t,e){Object.prototype.hasOwnProperty.call(s,e)||(s[e]=0),s[e]+=t}));var i=E["a"](n).map((function(t,e){return{id:+e,label:o(e),rowValue:t}})).filter((function(t){return"0"!=t.id})).sortBy("id").value();return"age"==r&&(i=E["b"](i,(function(t){return t.label<100}))),"familysize"==r&&(i=E["b"](i,(function(t){return t.label<20}))),i})).map((function(e,a){return{id:a,label:t.answers[a],values:e}})).filter((function(t){return"0"!=t.id})).map((function(t){return E["c"](t.values,(function(t){return t["value"]=n(s[t.id],t.rowValue),t})),t})).value();return i}var l=0;return E["a"](t.data).groupBy(e.value).mapObject((function(t,e){return l+=t.length,t.length})).map((function(e,a){return{id:a,label:t.answers[a],value:n(l,e),rowValue:e}})).filter((function(t){return"0"!=t.id})).value()}},mutations:{saveFilters:function(t,e){t.questions=e.questions,t.demographics=e.demographics,t.answers=e.answers},setDropdownValue:function(t,e){t.selectedQuestion=e.selectedQuestion},setButtonValue:function(t,e){t.selectedDemographics=e.selectedBtnValue},saveData:function(t,e){t.data=e.data}},actions:{fetchDictionary:function(t,e){var a=t.commit;t.state;return ot.a.get("data/dictionary.json").then((function(t){a("saveFilters",{questions:t.data.questions,demographics:t.data.demographics,answers:t.data.answers})})).catch((function(t){console.log(t)}))},fetchData:function(t,e){var a=t.commit;t.state;q["c"]("data/data.csv").then((function(t){a("saveData",{data:t})})).catch((function(t){console.log(t)}))}},modules:{}}),st=a("f309");n["a"].use(st["a"]);var it=new st["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:rt,vuetify:it,render:function(t){return t(at)}}).$mount("#app")},6419:function(t,e,a){"use strict";a("28cc")},8904:function(t,e,a){"use strict";a("d0e6")},"9ea8":function(t,e,a){},cf25:function(t,e,a){"use strict";a("fea6")},d0e6:function(t,e,a){},fea6:function(t,e,a){}});
//# sourceMappingURL=app.8bd52978.js.map