const menu=document.querySelector(".menu"), nav=document.querySelector(".nav-links");
menu?.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex";nav.style.position="absolute";nav.style.top="72px";nav.style.left="0";nav.style.right="0";nav.style.padding="20px";nav.style.background="rgba(3,9,20,.97)";nav.style.flexDirection="column";nav.style.alignItems="center"});
document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<951)nav.style.display="none"}));
