$(".header__nav-toggle").click(function() {
    $(".header__navigation").toggleClass("visible");
    $("body").toggleClass("no-scroll");

    if($(".header__navigation").hasClass("visible")) {
        $(".header__nav-toggle img").prop("src", "images/icon-close.svg");
    }
    else {
        $(".header__nav-toggle img").prop("src", "images/icon-hamburger.svg");
    }
})
