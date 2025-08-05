// تایپ متن عاشقانه برای مهسا
const text = "سلام مهسا جان 💖";
const typedText = document.getElementById("typed-text");

typedText.innerHTML = ""; // پاک کردن متن قبلی

let i = 0;
function typeText() {
  if (i < text.length) {
    typedText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 100);
  }
}
typeText();

// قلب‌های شناور
const hearts = document.getElementById("hearts");

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

// موزیک قطع/وصل
function toggleMusic() {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play();
  } else {
    music.pause();
  }
}
