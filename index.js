$(document).ready(function (e) {
  // responsive trigger
  if (screen.width < 600) {
    var times = document.querySelectorAll(".time");
    times.forEach((el) => el.remove());

    var lis = document.querySelectorAll(".timeline ul li");
    lis.forEach((el) => el.classList.remove("mx-5"));
  }

  $win = $(window);
  $navbar = $("#header");
  $toggle = $(".toggle-button");
  var width = $navbar.width();
  $mouse = $("#mouse_icon");

  console.log(width);

  toggle_onclick($win, $navbar, width);

  // resize event
  $win.resize(function () {
    toggle_onclick($win, $navbar, width);
  });

  $toggle.click(function (e) {
    $navbar.toggleClass("toggle-left");
  });

  // scroll detect
  window.addEventListener("scroll", function () {
    if (window.pageYOffset === 0) {
      $mouse.css("display", "block");
    } else {
      $mouse.css("display", "none");
    }
  });

  // stop video
  function pauseAllVideos() {
    $("iframe")
      .contents()
      .find("video")
      .each(function () {
        this.pause();
      });
    $("video").each(function () {
      this.pause();
    });
  }

  // Gets the video src from the data-src on each button
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });

  // when the modal is opened autoplay it
  $("#myModal").on("shown.bs.modal", function (e) {
    // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });

  // stop playing the youtube video when I close the modal
  $("#myModal").on("hide.bs.modal", function (e) {
    // a poor man's stop video
    // $("#video").attr('src', $videoSrc);
    pauseAllVideos();
  });
});

function toggle_onclick($win, $navbar, width) {
  if ($win.width() <= 768) {
    $navbar.css({
      left: `-${width}px`,
    });
  } else {
    $navbar.css({
      left: "0px",
    });
  }
}

var typed = new Typed("#typed", {
  strings: ["Web Developer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

var typed_2 = new Typed("#typed_2", {
  strings: ["Web Developer", "Freelancer"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  if (anchor.getAttribute("href").startsWith("#demo")) {
    return;
  }

  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
