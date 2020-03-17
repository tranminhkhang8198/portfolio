$(document).ready(function(e) {
    $win = $(window);
    $navbar = $('#header');
    $toggle = $('.toggle-button');
    $mouse = $('#mouse_icon');
    var width = $navbar.width();

    // resize event
    $win.resize(() => {
        toggle_onclick($win, $navbar, width);
    });


    // scroll detect
    window.addEventListener("scroll", function() {
        if (window.pageYOffset === 0) {
            $mouse.css("display", "block");
        } else {
            $mouse.css("display", "none");
        }
    });

    $toggle.click(function(e) {
        $navbar.toggleClass("toggle-left");
    });
});

function toggle_onclick($win, $navbar, width) {
    if ($win.width() <= 768) {
        $navbar.css({ left: `-${width}px` });
    } else {
        $navbar.css({ left: '0px' })
    }
}

var typed = new Typed('#typed', {
    strings: [
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});

var typed_2 = new Typed('#typed_2', {
    strings: [
        'Web Developer',
        'Freelancer'
    ],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});
