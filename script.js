gsap.registerPlugin(ScrollTrigger);

// INTRO ANIMATION
gsap.from("#logo", {
  scale: 0,
  duration: 1,
  ease: "power3.out"
});

setTimeout(() => {
  gsap.to("#intro", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("intro").style.display = "none";
    }
  });
}, 2000);

// CURSOR
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1
  });
});

// SCROLL ANIMATION
gsap.utils.toArray(".project-card").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 90%"
    },
    y: 50,
    opacity: 0,
    duration: 0.8
  });
});

// CHAT BOT
const input = document.getElementById("chatInput");
const text = document.getElementById("chatText");

input.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    let val = input.value.toLowerCase();

    if(val.includes("project")){
      text.innerHTML = "Check my projects above 🔥";
    }
    else if(val.includes("contact")){
      text.innerHTML = "You can contact me via social media 📩";
    }
    else{
      text.innerHTML = "I design cinematic experiences 😎";
    }

    input.value = "";
  }
});