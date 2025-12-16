// js/image-zoom.js
document.addEventListener("DOMContentLoaded", () => {
  const zoomableImg = document.querySelector(".zoomable");
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!zoomableImg || !lightbox || !lightboxImg) return;

  zoomableImg.addEventListener("click", () => {
    lightboxImg.src = zoomableImg.dataset.zoomSrc;
    lightbox.classList.remove("hidden");
    lightbox.setAttribute("aria-hidden", "false");
  });

  lightbox.addEventListener("click", () => {
    closeLightbox();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
    }
  });

  function closeLightbox() {
    lightbox.classList.add("hidden");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImg.src = "";
  }
});
