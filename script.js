const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
window.addEventListener("load",()=>setTimeout(()=>$("#loader").classList.add("hide"),450));
$("#year").textContent=new Date().getFullYear();

const nav=$("#nav"), toggle=$("#menuToggle"), links=$("#navLinks");
window.addEventListener("scroll",()=>nav.classList.toggle("scrolled",scrollY>30));
toggle.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",open)});
$$(".nav-links a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));

const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}}),{threshold:.12});
$$(".reveal").forEach(e=>observer.observe(e));

function modal(id,open){const el=$("#"+id);el.classList.toggle("open",open);el.setAttribute("aria-hidden",String(!open));document.body.style.overflow=open?"hidden":""}
$("#openMenu").addEventListener("click",()=>modal("menuModal",true));
$("#openGallery").addEventListener("click",()=>{galleryIndex=0;showPhoto();modal("galleryModal",true)});
$$("[data-close]").forEach(b=>b.addEventListener("click",()=>modal(b.dataset.close,false)));
$$(".modal,.dish-modal").forEach(m=>m.addEventListener("click",e=>{if(e.target===m)modal(m.id,false)}));
document.addEventListener("keydown",e=>{if(e.key==="Escape")$$(".modal.open,.dish-modal.open").forEach(m=>modal(m.id,false));if(e.key==="ArrowRight"&&$("#galleryModal").classList.contains("open"))nextPhoto();if(e.key==="ArrowLeft"&&$("#galleryModal").classList.contains("open"))prevPhoto()});

const galleryItems=$$(".gallery-item"), galleryUrls=galleryItems.map(x=>x.dataset.full);let galleryIndex=0;
function showPhoto(){if(!galleryUrls.length)return;$("#galleryImage").src=galleryUrls[galleryIndex];$("#galleryCounter").textContent=`${galleryIndex+1} / ${galleryUrls.length}`}
function nextPhoto(){galleryIndex=(galleryIndex+1)%galleryUrls.length;showPhoto()}
function prevPhoto(){galleryIndex=(galleryIndex-1+galleryUrls.length)%galleryUrls.length;showPhoto()}
galleryItems.forEach((item,i)=>item.addEventListener("click",()=>{galleryIndex=i;showPhoto();modal("galleryModal",true)}));
$("#nextPhoto").addEventListener("click",nextPhoto);$("#prevPhoto").addEventListener("click",prevPhoto);

$$(".dish-card").forEach(card=>card.addEventListener("click",()=>{$("#dishTitle").textContent=card.dataset.title;$("#dishDesc").textContent=card.dataset.desc;$("#dishPrice").textContent=card.dataset.price;$("#dishTag").textContent="MONTOWNIA SMAKÓW";modal("dishModal",true)}));
$$(".rec").forEach(r=>r.addEventListener("click",()=>{$$(".rec").forEach(x=>x.classList.remove("active"));r.classList.add("active")}));

// Prevent accidental broken local navigation on hash links.
$$('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{const target=$(a.getAttribute("href"));if(target){e.preventDefault();target.scrollIntoView({behavior:"smooth",block:"start"})}}));
