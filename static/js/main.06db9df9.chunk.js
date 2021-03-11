(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r),o=n(9),l=n.n(o),c=(n(17),n(4)),s=(n(18),n(3)),i=n(10),u=n(11),d=n(5),m="INITIATE_BOARD",x="UNCOVER_CELL",b="DOUBLE_CLICK_CELL",f="RIGHT_CLICK_CELL",p="CHANGE_LEVEL",j="GAME_OVER",g="INITIATE_DUMMY_BOARD",O=n(1),v=function(e){var t=Object(r.useContext)(F),n=Object(r.useContext)(B),a=n.gameClear,o=n.gameOver,l=n.level,c=n.clickNumber,s=n.minesLeft,p=e.cellInfo,g=p.hasMine,v=p.isUncovered,h=p.numMinesAround,y=p.row,E=p.column,w=p.flagged;Object(r.useEffect)((function(){v&&g&&t({type:j})}),[v,t,g]);return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"cell text-quinary ".concat(v?"bg-secondary uncovered":"cursor-pointer hover:bg-quinary hover:text-primary"," inline-flex justify-center items-center"),onClick:function(){w||o||a||(0===c&&t({type:m,payload:{level:l,row:y,column:E}}),t({type:x,payload:{row:y,column:E}}))},onDoubleClick:function(){o||t({type:b,payload:{row:y,column:E}})},onContextMenu:function(e){return function(e){if(e.preventDefault(),e.stopPropagation(),!(o||v||a||!w&&s<=0))return t({type:f,payload:{row:y,column:E}}),!1}(e)},children:[g&&o&&!v?Object(O.jsx)("span",{className:"bomb text-xl text-quinary",children:Object(O.jsx)(i.a,{})}):null,g&&v?Object(O.jsx)("span",{className:"boom text-red-400 text-2xl",children:Object(O.jsx)(d.b,{})}):null,w&&!o?Object(O.jsx)("span",{className:"flag text-2xl",children:Object(O.jsx)(u.a,{})}):"",h&&!g&&v?Object(O.jsx)("span",{className:"number-".concat(h," text-lg font-semibold"),children:h}):""]}),Object(O.jsx)("style",{jsx:!0,children:"\n        .cell {\n          transition: all:\n          transition-duration: 200ms;\n          border-top: 1px solid #D9B08C;\n          border-left: 1px solid #D9B08C;\n          border-right: 1px solid #D9B08C;\n          border-bottom: 1px solid #D9B08C;\n        }\n        .cell.uncovered {\n          transition: all;\n          transition-duration: 550ms;\n          border: 1px solid #D1E8E2;\n        }\n\n      "})]})},h=Object.freeze({EASY:{name:"EASY",rows:8,columns:8,num_mine:10},INTERMEDIATE:{name:"INTERMEDIATE",rows:20,columns:20,num_mine:50},EXPERT:{name:"EXPERT",rows:32,columns:32,num_mine:150}}),y={board:[],level:h.EASY,gameOver:!1,minesLeft:h.EASY.num_mine,gameClear:!1,clickNumber:0},E=Object.freeze({DO_NOT_INJECT:0,INJECT:1}),w=function(){var e=Object(r.useContext)(B),t=Object(r.useContext)(F);return Object(r.useEffect)((function(){t({type:g,payload:{level:h.EASY}})}),[t]),Object(O.jsxs)("div",{className:"relative overflow-y-hidden",children:[Object(O.jsx)("h1",{className:"text-red-400 font-bold transition-all duration-1000 transform ".concat(e.gameOver?"opacity-100 translate-y-24":"opacity-0 translate-y-96"," text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl absolute -top-0 left-1/2 transform -translate-x-1/2"),children:"GAME OVER"}),Object(O.jsx)("h1",{className:"text-green-400 font-bold transition-all duration-1000 transform ".concat(e.gameClear?"opacity-100 translate-y-24":"opacity-0 translate-y-96"," text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl absolute -top-0 left-1/2 transform -translate-x-1/2"),children:"YOU WON"}),Object(O.jsx)("div",{className:"grid w-min mx-auto pb-20 px-4",style:{gridTemplateRows:"repeat(".concat(e.level.rows,", 36px)"),gridTemplateColumns:"repeat(".concat(e.level.columns,", 36px)")},children:e.board.map((function(e,t){return e.map((function(e,n){return Object(O.jsx)(v,{cellInfo:Object(s.a)(Object(s.a)({},e),{},{row:t,column:n})},[t,n])}))}))})]})},N=function(e){var t=e.defText,n=e.optList,a=(e.state,e.onLevelSelect),o=Object(r.useState)(n),l=Object(c.a)(o,2),s=l[0],i=(l[1],Object(r.useState)(t)),u=Object(c.a)(i,2),m=u[0],x=u[1],b=Object(r.useState)(!1),f=Object(c.a)(b,2),p=f[0],j=f[1];Object(r.useEffect)((function(){return document.addEventListener("mousedown",g),x(t),function(){document.removeEventListener("mousedown",g)}}),[]);var g=function(e){e.target.classList.contains("custom-select-option")||j(!1)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:"custom-select-container w-36 text-xs lg:text-sm",children:[Object(O.jsxs)("div",{className:"flex justify-between items-center p-1.5 lg:p-2 lg:pl-4 ".concat(p?"selected-text active":"selected-text"),onClick:function(){j(!p)},children:[m," ",Object(O.jsx)("span",{className:"ml-1 text-xl",children:Object(O.jsx)(d.a,{})})]}),p&&Object(O.jsx)("ul",{className:"select-options",children:s&&s.map((function(e,t){return Object(O.jsx)("li",{className:"custom-select-option","data-name":e.name,onClick:function(t){!function(e){x(e.target.getAttribute("data-name")),j(!1)}(t),a(e.value)},children:e.name},t+1)}))})]}),Object(O.jsx)("style",{jsx:!0,children:"\n        .custom-select-container {\n          display: inline-block;\n          min-width: 113px;\n          position: relative;\n          cursor: pointer;\n          font-weight:600;\n        }\n\n        .selected-text {\n          background-color: transparent;\n          border: 2px solid #116466;\n          color: #116466;\n          border-radius: 6px;\n          transition: all;\n          transition-duration: 300ms;\n        }\n\n        .selected-text:hover {\n            border: 2px solid #FFCB9A;\n            color: #FFCB9A;\n          }\n\n        // .selected-text::after,.selected-text::before {\n        //   content: '';\n        //   position: absolute;\n        //   width: 7px;\n        //   height:7px;\n        //   border-top: 2px solid #red;\n        //   border-left: 2px solid #red;\n        //   right:11px;\n        //   transform: rotate(45deg);\n        //   background: #116466;\n       \n        // }\n        // .selected-text::after {\n        //   top: 12px;\n        // }\n        // .selected-text::before {\n        //   bottom: 12px;\n        //   transform: rotate(225deg);\n        // }\n\n        // .selected-text.active::after {\n        //   top: 8px;\n        //   border-color: transparent transparent #21425D transparent;\n        // }\n\n        ul {\n          margin: 0;\n          padding: 0;\n          z-index:99;\n          transition: all 0.2s;\n          top: 0px;\n        }\n\n        .select-options {\n          position: absolute;\n          width: 100%;\n        }\n\n        li {\n          list-style-type: none;\n          padding: 12px 0;\n          padding-left: 20px;\n          background: #2C3531;\n          transition: all 0.2s;\n          text-align: left;\n          border-left: 1px solid #116466;\n          border-right: 1px solid #116466;\n          cursor: pointer;\n        }\n        li:first-child {\n          border-radius: 6px 6px 0 0;\n          border-top: 1px solid #116466;\n\n        }\n        li:last-child {\n          border-radius: 0 0 6px 6px;\n          border-bottom: 1px solid #116466;\n        }\n        li:hover {\n             background-color: #FFCB9A;\n          color: #116466;\n        }\n      "})]})},C=n(6);function A(e,t){return[[e-1,t-1],[e-1,t],[e-1,t+1],[e,t-1],[e,t+1],[e+1,t-1],[e+1,t],[e+1,t+1]]}function L(e,t,n){return t>=0&&t<e.length&&n>=0&&n<e[0].length}function M(e,t,n){var r,a=[],o=A(t,n),l=Object(C.a)(o);try{for(l.s();!(r=l.n()).done;){var s=Object(c.a)(r.value,2),i=s[0],u=s[1];L(e,i,u)&&a.push({cell:e[i][u],row:i,column:u})}}catch(d){l.e(d)}finally{l.f()}return a}function T(e,t){var n,r,a,o,l=t.type,c=t.payload;switch(l){case g:return Object(s.a)(Object(s.a)({},e),{},{gameOver:!1,gameClear:!1,clickNumber:0,minesLeft:e.level.num_mine,board:I(e.level)});case m:return Object(s.a)(Object(s.a)({},e),{},{minesLeft:c.level.num_mine,board:S(e.board,c.level,c.row,c.column),clickNumber:1});case x:return Object(s.a)(Object(s.a)({},e),{},{board:_(e.board,c.row,c.column),gameClear:R(_(e.board,c.row,c.column))});case b:return Object(s.a)(Object(s.a)({},e),{},{board:D(e.board,c.row,c.column),gameClear:R(D(e.board,c.row,c.column))});case f:return Object(s.a)(Object(s.a)({},e),{},{minesLeft:(n=e.board,r=c.row,a=c.column,o=e.minesLeft,n[r][a].flagged?o+1:o-1),board:k(e.board,c.row,c.column),gameClear:R(k(e.board,c.row,c.column))});case p:return Object(s.a)(Object(s.a)({},e),{},{gameOver:!1,gameClear:!1,clickNumber:0,level:c.level,minesLeft:c.level.num_mine,board:I(c.level)});case j:return Object(s.a)(Object(s.a)({},e),{},{gameOver:!0});default:throw new Error("No matching action type in reducer")}}function I(e){var t=e.rows,n=e.columns;return Array.from(Array(t),(function(){return new Array(n).fill({hasMine:!1,isUncovered:!1,numMinesAround:0,flagged:!1})}))}function S(e,t,n,r){return function(e){for(var t=0;t<e.length;t++)for(var n=function(n){var r=M(e,t,n),a=0;r.forEach((function(e){var t=e.cell;e.row,e.column,t.hasMine&&a++})),e[t][n].numMinesAround=a},r=0;r<e[t].length;r++)n(r);return e}(function(e,t,n,r){for(var a=0,o=JSON.parse(JSON.stringify(e)),l=0,c=A(n,r).map((function(e){return JSON.stringify(e)}));a<t;){for(var s=0;s<e[l].length;s++)if((l!==n||s!==r)&&!c.includes(JSON.stringify([l,s]))){if(a===t)break;Math.floor(Math.random()*Math.floor(10))===E.INJECT&&!1===o[l][s].hasMine&&(o[l][s].hasMine=!0,a++)}l===e.length-1?l=0:l++}return o}(e,t.num_mine,n,r))}function _(e,t,n){var r=JSON.parse(JSON.stringify(e));return r[t][n].isUncovered=!0,0!==r[t][n].numMinesAround||r[t][n].hasMine?r:D(r,t,n)}function k(e,t,n){var r=JSON.parse(JSON.stringify(e));return r[t][n].flagged=!r[t][n].flagged,r}function D(e,t,n){for(var r={},a=[{cell:e[t][n],row:t,column:n}];a.length>0;){var o=a.pop(),l=M(e,o.row,o.column);if(l.reduce((function(e,t){return t.cell.flagged?e+1:e}),0)<o.cell.numMinesAround)return e;var c,s=Object(C.a)(l);try{for(s.s();!(c=s.n()).done;){var i=c.value;r["".concat(i.row,"-").concat(i.column)]||(r["".concat(i.row,"-").concat(i.column)]=!0,i.cell.isUncovered=!i.cell.flagged,!i.cell||i.cell.numMinesAround||i.cell.hasMine||a.push(i))}}catch(u){s.e(u)}finally{s.f()}}return e}function R(e){for(var t=0;t<e.length;t++)for(var n=0;n<e[0].length;n++){if(!e[t][n].hasMine&&!e[t][n].isUncovered)return!1;if(!e[t][n].hasMine&&e[t][n].flagged)return!1}return!0}var J=n(12),B=a.a.createContext(),F=a.a.createContext(),U=[{name:"Easy",value:h.EASY.name},{name:"Intermediate",value:h.INTERMEDIATE.name},{name:"Expert",value:h.EXPERT.name}];var q=function(){var e=Object(r.useReducer)(T,y),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(O.jsx)(B.Provider,{value:n,children:Object(O.jsxs)(F.Provider,{value:a,children:[Object(O.jsx)("div",{}),Object(O.jsxs)("div",{className:"bg-primary min-h-screen pt-20 md:pt-32 lg:pt-24 2xl:pt-40 text-center",children:[Object(O.jsx)("div",{className:"uppercase font-medium text-5xl lg:text-6xl text-quinary",children:"minesweeper"}),Object(O.jsx)("div",{}),Object(O.jsxs)("div",{className:"w-full pt-8 md:pt-10 lg:pt-12 text-quinary",children:[Object(O.jsxs)("div",{className:"flex mb-8 md:mb-10 lg:mb-12 mx-auto w-80 lg:w-96 justify-around items-center",children:[Object(O.jsxs)("div",{className:"text-xs lg:text-sm border-1 w-24 lg:w-28 border-quinary  rounded-lg px-1 py-2 lg:px-1.5 lg:py-2.5",children:["Mines left : ",n.minesLeft]}),Object(O.jsxs)("div",{className:"flex items-center gap-x-1",children:[Object(O.jsx)("button",{className:"transition-all duration-1000 bg-transparent border-2 border-secondary text-secondary hover:text-quaternary hover:border-quaternary p-1 text-2xl lg:text-3xl rounded-lg",onClick:function(){a({type:g,payload:{level:n.level}})},children:Object(O.jsx)(J.a,{})}),Object(O.jsx)(N,{defText:"Easy",onLevelSelect:function(e){a({type:p,payload:{level:h[e]}})},state:n,optList:U})]})]}),Object(O.jsx)(w,{})]})]})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,l=t.getTTFB;n(e),r(e),a(e),o(e),l(e)}))};l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(q,{})}),document.getElementById("root")),P()}},[[20,1,2]]]);
//# sourceMappingURL=main.06db9df9.chunk.js.map