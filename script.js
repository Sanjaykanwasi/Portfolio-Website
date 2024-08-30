$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-btn").addClass("show");
    } else {
      $(".scroll-btn").removeClass("show");
    }
  });

  // Alert on Send Message
  $(".button button").click(function () {
    alert("Message Sent");
  });

  // Slide Up Script
  $(".scroll-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //   Toggle Menu butoon Script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
  });

  // Text Animation Script
  var typed = new Typed(".typing", {
    strings: [
      "Fresher",
      "FrontEnd Developer",
      "Software Developer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Fresher",
      "FrontEnd Developer",
      "Software Developer",
      "Freelancer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // Owl Carousel Script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
