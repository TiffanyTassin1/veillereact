(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{13:function(e,t,r){},14:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var s=r(8),n=r(3),a=r(4),c=r(7),i=r(6),o=r(1),u=r.n(o),l=r(5),h=r.n(l),d=(r(13),r.p+"static/media/logo.6ce24c58.svg"),j=(r(14),r(0));var b=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("header",{className:"App-header",children:[Object(j.jsx)("img",{src:d,className:"App-logo",alt:"logo"}),Object(j.jsxs)("p",{children:["Edit ",Object(j.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(j.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},p=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,17)).then((function(t){var r=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,c=t.getTTFB;r(e),s(e),n(e),a(e),c(e)}))};function x(e){return Object(j.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}h.a.render(Object(j.jsx)(u.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p();var O=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(){return Object(n.a)(this,r),t.apply(this,arguments)}return Object(a.a)(r,[{key:"renderSquare",value:function(e){var t=this;return Object(j.jsx)(x,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)}})}},{key:"render",value:function(){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(j.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),r}(u.a.Component),m=function(e){Object(c.a)(r,e);var t=Object(i.a)(r);function r(e){var s;return Object(n.a)(this,r),(s=t.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},s}return Object(a.a)(r,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();v(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,s=r[this.state.stepNumber],n=v(s.squares),a=r.map((function(e,r){var s=r?"Go to move #"+r:"Go to game start";return Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(){return t.jumpTo(r)},children:s})},r)}));return e=n?"Winner: "+n:"Next player: "+(this.state.xIsNext?"X":"O"),Object(j.jsxs)("div",{className:"game",children:[Object(j.jsx)("div",{className:"game-board",children:Object(j.jsx)(O,{squares:s.squares,onClick:function(e){return t.handleClick(e)}})}),Object(j.jsxs)("div",{className:"game-info",children:[Object(j.jsx)("div",{children:e}),Object(j.jsx)("ol",{children:a})]})]})}}]),r}(u.a.Component);function v(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(s.a)(t[r],3),a=n[0],c=n[1],i=n[2];if(e[a]&&e[a]===e[c]&&e[a]===e[i])return e[a]}return null}h.a.render(Object(j.jsx)(m,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e06373d2.chunk.js.map