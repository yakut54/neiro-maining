(function(){"use strict";var e={7283:function(e,t,a){var o=a(9242),n=a(3396),r=a(7139);const l={class:"app"},s={class:"app-wrapper"};function i(e,t,a,o,i,u){const c=(0,n.up)("DropMenu"),p=(0,n.up)("AppSidebar"),d=(0,n.up)("router-view"),v=(0,n.up)("AppFooter");return(0,n.wg)(),(0,n.iD)("div",l,[(0,n.Wm)(c,{isDrop:o.isDropMenu,toggleDrop:o.toggleDropMenu},null,8,["isDrop","toggleDrop"]),(0,n._)("div",{class:"overlay",onClick:t[0]||(t[0]=(...e)=>o.toggleDropMenu&&o.toggleDropMenu(...e)),style:(0,r.j5)({display:o.isDropMenu?"block":"none"})},null,4),(0,n._)("div",s,[(0,n.Wm)(p,{toggleDrop:o.toggleDropSidebar,isDrop:o.isDropSidebar},null,8,["toggleDrop","isDrop"]),(0,n._)("div",{class:(0,r.C_)(["app-content",{w100:!o.isDropSidebar&&o.setWidth()>768}])},[(0,n._)("main",null,[(0,n._)("div",{class:(0,r.C_)(["page",{pb:"menu"!==e.$route.name}])},[(0,n.Wm)(d)],2),"menu"!==e.$route.name&&"scene"!==e.$route.name?((0,n.wg)(),(0,n.j4)(v,{key:0})):(0,n.kq)("",!0)])],2)])])}var u=a(4870);const c="IS_DROP_SIDE_BAR_KEY-neiromaining-1.0.5";var p=a.p+"img/aside-img.a620d3aa.png",d=a.p+"img/card_15.6b75a815.png";const v={key:1,class:"aside-wrapper"},m=(0,n._)("img",{alt:"",src:p,class:"aside-img"},null,-1),g={class:"link-seans-btn-text-h2 aeb"},f=["innerHTML"],A=["href"],b={key:2,class:"aside-wrapper aside-wrapper-2"},h=(0,n.uE)('<img src="'+d+'" alt="" class="aside-card-img"><div class="aside-text-4"> Данная дисконтная карта даёт право<br class="show_900"> <br> на дополнительную <strong>скидку 15%</strong><br class="show_900"> <br> на всю продукцию проекта Marta-NG<br class="show_900"> <br> на сайте <a href="https://marta-ng.com/?utm_campaign=telegram" target="_blank" class="link">https://marta-ng.com/</a><br class="br"><br class="br"><strong class="underline">Как применить промокод</strong><ul class="aside-ul"><li><div class="aside-text-4">Положите интересующие вас продукты в корзину</div></li><li><div class="aside-text-4">В поле «промокод» <br> напишите <strong class="aside-text-5">КЛИЕНТ 15</strong></div></li><li><div class="aside-text-4">Сумма вашего заказа станет меньше на 15%</div></li></ul><div class="aside-text-1 center aeb">ИЛИ</div><div class="aside-text-4"> Просто оформите счёт и cвяжитесь <br class="show_900"><br> с нами одним из указанных ниже способов: </div><ul class="aside-ul"><li><div class="aside-text-4">по телефону: <a href="tel:8-800-350-79-63" class="link aeb">8-800-350-79-63</a> (звонок по России бесплатно)</div></li><li><div class="aside-text-4">WhatsApp <a href="tel:+7-923-152-30-73" class="link aeb">+7-923-152-30-73</a></div></li></ul><div class="aside-text-4"> Сообщите о том, что у Вас есть <strong class="aeb">дисконтная карта</strong><br class="show_900"> <br> и наши специалисты сами исправят Ваш счёт,<br class="show_900"> <br> применив к нему скидку. </div></div>',2);function D(e,t,a,o,l,s){return(0,n.wg)(),(0,n.iD)("aside",{class:(0,r.C_)({collapse:!a.isDrop})},[(0,n._)("div",{class:"switch-sidebar",onClick:t[0]||(t[0]=(...e)=>a.toggleDrop&&a.toggleDrop(...e))},[(0,n._)("i",{class:(0,r.C_)(["fa","switch-btn",a.isDrop?"fa-times":"fa-arrow-circle-o-right"]),"aria-hidden":"true"},null,2)]),a.isDrop&&o.isShowSidebarContent?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"aside-mayak",onClick:t[1]||(t[1]=(...e)=>o.toggleShowSidebarContent&&o.toggleShowSidebarContent(...e))})):(0,n.kq)("",!0),o.isShowSidebarContent?((0,n.wg)(),(0,n.iD)("div",v,[m,(0,n._)("div",g,(0,r.zw)(e.data.dopSaleTitle),1),(0,n._)("div",{class:"aside-text-1",innerHTML:e.data.dopSaleDescription},null,8,f),(0,n._)("a",{href:e.data.dopSaleLink,class:"sidebar-link-btn",target:"_blank"},"ПОДРОБНЕЕ",8,A)])):((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("button",{class:"close-sidebar-43",onClick:t[2]||(t[2]=(...e)=>o.toggleShowSidebarContent&&o.toggleShowSidebarContent(...e))}),h]))],2)}var w=a(2483),M=a(65),y={name:"app-idebar",props:["isDrop","toggleDrop"],setup(){const e=(0,w.yj)(),t=(0,u.iH)(!0),a=()=>{t.value=!t.value};return{route:e,isShowSidebarContent:t,toggleShowSidebarContent:a}},computed:{...(0,M.rn)(["data"])}},k=a(89);const C=(0,k.Z)(y,[["render",D]]);var T=C,q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVMAAABACAMAAACQoGTHAAACmlBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////BpIH////////////Ao4D//v7Ao4DCpoTAo4DAo4DAo4DAo4DAo4DAo4DAo4DAo4D////Ao4DAo4DAo4DAo4DAo4DAo4DAo4D////q4NT8+vf//8HA1aYALaXj1sbMtJcAIXX59vPt7e3n5+eioqLPuZ76+/v///ri4uL/omT/i0z/ggD/9//x6+Lu5t3n286srKzHrY3/f4b/CIXTZFf///TX19epAKMAOIn59e8AtdXMzMzcy7gAmqr9AG//AF3/bQD/7//R0dHGxsYAfbMAXawAGqcAR6LWGZD/BXoACnn/q2r/V1P/KlL/CUf/Wgfu5//0/fv41/r//+AH1dH1/M4Ap84AssgAnL7//rMATazUwanVwKkAQKiUlJQAsJMAhpAAmIvqFoj/kXp2dnZoaGjQWWP/Njv/STT/dgz76/7T9vfj//au9emD0+dj3ubi/97/xMYAj8IArb4At7OdALD//aD/5ZvIAJcACpGNjY3/1IP/m3DGOmf/P2b/lmEAl1jMSUL/pwD/lQD/iwDc2//r9frFzPmj7PS1yO+ayehrzOMAyeJOytuK8dkAzsG+vr7dzbsy06v/1KcAs6aD1aL7jJ4AeZ3/v5wAK5nfAIyBgYEAdXz/r3u1AHoAsHkAk3HiAG//H27/Ymr/fGBbW1u3BlYmqlMAY0j/c0dQqz7/Jz3lTDw1NTX/Yin/wQD/vf/U0e3/xOb/7uKIjMOv77b/qbbb763xqKCryZUAZo0AXH8nm3j2xnLnonDihnBahG3/t1/hLE/xYEtHgEXo1EK8AAAAMXRSTlMAd4BAvxBV76rdRGYziMy7mSJgn9+PzzAg8qVQr+Vx0TlD2aAIlWEtHjd2pP3Lx6Z8ryL2IQAAC6RJREFUeNrs2Nlr1EAcB/DMQzK7m831uMLS2nrf31Zo6UMVtSqiIoq2FXxQrBeCBwqigraKirfgDd7Hg+iDCN6ieCCIvnr7v5jJZDLZHdN0l9YD+31oJ8lv82s+TTPNaIMZzGAGM5j+CqBmiFZJhkCN9l9n0FQbNP0HMrCm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";const S=(0,n.uE)('<a target="_blank" class="drop-menu-btn" href="/">Официальный сайт</a><a target="_blank" class="drop-menu-btn" href="https://t.me/psychological_journal/">Телеграм-канал</a><a target="_blank" class="drop-menu-btn" href="/2023/zhensovet/">Приложение &quot;ЖенСовет&quot;</a><a target="_blank" class="drop-menu-btn" href="/letter/">Техподдержка</a><a target="_blank" class="drop-menu-btn hits" href="/2023/hits_2023/">ХИТЫ ЭТОГО ГОДА</a>',5),N=[S],U={class:"drop-menu-wrapper"},H={class:"max1140 aic"},I={class:"drop-menu-img"},z=(0,n._)("img",{src:q,alt:""},null,-1),Z=(0,n.uE)('<div class="drop-menu-btn-descktop-block"><a target="_blank" class="drop-menu-btn-descktop" href="/">Официальный сайт</a><a target="_blank" class="drop-menu-btn-descktop" href="https://t.me/psychological_journal/">Телеграм-канал</a><a target="_blank" class="drop-menu-btn-descktop" href="/2023/zhensovet/">Приложение &quot;ЖенСовет&quot;</a><a target="_blank" class="drop-menu-btn-descktop" href="/letter/">Техподдержка</a><a target="_blank" class="drop-menu-btn-descktop hits" href="/2023/hits_2023/">ХИТЫ ЭТОГО ГОДА</a></div>',1),j={class:"drop-switch"};function P(e,t,a,o,l,s){const i=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",{class:(0,r.C_)(["drop-menu",a.isDrop?"drop":""]),onClick:t[0]||(t[0]=(...e)=>a.toggleDrop&&a.toggleDrop(...e))},N,2),(0,n._)("div",U,[(0,n._)("div",H,[(0,n._)("div",I,[(0,n.Wm)(i,{to:"/"},{default:(0,n.w5)((()=>[z])),_:1})]),Z,(0,n._)("div",j,[(0,n._)("i",{onClick:t[1]||(t[1]=(...e)=>a.toggleDrop&&a.toggleDrop(...e)),class:(0,r.C_)(["fa","switch-btn",a.isDrop?"fa-times":"fa-bars"]),"aria-hidden":"true"},null,2)])])])],64)}var L={props:["isDrop","toggleDrop"]};const x=(0,k.Z)(L,[["render",P]]);var K=x;const B=(0,n.uE)('<div class="max960"><div class="row"><div class="footer-item left"><span>Бесплатный звонок по России <a href="tel:8 800 350 79 63">8 800 350 79 63</a></span><span>MARTA-NG ©Все права защищены</span></div><div class="footer-item right"><a class="footer__item-img z" href="https://dzen.ru/marta_ng"></a><a class="footer__item-img zhen" href="/2023/zhensovet/"></a><a class="footer__item-img youtube1" href="https://www.youtube.com/@-marta-ng"></a><a class="footer__item-img telegram" href="https://t.me/psychological_journal/"></a><a class="footer__item-img logo5" href="/"></a></div></div></div>',1),V=[B];function Y(e,t){return(0,n.wg)(),(0,n.iD)("footer",null,V)}const Q={},O=(0,k.Z)(Q,[["render",Y]]);var R=O,E={name:"App",setup(){const e=(0,u.iH)(!1),t=(0,u.iH)("true"===localStorage.getItem(c)),a=()=>e.value=!e.value,o=()=>{t.value=!t.value,localStorage.setItem(c,t.value.toString())},r=()=>document.documentElement.clientWidth;return(0,n.bv)((()=>{null===localStorage.getItem(c)&&(localStorage.setItem(c,"true"),t.value=!0,r()<=768&&setTimeout((()=>{t.value=!1}),3500))})),{isDropSidebar:t,toggleDropSidebar:o,isDropMenu:e,toggleDropMenu:a,setWidth:r}},components:{AppSidebar:T,DropMenu:K,AppFooter:R}};const G=(0,k.Z)(E,[["render",i]]);var F=G;const W=[{path:"/",name:"menu",component:()=>a.e(596).then(a.bind(a,8862))},{path:"/:definitionId",name:"definition",component:()=>a.e(563).then(a.bind(a,1857))},{path:"/:definitionId/:descriptionId",name:"description",component:()=>a.e(80).then(a.bind(a,6426))},{path:"/:definitionId/:descriptionId/media",name:"media",component:()=>a.e(964).then(a.bind(a,6913))}],X=window.location.pathname,_=(0,w.p7)({history:(0,w.r5)(X),routes:W});var J=_,$=(0,M.MT)({state:{data:data,isStart:!1,outerItem:{},innerItem:{}},mutations:{setOuterItem:(e,t)=>e.outerItem=t,setInnerItem:(e,t)=>e.innerItem=t,setIsStart:(e,t)=>e.isStart=t}}),ee=(a(7658),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAArlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8tivQqAAAAOXRSTlMAFtP1Bfn83BR1EMrBZQy2IiAIJcNnT0uZeUIuHe/r15uTYOVcz6yno4g9g3BpO8wJsJ4y331YR95OkxukAAADf0lEQVRYw+1X14KiMBRFQhKaih0LNuzO6PSZ8/8/tnsDwiigzPiyD3sfFEjO7SXR/lkydtZLWwacB7I9tXbGz9C1eZ3hjFh9XisNb00JvZx1Bp5tGLY36Mx04jFtlYI31gJw5+b5V7PqAmLTuG16n4H7Xr5iHKx/wxneEdiMilZHa8DxruG7AeQgfra72/pkLHgwqae2DySCbjH+UWAd+br5URdIqKM1twsjYruC6BTh+4AVwR9CQLT33aFpa5XhTtMOQDhPdvUL5ENEe3oSWD7YZ4tzHXr8WBXo5NovoPBPPqDn2Hn4G8LPJ8UBImfdCyL9K0twq8DGOZxKZEXgZeJ/xFrxkZDDwjBKSIVcwTEyDpQ1ki9JSCFVHEhatr9woWWDYUD2H+HUrlaZg2OT8gHsPN3W2NCfj4mpXSVTYpYAUmoJTgx7YEPtBr1y9MgdXHyvzSl8MuALD9pNeoBsxpDUMgZyroVlmValKzEtsNq3+LqUwCE+L71+bGc59BBSDF0skk91lYOLjAIVHY6WpSU+VD7WE6UYTMWmmsHreUnRUdAK2CmZdkq0LbhdCq+ZXO3UcYg/WCq0Xbjl8GQ+RXKWZOOLKs8t9iXx2h5bVf7T+L2NnXJB97uaOiYFeFL2mdI5UfkN1K0nGJ7h9eKiGmJChQsZv49hq1+znHwKwJg20a8iDooHQzPZ4SCH0px6AqPEA/8ZAzfL4G4T7nbib8P4kYbx/kRKU7lXPpXbF6m8U0PH5twsWUwiKaaLcu78spypE/ykoegXDYWgLikSopcZJG5hS2tj8b2ptpQzdeN3TVXz4VNuyjJt3Yra+gv8uwZLg4uzAb2JZvMM8sZoq8SjbYXN+eCOhmuzxHB1yIBPsFHGMjsSML/GoBqP9zdYl751sFJz/p347PaZcDT3B0K+N+jlGY6Rc8TpJ4qGGGachzAx7h1BI++QlUymLVyy6jE5v5G+LraJHaKn5aa4iDn4FM0GQso36oQhdZwh82M8Scql9AhZo33KKQDFTCFqJ/0TB2Z1EFjZKbvFicEidY/9THpeO2x/DU5xeVW9w1UePPn88w1B7+ptwwHWo8LVFeA0btSaxcDz7zatFw5m3a7X0UYAbrVyUQPVNiDoLlKCPJ8B0GedQcs0DLM1eIwuXb5X/tq3yFz7nhe1H148D9bUlWPOx9KdWgdD+0/F9AeIgHyuUtPqRgAAAABJRU5ErkJggg==");const te=(0,n.Uk)(" /> ");function ae(e,t,a,o,r,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("img",{src:ee,alt:"back.png",title:"НАЗАД",class:"back",onClick:t[0]||(t[0]=t=>e.isStart?e.$router.back():e.$router.push("/"))}),te],64)}var oe={name:"back-button",computed:(0,M.rn)(["isStart"])};const ne=(0,k.Z)(oe,[["render",ae]]);var re=ne;const le={class:"scale-wrapper"},se={class:"scale-text scale-text-left"},ie={class:"scale-center"},ue={class:"scale-info-block"},ce=(0,n._)("div",{class:"scale-info-triangle"},null,-1),pe={class:"scale-text scale-text-right"};function de(e,t,a,o,l,s){return(0,n.wg)(),(0,n.iD)("div",{class:"player-5-vue",onMouseenter:t[6]||(t[6]=(...e)=>o.onMouseenterController&&o.onMouseenterController(...e)),onMouseleave:t[7]||(t[7]=(...e)=>o.onMouseleaveController&&o.onMouseleaveController(...e))},[(0,n._)("div",{class:(0,r.C_)(["controller",o.isControllerView?"flex":"nonne"])},[o.isPlay?((0,n.wg)(),(0,n.iD)("i",{key:1,class:"fa fa-pause-circle-o",onClick:t[1]||(t[1]=(...e)=>o.pause&&o.pause(...e))})):((0,n.wg)(),(0,n.iD)("i",{key:0,class:"fa fa-play-circle-o",onClick:t[0]||(t[0]=(...e)=>o.play&&o.play(...e))}))],2),(0,n._)("div",le,[(0,n._)("div",se,(0,r.zw)(o.setTime(o.current,o.duration)),1),(0,n._)("div",ie,[(0,n._)("div",{class:"outer-scale",ref:"scale",onMouseover:t[2]||(t[2]=(...e)=>o.onMouseover&&o.onMouseover(...e)),onMouseleave:t[3]||(t[3]=(...e)=>o.onMouseleave&&o.onMouseleave(...e)),onMousemove:t[4]||(t[4]=e=>o.onMousemove(e)),onClick:t[5]||(t[5]=e=>o.rewind(e))},[(0,n._)("div",{class:"inner-scale",style:(0,r.j5)({width:`${o.progress}%`})},[(0,n._)("div",{class:"fill-scale-info-block",style:(0,r.j5)({left:o.infoBlockLeft,display:o.infoBlockView})},[(0,n._)("div",ue,(0,r.zw)(o.passedInfo),1),ce],4)],4)],544)]),(0,n._)("div",pe,(0,r.zw)(o.setTime(o.duration,o.duration)),1)])],32)}var ve={name:"Player",props:["player","src"],setup(e){let t=(0,u.iH)();const a=(0,u.iH)(),o=(0,u.iH)(),r=(0,u.iH)(0),l=(0,u.iH)(0),s=(0,u.iH)(0),i=(0,u.iH)(0),c=(0,u.iH)(18),p=(0,u.iH)(18),d=(0,u.iH)(""),v=(0,u.iH)(""),m=(0,u.iH)("none"),g=(0,u.iH)(!1),f=(0,u.iH)(!1),A=(0,u.iH)(!1),b=(0,u.iH)(!0),h=(0,u.iH)(null),D=()=>{t.value?.play(),g.value=!0},w=()=>{t.value?.pause(),g.value=!1},M=()=>{t.value&&(r.value=t.value.currentTime,s.value=100*r.value/l.value)},y=e=>{const a=parseInt(getComputedStyle(o.value).width),n=e.offsetX,r=100*n/a;c.value=p.value=30*r/100,t.value&&(t.value.volume=r/100),f.value&&t.value&&(t.value.muted=!1,f.value=!1)},k=e=>{const o=parseInt(getComputedStyle(a.value).width),n=e.offsetX;s.value=100*n/o,t.value&&(t.value.pause(),t.value.currentTime=l.value*(n/o),g.value&&t.value.play())},C=()=>{document.documentElement.clientWidth>800&&(m.value="block")},T=()=>{b.value=!0,clearTimeout(h.value)},q=()=>{g.value&&(h.value=setTimeout((()=>{b.value=!1}),1e3))},S=()=>{m.value="none"},N=e=>{const t=parseInt(getComputedStyle(e.target).width),a=e.offsetX+1,o=100*a/t,n=l.value/100*o;v.value=e.offsetX-20+"px",d.value=H(n,n)},U=()=>{f.value=!f.value,f.value?c.value=0:c.value=p.value,t.value&&(t.value.muted=f.value)},H=(e,t)=>{const a=e=>e<10?`0${e}`:`${e}`,o=a(Math.floor(e%60)),n=a(Math.floor(e/60%60)),r=a(Math.floor(e/3600)%60);return t<3600?n+":"+o:r+":"+n+":"+o};return(0,n.bv)((()=>{t.value=e.player(),t.value.onloadeddata=()=>{t.value&&(l.value=t.value.duration,console.log(l.value),A.value=!0)},t.value.onended=()=>{s.value=0,i.value=0,g.value=!1},t.value.onplay=()=>g.value=!0,t.value.ontimeupdate=()=>M()})),(0,n.wF)((()=>{t.value&&(t.value.ontimeupdate=null)})),(0,n.Jd)((()=>{console.log("test"),t.value?.pause(),t={}})),{onMouseleave:S,onMousemove:N,onMouseover:C,rewind:k,onMouseenterController:T,onMouseleaveController:q,play:D,pause:w,setTime:H,mute:U,onClickVolume:y,volume:o,scale:a,isMuted:f,isPlay:g,isMounted:A,current:r,duration:l,passedInfo:d,progress:s,volumePercent:c,infoBlockLeft:v,infoBlockView:m,isControllerView:b}}};const me=(0,k.Z)(ve,[["render",de]]);var ge=me;const fe=(0,o.ri)(F);fe.component("back-button",re),fe.component("player",ge),fe.use($),fe.use(J),fe.mount("#app")}},t={};function a(o){var n=t[o];if(void 0!==n)return n.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,o,n,r){if(!o){var l=1/0;for(c=0;c<e.length;c++){o=e[c][0],n=e[c][1],r=e[c][2];for(var s=!0,i=0;i<o.length;i++)(!1&r||l>=r)&&Object.keys(a.O).every((function(e){return a.O[e](o[i])}))?o.splice(i--,1):(s=!1,r<l&&(l=r));if(s){e.splice(c--,1);var u=n();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,n,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,o){return a.f[o](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/"+e+"."+{80:"3f51e633",563:"8bfe9cc9",596:"31ffc3ab",964:"8c2b337e"}[e]+".js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="anti_age:";a.l=function(o,n,r,l){if(e[o])e[o].push(n);else{var s,i;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+r){s=p;break}}s||(i=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",t+r),s.src=o),e[o]=[n];var d=function(t,a){s.onerror=s.onload=null,clearTimeout(v);var n=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(e){return e(a)})),t)return t(a)},v=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),i&&document.head.appendChild(s)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/recieve/2024/neiromaining/"}(),function(){var e={143:0};a.f.j=function(t,o){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)o.push(n[2]);else{var r=new Promise((function(a,o){n=e[t]=[a,o]}));o.push(n[2]=r);var l=a.p+a.u(t),s=new Error,i=function(o){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",s.name="ChunkLoadError",s.type=r,s.request=l,n[1](s)}};a.l(l,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,r,l=o[0],s=o[1],i=o[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(i)var c=i(a)}for(t&&t(o);u<l.length;u++)r=l[u],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(c)},o=self["webpackChunkanti_age"]=self["webpackChunkanti_age"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(7283)}));o=a.O(o)})();