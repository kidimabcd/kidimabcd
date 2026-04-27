const shootingContainer = document.querySelector(".shooting-stars");

// bikin bintang jatuh random
function createStar() {
    const star = document.createElement("span");

    star.style.left = Math.random() * window.innerWidth + "px";
    star.style.animationDuration = (Math.random() * 2 + 2) + "s";

    shootingContainer.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 3000);
}

// spawn terus
setInterval(createStar, 500);

// klik teks
const text = document.getElementById("text");
text.addEventListener("click", () => {
    text.innerHTML = "Masuk ke galaksi Kidim 🌌";
});