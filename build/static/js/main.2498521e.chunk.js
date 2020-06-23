(this["webpackJsonpreact-dex"]=this["webpackJsonpreact-dex"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},,,,,,function(e,t,n){e.exports=n(30)},,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(10),u=n.n(c),s=(n(20),n(1)),i=n.n(s),l=n(3),o=n(6),m=n(11),f=n(12),p=n(13),d=n(14),h=(n(22),n(23),n(24),function(e){return r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:e.url,alt:e.name}))}),v=(n(9),function(e){return r.a.createElement("span",{className:"type-tag ".concat(e.typeName)},e.typeName)}),b={hp:"hp",attack:"att",defense:"def","special-attack":"sAtt","special-defense":"sDef",speed:"spe"},E=function(e){var t,n,a=e.id,r=e.name,c=e.types,u=e.stats,s=e.weight,i=e.height,l=e.sprites;return{id:a,name:r,types:(n=c,n.map((function(e){return e.type.name}))),stats:(t=u,t.map((function(e){return{name:b[e.stat.name],value:e.base_stat}}))),weight:s,height:i,sprite:l.front_default}},g=(n(25),function(e){return r.a.createElement("li",{className:"card"},r.a.createElement("h3",null,r.a.createElement("span",{className:"number"},"#",(t=e.number)<10?"00".concat(t):t<100?"0".concat(t):t),r.a.createElement("span",{className:"name"},e.name.replace(/^([a-z])/,(function(e){return e.toUpperCase()})))),r.a.createElement("p",{className:"types"},e.types.map((function(e,t){return r.a.createElement(v,{typeName:e,key:t},e)}))),r.a.createElement(h,{url:e.sprite,name:e.name}));var t}),y=(n(26),function(){return r.a.createElement("div",{className:"loader"})}),N=function(e){return e.isReady?0!==e.list.length?r.a.createElement("ul",{className:"card-list"},e.list.map((function(e,t){return r.a.createElement(g,{key:t,number:e.id,name:e.name,sprite:e.sprite,stats:e.stats,weight:e.weight,height:e.height,types:e.types})}))):r.a.createElement("p",{className:"no-match-message"},"Not even a nibble..."):r.a.createElement(y,null)},j=n(2),k=n(7),O=(n(27),n(28),function(e){var t=Object(a.useState)(0),n=Object(j.a)(t,2),c=n[0],u=n[1];return r.a.createElement("input",{className:"form-slider",type:"range",min:"0",max:e.max,value:c,onChange:function(t){u(t.currentTarget.value),e.handleChange(t)}})}),x=function(e){var t=Object(a.useRef)(null);return r.a.createElement("span",{ref:t,className:"type-tag ".concat(e.typeName," disabled"),onClick:function(){e.onClick(e.typeName,t.current)}},e.typeName)},w=["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy"],L=function(e){var t=function(e,t){var n=Object(k.a)({},v);n[t]=e.currentTarget.value,E(n)},n=function(e,t){var n=Object(o.a)(N);n.includes(e)?(n[0]===e?(n[0]=n[1],n[1]=""):n[1]===e&&(n[1]=""),t.classList.add("disabled")):function(){if(n[0]){var a=n[1];n[1]=e,""!==a&&t.parentNode.childNodes.forEach((function(e){e.classList.contains(a)&&e.classList.add("disabled")}))}else n[0]=e;t.classList.remove("disabled")}(),L(n),E(Object(k.a)({},v,{types:n}))},c=Object(a.useState)(!1),u=Object(j.a)(c,2),s=u[0],i=u[1],l=Object(a.useState)(1),m=Object(j.a)(l,2),f=m[0],p=m[1],d=Object(a.useState)({}),h=Object(j.a)(d,2),v=h[0],E=h[1];Object(a.useEffect)((function(){e.onSubmit(v)}),[v]);var g=Object(a.useState)(["",""]),y=Object(j.a)(g,2),N=y[0],L=y[1];return r.a.createElement("div",{className:"filter-box ".concat(s?"open":"")},r.a.createElement("form",null,r.a.createElement("fieldset",null,r.a.createElement("legend",null,"General filters"),r.a.createElement("input",{type:"text",className:"input-name",placeholder:"Name...",onChange:function(e){return t(e,"name")}}),r.a.createElement("select",{className:"select-gen",onChange:function(e){p(e.currentTarget.value),t(e,"gen")},value:f},r.a.createElement("option",{value:"1"},"Gen 1"),r.a.createElement("option",{value:"2"},"Gen 2"),r.a.createElement("option",{value:"3"},"Gen 3"),r.a.createElement("option",{value:"4"},"Gen 4"),r.a.createElement("option",{value:"5"},"Gen 5"),r.a.createElement("option",{value:"6"},"Gen 6"),r.a.createElement("option",{value:"7"},"Gen 7"),r.a.createElement("option",{value:"0"},"Gotta catch 'em all!"))),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"By type"),r.a.createElement("div",{className:"types-container"},w.map((function(e,t){return r.a.createElement(x,{key:t,onClick:n,typeName:e,isButton:!0})})))),r.a.createElement("fieldset",null,r.a.createElement("legend",null,"By stat min. value"),Object.keys(b).map((function(e,n){return r.a.createElement("label",{key:n,className:"stat-input"},r.a.createElement(O,{max:255,handleChange:function(n){return t(n,b[e])}}),r.a.createElement("span",null,e))})))),r.a.createElement("button",{className:"toggle-btn",onClick:function(){return i(!s)}},"filters"))},S=(n(29),function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,"React-dex"),r.a.createElement("h2",null,"React + PokeAPI"))}),C=function(){var e=Object(l.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return e.abrupt("return",e.sent.json());case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C("https://pokeapi.co/api/v2/pokemon?limit=807");case 2:return e.abrupt("return",e.sent.results);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(e){return function(e,t){var n=t||function(e){return e};return e.reduce((function(e,t){return e+n(t)}),0)}(e,(function(e){return e.value}))},A=function(e,t){return t.reduce((function(t,n){return t&&(e.types.includes(n)||!n)}),!0)},R=function(e){Object(d.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={contentIsLoaded:!1,defaultList:[],currentList:[]},e.handleFilters=function(t){var n=Object(o.a)(e.state.defaultList),a=[0,151,251,386,494,649,721,807],r={name:function(e){return e.name.includes(t.name)},hp:function(e){return e.stats[0].value>=t.hp},att:function(e){return e.stats[1].value>=t.att},def:function(e){return e.stats[2].value>=t.def},sAtt:function(e){return e.stats[3].value>=t.sAtt},sDef:function(e){return e.stats[4].value>=t.sDef},spe:function(e){return e.stats[5].value>=t.spe},statSum:function(e){return I(e.stats)>=t.statSum},types:function(e){return A(e,t.types)},gen:function(e){var n=Number.parseInt(t.gen),r=Number.parseInt(e.id);return 0===n||r>a[n-1]&&r<=a[n]}},c=Object.keys(t).map((function(e){return r[e]})),u=n.filter((function(e){return c.reduce((function(t,n){return t&&n(e)}),c[0])}));e.setState({currentList:u})},e}return Object(f.a)(n,[{key:"componentDidMount",value:function(){this.setList()}},{key:"setList",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t.url);case 2:return n=e.sent,e.abrupt("return",E(n));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),e.next=3,G();case 3:return n=e.sent,e.next=6,Promise.all(n.map(t));case 6:a=e.sent,this.setState({defaultList:a,currentList:a.filter((function(e){return e.id<=151})),contentIsLoaded:!0});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(S,null),r.a.createElement(L,{onSubmit:this.handleFilters}),r.a.createElement(N,{list:this.state.currentList,isReady:this.state.contentIsLoaded}),r.a.createElement("div",{className:"github"},r.a.createElement("a",{href:"https://github.com/gregoryalbouy/react-dex",title:"Github"},"github"),r.a.createElement("img",{src:"./assets/github.svg",alt:"Github"})))}}]),n}(a.Component);u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root"))}],[[15,1,2]]]);
//# sourceMappingURL=main.2498521e.chunk.js.map