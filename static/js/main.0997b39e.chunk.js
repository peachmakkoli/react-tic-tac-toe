(this["webpackJsonpreact-tic-tac-toe"]=this["webpackJsonpreact-tic-tac-toe"]||[]).push([[0],[,,,,function(e,a,t){e.exports=t(13)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),u=t(3),r=t.n(u),l=(t(9),t(1)),o=(t(10),t(11),t(12),function(e){return c.a.createElement("button",{className:"square",key:e.id,onClick:function(){""===e.value&&e.onClickCallback(e.id)}},e.value)}),i=function(e){var a=function(e,a){return e.flat().map((function(e){return c.a.createElement(o,{id:e.id,value:e.value,onClickCallback:a})}))}(e.squares,e.onClickCallback);return console.log(a),c.a.createElement("div",{className:"grid"},a)},s=function(){for(var e=[],a=0,t=0;t<3;t++){e.push([]);for(var n=0;n<3;n++)e[t].push({id:a,value:""}),a++}return e},v=function(){var e=Object(n.useState)(s()),a=Object(l.a)(e,2),t=a[0],u=a[1],r=Object(n.useState)("X"),o=Object(l.a)(r,2),v=o[0],f=o[1],m=Object(n.useState)("..."),d=Object(l.a)(m,2),h=d[0],k=d[1],b=function(){var e=["X","X","X"],a=["O","O","O"],n=function(e){return e.map((function(e){return e.value}))},c=function(e){switch(e){case 1:return[t[0][0].value,t[1][0].value,t[2][0].value];case 2:return[t[0][1].value,t[1][1].value,t[2][1].value];case 3:return[t[0][2].value,t[1][2].value,t[2][2].value]}},u=function(e){return 1===e?[t[0][0].value,t[1][1].value,t[2][2].value]:[t[2][0].value,t[1][1].value,t[0][2].value]},r=function(e,a){return JSON.stringify(e)===JSON.stringify(a)};r(n(t[0]),e)||r(n(t[1]),e)||r(n(t[2]),e)||r(c(1),e)||r(c(2),e)||r(c(3),e)||r(u(1),e)||r(u(2),e)?k("X"):r(n(t[0]),a)||r(n(t[1]),a)||r(n(t[2]),a)||r(c(1),a)||r(c(2),a)||r(c(3),a)||r(u(1),a)||r(u(2),a)?k("O"):t.flat().every((function(e){return""!==e.value}))&&k("TIE")};return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("h1",null,"React Tic Tac Toe"),c.a.createElement("h2",null,"The winner is ",h),c.a.createElement("button",{className:"reset",onClick:function(){u(s()),f("X"),k("...")}},"Reset Game")),c.a.createElement("main",null,c.a.createElement(i,{squares:t,onClickCallback:function(e){"..."===h&&(!function(e){e>=0&&e<=2?t[0][e].value=v:e>=3&&e<=5?t[1][e-3].value=v:e>=6&&e<=8&&(t[2][e-6].value=v)}(e),u(t),b(),f("X"===v?"O":"X"))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.0997b39e.chunk.js.map