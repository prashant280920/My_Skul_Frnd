(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{17:function(a,e,i){a.exports=i(35)},27:function(a,e,i){},33:function(a,e,i){},35:function(a,e,i){"use strict";i.r(e);var t=i(0),n=i.n(t),r=i(4),l=i.n(r),o=i(6),s=i(5),m=(i(27),i(13)),d=i(14),c=i(16),h=i(15),u=i(1),g=function(a){var e,i,t,r,l=a.fbid,o=a.instaid,s=a.twitid,m=a.gitid;return e=""!==o?n.a.createElement("li",{className:"dib mr3 grow-large"},n.a.createElement(u.SocialIcon,{url:"http://instagram.com/".concat(o),bgColor:"black",fgColor:"white"})):"",i=""!==l?n.a.createElement("li",{className:"dib mr3 grow-large"},n.a.createElement(u.SocialIcon,{url:"http://facebook.com/".concat(l),bgColor:"black",fgColor:"white"})):"",t=""!==s?n.a.createElement("li",{className:"dib mr3 grow-large"},n.a.createElement(u.SocialIcon,{url:"http://twitter.com/".concat(s),bgColor:"black",fgColor:"white"})):"",r=""!==m?n.a.createElement("li",{className:"dib mr3 grow-large"},n.a.createElement(u.SocialIcon,{url:"http://github.com/".concat(m),bgColor:"black",fgColor:"white"})):"",n.a.createElement("div",null,n.a.createElement("ul",null,e,i,t,r))},b=function(a){var e=a.id,i=a.name,t=a.email,r=a.fbid,l=a.instaid,o=a.twitid,s=a.gitid;return n.a.createElement("div",{className:"bg-light-green dib br3 grow pa3 ma2 shadow-5 tc"},n.a.createElement("img",{alt:"robot",src:"https://robohash.org/".concat(e,"?200x200")}),n.a.createElement("div",null,n.a.createElement("h2",null,i),n.a.createElement("p",null,t)),n.a.createElement(g,{fbid:r,instaid:l,twitid:o,gitid:s}))},p=function(a){var e=a.robots;return n.a.createElement("div",null,e.map((function(a,i){return n.a.createElement(b,{key:i,id:e[i].id,name:e[i].name,email:e[i].email,fbid:e[i].fbid,instaid:e[i].instaid,twitid:e[i].twitid,gitid:e[i].gitid})})))},f=[{id:"4H1.png",name:"Prashant Kumar",username:"prashant282000",email:"prashant282000@gmail.com",fbid:"profile.php?id=100011930971393",instaid:"prashant282000/",twitid:"Prashan17981478",gitid:"prashant280920"},{id:"sumit",name:"Sumit Pandey",username:"sumitPy",email:"sumitPandey@gmail.com",fbid:"profile.php?id=100008324256054",instaid:"sumitpandey_24/",twitid:"",gitid:""},{id:"sahilAhmed",name:"Sahil Ahmed",username:"sahil",email:"sahil@gmail.com",fbid:"",instaid:"paperboardoo7/",twitid:"",gitid:""},{id:"DheerajMangla",name:"Dheeraj Mangla",username:"DM",email:"dheeraj@gmail.com",fbid:"dheeraj.mangla.142",instaid:"dheeraj__mangla/",twitid:"",gitid:""},{id:"Shivam",name:"Shivam Kashyap",username:"muku",email:"shivam@gmail.com",fbid:"profile.php?id=100008315624268",instaid:"shivaaaam18/",twitid:"Shivam59937362",gitid:""},{id:"Bhumika",name:"Bhumika",username:"Bhu",email:"Bhumi@gmail.com",fbid:"",instaid:"",twitid:"Bhumika69614965?s=08",gitid:""},{id:2,name:"Sushant Parmar",username:"Sp",email:"susshi_par_mar@gmail.com",fbid:"dnsshnt1315",instaid:"sushantprmar/",twitid:"",gitid:""},{id:"Ankit",name:"Ankit Mishra",username:"I_m_Ankit",email:"ankit@gmail.com",fbid:"profile.php?id=100044308000574",instaid:"ankit_0047/",twitid:"",gitid:""},{id:"yashi",name:"Yashi Tyagi",username:"ys_ty",email:"yashityagi@gmail.com",fbid:"",instaid:"yashi_tyagi25/",twitid:"",gitid:""},{id:"Kajal",name:"Kajal Garg",username:"kg",email:"kajal@gmail.com",fbid:"kajal.garg.7543",instaid:"kajal_garg_09/",twitid:"KajalGa60724607?s=08",gitid:""},{id:"vihwas",name:"Vishwas",username:"Vish",email:"Vishwas@gmail.com",fbid:"",instaid:"vishwas.nks/",twitid:"Vishwas98214411?s=08",gitid:""},{id:"DivyaGoyal",name:"Divya Goyal",username:"DG",email:"Divya@gmai.com",fbid:"profile.php?id=100035087359667",instaid:"gdivya_28/",twitid:"",gitid:""},{id:"Khushi",name:"Khushi Goyal",username:"KhGy",email:"Goyal@gmail.com",fbid:"ammie.goyal.9",instaid:"goyalkhushi_/",twitid:"",gitid:""},{id:"Vaishali",name:"Vaishali Bhardwaj",username:"VB",email:"Vaish@gmail.com",fbid:"",instaid:"sloth_bear_14/",twitid:"",gitid:""}],w=function(a){var e=a.searchchange;return n.a.createElement("div",{className:"pa2",style:{marginTop:"-20px"}},n.a.createElement("input",{className:"tc pa3 ba b--green br2 bg-lightest-blue",style:{color:"black"},type:"search",placeholder:"serach robots",onChange:e}))},v=(i(33),function(a){return n.a.createElement("div",{style:{overflow:"scroll",border:"2px solid black",height:"800px"}},a.children)}),y=function(a){Object(c.a)(i,a);var e=Object(h.a)(i);function i(){var a;return Object(m.a)(this,i),(a=e.call(this)).state={robots:[]},a}return Object(d.a)(i,[{key:"componentDidMount",value:function(){return this.setState({robots:f})}},{key:"render",value:function(){var a=this.state.robots,e=this.props,i=e.searchField,t=e.onSearchChanges,r=a.filter((function(a){return a.name.toLowerCase().includes(i.toLowerCase())}));return a.length?n.a.createElement("div",{className:"tc"},n.a.createElement("h1",null,"RoboFriends"),n.a.createElement(w,{searchchange:t}),n.a.createElement(v,null,n.a.createElement(p,{robots:r}))):n.a.createElement("h1",null,"Loading")}}]),i}(t.Component),E=Object(o.b)((function(a){return{searchField:a.searchField}}),(function(a){return{onSearchChanges:function(e){return a({type:"CHANGE_SEARCH_FIELD",payload:e.target.value})}}}))(y),k={searchField:""};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(34);var _=Object(s.b)((function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(e.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},a,{searchField:e.payload});default:return a}}));l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(o.a,{store:_},n.a.createElement(E,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.dd9175b0.chunk.js.map