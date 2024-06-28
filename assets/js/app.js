$('.parentslider').slick({
    dots: false,
    infinite: true,
    prevArrow: ".previous",
    nextArrow: ".next2",
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

const btnsub = document.querySelector(".btn-sub");
const btnadd = document.querySelector(".btn-add");
const number = document.querySelector(".number");

btnsub.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML-1;
});

btnadd.addEventListener("click", function () {
    number.innerHTML = +number.innerHTML+1;
});

$('.parentslider2').slick({
    dots: false,
    infinite: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    speed: 300,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// accordion//

let accordion_boxes = document.querySelectorAll(".accordion-box");

accordion_boxes.forEach((items, index) => {
  let head_box = items.querySelector(".accordion_btn");
  let paragraph = items.querySelector(".accordion_para");
  let plus_sign = items.querySelector(".accordion_sign");

  // to hide all except the first one //
  if (index !== 0) {
    paragraph.style.display = "none";
    plus_sign.innerHTML = "+";
  }

  // Add event listener to each button //
  head_box.addEventListener("click", function () {
    if (paragraph.style.display === "none") {
      paragraph.style.display = "block";
      plus_sign.innerHTML = "-";
    } else {
      paragraph.style.display = "none";
      plus_sign.innerHTML = "+";
    }

    // If an accordion box is opened, close other accordion boxes //
    if (paragraph.style.display === "block") {
      accordion_boxes.forEach((other, otherIndex) => {
        if (otherIndex !== index) {
          other.querySelector(".accordion_para").style.display = "none";
          other.querySelector(".accordion_sign").textContent = "+";
        }
      });
    }
  });
});

let scroll_button = document.querySelector(".scroll-button");

function backtoTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    scroll_button.setAttribute("style", "display: flex;");
  } else {
    scroll_button.setAttribute("style", "display: none;");
  }
});