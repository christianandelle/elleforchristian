function openLetter(){

document.querySelector(".envelope-page").style.display="none";

document.getElementById("letterPage").classList.remove("hidden");

window.scrollTo(0,0);

}

const stars=document.getElementById("stars");

for(let i=0;i<120;i++){

const star=document.createElement("div");

star.style.position="fixed";

star.style.width="2px";

star.style.height="2px";

star.style.background="white";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.opacity=Math.random();

star.style.borderRadius="50%";

stars.appendChild(star);

}
