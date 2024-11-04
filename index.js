import{a as f,S as b,i as p}from"./assets/vendor-DMGxipC5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function g(e){return`
  <div class="wrapWrap">
      <li class="lFitem">
      <a class="lFlink" href="${e.webformatURL}">
        <img src="${e.largeImageURL}" alt="${e.tags}  " width="200" height="200" />
      </a>
    </li>

        <div class="wrapFoto">
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Likes</li>
            <p class="wrapQty">${e.likes}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Views</li>
            <p class="wrapQty">${e.views}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Comments</li>
            <p class="wrapQty">${e.comment}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Downloads</li>
            <p class="wrapQty">${e.downloads}</p>
        </ul> 
        </div>
    </div>
        </div>
  `}f.defaults.baseURL="https://pixabay.com/api/";const y=(e,s,o)=>{const a={params:{key:"45750277-faa37f2a8b8a1a1eac0cf2e32",q:e,page:s,image_type:"photo",orientation:"horizontal",per_page:"per_page",safesearch:"true"}};return f.get("",a)},n=document.querySelector(".form-js-search"),u=document.querySelector(".list-foto"),L=document.querySelector(".loader"),l=document.querySelector(".js-load-more"),w=()=>L.style.display="inline-block",c=()=>L.style.display="none";let i=1,d="";const h=20,v=new b(".list-foto a",{captionData:"alt",captionDelay:250}),S=async e=>{if(e.preventDefault(),d=n.querySelector(".input-js").value.trim(),d===""){p.error({message:"Sorry, there no image you are looking",position:"topRight"});return}w(),l.classList.add("is-hidden"),u.innerHTML="",i=1;try{const o=(await y(d,i,h)).data;if(o.hits.length==0){p.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.reset();return}const a=o.hits.map(t=>g(t)).join("");u.innerHTML=a,v.refresh(),c(),n.reset(),o.totalHits>i*h&&l.classList.remove("is-hidden")}catch(s){console.log(s)}},F=async()=>{i++,w();try{const s=(await y(d,i,h)).data,o=s.hits.map(a=>g(a)).join("");u.insertAdjacentHTML("beforeend",o),P(),v.refresh(),i*h>=s.totalHits?(l.classList.add("is-hidden"),p.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),c()):l.classList.remove("is-hidden")}catch(e){p.error({message:"We're sorry, something wrong.",position:"topLeft"}),c(),console.log(e)}finally{c()}},P=()=>{const{height:e}=u.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),l.classList.add("is-hidden")};n.addEventListener("submit",S);l.addEventListener("click",F);
//# sourceMappingURL=index.js.map
