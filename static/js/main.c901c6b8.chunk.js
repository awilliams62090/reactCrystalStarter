(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(2),c=a.n(s),l=(a(15),a(3)),o=a(4),i=a(7),u=a(5),m=a(8);var d=function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name,value:e.value,onClick:function(){return e.score(e.id,e.value)}}))};var h=function(e){return r.a.createElement("div",{className:"targetScoreValue"},r.a.createElement("h3",null," Target Score: ",e.target),r.a.createElement("h3",null," Your Score: ",e.yScore))};var p=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",null,"Welcome to the Crystal Game"),r.a.createElement("p",null,"The goal of the game is to match the target number exactly. Each crystal has a secret value assigned to it. See if you can win the game!"))},g=a(6);var v=function(e){return r.a.createElement("div",{className:"scoreValue"},r.a.createElement("h3",null," Wins: ",e.wins),r.a.createElement("h3",null," Losses: ",e.losses))};var w=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-1"}),r.a.createElement("div",{className:"col-10"},r.a.createElement("div",{className:"wrapper"},e.children)))},f=(a(16),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={crystals:g,target:0,score:0,wins:0,losses:0,values:[0,0,0,0]},a.componentDidMount=function(){a.update()},a.update=function(){var e=Math.floor(101*Math.random())+20,t=a.state.values.map(function(e){return Math.floor(12*Math.random())+1});a.setState({target:e,values:t})},a.handleClick=function(e,t){console.log("in handleClick id:".concat(e," value:").concat(t));var n=a.state.score+t;if(n===a.state.target){var r=a.state.wins+1;a.setState({score:0,wins:r}),a.update()}else if(n>a.state.target){var s=a.state.losses+1;a.setState({score:0,losses:s}),a.update()}else a.setState({score:n})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(h,{target:this.state.target,yScore:this.state.score}),r.a.createElement(w,null,this.state.crystals.map(function(t){return r.a.createElement(d,{className:"image",image:t.picture,name:t.name,id:t.id,key:t.id,value:e.state.values[t.id],score:e.handleClick})})),r.a.createElement(v,{wins:this.state.wins,losses:this.state.losses}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e){e.exports=[{name:"Turquoise",id:0,picture:"https://www.pngarts.com/files/2/Turquoise-Stone-PNG-Download-Image.png"},{name:"Malachite",id:1,picture:"https://www.pngarts.com/files/2/Malachite-PNG-Image.png"},{name:"Lapis Lazuli",id:2,picture:"https://www.pngarts.com/files/2/Lapis-Lazuli-Free-PNG-Image.png"},{name:"Quartz",id:3,picture:"https://i.pinimg.com/originals/7a/1e/8c/7a1e8cbae81363b96096b4c5d0971705.png"}]},9:function(e,t,a){e.exports=a(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c901c6b8.chunk.js.map