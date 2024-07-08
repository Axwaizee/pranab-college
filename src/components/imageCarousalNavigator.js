const cursor = "/assets/elements/ImageCarausal/cursor/cursorPrev.svg";
export function initializeCarousalEventListener() {
  const carousalContainer = document.getElementById("slider");

  if (carousalContainer) {
    carousalContainer.addEventListener("mousemove", (event) => {
      const rect = carousalContainer.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const mid = (rect.right - rect.left) / 2;

      if (x < mid) {
        console.log("Mouse Position: left");
        carousalContainer.style.cursor = `url(${cursor}), auto`;
      } else {
        console.log("Mouse Position: right");
        carousalContainer.style.cursor =
          "url(./public/assets/elements/ImageCarausal/cursor/cursorNext.svg), auto";
      }
    });
  } else {
    console.error('Element with ID "slider" not found.');
  }
}
