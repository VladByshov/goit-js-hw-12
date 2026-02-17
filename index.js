import{a as y,S as k,i as c}from"./assets/vendor-CoHL5wgP.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const v="https://pixabay.com/api",B="54656491-d198bfb98120e598fae018f1a",w=15;y.defaults.baseURL=v;async function L(s,t=1){return(await y({url:v,method:"get",params:{key:B,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:w}})).data}const b=document.querySelector(".gallery"),h=document.querySelector(".js-gallery-btn"),x=document.querySelector(".loader");let m=null;function C(s){const t=s.map(({webformatURL:n,largeImageURL:l,tags:e,likes:o,views:a,comments:P,downloads:E})=>`
            <li class="list-item">
                <a href="${l}"><img src="${n}" alt="${e}" /></a>
                <div class="list-content">
                    <div>
                        <h2 class="likes">Likes</h2>
                        <p class="count-likes">${o}</p>
                    </div>
                    <div>
                        <h2 class="views">Views</h2>
                        <p class="count-views">${a}</p>
                    </div>
                    <div>
                        <h2 class="comments">Comments</h2>
                        <p class="count-comments">${P}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${E}</p>
                    </div>
                </div>
            </li>
        `).join("");b.insertAdjacentHTML("beforeend",t),m?m.refresh():m=new k(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function g(){b.innerHTML=""}function S(){x.style.display="inline-block"}function i(){x.style.display="none"}function q(){h.classList.remove("shown")}function f(){h.classList.add("shown")}const p=document.querySelector(".form");p.addEventListener("submit",M);h.addEventListener("click",R);let u="",r=1,d=0;i();async function M(s){s.preventDefault(),r=1,f(),g(),u=p.elements["search-text"].value.trim();try{if(u===""){c.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),f(),i(),g();return}S();const{hits:t,totalHits:n}=await L(u,r);if(d=Math.ceil(n/w),!t||t.length===0){console.log(t),c.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),i();return}C(t),r<d&&q()}catch(t){f(),console.log(t.message),c.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"})}finally{p.elements["search-text"].value="",i()}}async function R(){S();try{r+=1;const{hits:s}=await L(u,r);r<d?q():r===d&&(c.show({message:"Sorry!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),f()),C(s),$(),i()}catch(s){console.log(s)}}function $(){window.scrollBy({top:1080,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
