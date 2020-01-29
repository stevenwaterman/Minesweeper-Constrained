(this["webpackJsonpminesweeper-online"]=this["webpackJsonpminesweeper-online"]||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},23:function(e,n,t){e.exports=t(41)},28:function(e,n,t){},34:function(e,n,t){},35:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(9),i=t.n(o),c=(t(28),t(5)),l=(t(34),t(2)),u=t(1),s=(t(35),t(20)),f=t(15),m=t(21),d=function(){function e(n,t){Object(s.a)(this,e),this.cases=void 0,this.initialState=void 0,this.initialState=n,this.cases=t}return Object(f.a)(e,null,[{key:"create",value:function(n){return new e(n,[])}}]),Object(f.a)(e,[{key:"addCase",value:function(){for(var n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];var a=t[0],o=t[1],i=[].concat(Object(u.a)(this.cases),[[a,o]]);return new e(this.initialState,i)}},{key:"build",value:function(){var e=this.cases.reduce((function(e,n){var t=Object(l.a)(n,2),r=t[0],a=t[1];return e[r]=function(e,n){return a(e,n),e},e}),{});return Object(m.a)(this.initialState,e)}}]),e}();function v(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n[0],a=n[1];return[[r-1,a],[r-1,a-1],[r,a-1],[r+1,a-1],[r+1,a],[r+1,a+1],[r,a+1],[r-1,a+1]]}function h(e){return function(n){return n[e]}}function E(e){return function(n){return function(t,r){return n(e(t),r)}}}function p(e,n){return function(t,r){var a=e(t,r);return null==a?null:n(a,r)}}function g(e,n){return Object(c.c)((function(t){return e(t,n)}))}function C(e){return Object(c.c)((function(n){return e(n,{})}))}function M(e,n){for(var t=[],r=0;r<e.length;r+=n)t.push(e.slice(r,r+n));return t}var w={cells:S(14,7,25),lost:!1};function S(e,n,t){var r=e*n,a=r-t;t=Math.min(r-1,t);var o=Array(a-1).fill({stateKnown:!1,isMine:!1}),i=Array(1).fill({stateKnown:!0,isMine:!1}),c=Array(t).fill({stateKnown:!1,isMine:!0});return M(function(e){for(var n,t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1));n=e[t],e[t]=e[r],e[r]=n}return e}([].concat(Object(u.a)(o),Object(u.a)(i),Object(u.a)(c))),n)}var O=d.create(w).addCase("CLEAR_CELL",(function(e,n){var t=_(e,n);if(null===t)return e;t.isMine?e.lost=!0:t.stateKnown=!0})).addCase("FLAG_CELL",(function(e,n){var t=_(e,n);if(null===t)return e;t.isMine?t.stateKnown=!0:e.lost=!0})).addCase("REGENERATE_BOARD",(function(e,n){var t=n.width,r=n.height,a=n.mines;e.cells=S(t,r,a)})).addCase("LOAD_BOARD",(function(e,n){var t=n.mines,r=n.start;e.cells=function(e,n){for(var t=e[0].length,r=[],a=0;a<e.length;a++)for(var o=0;o<t;o++){var i={stateKnown:a===n[0]&&o===n[1],isMine:1===e[a][o]};r.push(i)}return M(r,t)}(t,r)})).build(),b=E(h("board")),T=b((function(e){return e.cells})),N=p(T,(function(e){return e.length})),R=p(T,(function(e){return e[0].length})),x=p(T,(function(e){return e.flatMap((function(e){return e})).filter((function(e){return e.isMine})).length})),y=p(T,(function(e){return e.flatMap((function(e){return e})).filter((function(e){return e.isMine&&!e.stateKnown})).length})),A=p(T,(function(e){return e.every((function(e){return e.every((function(e){return e.stateKnown}))}))}));function _(e,n){var t=Object(l.a)(n.coordinate,2),r=t[0],a=t[1],o=e.cells[r];if(null==o)return null;var i=o[a];return null==i?null:i}function j(e,n){var t=_(e,n);if(null==t)return null;var r=t.stateKnown,a=t.isMine?"X":v.apply(void 0,Object(u.a)(n.coordinate)).map((function(n){return _(e,{coordinate:n})})).filter((function(e){return null!==e&&e.isMine})).length;return{coordinate:n.coordinate,cellState:a,cellStateKnown:r}}var L=b(j),D=p(L,(function(e){return e.cellState})),I=p(L,(function(e){return e.cellStateKnown}));function B(e,n){var t=n.coordinate;return v.apply(void 0,Object(u.a)(t)).map((function(n){var t=Object(l.a)(n,2),r=t[0],a=t[1];return j(e,{coordinate:[r,a]})})).filter((function(e){return null!=e}))}p(b(B),(function(e){return e.filter((function(e){return!e.cellStateKnown}))}));var k=b((function(e,n){var t=Object(l.a)(n.coordinate,2),r=t[0],a=t[1],o=j(e,{coordinate:[r,a]});if(null==o)return null;if(!o.cellStateKnown)return null;if("X"===o.cellState)return null;var i=B(e,{coordinate:[r,a]}),c=i.filter((function(e){return!e.cellStateKnown})).map((function(e){return e.coordinate}));if(0===c.length)return null;var u=i.filter((function(e){return e.cellStateKnown&&"X"===e.cellState})),s=o.cellState-u.length;return{coords:c,minMines:s,maxMines:s}})),G=p(T,(function(e){return e.flatMap((function(e,n){return e.map((function(e,t){return[n,t,e.stateKnown]})).filter((function(e){var n=Object(l.a)(e,3);n[0],n[1];return!n[2]})).map((function(e){var n=Object(l.a)(e,3),t=n[0],r=n[1];n[2];return[t,r]}))}))})),K=b((function(e){for(var n=[],t=0;t<e.cells[0].length;t++)for(var r=0;r<e.cells.length;r++)n.push([r,t]);return n}));function F(e){return e.maxMines<=0}function P(e){return e.minMines>=e.coords.length}function Z(e,n){return null===e||null===n?null:function(e,n){if(null===e&&null===n)return!0;if(null===e||null===n)return!1;var t=e.coords,r=n.coords;return t.every((function(e){return W.apply(void 0,[n].concat(Object(u.a)(e)))}))&&r.every((function(n){return W.apply(void 0,[e].concat(Object(u.a)(n)))}))}(e,n)?e.minMines<=n.minMines&&e.maxMines>=n.maxMines?null:n.minMines<=e.minMines&&n.maxMines>=e.maxMines?null:{coords:e.coords,minMines:Math.max(e.minMines,n.minMines),maxMines:Math.min(e.maxMines,n.maxMines)}:null}function W(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=t[0],o=t[1];return e.coords.some((function(e){var n=Object(l.a)(e,2),t=n[0],r=n[1];return a===t&&o===r}))}function X(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=t[0],o=t[1];return e.filter((function(e){var n=Object(l.a)(e,2),t=n[0],r=n[1];return a!==t||o!==r}))}function J(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=t[0],o=t[1];if(!W(e,a,o))return e;if(1===e.coords.length)return null;var i=X(e.coords,a,o),c=Math.min(i.length,e.minMines),l=Math.min(i.length,e.maxMines);return{coords:i,minMines:c,maxMines:l}}function H(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var a=t[0],o=t[1];if(!W(e,a,o))return e;if(1===e.coords.length)return null;var i=X(e.coords,a,o),c=Math.max(0,e.minMines-1),l=Math.max(0,e.maxMines-1);return{coords:i,minMines:c,maxMines:l}}function $(e,n){n.coords.forEach((function(n){return e({type:"CLEAR_CELL",coordinate:n})}))}function q(e,n){n.coords.forEach((function(n){return e({type:"FLAG_CELL",coordinate:n})}))}function z(e,n){return{gridTemplateColumns:"repeat(".concat(e,", 60px)"),gridTemplateRows:"repeat(".concat(n,", 60px)")}}function Q(e,n){return e.some((function(e){return F(e)&&W.apply(void 0,[e].concat(Object(u.a)(n)))}))?"#0f05":e.some((function(e){return P(e)&&W.apply(void 0,[e].concat(Object(u.a)(n)))}))?"#f005":e.some((function(e){return W.apply(void 0,[e].concat(Object(u.a)(n)))}))?"#0003":"transparent"}function U(e,n){return e.some((function(e){return W.apply(void 0,[e].concat(Object(u.a)(n)))}))?"#f905":"transparent"}function V(e,n){return e.some((function(e){return W.apply(void 0,[e].concat(Object(u.a)(n)))}))?"#09f5":"transparent"}var Y=function(e){var n=e.selectConstraints,t=e.colorSelector,r=C(n),o=C(N),i=C(R),c=C(K);return 0===r.length?null:a.a.createElement("div",{className:"overlayContainer",style:z(o,i)},c.map((function(e){var n=Object(l.a)(e,2),o=n[0],i=n[1];return a.a.createElement("div",{key:"".concat(o,",").concat(i),style:{background:t(r,[o,i])}})})))};t(17);function ee(){return Object(c.b)()}var ne=d.create({showRemaining:!1,cheatMode:!1,autoZero:!0,autoClear:!1,autoFlag:!1,showCoords:!1,showSubtraction:!1,showReduce:!1,showMerge:!1,showBoardConstraint:!1,showOptions:!1,resolveComplex:!1}).addCase("SET_OPTION",(function(e,n){var t=n.option,r=n.value;e[t]=r})).addCase("LOAD_BOARD",(function(e,n){var t=n.options;Object.assign(e,t)})).build(),te=E(h("options")),re=te((function(e){return e.cheatMode})),ae=te((function(e){return e.autoZero})),oe=te((function(e){return e.autoClear})),ie=te((function(e){return e.autoFlag})),ce=te((function(e){return e.showRemaining})),le=te((function(e){return e.showCoords})),ue=te((function(e){return e.showSubtraction})),se=te((function(e){return e.showReduce})),fe=te((function(e){return e.showMerge})),me=te((function(e){return e.showSubtraction||e.showReduce||e.showMerge})),de=te((function(e){return e.showBoardConstraint})),ve=te((function(e){return e.showOptions})),he=te((function(e){return e.resolveComplex})),Ee=function(e){var n=g(D,e),t=g(I,e),r=g(k,e),o=ee(),i="cell";function c(e){e.coords.forEach((function(e){return o({type:"CLEAR_CELL",coordinate:e})}))}function l(e){e.coords.forEach((function(e){return o({type:"FLAG_CELL",coordinate:e})}))}null!==r&&(i+=" clickable"),C(re)&&null!==r&&(F(r)?i+=" clearable":P(r)&&(i+=" flaggable"));var u=C(ae),s=C(oe),f=C(ie);t&&null!==r&&(u&&0===n&&c(r),s&&F(r)&&c(r),f&&P(r)&&l(r));var m="",d=C(ce);if(t){if(d&&"X"!==n)m=(null===r?0:r.maxMines).toString();else m=n.toString();i+=" state".concat(m)}return a.a.createElement("div",{className:i,onPointerEnter:null===r?void 0:function(){return o({type:"SET_TARGET_CONSTRAINTS",constraints:[r]})},onPointerLeave:null===r?void 0:function(){return o({type:"SET_TARGET_CONSTRAINTS",constraints:[]})},onClick:function(e){if(e.preventDefault(),e.stopPropagation(),null!==r)return F(r)?c(r):P(r)?l(r):o({type:"SELECT_CONSTRAINT",constraint:r})}},m)},pe=function(){var e=C(N),n=C(R),t=C(K);return a.a.createElement("div",{className:"boardContainer",style:z(e,n)},t.map((function(e){var n=Object(l.a)(e,2),t=n[0],r=n[1];return a.a.createElement(Ee,{key:"".concat(t,",").concat(r),coordinate:[t,r]})})))},ge=(t(18),function(e){var n=e.index,t="cell";return C(le)&&(t+=" enabled"),a.a.createElement("div",{className:t},n)}),Ce=function(){var e=C(N),n=C(R),t=C(K);return a.a.createElement("div",{className:"coordsContainer",style:z(e,n)},t.map((function(e,n){var t=Object(l.a)(e,2),r=t[0],o=t[1];return a.a.createElement(ge,{key:"".concat(r,",").concat(o),index:n})})))},Me=(t(8),function(e){var n=e.selector,t=e.text,r=e.option,o=C(n),i=ee();return a.a.createElement("div",null,a.a.createElement("label",null,t,":",a.a.createElement("input",{name:"showRemaining",type:"checkbox",checked:o,onChange:function(e){return i({type:"SET_OPTION",option:r,value:e.target.checked})}})))}),we=function(){return a.a.createElement("div",{className:"panel"},a.a.createElement("div",{className:"header"},"Options:"),a.a.createElement(Me,{selector:ce,option:"showRemaining",text:"Show Remaining"}),a.a.createElement(Me,{selector:re,option:"cheatMode",text:"Cheat Mode"}),a.a.createElement(Me,{selector:ae,option:"autoZero",text:"Auto Zero"}),a.a.createElement(Me,{selector:oe,option:"autoClear",text:"Auto Clear"}),a.a.createElement(Me,{selector:ie,option:"autoFlag",text:"Auto Flag"}),a.a.createElement(Me,{selector:he,option:"resolveComplex",text:"Resolve Complex"}),a.a.createElement(Me,{selector:ue,option:"showSubtraction",text:"Show Subtraction"}),a.a.createElement(Me,{selector:se,option:"showReduce",text:"Show Reduce"}),a.a.createElement(Me,{selector:fe,option:"showMerge",text:"Show Merge"}),a.a.createElement(Me,{selector:de,option:"showBoardConstraint",text:"Show Board Constraint"}))},Se=t(22),Oe=function(e){var n=e.name,t=e.save,r=ee();return a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return r(Object(Se.a)({type:"LOAD_BOARD"},t))}},n))},be={mines:[[0,0,0,1,0,0,0],[0,0,0,1,0,1,1],[0,0,0,0,0,0,1],[0,0,0,0,0,0,1],[0,1,0,0,1,0,0],[0,0,0,0,0,0,1],[0,1,1,1,1,0,1],[0,0,0,0,0,0,0],[0,0,0,0,1,0,1],[0,0,0,0,0,1,0],[0,0,0,0,1,1,0],[0,1,0,1,0,0,0],[0,1,0,0,0,0,1],[0,0,0,1,1,0,0]],start:[0,0],options:{showRemaining:!1,cheatMode:!1,autoZero:!0,autoClear:!1,autoFlag:!1,resolveComplex:!0,showSubtraction:!1,showReduce:!1,showMerge:!1,showBoardConstraint:!1}},Te={mines:[[0,0,0,0,0],[0,0,1,0,0],[0,0,1,1,1],[0,0,1,0,0],[0,0,0,0,0]],start:[0,0],options:{showRemaining:!1,cheatMode:!1,autoZero:!0,autoClear:!1,autoFlag:!1,resolveComplex:!0,showSubtraction:!1,showReduce:!1,showMerge:!1,showBoardConstraint:!1}},Ne={mines:[[0,0,1],[0,0,0],[0,0,0],[0,0,1]],start:[0,0],options:{showRemaining:!1,cheatMode:!1,autoZero:!0,autoClear:!1,autoFlag:!1,resolveComplex:!0,showSubtraction:!0,showReduce:!1,showMerge:!1,showBoardConstraint:!1}},Re={mines:[[0,0,0,0],[0,0,1,0],[0,0,0,0],[0,0,0,0],[0,0,1,0],[0,1,0,0]],start:[3,0],options:{showRemaining:!1,cheatMode:!0,autoZero:!0,autoClear:!1,autoFlag:!1,resolveComplex:!0,showSubtraction:!0,showReduce:!1,showMerge:!1,showBoardConstraint:!1}},xe={mines:[[0,1,0,0],[0,0,0,0],[0,0,1,0],[0,0,0,0],[0,0,1,0],[0,0,0,0],[0,1,0,0]],start:[2,0],options:{showRemaining:!1,cheatMode:!0,autoZero:!0,autoClear:!1,autoFlag:!1,resolveComplex:!0,showSubtraction:!0,showReduce:!0,showMerge:!0,showBoardConstraint:!1}},ye={mines:[[0,0,1,1,0,0],[0,0,0,0,0,0],[1,0,0,0,0,1],[1,0,0,0,0,1],[0,0,0,0,0,0],[0,0,1,1,0,0]],start:[3,3],options:{showRemaining:!1,cheatMode:!0,autoZero:!0,autoClear:!1,autoFlag:!1,resolveComplex:!0,showSubtraction:!0,showReduce:!0,showMerge:!0,showBoardConstraint:!1}},Ae={mines:[[0,1,1,0],[0,0,0,0],[0,0,0,1],[0,0,0,1],[0,0,0,0],[0,1,1,0]],start:[2,0],options:{showRemaining:!1,cheatMode:!0,autoZero:!0,autoClear:!1,autoFlag:!1,resolveComplex:!0,showSubtraction:!0,showReduce:!0,showMerge:!0,showBoardConstraint:!0}},_e=function(){return a.a.createElement("div",{className:"panel"},a.a.createElement("div",{className:"header"},"Load:"),a.a.createElement(Oe,{name:"Real",save:be}),a.a.createElement(Oe,{name:"Basic Training",save:Te}),a.a.createElement(Oe,{name:"Subtraction Training 1",save:Ne}),a.a.createElement(Oe,{name:"Subtraction Training 2",save:Re}),a.a.createElement(Oe,{name:"Reduction Training 1",save:xe}),a.a.createElement(Oe,{name:"Reduction Training 2",save:ye}),a.a.createElement(Oe,{name:"Whole Board Training",save:Ae}))},je=function(){var e=ee(),n=C(R),t=C(N),r=C(x);return a.a.createElement("div",{className:"panel"},a.a.createElement("div",{className:"header"},"Generate:"),a.a.createElement("div",null,a.a.createElement("label",null,"Width:",a.a.createElement("input",{name:"width",type:"text",value:t,onChange:function(t){var a=Number.parseInt(t.target.value);null!=a&&e({type:"REGENERATE_BOARD",width:a,height:n,mines:r})}}))),a.a.createElement("div",null,a.a.createElement("label",null,"Height:",a.a.createElement("input",{name:"height",type:"text",value:n,onChange:function(n){var a=Number.parseInt(n.target.value);null!=a&&e({type:"REGENERATE_BOARD",width:t,height:a,mines:r})}}))),a.a.createElement("div",null,a.a.createElement("label",null,"Mines:",a.a.createElement("input",{name:"mines",type:"text",value:r,onChange:function(r){var a=Number.parseInt(r.target.value);null!=a&&e({type:"REGENERATE_BOARD",width:t,height:n,mines:a})}}))),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return e({type:"REGENERATE_BOARD",width:t,height:n,mines:r})}},"Regenerate")))},Le=function(){var e=ee(),n=C(ve);return a.a.createElement("div",{className:"optionsWrapper",onMouseEnter:function(){return e({type:"SET_OPTION",option:"showOptions",value:!0})},onMouseLeave:function(){return e({type:"SET_OPTION",option:"showOptions",value:!1})}},a.a.createElement("div",{hidden:!n,className:"allOptions"},a.a.createElement(we,null),a.a.createElement(_e,null),a.a.createElement(je,null)))},De=function(){var e=ee();return C(A)?a.a.createElement("h1",null,"Success!"):a.a.createElement("h1",{onMouseEnter:function(){e({type:"SET_OPTION",option:"showCoords",value:!0})},onMouseLeave:function(){e({type:"SET_OPTION",option:"showCoords",value:!1})}},"Minesweeper")};t(7);function Ie(e){return 0===e.length?a.a.createElement("div",{className:"constraintEmpty"},"Nothing selected"):function(e){var n=e.coords,t=e.minMines,r=e.maxMines,o=n.length,i="Cell".concat(o>1?"s":""),c=t===r,l="".concat(t," ").concat(c?"":"to ".concat(r)),u=1===r?"Mine":"Mines";return a.a.createElement("div",{className:"constraintInfo"},a.a.createElement("div",null,"".concat(o," ").concat(i)),a.a.createElement("div",null,"".concat(l," ").concat(u)))}(e[0])}var Be=function(e){var n=e.constraintName,t=e.constraintsSelector,r=e.colorSelector,o=C(t).filter((function(e){return null!==e}));return a.a.createElement("div",{className:"constraint",style:{background:r(o)}},a.a.createElement("div",{className:"constraintName"},n),Ie(o))},ke=E(h("constraints")),Ge=(ke((function(e){return e.first})),ke((function(e){return null===e.first?[]:[e.first]}))),Ke=(ke((function(e){return e.second})),ke((function(e){return null===e.second?[]:[e.second]}))),Fe=ke((function(e){return e.targets})),Pe=ke((function(e){return null!==e.first||null!==e.second})),Ze=ke((function(e){return function(e,n){if(null===e||null===n)return null;var t=e.coords.length>n.coords.length?[e,n]:[n,e],r=Object(l.a)(t,2),a=r[0],o=r[1];if(a.coords.length<=o.coords.length)return null;if(o.coords.some((function(e){return!W.apply(void 0,[a].concat(Object(u.a)(e)))})))return null;var i=a.coords.filter((function(e){var n=Object(l.a)(e,2),t=n[0],r=n[1];return!W(o,t,r)})),c=a.minMines-o.maxMines,s=a.maxMines-o.minMines,f=Math.min(Math.max(c,0),i.length),m=Math.min(Math.max(s,0),i.length);return 0===f&&m===i.length?null:{coords:i,minMines:f,maxMines:m}}(e.first,e.second)})),We=ke((function(e){return Z(e.first,e.second)})),Xe=ke((function(e){return function(e,n){if(null===e||null!==n)return[];var t=e.coords.length-1,r=Math.min(Math.max(e.minMines-1,0),t),a=Math.min(e.maxMines,t);return 0===r&&a===t?[]:e.coords.map((function(n){var t=Object(l.a)(n,2),r=t[0],a=t[1];return e.coords.filter((function(e){var n=Object(l.a)(e,2),t=n[0],o=n[1];return r!==t||a!==o}))})).map((function(e){return{coords:e,minMines:r,maxMines:a}}))}(e.first,e.second)})),Je=ke((function(e){return e.complexConstraints}));function He(e){return e.some((function(e){return F(e)}))?"#0f05":e.some((function(e){return P(e)}))?"#f005":"#ddd"}function $e(e){return 0===e.length?"#ddd":"#fc9"}function qe(e){return 0===e.length?"#ddd":"#9cf"}var ze=function(){return a.a.createElement("div",{className:"selectedConstraints"},a.a.createElement(Be,{constraintName:"Constraint 1",constraintsSelector:Ge,colorSelector:$e}),a.a.createElement(Be,{constraintName:"Constraint 2",constraintsSelector:Ke,colorSelector:qe}),a.a.createElement(Be,{constraintName:"Targets",constraintsSelector:Fe,colorSelector:He}))},Qe=function(e){var n=e.text,t=e.constraints,r=ee(),o=C(he),i="constraintButton";return 0!==t.length&&(i+=" enabled"),a.a.createElement("button",{onClick:function(e){if(e.preventDefault(),e.stopPropagation(),0!==t.length)if(r({type:"CLEAR_SELECTED_CONSTRAINTS"}),o){t.filter((function(e){return F(e)})).forEach((function(e){return $(r,e)})),t.filter((function(e){return P(e)})).forEach((function(e){return q(r,e)}));var n=t.filter((function(e){return!F(e)&&!P(e)}));r({type:"ADD_CONSTRAINTS",constraints:n})}else r({type:"ADD_CONSTRAINTS",constraints:t})},onMouseEnter:function(){0!==t.length&&r({type:"SET_TARGET_CONSTRAINTS",constraints:t})},onMouseLeave:function(){0!==t.length&&r({type:"SET_TARGET_CONSTRAINTS",constraints:[]})},className:i},n)},Ue=function(){var e=C(Pe),n=ee(),t=C(Ze),r=C(Xe),o=C(We),i=C(ue),c=C(se),l=C(fe),u=null===t?[]:[t],s=r.filter((function(e){return null!==e})),f=null===o?[]:[o];return a.a.createElement("div",{className:"constraintActions"},a.a.createElement("button",{onClick:function(){e&&n({type:"CLEAR_SELECTED_CONSTRAINTS"})},className:"constraintButton".concat(e?" enabled":"")},"Deselect"),i?a.a.createElement(Qe,{constraints:u,text:"Subtract"}):null,c?a.a.createElement(Qe,{constraints:s,text:"Reduce"}):null,l?a.a.createElement(Qe,{constraints:f,text:"Merge"}):null)},Ve=function(e){var n=e.constraint,t=e.index,r=void 0===t?null:t,o=n.coords,i=n.minMines,c=n.maxMines,l=o.length,u=ee(),s=F(n),f=P(n);C(oe)&&s&&$(u,n),C(ie)&&f&&q(u,n);var m="constraint";return C(re)&&(s?m+=" clearable":f&&(m+=" flaggable")),a.a.createElement("div",{onClick:function(){if(null!==n)return s?$(u,n):f?q(u,n):u({type:"SELECT_CONSTRAINT",constraint:n})},onContextMenu:function(e){e.preventDefault(),e.stopPropagation(),null!==r&&u({type:"DELETE_CONSTRAINT",index:r})},onMouseEnter:function(){return u({type:"SET_TARGET_CONSTRAINTS",constraints:[n]})},onMouseLeave:function(){return u({type:"SET_TARGET_CONSTRAINTS",constraints:[]})},className:m},a.a.createElement("div",null,"Cells: ",l),a.a.createElement("div",null,"Mines: ",i," - ",c))},Ye=function(){var e=C(Je),n=C(G),t=C(y),r={coords:n,minMines:t,maxMines:t},o=C(de);return C(me)?a.a.createElement("div",{className:"constraintList"},a.a.createElement("div",{className:"listHeader"},"Complex Constraints:"),a.a.createElement("div",{className:"listBody"},o&&r.maxMines>0?a.a.createElement(Ve,{constraint:r}):null,e.map((function(e,n){return a.a.createElement(Ve,{key:JSON.stringify(e),constraint:e,index:n})})))):null},en=t(3),nn={first:null,second:null,targets:[],complexConstraints:[]};function tn(e){e.first=null,e.second=null,e.targets=[]}var rn=d.create(nn).addCase("SELECT_CONSTRAINT",(function(e,n){var t=n.constraint;e.first!==t&&e.second!==t&&(e.targets=[],null===e.first?e.first=t:e.second=t)})).addCase("SET_TARGET_CONSTRAINTS",(function(e,n){var t=n.constraints;e.targets=t.filter((function(e){return null!==e}))})).addCase("CLEAR_SELECTED_CONSTRAINTS",(function(e,n){tn(e)})).addCase("CLEAR_CELL",(function(e,n){var t=n.coordinate;tn(e),e.complexConstraints=e.complexConstraints.map((function(e){return J.apply(void 0,[e].concat(Object(u.a)(t)))})).filter((function(e){return null!==e}))})).addCase("FLAG_CELL",(function(e,n){var t=n.coordinate;tn(e),e.complexConstraints=e.complexConstraints.map((function(e){return H.apply(void 0,[e].concat(Object(u.a)(t)))})).filter((function(e){return null!==e}))})).addCase("REGENERATE_BOARD",(function(e,n){Object.assign(e,nn)})).addCase("LOAD_BOARD",(function(e,n){Object.assign(e,nn)})).addCase("DELETE_CONSTRAINT",(function(e,n){var t=n.index;e.complexConstraints.splice(t,1),tn(e)})).addCase("ADD_CONSTRAINTS",(function(e,n){var t,r=n.constraints;(t=e.complexConstraints).push.apply(t,Object(u.a)(r))})).build(),an=Object(en.combineReducers)({board:O,constraints:rn,options:ne}),on=t(11),cn=Object(en.createStore)(an,Object(on.devToolsEnhancer)({})),ln=function(){return a.a.createElement(c.a,{store:cn},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"leftColumn"},a.a.createElement(De,null),a.a.createElement("div",{className:"board"},a.a.createElement(Ce,null),a.a.createElement(Y,{selectConstraints:Fe,colorSelector:Q}),a.a.createElement(Y,{selectConstraints:Ge,colorSelector:U}),a.a.createElement(Y,{selectConstraints:Ke,colorSelector:V}),a.a.createElement(pe,null)),a.a.createElement(ze,null),a.a.createElement(Ue,null),a.a.createElement(Ye,null)),a.a.createElement("div",{className:"rightColumn"},a.a.createElement(Le,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(ln,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},7:function(e,n,t){},8:function(e,n,t){}},[[23,1,2]]]);
//# sourceMappingURL=main.f46662ed.chunk.js.map