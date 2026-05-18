const weddingDate = new Date("JUN 06, 2026 10:00:00").getTime();

const x = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}, 1000);

// Change Guest Name
const params = new URLSearchParams(window.location.search);
const guest = params.get("to");

if (guest) {
    document.getElementById("guest-name").textContent =
        decodeURIComponent(guest);
}

// Music Add
const button = document.getElementById("open-btn");
const music = document.getElementById("bg-music");

button.addEventListener("click", () => {
    music.play();
    // buka scroll
    document.body.classList.remove("lock-scroll");

    // scroll ke greeting
    document.getElementById("greeting").scrollIntoView({
        behavior: "smooth",
    });
});

// Saling Rekening
function copyRekening(id) {
    const rekening = document.getElementById(id).innerText;
    const button = event.target;

    navigator.clipboard.writeText(rekening).then(() => {
        button.innerText = "Berhasil Disalin!";

        setTimeout(() => {
            button.innerText = "Salin Rekening";
        }, 2000);
    });
}
