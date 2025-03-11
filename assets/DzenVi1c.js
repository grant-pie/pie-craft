import{j as c,c as i,o as l,a as t,t as o,_ as m,F as g,r as h,b as u}from"./BVsjLxFd.js";const p={class:"card w-50 flex-fill m-4 border",style:{width:"18rem"}},_={class:"card-header"},v={class:"card-title text-center mt-2"},f=["src"],D={class:"card-body"},y={class:"d-flex"},b={class:"card bg-light flex-fill m-4 d-flex flex-colomn align-items-center"},x={class:"mt-2"},S={class:"card bg-light flex-fill m-4 d-flex flex-colomn align-items-center"},w={class:"mt-2"},U={class:"d-flex"},k={__name:"Event",props:{title:String,startDate:Date,endDate:Date,imgUrl:String,body:String},setup(s){const a=s,d=c(()=>{var e;return(e=a.startDate)==null?void 0:e.toISOString().split("T")[0]}),r=c(()=>{var e;return(e=a.endDate)==null?void 0:e.toISOString().split("T")[0]});return(e,n)=>(l(),i("div",p,[t("div",_,[t("h4",v,o(s.title),1)]),t("img",{src:s.imgUrl,class:"card-img-top px-4 mt-4",alt:"..."},null,8,f),t("div",D,[t("div",y,[t("div",b,[n[0]||(n[0]=t("strong",{class:"mt-2"},"Starts:",-1)),t("p",x,o(d.value),1)]),t("div",S,[n[1]||(n[1]=t("strong",{class:"mt-2"},"Ends:",-1)),t("p",w,o(r.value),1)])]),t("div",U,o(s.body),1)])]))}},T={class:"d-flex flex-column align-items-center mt-5"},E={__name:"events",setup(s){const a=[{title:"The Society has arrived.",startDate:"2025-03-01",endDate:"2025-03-31",imgUrl:"./images/event02.jpg",body:'A special group of new players have arrived on the server. Known only as "The Society", these players are here to help out on the server by providing special jobs and quests. They might even build rare and special structures! So be on the lookout for anything new and unusual.'},{title:"The Darkness Comes Alive!",startDate:"2025-04-01",endDate:"2025-04-30",imgUrl:"./images/event01.jpg",body:"Society scouts report seeing strange creature's lurking in the night, we must prepare to defend our homes if we are to survive! During this event mobs will be switched on and players may earn special rewards by killing spawned mobs."}];return(d,r)=>(l(),i("div",null,[r[0]||(r[0]=t("h1",{class:"text-center mt-5"},"Upcoming Events.",-1)),t("div",T,[(l(),i(g,null,h(a,e=>u(k,{title:e.title,startDate:new Date(e.startDate),endDate:new Date(e.endDate),imgUrl:e.imgUrl,body:e.body},null,8,["title","startDate","endDate","imgUrl","body"])),64))])]))}},B=m(E,[["__scopeId","data-v-a004a6b7"]]);export{B as default};
