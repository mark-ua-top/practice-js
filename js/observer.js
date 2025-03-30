const images = document.querySelectorAll(".imageTestImg");

const options = {};

const animationObserver = () => {};

const obs = new IntersectionObserver(animationObserver, options);

console.log(images);

// obs.observe(images);

images.forEach((image) => {
  obs.observe(image);
});
