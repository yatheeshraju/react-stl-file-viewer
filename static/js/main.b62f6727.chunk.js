(this["webpackJsonpreact-stl-file-viewer-example"]=this["webpackJsonpreact-stl-file-viewer-example"]||[]).push([[0],{54:function(e,t,a){e.exports=a(67)},55:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);a(55);var o,n,r,i,l,c=a(1),s=a.n(c),d=a(48),u=a.n(d),m=a(7),w=a(2),h=a(49),f=a(50);var p=function(e){var t=e.width,a=e.height,d=e.url,u=e.objectColor,m=e.gridLineColor,p=e.skyboxColor,v=e.groundColor,b=e.lightColor,g=e.volume;return Object(c.useEffect)((function(){!function(e,t,a,c,s,d,u,m,p){(r=new w.s).background=new w.c(d),r.fog=new w.h(10526880,200,1e3),(o=new w.p(45,e/t,1,1e3)).position.set(200,100,200),n=new w.w(0,0,0),(i=new w.x({antialias:!0,alpha:!0,preserveDrawingBuffer:!0})).setSize(e,t),document.getElementById("stlviewer").innerHTML="",document.getElementById("stlviewer").appendChild(i.domElement),(l=new f.a(o,i.domElement)).target.set(0,0,0),l.update();var v=new w.n(new w.q(2e3,2e3),new w.o({color:u,depthWrite:!1}));v.rotation.x=-Math.PI/2,v.receiveShadow=!0,r.add(v);var b=new w.i(2e3,20,s,s);b.material.opacity=.2,b.material.transparent=!0,r.add(b);var g=new w.j(16777215,4473924);g.position.set(0,200,0),r.add(g);var E=new w.d(m);E.position.set(0,200,100),E.castShadow=!0,E.shadow.camera.top=180,E.shadow.camera.bottom=-100,E.shadow.camera.left=-120,E.shadow.camera.right=120,r.add(E),(new h.a).load(a,(function(e){var t=new w.o({color:c,specular:1118481,shininess:200}),a=new w.n(e,t);a.position.set(0,0,0),a.rotation.set(-Math.PI/2,0,0),a.scale.set(1,1,1),a.castShadow=!0,a.receiveShadow=!0;for(var o=function(e,t,a){return e.dot(t.cross(a))/6},n=e.attributes.position,i=n.count/3,l=0,s=new w.w,d=new w.w,u=new w.w,m=0;m<i;m++)s.fromBufferAttribute(n,3*m+0),d.fromBufferAttribute(n,3*m+1),u.fromBufferAttribute(n,3*m+2),l+=o(s,d,u);p(l),r.add(a)})),i.setPixelRatio(window.devicePixelRatio),i.outputEncoding=w.y,i.shadowMap.enabled=!0;var C=function(){o.lookAt(n),i.render(r,o)};!function e(){requestAnimationFrame(e),C()}()}(t,a,d,u,m,p,v,b,g)}),[d]),s.a.createElement("div",{id:"stlviewer"})},v=a(77),b=a(78),g=a(79),E=a(82),C=a(81),x=function(){var e=Object(c.useState)(""),t=Object(m.a)(e,2),a=t[0],o=t[1],n=Object(c.useState)(0),r=Object(m.a)(n,2),i=r[0],l=r[1];return s.a.createElement("div",null,s.a.createElement(v.a,{flexGrow:1,padding:1},s.a.createElement(b.a,{border:"1px"},s.a.createElement(g.a,{as:"h3",size:"md"},"Canvas"),s.a.createElement(p,{width:500,height:500,url:"elephant.stl",groundColor:"rgb(255, 255, 255)",objectColor:"rgb(50, 255, 255)",skyboxColor:"rgb(255, 255, 255)",gridLineColor:"rgb(0, 0, 0)",lightColor:"rgb(255, 255, 255)",volume:l}),"Volume: ".concat(i.toFixed(2)," cm3")),s.a.createElement(b.a,{border:"5px"},s.a.createElement(g.a,{as:"h3",size:"md"},"Photo"),s.a.createElement(E.a,{src:a}))),s.a.createElement(C.a,{onClick:function(){o(document.getElementsByTagName("canvas")[0].toDataURL())}},"Take Photo"))},S=a(80);u.a.render(s.a.createElement(S.a,{resetCSS:!0},s.a.createElement(x,null)),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.b62f6727.chunk.js.map