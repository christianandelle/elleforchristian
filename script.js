// =========================
// CREATE STARS
// =========================

const stars = document.getElementById("stars");

for (let i = 0; i < 180; i++) {

    const star = document.createElement("div");

    star.className = "star";

    star.style.left = Math.random() * 100 + "%";

    star.style.top = Math.random() * 100 + "%";

    star.style.animationDelay = Math.random() * 4 + "s";

    star.style.animationDuration =
        (2 + Math.random() * 4) + "s";

    stars.appendChild(star);

}



// =========================
// OPEN LETTER
// =========================

function openLetter(){

const flap=document.querySelector(".top");

flap.style.transform="rotateX(180deg)";

setTimeout(()=>{

document.getElementById("envelopePage").style.display="none";

const page=document.getElementById("letterPage");

page.style.display="block";

document.body.style.overflow="auto";

window.scrollTo({
top:0,
behavior:"smooth"
});

},1000);

}
