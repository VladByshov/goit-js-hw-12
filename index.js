import{a as y,S as R,i}from"./assets/vendor-CoHL5wgP.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&d(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function d(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const v="https://pixabay.com/api",k="54656491-d198bfb98120e598fae018f1a",w=15;y.defaults.baseURL=v;async function L(s,e=1){return(await y({url:v,method:"get",params:{key:k,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:w}})).data}const b=document.querySelector(".gallery"),m=document.querySelector(".js-gallery-btn"),x=document.querySelector(".loader");let f=null;function C(s){const e=s.map(({webformatURL:r,largeImageURL:d,tags:t,likes:o,views:a,comments:E,downloads:P})=>`
            <li class="list-item">
                <a href="${d}"><img src="${r}" alt="${t}" /></a>
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
                        <p class="count-comments">${E}</p>
                    </div>
                    <div>
                        <h2 class="downloads">Downloads</h2>
                        <p class="count-downloads">${P}</p>
                    </div>
                </div>
            </li>
        `).join("");b.insertAdjacentHTML("beforeend",e),f?f.refresh():f=new R(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250})}function g(){b.innerHTML=""}function S(){x.style.display="inline-block"}function l(){x.style.display="none"}function q(){m.classList.remove("shown")}function c(){m.classList.add("shown")}const h=document.querySelector(".form");h.addEventListener("submit",B);m.addEventListener("click",M);let u="",n=1,p=0;l();async function B(s){s.preventDefault(),n=1,c(),g(),u=h.elements["search-text"].value.trim();try{if(u===""){i.show({message:"Please enter a search query!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),c(),l(),g();return}S();const{hits:e,totalHits:r}=await L(u,n);if(p=Math.ceil(r/w),!e||e.length===0){console.log(e),i.show({message:" Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),l();return}C(e),n<p&&q()}catch(e){c(),console.log(e.message),i.show({message:"An error occurred on the server side, please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"})}finally{h.elements["search-text"].value="",l()}}async function M(){n+=1,c(),S();try{const{hits:s}=await L(u,n);C(s);const e=document.querySelector(".gallery li");if(e){const r=e.getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}n>=p?(c(),i.error({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):q()}catch(s){i.show({message:"An error occurred on the server side, please try again!",backgroundColor:"#EF4040",messageColor:"#ffffff",position:"topRight",maxWidth:"432px"}),console.log(s)}finally{l()}}
//# sourceMappingURL=index.js.map
