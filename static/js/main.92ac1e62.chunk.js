(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),i=n.n(s),c=n(10),o=n.n(c),r=(n(18),n(12)),l=n(2),d=n(3),h=n(5),j=n(4);n(19),n(20),n(21);var m=function(e){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)("a",{href:"#work",className:"work",children:"WORK"}),Object(a.jsx)("a",{href:"#bio",className:"about",children:"ABOUT"}),Object(a.jsx)("a",{href:"#contact",className:"contact",children:"CONTACT"})]})},p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(m,{})})}}]),n}(i.a.Component),b=n(7),u=n(6),g=n.n(u),f=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={displayMessage:0,messages:[Object(a.jsx)("h1",{className:"intro",children:"Hi, I'm Keenan McDonald"}),Object(a.jsx)("h1",{className:"intro",children:"I'm a software developer and designer based in Austin, TX"}),Object(a.jsx)("h1",{className:"intro",children:"I'm experiences in Javascript, React, Node.js, Python, Django, PostgreSQL..."}),Object(a.jsxs)("h1",{className:"intro",children:["Check out some of ",Object(a.jsx)("a",{href:"#work",className:"intro-link",children:"my work"}),", read more ",Object(a.jsx)("a",{href:"#bio",className:"intro-link",children:"about me"}),", or learn how to ",Object(a.jsx)("a",{href:"#contact",className:"intro-link",children:"contact me"})," below."]})]},s.updateScroll=s.updateScroll.bind(Object(b.a)(s)),s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.updateScroll()}))}},{key:"updateScroll",value:function(){this.setState({displayMessage:Math.floor(window.scrollY/window.innerHeight)})}},{key:"render",value:function(){return Object(a.jsx)("section",{id:"hero",children:Object(a.jsxs)("h1",{className:"intro",children:["Hi, I'm ",Object(a.jsx)("span",{className:"green",children:"Keenan McDonald"}),". I'm a software developer and designer based in Austin, TX. I build full-stack websites and applications.",Object(a.jsx)(g.a,{options:{wrapperClassName:"tw-heading",delay:40},onInit:function(e){e.typeString("Check out some of <a href='#work' class='intro-link'>my work</a>, ").pauseFor(500).typeString("read more <a href='#bio' class='intro-link'>about me</a>, ").pauseFor(300).typeString("or learn how to <a href='#contact' class='intro-link'>contact me</a> below.").start()}})]})})}}]),n}(i.a.Component),O=n(8);var x=function(e){return Object(a.jsx)("div",{className:"project-container","data-aos":"fade","data-aos-anchor-placement":"top-bottom","data-aos-delay":50*e.index,children:Object(a.jsx)("div",{onClick:function(){e.selectProject(e.id)},className:"project",children:Object(a.jsx)("img",{className:"project-image",alt:"screenshot of ".concat(e.title),src:"/images/screenshots/".concat(e.screenshotDesktop)})})})};var k=function(e){return Object(a.jsxs)("div",{"data-aos":"fade",className:"selected-project ".concat(e.transition?"fade-out":""),children:[Object(a.jsxs)("div",{className:"project-image-container",children:[Object(a.jsx)("img",{className:"project-image",alt:"screenshot of ".concat(e.title),src:"/images/screenshots/".concat(e.screenshotDesktop)}),Object(a.jsxs)("div",{className:"link-container",children:[Object(a.jsx)("a",{className:"project-link live",target:"_blank",rel:"noreferrer",href:e.live,children:"Live"}),Object(a.jsx)("a",{className:"project-link repo",target:"_blank",rel:"noreferrer",href:e.repo,children:"Repo"})]})]},0),Object(a.jsxs)("div",{className:"project-info-container",children:[Object(a.jsx)("h2",{className:"project-title",children:e.title}),Object(a.jsx)("div",{className:"project-description",children:e.description})]})]})};var v=function(e){console.log("work rerender");for(var t=[],n={},s=0;s<e.projects.length;s++)e.projects[s].id===e.selected?n=e.projects[s]:t.push(Object(a.jsx)(x,Object(O.a)(Object(O.a)({index:s,transition:e.transition},e.projects[s]),{},{selectProject:function(t){return e.selectProject(t)}}),s));return Object(a.jsxs)("section",{id:"work",children:[Object(a.jsx)("h1",{"data-aos":"fade",className:"section-title",children:"Work"}),Object(a.jsxs)("div",{className:"projects",children:[Object(a.jsx)(k,Object(O.a)({transition:e.transition},n)),t]})]})};var y=function(e){return Object(a.jsxs)("section",{id:"bio",children:[Object(a.jsx)("h1",{"data-aos":"fade",className:"section-title",children:"About"}),Object(a.jsx)("img",{"data-aos":"fade",className:"bio-photo",alt:"keenan mcdonald",src:"/images/bio-photo-2.png"}),Object(a.jsx)("p",{"data-aos":"fade",className:"bio-text",children:"I'm a web developer and recent graduate of Thinkful's Engineering Bootcamp, currently seeking employment as a software developer in Austin, TX. I started coding at a young age but took a break to pursue my other passions in my early 20's. I've been excited to return to more technical pursuits lately as I work to further develop skills as a coder. I'm especially passionate about coding and web design when it intersects with my interests in music and the outdoors."}),Object(a.jsx)("p",{"data-aos":"fade",className:"bio-text",children:"In my spare time, you can find me rock climbing throughout the U.S. and abroad. I'm an avid mountaineer, mountain biker, caver, and kayaker as well. I have spent years in the outdoor education field working to get more kids spending time outside. In addition to outdoor pursuits, I am a musician and create ambient music using a modular synthesizer."})]})};var w=function(e){return Object(a.jsxs)("section",{id:"contact",children:[Object(a.jsx)("h1",{"data-aos":"fade",className:"section-title",children:"Contact"}),Object(a.jsxs)("div",{className:"contact-content",children:[Object(a.jsxs)("div",{id:"email",className:"contact-link-container","data-aos":"fade","data-aos-anchor-placement":"top-bottom",children:[Object(a.jsx)("img",{alt:"mail icon",src:"/images/email-white.png"}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:keenanjmcdonald@gmail.com",className:"contact-link",children:Object(a.jsx)(g.a,{options:{wrapperClassName:"tw-heading",delay:.01},onInit:function(e){console.log("tw init"),e.pasteString("email").callFunction((function(){document.getElementById("email").addEventListener("mouseenter",(function(){e.stop().deleteAll(.01).changeDelay(.01).typeString("keenanjmcdonald").pasteString("@gmail.com").start()})),document.getElementById("email").addEventListener("mouseleave",(function(){e.stop().deleteAll(.01).changeDelay(.01).pasteString("email").start()}))}),e).start()}})})]}),Object(a.jsxs)("div",{id:"github",className:"contact-link-container","data-aos":"fade","data-aos-anchor-placement":"top-bottom",children:[Object(a.jsx)("img",{alt:"mail icon",src:"/images/github-white.png"}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://github.com/keenanmcdonald",className:"contact-link",children:Object(a.jsx)(g.a,{options:{wrapperClassName:"tw-heading",delay:.01,deleteSpeed:.01},onInit:function(e){console.log("tw init"),e.pasteString("github").callFunction((function(){document.getElementById("github").addEventListener("mouseenter",(function(){e.stop().changeDelay(.01).changeDeleteSpeed(.01).typeString(".com/keenanmcdonald").start()})),document.getElementById("github").addEventListener("mouseleave",(function(){e.stop().deleteChars(19).changeDelay(.01).start()}))}),e).start()}})})]}),Object(a.jsxs)("div",{id:"linkedin",className:"contact-link-container","data-aos":"fade","data-aos-anchor-placement":"top-bottom",children:[Object(a.jsx)("img",{alt:"mail icon",src:"/images/linkedin-white.png"}),Object(a.jsx)("a",{target:"_blank",rel:"noreferrer",href:"http://linkedin.com/in/keenan-mcdonald",className:"contact-link",children:Object(a.jsx)(g.a,{options:{wrapperClassName:"tw-heading",delay:.01,deleteSpeed:.01},onInit:function(e){console.log("tw init"),e.pasteString("linkedin").callFunction((function(){document.getElementById("linkedin").addEventListener("mouseenter",(function(){e.stop().changeDelay(.01).typeString(".com/keenan-mcdonald").start()})),document.getElementById("linkedin").addEventListener("mouseleave",(function(){e.stop().changeDeleteSpeed(.01).deleteChars(20).changeDelay(.01).start()}))}),e).start()}})})]})]})]})},N=n(11);n.n(N).a.init();var S=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var s;return Object(l.a)(this,n),(s=t.call(this,e)).state={projects:[{id:0,title:"Terra",selected:!1,description:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Terra is a mapping app geared towards hikers, climbers, mountaineers. It allows users to drop waypoints, and draw routes, write comments on their routes, and view distances and elevation changes on the routes that they create. Users can also share their routes and waypoints and view those created by others. This is all while viewing a 3D terrain map of the world colored by satellite imagery."}),Object(a.jsxs)("p",{children:["Terra relies on the ",Object(a.jsx)("a",{className:"project-text-link",rel:"noreferrer",target:"_blank",href:"https://cesium.com/",children:"CESIUM ion SDK"})," to handle the 3D map. The user interface is built with ",Object(a.jsx)("span",{className:"green",children:"React"}),", with backend built in ",Object(a.jsx)("span",{className:"green",children:"Node.js/Express"})," and a ",Object(a.jsx)("span",{className:"green",children:"PostgreSQL"})," database."]})]}),screenshotDesktop:"terra-desktop.png",screenshotMobile:"terra-mobile.png",live:"http://terra-app1.herokuapp.com",repo:"https://github.com/keenanmcdonald/terra-app"},{id:1,title:"Lost Art Records",selected:!1,description:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"Website commissioned by record label Lost Art Records. This is a static site consisting of a landing page and a page for each of the albums."}),Object(a.jsx)("p",{children:"Lost Art Records is a record label based in Austin, Texas specializing in posthumous releases of the music of singer-sogwriter and country music legend Blaze Foley."}),Object(a.jsxs)("p",{children:["The site is built using ",Object(a.jsx)("span",{className:"green",children:"React"}),"."]})]}),screenshotDesktop:"lostart-desktop.png",screenshotMobile:"lostart-mobile.png",live:"http://lostartrecords.com",repo:"https://github.com/keenanmcdonald/lost-art-redesign"},{id:2,title:"onBelay",selected:!1,description:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"onBelay is a partner-finder for rock clibers. It let's climbers connect with potential partners that climb similar styles and within the same difficulty range."}),Object(a.jsx)("p",{children:"The app uses location-based matching to match users with others that are within a certain mile radius of the current user - it works similar to many popular dating apps."}),Object(a.jsxs)("p",{children:["onBelay uses a ",Object(a.jsx)("span",{className:"green",children:"React"})," frontend, as well as ",Object(a.jsx)("span",{className:"green",children:"Node.js/Express"}),", ",Object(a.jsx)("span",{className:"green",children:"PostgreSQL"})," and ",Object(a.jsx)("span",{className:"green",children:"PostGIS"})," for the backend."]})]}),screenshotDesktop:"onbelay-desktop.png",screenshotMobile:"onbelay-mobile.png",live:"https://onbelayapp.com",repo:"https://github.com/keenanmcdonald/onbelay-app"},{id:3,title:"Why Not Me",selected:!1,description:Object(a.jsxs)("div",{children:[Object(a.jsx)("p",{children:"A minimal single-page site built to promote and sell the book Why Not Me: Finessing Life's Slings and Arrows. The design of the page is intended to mirror the book jacket design."}),Object(a.jsxs)("p",{children:["The site was built using vanilla ",Object(a.jsx)("span",{className:"green",children:"Javascript"}),", ",Object(a.jsx)("span",{className:"green",children:"HTML"}),", and ",Object(a.jsx)("span",{className:"green",children:"CSS"}),"."]})]}),screenshotDesktop:"whynotme-desktop.png",live:"http://donaldwheat.com",repo:"https://github.com/keenanmcdonald/why-not-me-site"}],selected:0,transition:!1,bio:""},s}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){e.onScroll()}))}},{key:"onScroll",value:function(){var e,t=document.getElementsByClassName("section-title"),n=Object(r.a)(t);try{for(n.s();!(e=n.n()).done;){var a=e.value,s=-(window.scrollY-a.parentElement.offsetTop)/window.innerHeight;a.style.top=120-s*(50+50*s)+"px",console.log(s)}}catch(i){n.e(i)}finally{n.f()}}},{key:"selectProject",value:function(e){var t=this;this.setState({transition:!0}),setTimeout((function(){t.setState({transition:!1,selected:e})}),150)}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{}),Object(a.jsxs)("main",{className:"main",children:[Object(a.jsx)(f,{}),Object(a.jsx)(v,{transition:this.state.transition,aos:this.state.aos,projects:this.state.projects,selected:this.state.selected,selectProject:function(t){return e.selectProject(t)}}),Object(a.jsx)(y,{}),Object(a.jsx)(w,{})]})]})}}]),n}(i.a.Component);o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(S,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.92ac1e62.chunk.js.map