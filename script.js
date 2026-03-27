gsap.registerPlugin(ScrollTrigger);

// INTRO
window.addEventListener("load", () => {
  gsap.to("#intro", {
    opacity: 0,
    duration: 1,
    delay: 1,
    onComplete: () => {
      document.getElementById("intro").style.display = "none";
    }
  });
});

// CURSOR
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

// SCROLL ANIMATION
gsap.utils.toArray(".project-card").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: el,
    y: 40,
    opacity: 0,
    duration: 0.8
  });
});

// CHAT
const input = document.getElementById("chatInput");
const text = document.getElementById("chatText");

input.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    text.innerHTML = "Explore my projects above 🔥";
    input.value = "";
  }
});
