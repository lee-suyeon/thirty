(this["webpackJsonp30days-challenge"]=this["webpackJsonp30days-challenge"]||[]).push([[0],{23:function(e,n,t){e.exports=t(30)},30:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),c=t.n(o),l=t(3),i=t(4),u=t(2),f=t(1),s=t(12),m=t.n(s);function d(){var e=Object(u.a)(["\n    ","\n    * {\n        box-sizing: border-box;\n\n      }\n      body{\n        background-color: #e8f1e9;\n        font-family: 'Montserrat', sans-serif;\n        font-size: 1.2rem;\n        font-weight: 400;\n        color: #333;\n      }\n      ol, ul, li {\n        list-style: none;\n      }\n      img {\n        display: block;\n        width: 100%;\n        height: 100%;\n      }\n      input, label {\n        display: block;\n      }\n      textarea, button,input[type=\"date\"] {\n        font-family: 'Montserrat', 'Noto Sans KR', sans-serif;\n      }\n      button {\n        border: none;\n      }\n\n"]);return d=function(){return e},e}var b=Object(f.createGlobalStyle)(d(),m.a),p={colors:{mainColor:"#447d53",subColor:"#d4e2d4",darkGrayColor:"#333",grayColor:"#999"},fontSize:{large:"5.5rem",medium:"3.75rem",small:"1.1rem"}};function h(){var e=Object(u.a)(["\n   position: relative;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  height: 650px;\n  position: relative;\n  background-color: #ffffff;\n  border-radius: 10px;\n  box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.02);\n  padding: 2.5rem;\n  margin-bottom: 50px;\n"]);return h=function(){return e},e}function g(){var e=Object(u.a)(["\n  font-size: ",";\n  color: ",";\n  font-weight: 600;\n  margin: 3rem 0 2.2rem;\n"]);return g=function(){return e},e}function v(){var e=Object(u.a)(["\n  width: 1200px;\n  margin: 0 auto;\n"]);return v=function(){return e},e}function E(){var e=Object(u.a)(["\n  width: 100%;\n  height: 4.2rem;\n  color: #ffffff;\n  font-style: italic;\n  text-align: right;\n  padding: 2.4rem 0.9rem 0 0;\n  background-color: ","\n"]);return E=function(){return e},e}var O=f.default.header(E(),(function(e){return e.theme.colors.mainColor})),j=f.default.div(v()),x=f.default.h1(g(),(function(e){return e.theme.fontSize.large}),(function(e){return e.theme.colors.mainColor})),y=f.default.div(h()),k=function(e){var n=e.children;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.ThemeProvider,{theme:p},a.a.createElement(O,null,"You will never change your life until you change something you do daily."),a.a.createElement(j,null,a.a.createElement(x,null,"30days"),a.a.createElement(y,null,n))))},C=t(32);function w(){var e=Object(u.a)(["\n  display: block;\n  fill: ",";\n  width: 70px;\n  margin: 0 auto 0.5rem;\n  cursor: pointer;\n  transition: 0.2s;\n  &:hover {\n    fill:  ",";\n  }\n"]);return w=function(){return e},e}function z(){var e=Object(u.a)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 60%;\n  line-height: 1.4;\n  font-weight: 500;\n  text-align: center;\n"]);return z=function(){return e},e}var S=f.default.div(z()),D=Object(f.default)(C.a)(w(),(function(e){return e.theme.colors.subColor}),(function(e){return e.theme.colors.mainColor})),T=function(){var e=Object(r.useContext)(xn),n=e.dispatch;return e.initial?null:a.a.createElement(a.a.Fragment,null,a.a.createElement(S,null,a.a.createElement(D,{onClick:function(){n({type:kn,form:!0})}}),"There are no challenge yet.",a.a.createElement("br",null)," Click + button to add your first challenge."))},L=t(16),A=t(21);function F(){var e=Object(u.a)(["\n   width: ",";\n   height: 60px;\n   background-color: #447d53;\n   border-radius: 5px;\n   cursor: pointer;\n   margin-top: 1.5rem;\n   color: #fff;\n   font-size: 1.8rem;\n   font-weight: 500;\n   letter-spacing: 2px;\n\n   & + & {\n      margin-left: 2%;\n    }\n\n    ","\n"]);return F=function(){return e},e}function N(){var e=Object(u.a)(["\n        width: 49%;\n        height: 55px;\n        font-size: 1.4rem;\n      "]);return N=function(){return e},e}function R(){var e=Object(u.a)(["\n        width: 49%;\n        height: 55px;\n        font-size: 1.5rem;\n      "]);return R=function(){return e},e}function M(){var e=Object(u.a)(["\n    ","\n    ","\n"]);return M=function(){return e},e}var G=Object(f.css)(M(),(function(e){return"small"===e.size&&Object(f.css)(R())}),(function(e){return"medium"===e.size&&Object(f.css)(N())})),H=f.default.button(F(),(function(e){return e.width||"100%"}),G),Y=function(e){var n=e.title,t=e.width,r=e.size,o=Object(A.a)(e,["title","width","size"]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(H,Object.assign({},o,{width:t,size:r}),n))};function _(){var e=Object(u.a)(["\n    width: 30px;\n    fill: #fff;\n    transition: 0.3s;\n    cursor: pointer;\n    &:hover {\n      transform: rotate(-90deg);\n    }\n"]);return _=function(){return e},e}function I(){var e=Object(u.a)(["\n    position: fixed;\n    bottom: 3rem;\n    right: 3rem;\n   width: 70px;\n   height: 70px;\n   background-color: #447d53;\n   border-radius: 50%;\n   color: #fff;\n   font-size: 0.9rem;\n   cursor: pointer;\n   z-index: 5;\n\n"]);return I=function(){return e},e}var K=f.default.button(I()),P=Object(f.default)(L.a)(_()),U=function(e){var n=e.onClickReset;return a.a.createElement(a.a.Fragment,null,a.a.createElement(K,{onClick:n},a.a.createElement(P,null),"reset"))},J=t(17);function B(){var e=Object(u.a)(["\n  display: 'block';\n  position: absolute;\n  top: 1rem; right: 1rem;\n  fill: #fff;\n  width: 50px;\n  cursor: pointer;\n  z-index: 30;\n"]);return B=function(){return e},e}function V(){var e=Object(u.a)(["\n   width: 470px;\n   position: absolute;\n   top: 50%; left: 50%;\n   transform: translate(-50%, -50%);\n   display: flex;\n   flex-direction: column;\n   align-items: center;\n   background-color: #fff;\n   border-radius: 10px;\n   box-shadow: 2px 2px 5px 5px rgba(0, 0, 0, 0.02);\n   padding: 3rem;\n   z-index: 20;\n   h2 {\n      width: 100%;\n      color: #447d53;\n      font-size: 32px;\n      font-weight: 500;\n      border-bottom: 2px solid #447d53;\n      padding-bottom: 1.2rem;\n   }\n\n   ","\n\n"]);return V=function(){return e},e}function X(){var e=Object(u.a)(["\n   position: fixed;\n   left: 0; top: 0;\n   width: 100%; \n   height: 100%; \n   background: ","\n   z-index: 10;\n"]);return X=function(){return e},e}function q(){var e=Object(u.a)(["\n      width: 450px;\n      padding: 2rem;\n    "]);return q=function(){return e},e}function Q(){var e=Object(u.a)(["\n  ","\n"]);return Q=function(){return e},e}var W=Object(f.css)(Q(),(function(e){return"small"===e.size&&Object(f.css)(q())})),Z=f.default.div(X(),(function(e){return e.background||"rgba(22, 50, 25, 0.8);"})),$=f.default.div(V(),W),ee=Object(f.default)(J.a)(B()),ne=function(e){var n=e.children,t=e.title,o=e.size,c=e.background,l=Object(r.useContext)(xn).dispatch,i=Object(r.useCallback)((function(){l({type:kn})}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Z,{background:c,onClick:i}),a.a.createElement(ee,{onClick:i}),a.a.createElement($,{size:o},a.a.createElement("h2",null,t),n))};function te(){var e=Object(u.a)(["\n    font-size: 1.2rem;\n    line-height: 1.5;\n    text-align: center;\n    padding: 1.5rem 2.3rem 0;\n"]);return te=function(){return e},e}function re(){var e=Object(u.a)(["\n    width: 100%;\n"]);return re=function(){return e},e}var ae=f.default.div(re()),oe=f.default.p(te()),ce=function(e){var n=e.visible,t=e.dispatch,o=Object(r.useCallback)((function(){t({type:Sn}),t({type:kn,reset:!1})}),[]),c=Object(r.useCallback)((function(){t({type:kn,reset:!1}),console.log("cancel")}),[]);return n?a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,{size:"small",title:"Reset Challenge",hide:"none"},a.a.createElement(oe,null,"\u26a0\ufe0f",a.a.createElement("br",null),"Are you sure you want to reset this challenge? ",a.a.createElement("br",null),"You will not be able to recover it."),a.a.createElement(ae,null,a.a.createElement(Y,{size:"small",title:"Reset",onClick:o}),a.a.createElement(Y,{size:"small",title:"Cancel",onClick:c})))):null},le=t(18);function ie(){var e=Object(u.a)(["\n      fill: #447d53;\n   "]);return ie=function(){return e},e}function ue(){var e=Object(u.a)(["\n  display: block;\n   margin-right: 1rem;\n  fill: #c5c5c5;\n  width: 30px;\n\n  ","\n"]);return ue=function(){return e},e}function fe(){var e=Object(u.a)(["\n   display: flex;\n   position: absolute;\n   top: 50%;\n   left: 2.5rem;\n   transform: translateY(-50%);\n   font-size: 1.2rem;\n   font-weight: 500;\n\n   p{\n      margin-top: 0.3rem;\n   }\n"]);return fe=function(){return e},e}function se(){var e=Object(u.a)(["\n      background-color: #447d53;\n   "]);return se=function(){return e},e}function me(){var e=Object(u.a)(["\nwidth: 10px;\nheight: 100%;\nposition: absolute;\ntop: 0; left: 0; botton: 0;\nbackground-color: #c5c5c5;\nborder-top-left-radius: 10px;\nborder-bottom-left-radius: 10px;\n\n","\n"]);return me=function(){return e},e}function de(){var e=Object(u.a)(["\n      animation-name: ",";\n   "]);return de=function(){return e},e}function be(){var e=Object(u.a)(["\nposition: absolute;\nbottom: -2%;\nleft: 50%;\ntransform: translateX(-50%);\nwidth: 330px;\nheight: 70px;\nbackground-color: #fff;\nborder-radius: 10px;\nbox-shadow: 2px 2px 5px 5px rgba(0,0,0,0.02);\npadding: 1rem;\nz-index: 10;\nmargin: 0 auto;\nanimation-duration: 0.4s;\nanimation-timing-function: ease-out;\nanimation-name: ",";\nanimation-fill-mode: forwards;\n\n\n","\n"]);return be=function(){return e},e}function pe(){var e=Object(u.a)(["\n  from { \n   opacity: 1;\n   transform: translate(-50%, 0px);\n}\n  to { \n   opacity: 0;\n   transform: translate(-50%, 50px);\n   }\n"]);return pe=function(){return e},e}function he(){var e=Object(u.a)(["\n  from { \n   opacity: 0;\n   transform: translate(-50%, 50px);\n}\n  to { \n   opacity: 1;\n   transform: translate(-50%, 0px);\n   }\n"]);return he=function(){return e},e}var ge=Object(f.keyframes)(he()),ve=Object(f.keyframes)(pe()),Ee=f.default.div(be(),ge,(function(e){return e.disappear&&Object(f.css)(de(),ve)})),Oe=f.default.div(me(),(function(e){return"checked"===e.cellState&&Object(f.css)(se())})),je=f.default.div(fe()),xe=Object(f.default)(le.a)(ue(),(function(e){return"checked"===e.cellState&&Object(f.css)(ie())})),ye=function(){var e=Object(r.useContext)(xn),n=e.cellState,t=e.check,o=Object(r.useState)(!1),c=Object(l.a)(o,2),i=c[0],u=c[1],f=Object(r.useState)(t),s=Object(l.a)(f,2),m=s[0],d=s[1];return Object(r.useEffect)((function(){m&&!t&&(u(!0),setTimeout((function(){return u(!1)}),400)),d(t)}),[m,t]),i||m?a.a.createElement(a.a.Fragment,null,a.a.createElement(Ee,{disappear:!t},a.a.createElement(Oe,{cellState:n}),a.a.createElement(je,null,a.a.createElement(xe,{cellState:n}),a.a.createElement("p",null,"checked"===n?"Successfully Checked":"Successfully Canceled")))):null};function ke(){var e=Object(u.a)(["\n    width: 100%;\n"]);return ke=function(){return e},e}function Ce(){var e=Object(u.a)(["\n    width: 2px;\n    height: 100px;\n    background-color: #fff;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(45deg);\n"]);return Ce=function(){return e},e}function we(){var e=Object(u.a)(["\n    span{\n        display: block;\n        font-size: 1.3rem;\n        margin-bottom: 1.2rem;\n    }\n\n    em {\n        display: block;\n        text-align: center;\n        font-size: 1.5rem;\n        font-weight: 500;\n        margin-bottom: 1rem;\n    }\n"]);return we=function(){return e},e}function ze(){var e=Object(u.a)(["\n   width: 230px;\n   height: 230px;\n   position: relative;\n   background-color: #447d53;\n   border-radius: 50%;\n   color: #fff;\n   font-size: 4rem;\n   font-weight: 500;\n   margin: 2rem 0;\n\n   div.count {\n    position: absolute;\n    top: 20%;\n    left: 15%;\n   }\n   div.total {\n    position: absolute;\n    bottom: 20%;\n    right: 15%;\n   }\n"]);return ze=function(){return e},e}var Se=f.default.div(ze()),De=f.default.div(we()),Te=f.default.div(Ce()),Le=f.default.div(ke()),Ae=function(e){var n=e.count,t=e.visible,o=e.dispatch,c=Object(r.useState)(""),i=Object(l.a)(c,2),u=i[0],f=i[1];Object(r.useEffect)((function(){0===n?f("\ub3c4\uc804 \uc2e4\ud328! \ud83d\ude2d"):n>=1&&n<10?f("\ubd84\ubc1c\ud558\uc138\uc694! \ud83d\udcaa"):n>=10&&n<20?f("\uc880 \ub354 \uc5f4\uc2ec\ud788! \ud83d\udc4c"):n>=20&&n<30?f("\uc798 \ud588\uc5b4\uc694! \ud83d\udc4d"):30===n&&f("\ud83c\udf89\ub3c4\uc804 \uc131\uacf5!!! \ud83d\udc4f")}),[n]);var s=Object(r.useCallback)((function(){o({type:kn,report:!1})}),[]);return t?a.a.createElement(a.a.Fragment,null,a.a.createElement(ne,{title:"CHALLENGE REPORT",size:"small"},a.a.createElement(Se,null,a.a.createElement("div",{className:"count"},n<10?"0".concat(n):n),a.a.createElement(Te,null),a.a.createElement("div",{className:"total"},"30")),a.a.createElement(De,null,a.a.createElement("span",null,"SUCCESS RATE : ",Math.round(n/30*100),"%"),a.a.createElement("em",null,u)),a.a.createElement(Le,null,a.a.createElement(Y,{title:"OK",onClick:s})))):null},Fe=t(19);function Ne(){var e=Object(u.a)(["\n  display: block;\n  position: absolute;\n  top: 0; right: 0;\n  cursor: pointer;\n  fill: ",";\n  width: 30px;\n  }  \n  &:hover {\n    fill:  ",";\n  }\n"]);return Ne=function(){return e},e}function Re(){var e=Object(u.a)(["\n    width: 100%;\n    margin-bottom: 1.5rem;\n    h2{\n        color : #666;\n        font-size: 1.2rem;\n        margin-bottom: 0.8rem;\n    }\n    div.challenge-cont{\n        width: 100%;\n        font-size: 1.5rem;\n        font-weight: 500;\n        line-height: 1.5;\n        border-bottom: 1px solid ",";\n        padding: 0 0.2rem;\n    }\n    span.d-day{\n        display: block;\n        text-align: center; \n        margin-top: 0.5rem;\n        font-size: 1rem;\n    }\n    div.memo {\n        font-size: 1.2rem;\n    }\n"]);return Re=function(){return e},e}var Me=f.default.div(Re(),(function(e){return e.theme.colors.mainColor})),Ge=Object(f.default)(Fe.a)(Ne(),(function(e){return e.theme.colors.subColor}),(function(e){return e.theme.colors.mainColor})),He=Object(r.memo)((function(){var e=Object(r.useContext)(xn),n=e.challenge,t=e.dispatch,o=n.goal,c=n.startDate,l=n.endDate,i=n.dday,u=n.motivate,f=Object(r.useCallback)((function(){t({type:kn,form:!0})}),[]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(Ge,{onClick:f}),a.a.createElement(Me,null,a.a.createElement("h2",null,"My Goal"),a.a.createElement("div",{className:"challenge-cont"},o)),a.a.createElement(Me,null,a.a.createElement("h2",null,"Challenge period"),a.a.createElement("div",{className:"challenge-cont"},c," - ",l),a.a.createElement("span",{className:"d-day"},"\ub3c4\uc804 \uc885\ub8cc\uc77c\uae4c\uc9c0 ",i,"\uc77c \ub0a8\uc558\uc2b5\ub2c8\ub2e4")),a.a.createElement(Me,null,a.a.createElement("h2",null,"Motivate"),a.a.createElement("div",{className:"challenge-cont memo"},u)))})),Ye=t(20);function _e(){var e=Object(u.a)(["\n  display: block;\n  position: absolute;\n  top: -5px; right: 0;\n  cursor: pointer;\n  fill: ",";\n  width: 30px;\n  }  \n  &:hover {\n    fill:  ",";\n  }\n"]);return _e=function(){return e},e}function Ie(){var e=Object(u.a)(["\n    width: 5px;\n    height: 100px;\n    background-color: ",";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(45deg);\n"]);return Ie=function(){return e},e}function Ke(){var e=Object(u.a)(["\n    width: 100%;\n    height: 100%;\n    font-size: 5rem;\n    font-weight: 600;\n    color: #447d53;\n    em.current-count{\n       display: block;\n    }\n    strong.total-count{\n        display: block;\n        text-align: right;\n    }\n"]);return Ke=function(){return e},e}function Pe(){var e=Object(u.a)(["\n    position: relative;\n    width: 100%;\n    height: 195px;\n    background-color: #f4f7f3;\n    border: 1px solid #cfd7cd;\n    padding: 1rem 2.5rem;\n    margin-top: 1rem;\n"]);return Pe=function(){return e},e}function Ue(){var e=Object(u.a)(["\n    position: relative;\n    width: 100%;\n"]);return Ue=function(){return e},e}var Je=f.default.div(Ue()),Be=f.default.div(Pe()),Ve=f.default.div(Ke()),Xe=f.default.div(Ie(),(function(e){return e.theme.colors.mainColor})),qe=Object(f.default)(Ye.a)(_e(),(function(e){return e.theme.colors.subColor}),(function(e){return e.theme.colors.mainColor})),Qe=Object(r.memo)((function(){var e=Object(r.useContext)(xn),n=e.dispatch,t=e.count;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Je,null,a.a.createElement("h2",null,"Current Count"),a.a.createElement(qe,{onClick:function(){n({type:kn,report:!0})}}),a.a.createElement(Be,null,a.a.createElement(Ve,null,a.a.createElement("em",{className:"current-count"},t<10?"0".concat(t):t),a.a.createElement(Xe,null),a.a.createElement("strong",{className:"total-count"},"30")))))}));function We(){var e=Object(u.a)(["\n    position: absolute;\n    top: 50%; left: 50%;\n    transform: translate(-50%, -50%);\n    font-size: 4rem;\n    font-weight: 300;\n"]);return We=function(){return e},e}function Ze(){var e=Object(u.a)(["\n    display: inline-block;\n    position: relative;\n    width: 105px;\n    height: 105px;\n    border: 1px solid #447d53;\n    border-radius: 50%;\n    margin: 0 0.7rem 0.6rem 0;\n    cursor: pointer;\n    color: #c5c5c5;\n\n    ","\n"]);return Ze=function(){return e},e}function $e(){var e=Object(u.a)(["\n      background-color: ",";\n      color: #fff;\n    "]);return $e=function(){return e},e}function en(){var e=Object(u.a)(["\n  ","\n"]);return en=function(){return e},e}var nn=Object(f.css)(en(),(function(e){return e.done&&Object(f.css)($e(),(function(e){return e.theme.colors.mainColor}))})),tn=f.default.div(Ze(),nn),rn=f.default.div(We()),an=Object(r.memo)((function(e){var n=e.days,t=Object(r.useContext)(xn),o=t.dispatch,c=t.check,i=Object(r.useState)(!1),u=Object(l.a)(i,2),f=u[0],s=u[1],m=Object(r.useState)(!1),d=Object(l.a)(m,2),b=d[0],p=d[1];Object(r.useEffect)((function(){c&&setTimeout((function(){p(!1)}),600)}),[c,b]);var h=Object(r.useCallback)((function(){p(!0),b&&c||(f?(s(!1),p(!0),o({type:zn})):(s(!0),p(!0),o({type:wn})))}),[f,b]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(tn,{onClick:h,done:f},a.a.createElement(rn,null,n)))})),on=Array(30).fill().map((function(e,n){return n+1})),cn=function(e){var n=e.dday;return a.a.createElement(a.a.Fragment,null,on.map((function(e,t){return a.a.createElement(an,{key:"".concat(t+1,"days"),days:e,dday:n})})))};function ln(){var e=Object(u.a)(["\n    width: 65%;\n"]);return ln=function(){return e},e}function un(){var e=Object(u.a)(["\n    position: relative;\n    width: 28%;\n    margin-right: 3%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"]);return un=function(){return e},e}var fn=f.default.div(un()),sn=f.default.div(ln()),mn=function(e){var n=e.visible,t=e.count;return n?a.a.createElement(a.a.Fragment,null,a.a.createElement(fn,null,a.a.createElement(He,null),a.a.createElement(Qe,{count:t})),a.a.createElement(sn,null,a.a.createElement(cn,null))):null};function dn(){var e=Object(u.a)(["\n   label {\n      color : #666;\n      font-size: 1.6rem;\n      margin: 2.5rem 0 1rem 0.3rem;\n   }\n   label .message{\n      display: inline-block;\n      font-size: 1rem;\n      color: tomato;\n      margin-left: 1rem;\n   }\n   input, textarea {\n      width: 100%;\n      padding: 1rem;\n      border: 1px solid #d4e2d4;\n      border-radius: 5px;\n      outline: none;\n   }\n\n   input {\n      height: 60px;\n      font-size: 1.5rem;\n      font-weight: 500;\n   }\n   textarea {\n      height: 160px;\n      font-size: 1.2rem;\n      line-height: 1.5;\n      resize: none;\n   }\n   input:focus,\n   textarea:focus {\n      border: 1px solid #447d53;\n   }\n   p {\n      color : #666;\n      margin-top: 0.7rem;\n      text-align: right;\n   }\n   span {\n      font-weight: 500;\n      color:  #447d53;\n   }\n"]);return dn=function(){return e},e}function bn(){var e=Object(u.a)(["\n   width: 100%;\n"]);return bn=function(){return e},e}var pn=f.default.form(bn()),hn=f.default.div(dn()),gn=function(){var e=new Date;return vn(e)},vn=function(e){var n=e.getFullYear(),t=e.getMonth()+1;t=t>=10?t:"0".concat(t);var r=e.getDate();return r=r>=10?r:"0".concat(r),"".concat(n,"-").concat(t,"-").concat(r)},En=function(e){var n=new Date(e);return n.setDate(n.getDate()+29),vn(n)},On=function(){var e=Object(r.useContext)(xn),n=e.challenge,t=e.dispatch,o=e.initial,c=Object(r.useState)(""),i=Object(l.a)(c,2),u=i[0],f=i[1],s=Object(r.useState)(""),m=Object(l.a)(s,2),d=m[0],b=m[1],p=Object(r.useState)(gn()),h=Object(l.a)(p,2),g=h[0],v=h[1],E=Object(r.useState)(En(gn())),O=Object(l.a)(E,2),j=O[0],x=O[1],y=Object(r.useState)(""),k=Object(l.a)(y,2),C=k[0],w=k[1],z=Object(r.useRef)(null),S=function(e){var n=new Date(e),t=En(gn()),r=new Date(t),a=n.getTime()-r.getTime();return-1*Math.floor(a/864e5)+1}(g),D=Object(r.useCallback)((function(e){f(e.target.value)}),[]),T=Object(r.useCallback)((function(e){v(e.target.value),x(En(e.target.value))}),[]),L=Object(r.useCallback)((function(e){w(e.target.value)}),[]);return Object(r.useEffect)((function(){o&&(f(n.goal),w(n.motivate),v(n.startDate))}),[o,n.goal,n.motivate,n.startDate]),a.a.createElement(a.a.Fragment,null,a.a.createElement(pn,{onSubmit:function(e){e.preventDefault(),u?(t({type:Cn,challenge:{goal:u,startDate:g,endDate:j,dday:S,motivate:C}}),t({type:kn,form:!1})):(b("\ubaa9\ud45c\ub97c \uc785\ub825\ud574\uc8fc\uc138\uc694"),z.current.focus())}},a.a.createElement(hn,null,a.a.createElement("label",null,"MY GOAL",a.a.createElement("span",{className:"message"},d)),a.a.createElement("input",{value:u,onChange:D,name:"goal",placeholder:"Study React",autoComplete:"off",ref:z})),a.a.createElement(hn,null,a.a.createElement("label",null,"START DAY",a.a.createElement("span",{className:"message"},o&&"\ub0a0\uc9dc\ub97c \ubcc0\uacbd \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4")),a.a.createElement("input",{type:"date",name:"date",value:g,onChange:T,min:gn(),disabled:o}),a.a.createElement("p",null,"\ub3c4\uc804 \uc885\ub8cc\uc77c\uc740 ",a.a.createElement("span",null,j)," \uc785\ub2c8\ub2e4")),a.a.createElement(hn,null,a.a.createElement("label",null,"MOTIVATE YOURSELF"),a.a.createElement("textarea",{name:"motivate",placeholder:"The truth is that everyone is bored, and devotes himself to cultivating habits.",value:C,maxLength:"47",onChange:L})),a.a.createElement(Y,{title:"START",type:"subimt"})))},jn=Object(r.memo)((function(e){return e.visible?a.a.createElement(ne,{title:"YOUR CHALLENGE"},a.a.createElement(On,null)):null})),xn=Object(r.createContext)({initial:!1,check:!1,modal:{form:!1,report:!1,reset:!1},count:0,cellState:"unchecked",challenge:{goal:"",startDate:"",endDate:"",dday:"",motivate:""},dispatch:function(){}}),yn={initial:!1,check:!1,modal:{form:!1,report:!1,reset:!1},count:0,cellState:"unchecked",challenge:{goal:"",startDate:"",endDate:"",dday:"",motivate:""}},kn="TOGGLE_MODAL",Cn="START_CHALLENGE",wn="CHECKED_CELL",zn="CANCELED_CELL",Sn="RESET_CHALLENGE",Dn=function(e,n){switch(n.type){case kn:return Object(i.a)(Object(i.a)({},e),{},{modal:{form:n.form,report:n.report,reset:n.reset}});case Cn:return Object(i.a)(Object(i.a)({},e),{},{challenge:n.challenge,initial:!0});case"EDIT_CHALLENGE":return Object(i.a)(Object(i.a)({},e),{},{challenge:n.challenge});case wn:return Object(i.a)(Object(i.a)({},e),{},{count:e.count+1,check:!0,cellState:"checked"});case zn:return Object(i.a)(Object(i.a)({},e),{},{count:e.count-1,check:!0,cellState:"unchecked"});case"HIDE_CHECKMESSAGE":return Object(i.a)(Object(i.a)({},e),{},{check:!1});case Sn:return yn;default:return e}},Tn=function(){var e=Object(r.useReducer)(Dn,yn),n=Object(l.a)(e,2),t=n[0],o=n[1],c=t.modal,i=t.initial,u=t.count,f=t.challenge,s=t.cellState,m=t.check,d=Object(r.useCallback)((function(){o({type:kn,reset:!0})}),[]);Object(r.useEffect)((function(){setTimeout((function(){o({type:"HIDE_CHECKMESSAGE"})}),600)}),[m]);var p=Object(r.useMemo)((function(){return{challenge:f,modal:c,dispatch:o,initial:i,count:u,cellState:s,check:m}}),[f,i,u,s,m]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(b,null),a.a.createElement(xn.Provider,{value:p},a.a.createElement(k,null,a.a.createElement(T,null),a.a.createElement(mn,{visible:i,count:u,cellState:s}),a.a.createElement(ye,null)),a.a.createElement(jn,{visible:c.form}),a.a.createElement(Ae,{visible:c.report,count:u,dispatch:o}),a.a.createElement(ce,{visible:c.reset,dispatch:o}),a.a.createElement(U,{onClickReset:d})))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Tn,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.0de85400.chunk.js.map