import{a as h,S as g,i as u}from"./assets/vendor-DMGxipC5.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();function m(t){return`
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
  `}h.defaults.baseURL="https://pixabay.com/api/";const f=(t,r)=>{const o={params:{key:"45750277-faa37f2a8b8a1a1eac0cf2e32",q:t,page:r,image_type:"photo",orientation:"horizontal",per_page:15,safesearch:"true"}};return h.get("",o)},c=document.querySelector(".form-js-search"),n=document.querySelector(".list-foto"),d=document.querySelector(".loader"),l=document.querySelector(".js-load-more"),L=()=>d.style.display="inline-block",w=()=>d.style.display="none";let i=1,v="";const y=new g(".list-foto a",{captionData:"alt",captionDelay:250}),b=async t=>{t.preventDefault();const r=c.querySelector(".input-js").value.trim();d.classList.remove("is-hidden"),l.classList.add("is-hidden"),n.innerHTML="",i=1,f(r,i).then(o=>{const a=o.data;if(a.hits.length==0){u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.reset();return}const e=a.hits.map(s=>m(s)).join("");n.innerHTML=e,y.refresh(),d.classList.add("is-hidden"),c.reset(),F(),a.totalHits>i*15&&l.classList.remove("is-hidden")}).catch(o=>{console.log(o)})},S=async()=>{i++,L();try{const r=(await f(v,i)).data,o=r.hits.map(a=>m(imgdetails)).join("");n.insertAdjacentHTML("beforeend",o),smoothScroll(),y.refresh(),r.totalHits<=i*15&&(l.classList.add("is-hidden"),u.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}catch{u.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}finally{w()}},F=()=>{const{height:t}=n.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"}),l.classList.add("is-hidden")};c.addEventListener("submit",b);l.addEventListener("click",S);
//# sourceMappingURL=index.js.map
