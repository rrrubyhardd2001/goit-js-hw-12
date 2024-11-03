import{a as m,S as b,i as d}from"./assets/vendor-DMGxipC5.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const h of r.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();function f(e){return`
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
  `}m.defaults.baseURL="https://pixabay.com/api/";const g=(e,s,o)=>{const a={params:{key:"45750277-faa37f2a8b8a1a1eac0cf2e32",q:e,page:s,image_type:"photo",orientation:"horizontal",per_page:"per_page",safesearch:"true"}};return m.get("",a)},n=document.querySelector(".form-js-search"),p=document.querySelector(".list-foto"),y=document.querySelector(".loader"),l=document.querySelector(".js-load-more"),w=()=>y.style.display="inline-block",L=()=>y.style.display="none";let i=1,c="";const u=15,v=new b(".list-foto a",{captionData:"alt",captionDelay:250}),S=async e=>{if(e.preventDefault(),c=n.querySelector(".input-js").value.trim(),c===""){d.error({message:"Sorry, there no image you are looking",position:"topRight"});return}w(),l.classList.add("is-hidden"),p.innerHTML="",i=1;try{const o=(await g(c,i,u)).data;if(o.hits.length==0){d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.reset();return}const a=o.hits.map(t=>f(t)).join("");p.innerHTML=a,v.refresh(),L(),n.reset(),o.totalHits>i*u&&l.classList.remove("is-hidden")}catch(s){console.log(s)}},F=async()=>{i++,w();try{const s=(await g(c,i,u)).data,o=s.hits.map(a=>f(a)).join("");p.insertAdjacentHTML("beforeend",o),P(),v.refresh(),i*u/s.totalHits&&(l.classList.add("is-hidden"),d.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(e){d.error({message:"We're sorry, something wrong.",position:"topLeft"}),console.log(e)}finally{L()}},P=()=>{const{height:e}=p.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),l.classList.add("is-hidden")};n.addEventListener("submit",S);l.addEventListener("click",F);
//# sourceMappingURL=index.js.map
