(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{10:function(e,a,t){},4:function(e,a,t){e.exports=t(5)},5:function(e,a,t){"use strict";t.r(a);var n=t(1),c=t(0),r=t.n(c),o=t(3),s=t.n(o),i=(t(10),"f6211bc24c258c57f7a7fba887afdd17"),l="https://api.openweathermap.org/data/2.5/";function m(){var e=Object(c.useState)(""),a=Object(n.a)(e,2),t=a[0],o=a[1],s=Object(c.useState)({}),m=Object(n.a)(s,2),u=m[0],d=m[1];return r.a.createElement("div",{className:"undefined"!=typeof u.main&&u.main.temp>16?"app warm":"app"},r.a.createElement("main",null,r.a.createElement("div",{className:"search-box"},r.a.createElement("input",{type:"text",className:"search-bar",placeholder:"Search...",onChange:function(e){return o(e.target.value)},value:t,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(l,"weather?q=").concat(t,"&units=metric&APPID=").concat(i)).then((function(e){return e.json()})).then((function(e){d(e),o(""),console.log(e)}))}})),"undefined"!=typeof u.main?r.a.createElement("div",null,r.a.createElement("div",{className:"location-box"},r.a.createElement("div",{className:"location"},u.name,", ",u.sys.country),r.a.createElement("div",{className:"date"},function(e){var a=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],t=e.getDate(),n=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],c=e.getFullYear();return"".concat(a," ").concat(t," ").concat(n," ").concat(c)}(new Date))),r.a.createElement("div",{className:"weather-box"},r.a.createElement("div",{className:"temp"},Math.round(u.main.temp),"\xb0c"),r.a.createElement("div",{className:"weather"},u.weather[0].main),r.a.createElement("div",{className:"description"},u.weather[0].description))):""))}s.a.render(r.a.createElement(m,null),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.bcbbca84.chunk.js.map