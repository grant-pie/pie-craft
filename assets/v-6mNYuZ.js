import{_ as s,c as a,o as n,a as e,p as l,v as g,t as d,l as _,b as i}from"./CwesYErm.js";const u={class:"card p-2 position-relative"},h=["src"],I={class:"card position-absolute position-absolute--bottom-right px-1"},y={__name:"Item",props:{name:String,qty:Number,imgUrl:String},setup(t){return(o,r)=>(n(),a("div",u,[e("img",{src:t.imgUrl,width:"50px",height:"50px",alt:""},null,8,h),e("div",I,[l(e("strong",null,d(t.qty),513),[[g,t.qty>0]])])]))}},m=s(y,[["__scopeId","data-v-0b37c14b"]]),v={class:"d-flex"},x={class:"text-center"},U={__name:"ItemTrade",props:{item1Name:String,item1Qty:Number,item1ImgUrl:String,item2Name:String,item2Qty:Number,item2ImgUrl:String},setup(t){return(o,r)=>{const c=_("FontAwesomeIcon");return n(),a("div",v,[i(m,{name:t.item1Name,qty:t.item1Qty,imgUrl:t.item1ImgUrl},null,8,["name","qty","imgUrl"]),e("div",x,[i(c,{icon:"arrow-right-long",class:"fs-10 mt-3 mx-2"})]),i(m,{name:t.item2Name,qty:t.item2Qty,imgUrl:t.item2ImgUrl},null,8,["name","qty","imgUrl"])])}}},p=s(U,[["__scopeId","data-v-95e131aa"]]);export{p as I};
