const main = document.querySelectorAll(".about");
const about = document.querySelectorAll(".about__card");

window.onload = function() {
  const image = document.querySelector(".hero__image");
  const text = document.querySelector(".flo"); 
  image.classList.toggle("imgIn");
}

let options = {
  threshold: 0.1,
};
let optionsTwo = {
  threshold: 0.5,
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if(entry.isIntersecting){
      const title = entry.target.querySelector('h1');
      const line = entry.target.querySelector(".about__underline");
      const paragraph = entry.target.querySelectorAll(".about__paragraph");
      title.classList.toggle('pop');
      line.classList.toggle("slideIn");
      paragraph.forEach(el => el.classList.toggle("pop"));
      observer.unobserve(entry.target);
    }   
  });
}, options);

let observerTwo = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".about__work h1").style.opacity = 1;
      const svg = entry.target.querySelector("img");
      svg.classList.toggle("svgIn");
      

      observerTwo.unobserve(entry.target);
    }
  });
}, optionsTwo);

main.forEach((el) => observer.observe(el));
about.forEach((el) => observerTwo.observe(el));
