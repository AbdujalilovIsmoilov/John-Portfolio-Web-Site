window.addEventListener("scroll", () => {
  let header = document.querySelector(".header");
  header.classList.toggle("active", window.scrollY > 0);
});

let secretHeader = document.querySelector(".secret__header");
let secretLink = document.querySelectorAll(".secret__header_link");
let faBars = document.querySelector(".fa-bars");
let faTimes = document.querySelector(".fa-times");


faBars.addEventListener("click",()=>{
  secretHeader.style.transform = "scale(1.1)";
});

faTimes.addEventListener("click",()=>{
  secretHeader.style.transform = "scale(0)";
});

secretLink.forEach((item)=>{
  item.addEventListener("click",()=>{
    secretHeader.style.transform = "scale(0)";
  });
})