(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(55)},30:function(e,t,n){},31:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},55:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(10),l=n.n(i),o=(n(30),n(1)),r=n(2),s=n(4),m=n(3),u=n(5),p=(n(31),n(7)),d=(n(41),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.children;return c.a.createElement("div",{className:"fullpage ".concat(this.props.className||"")},e)}}]),t}(a.Component)),h=n(6),v=(n(42),function(e){return c.a.createElement("div",{onClick:e.onClick,style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:"-34px",transform:"translateY(-45PX)"}},c.a.createElement("div",{style:{maxWidth:"30px"}},c.a.createElement("img",{src:e.icon})))}),f=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(d,{className:"second",id:"second"},c.a.createElement("h3",null,h.sections[0].title),c.a.createElement("div",{className:"paragraph"},h.sections[0].items.map(function(e){return c.a.createElement("p",null,e.content)}))),c.a.createElement(p.Link,{activeClass:"active",to:"skill",spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive},c.a.createElement(v,{icon:h.icons.down})),c.a.createElement(p.Element,{name:"skill",className:"element"}))}}]),t}(a.Component),E=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"myFunction",value:function(){document.getElementsById("second").scrollIntoView()}},{key:"render",value:function(){return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{className:"left-nav"},c.a.createElement("div",{onClick:"myFunction()"},"clickME!")),c.a.createElement("div",{className:"right-nav"},c.a.createElement("div",{className:"left"},"About "),c.a.createElement("div",{className:"right",onClick:c.a.createElement(p.Link,{activeClass:"active",to:"About",spy:!0,smooth:!0,offset:50,duration:500})},"skill")))}}]),t}(a.Component),b=n(23),g=(n(48),n(49),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).state={color:"white"},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"changeColor",value:function(){this.setState({color:"white"===this.state.color?"yellow":"white"})}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(d,{className:"first"},c.a.createElement("div",null,c.a.createElement("h1",{className:"title",style:{color:this.state.color},onMouseOver:function(){e.changeColor()},onMouseLeave:function(){e.changeColor()}},h.title," "),c.a.createElement("h3",{className:"title"}," ",h.subtitle," "),c.a.createElement("div",{className:"icon-wrapper"},Object.keys(h.links,p.animateScroll).map(function(e){return c.a.createElement(b.SocialIcon,{className:"socialicon",url:h.links[e]})})))),c.a.createElement(p.Link,{activeClass:"active",to:"About",spy:!0,smooth:!0,offset:50,duration:500,onSetActive:this.handleSetActive},c.a.createElement(v,{icon:h.icons.down,onClick:function(){console.log("im working")}})),c.a.createElement(p.Element,{name:"About",className:"element"}),c.a.createElement("div",null))}}]),t}(a.Component)),j=(n(50),function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.skill;return c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"image-wrapper"},c.a.createElement("img",{src:e.content.image})),c.a.createElement("div",{className:"skill-title-wrapper"},c.a.createElement("h4",null,e.content.title)))}}]),t}(a.Component)),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement(d,{className:"third"},c.a.createElement("h3",null,h.sections[1].title),c.a.createElement("div",{className:"cards-wrapper"},h.sections[1].items.map(function(e){return c.a.createElement(j,{skill:e})})))}}]),t}(a.Component),y=(n(51),n(24)),k=n.n(y),w=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app"},c.a.createElement(k.a,null),c.a.createElement(E,null),c.a.createElement(g,null),c.a.createElement(f,null),c.a.createElement(O,null),c.a.createElement("div",{onClick:function(){p.animateScroll.scrollToTop()},className:"scroll-up"},c.a.createElement("img",{src:"./scroll-up.png",width:"30px",height:"30px"})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(53),n(54);l.a.render(c.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports={title:"Hello , I'm Saeed Qanbarzadeh",subtitle:"React Beginner | Designer ",links:{github:"https://www.github.com/ghanbarzadeh.s",instagram:"https://www.instagram.com/ghanbarzadeh.s"},sections:[{title:"About",items:[{types:"p",content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "}]},{title:"skills",items:[{type:"card",content:{image:"./html.png","title ":"javascript"}},{type:"card",content:{image:"./css.svg","title ":"css"}},{type:"card",content:{image:"./javascript.png","title ":"html"}}]}],icons:{down:"./sort-down.png"}}}},[[25,1,2]]]);
//# sourceMappingURL=main.f912a098.chunk.js.map