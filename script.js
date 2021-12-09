window.addEventListener("load", () => {
  document.querySelectorAll(".aos").forEach((element) => {
    element.style.transition = `all ${element.dataset.aosTime} ease`;
    element.dataset.aosType === "vertical"
      ? (element.style.transform = `translateY(${element.dataset.aosValue})`)
      : (element.style.transform = `translateX(${element.dataset.aosValue})`);
  });
});

window.addEventListener("scroll", () => {
  let elements = document.querySelectorAll(".aos");
  let appearPoint = 50; //tweak this to make element appear sooner
  elements.forEach((element) => {
    let positionFromTop = element.getBoundingClientRect().top;
    if (positionFromTop < window.innerHeight - appearPoint) {
      element.style.opacity = 1;
      element.style.transform = "translateX(0px) translateY(0px)";
    } else {
      element.style.opacity = 0;
      element.dataset.aosType === "vertical"
        ? (element.style.transform = `translateY(${element.dataset.aosValue})`)
        : (element.style.transform = `translateX(${element.dataset.aosValue})`);
    }
  });
});
