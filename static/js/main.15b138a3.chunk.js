(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{11:function(a,e,i){a.exports=i(26)},16:function(a,e,i){},24:function(a,e,i){},26:function(a,e,i){"use strict";i.r(e);var t=i(0),n=i.n(t),r=i(6),l=i.n(r),m=(i(16),i(7)),o=i(8),s=i(10),c=i(9),d=i(1),h=function(a){var e=a.fbid,i=a.instaid;return""===e&&""!==i?n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"dib mr4 grow-large"},n.a.createElement(d.SocialIcon,{url:"http://instagram.com/".concat(i),bgColor:"black",fgColor:"white"})))):""!==e&&""===i?n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"dib mr3 grow-large"},n.a.createElement(d.SocialIcon,{url:"http://facebook.com/".concat(e),bgColor:"black",fgColor:"white"})))):""!==e&&""!==i?n.a.createElement("div",null,n.a.createElement("ul",null,n.a.createElement("li",{className:"dib mr3 grow-large"},n.a.createElement(d.SocialIcon,{url:"http://facebook.com/".concat(e),bgColor:"black",fgColor:"white"})),n.a.createElement("li",{className:"dib mr4 grow-large"},n.a.createElement(d.SocialIcon,{url:"http://instagram.com/".concat(i),bgColor:"black",fgColor:"white"})))):n.a.createElement("div",null)},u=function(a){var e=a.id,i=a.name,t=a.email,r=a.fbid,l=a.instaid;return n.a.createElement("div",{className:"bg-light-green dib br3 grow pa3 ma2 shadow-5 tc"},n.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(e,"?200x200")}),n.a.createElement("div",null,n.a.createElement("h2",null,i),n.a.createElement("p",null,t)),n.a.createElement(h,{fbid:r,instaid:l}))},g=function(a){var e=a.robots;return n.a.createElement("div",null,e.map((function(a,i){return n.a.createElement(u,{key:i,id:e[i].id,name:e[i].name,email:e[i].email,fbid:e[i].fbid,instaid:e[i].instaid})})))},b=[{id:"4H1.png",name:"Prashant Kumar",username:"prashant282000",email:"prashant282000@gmail.com",fbid:"profile.php?id=100011930971393",instaid:"prashant282000/"},{id:"sumit",name:"Sumit Pandey",username:"sumitPy",email:"sumitPandey@gmail.com",fbid:"profile.php?id=100008324256054",instaid:"sumitpandey_24/"},{id:"sahilAhmed",name:"Sahil Ahmed",username:"sahil",email:"sahil@gmail.com",fbid:"",instaid:"paperboardoo7/"},{id:"DheerajMangla",name:"Dheeraj Mangla",username:"DM",email:"dheeraj@gmail.com",fbid:"dheeraj.mangla.142",instaid:"dheeraj_mangla/"},{id:"Shivam",name:"Shivam Kashyap",username:"muku",email:"shivam@gmail.com",fbid:"profile.php?id=100008315624268",instaid:"shivaaaam18/"},{id:"Bhumika",name:"Bhumika",username:"Bhu",email:"Bhumi@gmail.com",fbid:"",instaid:""},{id:2,name:"Sushant Parmar",username:"Sp",email:"susshi_par_mar@gmail.com",fbid:"dnsshnt1315",instaid:"sushantprmar/"},{id:"Ankit",name:"Ankit Mishra",username:"I_m_Ankit",email:"ankit@gmail.com",fbid:"profile.php?id=100044308000574",instaid:"ankit_0047/"},{id:"yashi",name:"Yashi Tyagi",username:"ys_ty",email:"yashityagi@gmail.com",fbid:"",instaid:"yashi_tyagi25/"},{id:"Kajal",name:"Kajal Garg",username:"kg",email:"kajal@gmail.com",fbid:"kajal.garg.7543",instaid:"kajal_garg_09/"},{id:"vihwas",name:"Vishwas",username:"Vish",email:"Vishwas@gmail.com",fbid:"",instaid:"vishwas.nks/"},{id:"DivyaGoyal",name:"Divya Goyal",username:"DG",email:"Divya@gmai.com",fbid:"profile.php?id=100035087359667",instaid:"gdivya_28/"},{id:"Khushi",name:"Khushi Goyal",username:"KhGy",email:"Goyal@gmail.com",fbid:"ammie.goyal.9",instaid:"goyalkhushi_/"},{id:"Vaishali",name:"Vaishali Bhardwaj",username:"VB",email:"Vaish@gmail.com",fbid:"",instaid:"sloth_bear_14/"}],f=function(a){var e=a.searchchange;return n.a.createElement("div",{className:"pa2"},n.a.createElement("input",{className:"tc pa3 ba b--green br2 bg-lightest-blue",style:{color:"black"},type:"search",placeholder:"serach robots",onChange:e}))},p=(i(24),function(a){Object(s.a)(i,a);var e=Object(c.a)(i);function i(){var a;return Object(m.a)(this,i),(a=e.call(this)).onSearchChanges=function(e){a.setState({searchfields:e.target.value})},a.state={robots:b,searchfields:""},a}return Object(o.a)(i,[{key:"render",value:function(){var a=this,e=this.state.robots.filter((function(e){return e.name.toLowerCase().includes(a.state.searchfields.toLowerCase())}));return n.a.createElement("div",{className:"tc"},n.a.createElement("h1",null,"RoboFriends"),n.a.createElement(f,{searchchange:this.onSearchChanges}),n.a.createElement(g,{robots:e}))}}]),i}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(25);l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[11,1,2]]]);
//# sourceMappingURL=main.15b138a3.chunk.js.map