(function() {
    "use strict";
      /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  }

/**
   * Toggle .navbar-reduce
   */
let selectHNavbar = select('.navbar-default');
let topBar = select('#topbar');
if (selectHNavbar) {
  onscroll(document, () => {
    if (window.scrollY > 100) {
      selectHNavbar.classList.add('navbar-reduce');
      topBar.classList.add('remove');
    } else {
        selectHNavbar.classList.remove('navbar-reduce');
        topBar.classList.remove('remove');
    }
  })
}
if (window.innerWidth > 600) {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
} else {
  var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

const close=select("closebtn");
on("click",".openBtn", openSearch);
on("click",".closebtn", closeSearch);

function openSearch() {
  document.getElementById("myOverlay").style.display = "flex";
}

function closeSearch() {
  document.getElementById("myOverlay").style.display = "none";
}

  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  on("click","#myBtn", topFunction);
})()

