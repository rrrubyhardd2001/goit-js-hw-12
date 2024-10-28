import{S as p,i as u}from"./assets/vendor-Dli9umyQ.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();function d(t){return`
  <div class="wrapWrap">
      <li class="lFitem">
      <a class="lFlink" href="${t.webformatURL}">
        <img src="${t.largeImageURL}" alt="${t.tags}  " width="200" height="200" />
      </a>
    </li>

        <div class="wrapFoto">
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Likes</li>
            <p class="wrapQty">${t.likes}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Views</li>
            <p class="wrapQty">${t.views}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Comments</li>
            <p class="wrapQty">${t.comment}</p>
        </ul> 
    </div>
        <div class="wrapListFoto">
        <ul class="wrapList">
            <li class="wrapItem">Downloads</li>
            <p class="wrapQty">${t.downloads}</p>
        </ul> 
        </div>
    </div>
        </div>
  `}const f="https://pixabay.com/api/?key=",h=t=>{const a=new URLSearchParams({key:"45750277-faa37f2a8b8a1a1eac0cf2e32",q:t,image_type:"photo",orientation:"horizontal",per_page:20,safesearch:"true"});return fetch(`${f}&${a}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},i=document.querySelector(".form-js-search"),c=document.querySelector(".list-foto"),n=document.querySelector(".loader"),m=new p(".list-foto a",{captionData:"alt",captionDelay:250}),y=t=>{t.preventDefault();const a=i.querySelector(".input-js").value.trim();n.classList.remove("is-hidden"),c.innerHTML="",h(a).then(s=>{if(s.hits.length==0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),i.reset();return}const o=s.hits.map(e=>d(e)).join("");c.innerHTML=o,m.refresh(),n.classList.add("is-hidden"),i.reset()}).catch(s=>{console.log(s)})};i.addEventListener("submit",y);
//# sourceMappingURL=index.js.map
