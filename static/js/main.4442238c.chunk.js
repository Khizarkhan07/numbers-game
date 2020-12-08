(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{150:function(e,t,n){"use strict";n.r(t);var r=n(5),a=n(0),s=n.n(a),c=n(19),o=n.n(c),u=(n(107),n(58)),l=n(23),d=n(64),i=n(65),g=function(e){for(var t=[],n=1;n<=e;n++)t.push(n);return t},b=function(e){localStorage.setItem("level",JSON.stringify(e))},f={gameState:[],numbers:[1,2,3,4,5],status:"PENDING",level:5,previousLevel:4},m=Object(a.createContext)({state:f,dispatch:function(){return null}}),j=function(e,t){switch(t.type){case"START":var n=function(e){var t,n=e.numbers;return[n[t=Math.floor(Math.random()*n.length)],t]}(e);return Object(l.a)(Object(l.a)({},e),{},{gameState:[].concat(Object(i.a)(e.gameState),[n[0]]),numbers:[].concat(Object(i.a)(e.numbers.slice(0,n[1])),Object(i.a)(e.numbers.slice(n[1]+1))),status:"PENDING"});case"RESET":return Object(l.a)(Object(l.a)({},e),{},{gameState:[],numbers:g(e.level)});case"CHECK":var r=function(e,t){var n=e.gameState.map(String),r=!1;return JSON.stringify(n)==JSON.stringify(t)&&(r=!0),r?"WIN":"LOST"}(e,t.payload.guess.split(","));return"WIN"===r?Object(l.a)(Object(l.a)({},e),{},{status:r,previousLevel:e.previousLevel+1}):Object(l.a)(Object(l.a)({},e),{},{status:r});case"NEXT_LEVEL":var a=Object(l.a)(Object(l.a)({},e),{},{level:e.level+1,numbers:g(e.level+1)});return b(a.level),a;case"SET_LEVEL":var s=t.payload.level;return Object(l.a)(Object(l.a)({},e),{},{level:s,numbers:g(s)});case"NEW_GAME":return b(4),{gameState:[],numbers:[1,2,3,4,5],status:"PENDING",level:5,previousLevel:4};default:return e}},k=function(e){var t=e.children,n=Object(a.useReducer)(j,f),s=Object(d.a)(n,2),c=s[0],o=s[1];return Object(r.jsx)(m.Provider,{value:{state:c,dispatch:o},children:t})},v=n(56),h=n(57);function O(){var e=Object(v.a)(["\n  overflow: hidden;\n  position: absolute;\n  top: 0; right: 0;\n  width: 50%; height: 50%;\n  transform-origin: 0% 100%;\n  \n  &:nth-child(1) {\n    -webkit-transform: rotate(0deg) skewY(-60deg);\n    -ms-transform: rotate(0deg) skewY(-60deg);\n    transform: rotate(0deg) skewY(-60deg);\n    background: ",";\n  }\n  \n    &:nth-child(2) {\n      -webkit-transform: rotate(30deg) skewY(-60deg);\n      -ms-transform: rotate(30deg) skewY(-60deg);\n      transform: rotate(30deg) skewY(-60deg);\n      background: ",";\n    }\n    &:nth-child(3) {\n      -webkit-transform: rotate(60deg) skewY(-60deg);\n      -ms-transform: rotate(60deg) skewY(-60deg);\n      transform: rotate(60deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(4) {\n      -webkit-transform: rotate(90deg) skewY(-60deg);\n      -ms-transform: rotate(90deg) skewY(-60deg);\n      transform: rotate(90deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(5) {\n      -webkit-transform: rotate(120deg) skewY(-60deg);\n      -ms-transform: rotate(120deg) skewY(-60deg);\n      transform: rotate(120deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(6) {\n      -webkit-transform: rotate(150deg) skewY(-60deg);\n      -ms-transform: rotate(150deg) skewY(-60deg);\n      transform: rotate(150deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(7) {\n      -webkit-transform: rotate(180deg) skewY(-60deg);\n      -ms-transform: rotate(180deg) skewY(-60deg);\n      transform: rotate(180deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(8) {\n      -webkit-transform: rotate(210deg) skewY(-60deg);\n      -ms-transform: rotate(210deg) skewY(-60deg);\n      transform: rotate(210deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(9) {\n      -webkit-transform: rotate(240deg) skewY(-60deg);\n      -ms-transform: rotate(240deg) skewY(-60deg);\n      transform: rotate(240deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(10) {\n      -webkit-transform: rotate(270deg) skewY(-60deg);\n      -ms-transform: rotate(270deg) skewY(-60deg);\n      transform: rotate(270deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(11) {\n      -webkit-transform: rotate(300deg) skewY(-60deg);\n      -ms-transform: rotate(300deg) skewY(-60deg);\n      transform: rotate(300deg) skewY(-60deg);\n      background: ",";\n    \n    }\n    &:nth-child(12) {\n      -webkit-transform: rotate(330deg) skewY(-60deg);\n      -ms-transform: rotate(330deg) skewY(-60deg);\n      transform: rotate(330deg) skewY(-60deg);\n      background: ",";\n    \n    }\n  \n  .text {\n  position: absolute;\n  left: -100%;\n  width: 200%; height: 200%;\n  text-align: center;\n  -webkit-transform: skewY(60deg) rotate(15deg);\n  -ms-transform: skewY(60deg) rotate(15deg);\n  transform: skewY(60deg) rotate(15deg);\n  padding-top: 20px;\n  \n  \n}\n"]);return O=function(){return e},e}function w(){var e=Object(v.a)(["\n    margin-left: 25%;\n    margin-right: 25%;\n    margin-bottom: 10px;\n    \n"]);return w=function(){return e},e}function p(){var e=Object(v.a)(["\n    margin-left: 43%;\n"]);return p=function(){return e},e}function x(){var e=Object(v.a)(["\n  position: relative;\n  border: 1px solid black;\n  padding: 0;\n  margin: 1em auto;\n  width: 20em;\n  height: 20em;\n  border-radius: 50%;\n  list-style: none;\n  overflow: hidden;\n  \n"]);return x=function(){return e},e}var Y=h.a.ul(x()),E=h.a.div(p()),S=h.a.div(w()),N=h.a.li(O(),(function(e){return 1==e.value?"#ff6666":""}),(function(e){return 2==e.value?"#ff8c66":""}),(function(e){return 3==e.value?"#8cff66":""}),(function(e){return 4==e.value?"#66ffd9":""}),(function(e){return 5==e.value?"#6666ff":""}),(function(e){return 6==e.value?"#d966ff":""}),(function(e){return 7==e.value?"#ff6666":""}),(function(e){return 8==e.value?"#80ffd4":""}),(function(e){return 9==e.value?"#ff6600":""}),(function(e){return 10==e.value?"#e68a00":""}),(function(e){return 11==e.value?"#e68a00":""}),(function(e){return 12==e.value?"#5c8a8a":""})),y=function(e){var t=e.icon,n=e.text,a=e.color,s=e.disabled,c=e.callback,o={background:a,width:"25%"};return Object(r.jsxs)("button",{disabled:s,style:o,onClick:c,className:"btn btn-light btn-outline mb-1 mt-1",children:[t&&Object(r.jsx)("i",{className:t+" mr-1"}),n&&Object(r.jsx)("span",{children:n})]})},T=n(153),L=function(e){var t=e.status;return Object(r.jsx)(T.a,{title:"Result",subTitle:"YOU "+t})},C=function(e){var t=e.value;return Object(r.jsx)("div",{className:"text",children:t})},M=n(154),I=function(){var e=Object(a.useContext)(m),t=e.state,n=e.dispatch,s=Object(a.useState)({guess:""}),c=Object(d.a)(s,2),o=c[0],i=c[1];console.log(t.level),Object(a.useEffect)((function(){localStorage.getItem("level")&&n({type:"SET_LEVEL",payload:{level:localStorage.getItem("level")}})}),[]);for(var g=Object(a.useCallback)((function(e){var t=e.target.value;i(Object(l.a)(Object(l.a)({},o),{},Object(u.a)({},e.target.name,t)))}),[o]),b=Object(a.useCallback)((function(){n({type:"CHECK",payload:{guess:o.guess}}),n({type:"RESET"}),i({guess:""})}),[o]),f=Object(a.useCallback)((function(){n({type:"NEXT_LEVEL"})}),[t.level]),j=Object(a.useCallback)((function(){n({type:"RESET"})}),[!0]),k=Object(a.useCallback)((function(){for(var e=1;e<=t.level;e++)setTimeout((function(){n({type:"START"})}),1e3*e*.95)}),[t.level]),v=Object(a.useCallback)((function(){n({type:"NEW_GAME"})}),[]),h=Object(a.useMemo)((function(){return Object(r.jsx)(E,{children:t.gameState.length===t.level?Object(r.jsx)(y,{callback:j,text:"RESET",color:"#fc5603"}):Object(r.jsx)(y,{callback:k,text:"START",color:"#5acba1"})})}),[t.gameState,t.level]),O=Object(a.useMemo)((function(){return Object(r.jsxs)(S,{children:[Object(r.jsx)("label",{htmlFor:"guess",children:Object(r.jsx)("h6",{children:"Guess"})}),Object(r.jsx)(M.a,{placeholder:"Enter your guess numbers seperated by commas",name:"guess",onChange:g})]})}),[o.guess]),w=Object(a.useMemo)((function(){return Object(r.jsx)(E,{children:Object(r.jsx)(y,{callback:b,text:"CHECK",color:"#5acba1"})})}),[o]),p=Object(a.useMemo)((function(){return Object(r.jsx)(E,{children:t.previousLevel===t.level&&t.level<13&&Object(r.jsx)(y,{callback:f,text:"NEXT LEVEL",color:"#fcba03"})})}),[t.previousLevel,t.level]),x=(Object(a.useMemo)((function(){return Object(r.jsx)(E,{children:Object(r.jsx)(y,{text:"NEW GAME",color:"#fcba03",callback:v})})}),[!0]),[]),T=1;T<=t.level;T++)x.push(Object(r.jsx)(N,{value:t.gameState[t.gameState.length-1],children:Object(r.jsx)(C,{value:T})},T));return Object(r.jsxs)("div",{className:"container",children:["PENDING"!==t.status?Object(r.jsx)(L,{status:t.status}):"",Object(r.jsx)(Y,{children:x}),h,O,w,p]})},R=function(){return Object(r.jsx)(I,{})};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(k,{children:Object(r.jsx)(R,{})})}),document.getElementById("root"))}},[[150,1,2]]]);
//# sourceMappingURL=main.4442238c.chunk.js.map