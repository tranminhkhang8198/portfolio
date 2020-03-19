$(document).ready(function (e) {
  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  $mouse = $("#mouse_icon");
  var width = $navbar.width();

  // resize event
  $win.resize(() => {
    toggle_onclick($win, $navbar, width);
  });

  // scroll detect
  window.addEventListener("scroll", function () {
    if (window.pageYOffset === 0) {
      $mouse.css("display", "block");
    } else {
      $mouse.css("display", "none");
    }
  });


  // Gets the video src from the data-src on each button
  var $videoSrc;
  $('.video-btn').click(function () {
    $videoSrc = $(this).data("src");
    console.log($videoSrc);
  });

  // when the modal is opened autoplay it  
  $('#myModal').on('shown.bs.modal', function (e) {

    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
  })



  // stop playing the youtube video when I close the modal
  $('#myModal').on('hide.bs.modal', function (e) {
    // a poor man's stop video
    $("#video").attr('src', $videoSrc);
    $(".button").unbind("mouseenter mouseleave");
  })


  $toggle.click(function (e) {
    $navbar.toggleClass("toggle-left");
  });
});

function toggle_onclick($win, $navbar, width) {
  if ($win.width() <= 768) {
    $navbar.css({
      left: `-${width}px`
    });
  } else {
    $navbar.css({
      left: "0px"
    });
  }
}

var typed = new Typed("#typed", {
  strings: ["Web Developer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

var typed_2 = new Typed("#typed_2", {
  strings: ["Web Developer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  if (anchor.getAttribute("href").startsWith("#demo")) {
    return;
  }

  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});