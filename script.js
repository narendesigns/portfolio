// REGISTER GSAP
gsap.registerPlugin(ScrollTrigger);

// INTRO ANIMATION
window.addEventListener("load", () => {
  gsap.from("#logo", {
    scale: 0,
    duration: 1,
    ease: "power3.out"
  });

  gsap.to("#intro", {
    opacity: 0,
    duration: 1,
    delay: 1.5,
    onComplete: () => {
      document.getElementById("intro").style.display = "none";
    }
  });
});

// CUSTOM CURSOR
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  gsap.to(cursor, {
    x: e.clientX,
    y: e.clientY,
    duration: 0.1
  });
});

// SCROLL ANIMATION (PROJECTS)
gsap.utils.toArray(".project-card").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
    },
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
  });
});

// CHAT BOT
const input = document.getElementById("chatInput");
const text = document.getElementById("chatText");

input.addEventListener("keypress", function(e){
  if(e.key === "Enter"){
    let val = input.value.toLowerCase();

    if(val.includes("project")){
      text.innerHTML = "Scroll above to see my featured works 🔥";
    }
    else if(val.includes("design")){
      text.innerHTML = "I specialize in branding, posters & cinematic design 🎬";
    }
    else if(val.includes("contact")){
      text.innerHTML = "Reach me via my social profiles 📩";
    }
    else{
      text.innerHTML = "Ask me about my work, skills or projects 😎";
    }

    input.value = "";
  }
});
