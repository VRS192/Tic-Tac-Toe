(function(){"use strict";var t={3220:function(t,n,r){var e=r(5130),s=r(6768);const o={class:"main-container"},i={class:"container"};function u(t,n,r,e,u,a){const c=(0,s.g2)("the-header"),l=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)("div",o,[(0,s.bF)(c),(0,s.Lk)("main",i,[(0,s.bF)(l)])])}function a(t,n){const r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("h1",null,[(0,s.bF)(r,{to:"/"},{default:(0,s.k6)((()=>[(0,s.eW)("TIC TAC TOE")])),_:1})])}var c=r(1241);const l={},h=(0,c.A)(l,[["render",a],["__scopeId","data-v-741cb78a"]]);var d=h,p={components:{TheHeader:d}};const f=(0,c.A)(p,[["render",u]]);var v=f,b=r(1387);function m(t,n){const r=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(r,{to:"/one-player"},{default:(0,s.k6)((()=>[(0,s.eW)("One Player")])),_:1}),(0,s.bF)(r,{to:"/two-players"},{default:(0,s.k6)((()=>[(0,s.eW)("Two Players")])),_:1})],64)}const g={},y=(0,c.A)(g,[["render",m],["__scopeId","data-v-1812c1b3"]]);var C=y,O=r(4232);const T={class:"scorecard"};function _(t,n,r,e,o,i){const u=(0,s.g2)("game-board");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",T," (X) You "+(0,O.v_)(o.points.user)+" - "+(0,O.v_)(o.points.cpu)+" CPU (O) ",1),(0,s.bF)(u,{"single-player":!0,onGameOver:i.gameOver},null,8,["onGameOver"])],64)}const w={class:"board"},k={class:"status"};function X(t,n,r,e,o,i){const u=(0,s.g2)("board-cell");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",w,[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(o.board,((t,n)=>((0,s.uX)(),(0,s.CE)("div",{key:n},[((0,s.uX)(!0),(0,s.CE)(s.FK,null,(0,s.pI)(t,((t,r)=>((0,s.uX)(),(0,s.Wv)(u,{key:r,pointer:o.isRunning&&""==t,onClick:t=>i.playTurn(n,r)},{default:(0,s.k6)((()=>[(0,s.eW)((0,O.v_)(t),1)])),_:2},1032,["pointer","onClick"])))),128))])))),128))]),(0,s.Lk)("div",k,[(0,s.eW)((0,O.v_)(i.status)+" ",1),o.isRunning?((0,s.uX)(),(0,s.CE)("button",{key:1,type:"button",onClick:n[1]||(n[1]=(...t)=>i.forfeit&&i.forfeit(...t))},"Forfeit")):((0,s.uX)(),(0,s.CE)("button",{key:0,type:"button",onClick:n[0]||(n[0]=(...t)=>i.resetGame&&i.resetGame(...t))}," Play Again "))])],64)}r(4114);function E(t,n,r,e,o,i){return(0,s.uX)(),(0,s.CE)("div",{class:(0,O.C4)(["cell",i.cellClasses])},[(0,s.RG)(t.$slots,"default",{},void 0,!0)],2)}var F={props:["pointer"],computed:{cellClasses(){return{pointer:this.pointer}}}};const R=(0,c.A)(F,[["render",E],["__scopeId","data-v-793edbb0"]]);var G=R,A={props:["single-player"],emits:["game-over"],components:{BoardCell:G},data(){return{isRunning:!1,board:[],turn:"",winner:"",completedTurns:0,firstTurn:""}},watch:{isRunning(t){t||this.$emit("game-over",this.winner)}},computed:{status(){return this.isRunning?`Current Turn: ${this.turn}`:"X"==this.winner||"O"==this.winner?`"${this.winner}" won the game!`:"It's a draw!"}},methods:{playTurn(t,n){this.isRunning&&""==this.board[t][n]&&(this.updateBoard(t,n),this.isRunning&&this.singlePlayer&&this.playComputerTurn())},playComputerTurn(){const t=[];for(let e=0;e<3;e++)for(let n=0;n<3;n++)""==this.board[e][n]&&t.push(3*e+n);const n=Math.floor(Math.random()*t.length),r=t[n];this.updateBoard(Math.floor(r/3),r%3)},switchTurn(){this.turn="X"==this.turn?"O":"X"},updateBoard(t,n){this.board[t][n]=this.turn,this.completedTurns++,this.switchTurn(),this.checkResult(t,n)},checkResult(t,n){let r=0,e=0,s=0,o=0;for(let i=0;i<3;i++)this.board[t][i]==this.board[t][n]&&r++,this.board[i][n]==this.board[t][n]&&e++,t==n&&this.board[i][i]==this.board[t][n]&&s++,t+n==2&&this.board[i][2-i]==this.board[t][n]&&o++;if(3==r||3==e||3==s||3==o)return this.isRunning=!1,void(this.winner=this.board[t][n]);9==this.completedTurns&&(this.isRunning=!1,this.winner="D")},resetGame(){this.isRunning=!0,this.board=[];for(let t=0;t<3;t++){const t=[];for(let n=0;n<3;n++)t.push("");this.board.push(t)}this.firstTurn="X"==this.firstTurn?"O":"X",this.turn=this.firstTurn,this.winner="",this.completedTurns=0,this.singlePlayer&&"O"==this.firstTurn&&this.playComputerTurn()},forfeit(){this.switchTurn(),this.isRunning=!1,this.winner=this.turn}},created(){this.resetGame()}};const I=(0,c.A)(A,[["render",X],["__scopeId","data-v-64fc7f36"]]);var P=I,j={components:{GameBoard:P},data(){return{points:{user:0,cpu:0}}},methods:{gameOver(t){"X"==t?this.points.user++:"O"==t?this.points.cpu++:(this.points.user+=.5,this.points.cpu+=.5)}}};const B=(0,c.A)(j,[["render",_],["__scopeId","data-v-6cbaf8b0"]]);var K=B;const L={class:"scorecard"};function W(t,n,r,e,o,i){const u=(0,s.g2)("game-board");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.Lk)("div",L," (X) P1 "+(0,O.v_)(o.points.user1)+" - "+(0,O.v_)(o.points.user2)+" P2 (O) ",1),(0,s.bF)(u,{"single-player":!1,onGameOver:i.gameOver},null,8,["onGameOver"])],64)}var x={components:{GameBoard:P},data(){return{points:{user1:0,user2:0}}},methods:{gameOver(t){"X"==t?this.points.user1++:"O"==t?this.points.user2++:(this.points.user1+=.5,this.points.user2+=.5)}}};const M=(0,c.A)(x,[["render",W],["__scopeId","data-v-333be038"]]);var $=M;const D=(0,b.aE)({history:(0,b.LA)("/Tic-Tac-Toe/"),routes:[{path:"/",component:C},{path:"/one-player",component:K},{path:"/two-players",component:$}]});var H=D;const U=(0,e.Ef)(v);U.use(H),U.mount("#app")}},n={};function r(e){var s=n[e];if(void 0!==s)return s.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(n,e,s,o){if(!e){var i=1/0;for(l=0;l<t.length;l++){e=t[l][0],s=t[l][1],o=t[l][2];for(var u=!0,a=0;a<e.length;a++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](e[a])}))?e.splice(a--,1):(u=!1,o<i&&(i=o));if(u){t.splice(l--,1);var c=s();void 0!==c&&(n=c)}}return n}o=o||0;for(var l=t.length;l>0&&t[l-1][2]>o;l--)t[l]=t[l-1];t[l]=[e,s,o]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var e in n)r.o(n,e)&&!r.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={524:0};r.O.j=function(n){return 0===t[n]};var n=function(n,e){var s,o,i=e[0],u=e[1],a=e[2],c=0;if(i.some((function(n){return 0!==t[n]}))){for(s in u)r.o(u,s)&&(r.m[s]=u[s]);if(a)var l=a(r)}for(n&&n(e);c<i.length;c++)o=i[c],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(l)},e=self["webpackChunktic_tac_toe"]=self["webpackChunktic_tac_toe"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=r.O(void 0,[504],(function(){return r(3220)}));e=r.O(e)})();
//# sourceMappingURL=app.9992875f.js.map