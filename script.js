
/* CUSTOM CURSOR */
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

/* INTRO LOADER */
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  setTimeout(() => {
    intro.style.opacity = "0";
    intro.style.pointerEvents = "none";
  }, 1200);
});

/* OPTIONAL: HOVER CURSOR EFFECT */
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    cursor.style.transform = "scale(2)";
  });

  card.addEventListener("mouseleave", () => {
    cursor.style.transform = "scale(1)";
  });
});
