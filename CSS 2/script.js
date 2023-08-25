const slider = document.querySelector(".slider");
const pseudoElementSection = document.querySelector(".pseudo-element-section");
const card3D = document.querySelector(".card-3d");
const content = document.querySelector(".content");

slider.addEventListener("input", () => {
  const rotation = slider.value;
  pseudoElementSection.style.transform = `rotate(${rotation}deg)`;
});

card3D.addEventListener("click", () => {
  card3D.classList.toggle("rotate");
});

content.addEventListener("mousemove", (event) => {
  const { clientX, clientY } = event;

  if (clientX < window.innerWidth / 2 && clientY < window.innerHeight / 2) {
    content.style.cursor = "pointer";
    content.classList.add("cursor-pointer");
    content.classList.remove("cursor-grabbing", "cursor-rotate");
  } else if (clientX > window.innerWidth / 2 && clientY > window.innerHeight / 2) {
    content.style.cursor = "grabbing";
    content.classList.add("cursor-grabbing");
    content.classList.remove("cursor-pointer", "cursor-rotate");
  } else {
    content.style.cursor = "url('rotate-cursor.png') 16 16, auto";
    content.classList.add("cursor-rotate");
    content.classList.remove("cursor-pointer", "cursor-grabbing");
  }
});
