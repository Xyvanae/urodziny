const name = "Dla Najlepszej Koleżanki ❤️";
const message = "Wszystkiego najlepszego! Dziękuję za wszystkie wspólne chwile 💖";

document.getElementById("name").innerText = name;
document.getElementById("message").innerText = message;

const today = new Date();
document.getElementById("date").innerText =
    "Data: " + today.toLocaleDateString("pl-PL");

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 250);

function createConfetti() {
    const confetti = document.createElement("div");

    const colors = [
        "#ff4d6d",
        "#ffd166",
        "#06d6a0",
        "#4cc9f0",
        "#f72585",
        "#b5179e",
        "#ff85a2",
        "#ffe66d"
    ];

    confetti.style.position = "absolute";
    confetti.style.width = "8px";
    confetti.style.height = "12px";
    confetti.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.opacity = Math.random() + 0.3;
    confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

    confetti.style.animation = "fall 4s linear forwards";

    document.body.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 4000);
}

setInterval(createConfetti, 70);