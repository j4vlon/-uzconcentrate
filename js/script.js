// Hamburger
$(document).ready(function () {
  $(".hamburger").on("click", function () {
    $(".hamburger").toggleClass("is-active");
    $(".navigation-list").toggleClass("un-active");
    $(".navigation-list").toggleClass("display");
    $(".header").toggleClass("height");
  });
  // $(".article-txt").hover(function () {
  //     $(this).toggleClass("article-news-txt");
  //     $(".article-news-p").toggleClass("un-active");
  //  });
  $(window).scroll(function () {
    if ($(document).scrollTop() > 200) {
      $("header").addClass("header-bg");
      $("header").removeClass("main-nav-header");
    } else {
      $("header").removeClass("header-bg");
      $("header").addClass("main-nav-header");
    }
  });
});

//Owl clider script
(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  var carousel = function () {
    $(".home-slider").owlCarousel({
      loop: true,
      autoplay: false,
      margin: 0,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      dots: true,
      autoplayHoverPause: false,
      items: 1,
      navText: [
        "<span class='ion-ios-arrow-back'></span>",
        "<span class='ion-ios-arrow-forward'></span>",
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  };
  carousel();
})(jQuery);
//Owl clider script

//Navigation dropdown menu
/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
//Navigation dropdown menu

$(window)
  .scroll(function () {
    var scrollDistance = $(document).scrollTop();
    // Show/hide menu on scroll
    //if (scrollDistance >= 850) {
    //		$('nav').fadeIn("fast");
    //} else {
    //		$('nav').fadeOut("fast");
    //}

    // Assign active class to nav links while scolling
    $(".page-section").each(function (i) {
      if ($(this).position().top <= scrollDistance + 250) {
        $(".navigation a.active").removeClass("active");
        $(".navigation a").eq(i).addClass("active");
      }
    });
  })
  .scroll();
//Back to top btn
var btn = $("#top");

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

//Product slider
$(".slider")
  .on("initialized.owl.carousel changed.owl.carousel", function (e) {
    if (!e.namespace) {
      return;
    }
    $("#counter").text(
      e.relatedTarget.relative(e.item.index) + 1 + "  /  " + e.item.count
    );
  })
  .owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: false,
  });

$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
  });

  // Custom Button
  $(".nextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".prevBtn").click(function () {
    owl.trigger("prev.owl.carousel");
  });
});

class Lightbox {
  constructor() {
    this.init();
  }

  init() {
    this.container = document.createElement("div");
    this.container.id = "lightbox";
    document.body.appendChild(this.container);

    this.lightboxImg = document.createElement("img");
    this.container.appendChild(this.lightboxImg);

    this.addListeners();
  }

  addListeners() {
    const images = document.querySelectorAll(".gallery-card img");
    images.forEach((img) => {
      img.addEventListener("click", () => this.galleryImgClicked(img));
    });

    this.container.addEventListener("click", () => {
      this.hideLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") this.hideLightbox();
    });
  }

  hideLightbox() {
    this.container.classList.remove("active");
  }

  galleryImgClicked = (img) => {
    this.lightboxImg.src = img.src;
    this.container.classList.add("active");
  };
}

const lightbox = new Lightbox();
