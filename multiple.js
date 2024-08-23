let divs = document.querySelectorAll("section");
let headerLinks = document.querySelectorAll("header nav a");
let up = document.querySelector(".up");
let head = document.querySelector("header");
let topRight = document.querySelector(".top-right");
let scrowl = function () {};

var wari = document.querySelector("title");
wari.textContent = "MAN CITY BIG THREE";
// console.log(wari)

divs.forEach((section) => {
  // console.log(section.id)
  let hide = document.createElement("h4");
  let anchor = document.createElement("a");
  anchor.innerText = section.id;
  hide.appendChild(anchor);
  topRight.appendChild(hide);
});

window.onscroll = () => {
  divs.forEach((sec, i) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    let hmm = topRight.querySelectorAll("a");
    hmm[i].classList.remove("active");
    if (top >= offset && top < offset + height) {
      hmm[i].classList.add("active");
    }
  });
};

window.addEventListener("scroll", function () {
  if (window.scrollY > 0) {
    head.classList.add("fixed");
    up.classList.add("top");
  } else {
    head.classList.remove("fixed");
    up.classList.remove("top");
  }
});

window.addEventListener("scroll", function () {
  head.classList.remove("tran");
  up.classList.remove("tran");
  clearTimeout(scrowl);

  scrowl = setTimeout(function () {
    if (window.scrollY > 380) {
      head.classList.add("tran");
      up.classList.add("tran");
    } else {
      head.classList.remove("tran");
      up.classList.remove("tran");
    }
  }, 8000);
  document;
  window.addEventListener("mousemove", function () {
    head.classList.remove("tran");
    up.classList.remove("tran");
    clearTimeout(scrowl);
    scrowl = setTimeout(function () {
      if (window.scrollY > 380) {
        head.classList.add("tran");
        up.classList.add("tran");
        //   console.log(window.scrollY);
      } else {
        head.classList.remove("tran");
        up.classList.remove("tran");
      }
    }, 8000);
  });
});

up.addEventListener("click", function (event) {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

topRight.addEventListener("click", function (event) {
  if (event.target) {
    const off = document.getElementById(event.target.innerText).offsetTop;
    window.scrollTo({ top: off, behavior: "smooth" });
    console.log(window.scrollY);
  }
});
function menu() {
  var x = document.getElementById("myDiv");
  if (x.style.display === "none") {
    x.style.display = "flex";
  } else {
    x.style.display = "none";
  }
}
