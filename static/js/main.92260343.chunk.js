(this["webpackJsonpreact-stl-file-viewer-example"]=this["webpackJsonpreact-stl-file-viewer-example"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);a(7);var n,o,r,i,l,d=a(1),s=a.n(d),c=a(3),w=a.n(c),u=a(0),h=a(4),m=a(5);var p=function(e){var t=e.width,a=e.height,c=e.url,w=e.objectColor,p=e.gridColor,v=e.skyboxColor;return Object(d.useEffect)((function(){!function(e,t,a,d,s,c){(r=new u.s).background=new u.c(c),r.fog=new u.h(10526880,200,1e3),(n=new u.p(45,e/t,1,1e3)).position.set(200,100,200),o=new u.w(0,0,0),(i=new u.x({antialias:!0})).setSize(e,t),document.getElementById("stlviewer").appendChild(i.domElement),(l=new m.a(n,i.domElement)).target.set(0,0,0),l.update();var w=new u.n(new u.q(2e3,2e3),new u.o({color:s,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.receiveShadow=!0,r.add(w);var p=new u.i(2e3,20,0,0);p.material.opacity=.2,p.material.transparent=!0,r.add(p);var v=new u.j(16777215,4473924);v.position.set(0,200,0),r.add(v);var f=new u.d(16777215);f.position.set(0,200,100),f.castShadow=!0,f.shadow.camera.top=180,f.shadow.camera.bottom=-100,f.shadow.camera.left=-120,f.shadow.camera.right=120,r.add(f),(new h.a).load(a,(function(e){var t=new u.o({color:d,specular:1118481,shininess:200}),a=new u.n(e,t);a.position.set(0,0,0),a.rotation.set(-Math.PI/2,0,0),a.scale.set(1,1,1),a.castShadow=!0,a.receiveShadow=!0,r.add(a)})),i.setPixelRatio(window.devicePixelRatio),i.outputEncoding=u.y,i.shadowMap.enabled=!0;var g=function(){n.lookAt(o),i.render(r,n)};!function e(){requestAnimationFrame(e),g()}()}(t,a,c,w,p,v)}),[]),s.a.createElement("div",{id:"stlviewer"})};a(15);var v=()=>s.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},s.a.createElement("div",null,s.a.createElement("div",null,"STL Viewer"),s.a.createElement(p,{width:"500",height:"500",url:"elephant.stl",gridColor:"rgb(255, 255, 255)",objectColor:"rgb(77, 136, 255)",skyboxColor:"rgb(242, 242, 242)"})));w.a.render(s.a.createElement(v,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(16)},7:function(e,t,a){}},[[6,1,2]]]);
//# sourceMappingURL=main.92260343.chunk.js.map