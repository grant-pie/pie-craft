import{_ as y,j as w,c as f,o as b,a as t,t as v,k as m,b as s,w as c,F as x,r as _,e as k,l as I,n as u,m as h}from"./DuEy0e65.js";const M={class:"card"},$={class:"d-flex card-header position-relative px-4"},A={class:"position-absolute start-50 top-50 translate-middle text-center"},W={class:"mx-auto ms-md-auto me-md-0 mt-10"},C={class:"card-body px-4"},S=["src"],j=["innerHTML"],U={__name:"Article",props:{title:String,publishedAt:Date,imgUrl:String,body:String},setup(n){const g=n,r=w(()=>{var a;return(a=g.publishedAt)==null?void 0:a.toISOString().split("T")[0]});return(a,i)=>(b(),f("div",M,[t("div",$,[t("h4",A,v(n.title),1),t("p",W,v(r.value),1)]),t("div",C,[t("img",{src:n.imgUrl,class:"card-img-top",alt:"..."},null,8,S),t("div",{class:"mt-4",innerHTML:n.body},null,8,j)])]))}},B=y(U,[["__scopeId","data-v-3f30f071"]]),D={class:"d-flex flex-column mt-5"},F={class:"row"},L={class:"card-body d-flex align-items-center"},P={class:"card-body d-flex align-items-center"},T={class:"d-flex row mt-xl-4 justify-content-between"},N={class:"card-body d-flex align-items-center"},q={class:"card-body d-flex align-items-center"},E={class:"d-flex flex-column mt-5"},O={__name:"index",setup(n){const g=[{title:"PieCraft.online launched!",publishedAt:"2025-03-28",imgUrl:"./images/mcraft2.jpeg",body:"Our Minecraft server website is now live! We’re excited to introduce this new hub where players can stay informed and engaged with everything happening on the server. You can now check for upcoming event dates and announcements, view the jobs system, take on unique quests and challenges to unlock special rewards, and browse the in-game shop for useful items and upgrades. Our goal is to provide a seamless way for players to stay connected, whether they are looking for the next big event, working towards job and quest milestones, or shopping for essentials. See you in-game!"},{title:"Player Spotlight: Bella Starlit",publishedAt:"2025-03-28",imgUrl:"./images/bstarlit.jpg",body:`<strong>We had a chat with famous PieCraft player - Bella Starlit, here's what she had to say:</strong>
                  <br>
                  <br>
                  <strong>What is your favourite thing about Minecraft?</strong> 
                  <p>All the different Biomes, Mobs and Dimensions. I love that there are different modes as well.</p>
                  <br>
                  <strong>What is your favourite mode?</strong> 
                  <p>Either creative or harcore. I am currently building a city in creative mode.</p>
                  <br>
                  <strong>What's the most impressive build or project you've ever worked on in Minecraft?</strong>
                  <p>The mayor's office. It is thee stories high with a working elevator. It also has a meeting room with a hand out area<p>
                  <br>
                  <strong>What are some of your favorite Minecraft mods</strong>
                  <p>The dragon mod where you can find and tame different types dragons. It also has special trees with nests where you can find dragon eggs. I also love the Modern Furniture mod as well as the Wool and Farming ones too.</p>
                  <br>
                  <strong>If you could add one new feature to the game, what would it be and why?</strong>
                  <p>More mysteries, I love all the strange mysteries surrounding the game. I would definitely add more different dimensions and more mythical creatures.</p>
                  <br>
                  <strong> If you could add one new mob to the game, what would it be and why?</strong>
                  <p>Like I said, more mythical creatures, maybe one for each biome. Like the for the cherry blossom biome I would add a mushroom mob and for the oak woods - bats.</p>
                  `},{title:"Player Spotlight: madmax nz100",publishedAt:"2025-03-28",imgUrl:"./images/img2.jpg",body:`<strong>We had a chat with famous PieCraft player - madmaxNZ100, here's what he had to say:</strong>
                  <br>
                  <br>
                  <strong>What is your favourite thing about Minecraft?</strong> 
                  <p>Definitely the creepers, and I love exploring the Nether.</p>
                  <br>
                  <strong>What is your favourite mode?</strong> 
                  <p>Survival, I enjoy the feeling of progress.</p>
                  <br>
                  <strong>What's the most impressive build or project you've ever worked on in Minecraft?</strong>
                  <p>I built a city - complete with a Mcdonalds, my house, a bank, a school and it's right next to a village.</p>
                  <br>
                  <strong>What are some of your favorite Minecraft mods</strong>
                  <p>The farming mod that gives you fruit. I also love the wool addon because of the added cars and sparkly wool.</p>
                  <br>
                  <strong>If you could add one new feature to the game, what would it be and why?</strong>
                  <p>More mobs and perhaps discoverable cities.</p>
                  <br>
                  <strong> If you could add one new mob to the game, what would it be and why?</strong>
                  <p>Crocodiles, elephants and more animals.</p>
                  `}],r=m(!1),a=m(!1),i=m(!1),p=m(!1);return(H,e)=>{const l=I("FontAwesomeIcon"),d=k;return b(),f("div",null,[e[12]||(e[12]=t("h1",{class:"text-center mt-xl-5 mt-10"},"Welcome to the Official Home of PieCraft.",-1)),t("div",D,[t("div",F,[s(d,{to:"/events",class:"card bg-transparent border-none col-12 col-md-6 px-0 text-decoration-none"},{default:c(()=>[t("button",{class:u(["card me-xl-2",{"bg-primary text-light":h(r)}]),onMouseenter:e[0]||(e[0]=o=>r.value=!0),onMouseleave:e[1]||(e[1]=o=>r.value=!1)},[t("div",L,[s(l,{icon:"calendar-days",class:"fs-5 me-3"}),e[8]||(e[8]=t("p",{class:"mb-0"},"Click me to see upcoming events.",-1))])],34)]),_:1}),s(d,{class:"card bg-transparent border-none col-12 col-md-6 px-0 text-decoration-none",to:"/jobs"},{default:c(()=>[t("button",{class:u(["card ms-xl-2",{"bg-primary text-light":h(a)}]),onMouseenter:e[2]||(e[2]=o=>a.value=!0),onMouseleave:e[3]||(e[3]=o=>a.value=!1)},[t("div",P,[s(l,{icon:"hammer",class:"fs-5 me-3"}),e[9]||(e[9]=t("p",{class:"mb-0"},"Click me if you need something to do.",-1))])],34)]),_:1})]),t("div",T,[s(d,{class:"card bg-transparent border-none col-12 col-md-6 px-0 text-decoration-none",to:"/quests"},{default:c(()=>[t("button",{class:u(["card me-xl-2",{"bg-primary text-light":h(i)}]),onMouseenter:e[4]||(e[4]=o=>i.value=!0),onMouseleave:e[5]||(e[5]=o=>i.value=!1)},[t("div",N,[s(l,{icon:"book",class:"fs-5 me-3"}),e[10]||(e[10]=t("p",{class:"mb-0"},"Click me if you need excitement.",-1))])],34)]),_:1}),s(d,{class:"card bg-transparent border-none col-12 col-md-6 px-0 text-decoration-none",to:"/"},{default:c(()=>[t("button",{class:u(["card ms-xl-2",{"bg-primary text-light":h(p)}]),onMouseenter:e[6]||(e[6]=o=>p.value=!0),onMouseleave:e[7]||(e[7]=o=>p.value=!1)},[t("div",q,[s(l,{icon:"gem",class:"fs-5 me-3"}),e[11]||(e[11]=t("p",{class:"mb-0"},"Click me you want to spend emeralds.",-1))])],34)]),_:1})])]),t("div",E,[(b(),f(x,null,_(g,o=>s(B,{class:"mb-5",key:o.title,title:o.title,publishedAt:new Date(o.publishedAt),imgUrl:o.imgUrl,body:o.body},null,8,["title","publishedAt","imgUrl","body"])),64))])])}}},V=y(O,[["__scopeId","data-v-10b82a52"]]);export{V as default};
