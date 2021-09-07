// Fixed Header Start
$(window).scroll(function() {
    if ($(window).scrollTop() >= 1) {
        $('.header').addClass('fixedHeader');
    } else {
        $('.header').removeClass('fixedHeader');
    }
});
// Fixed Header End



// Sidebar Start
$('.navbar-toggler').click(function() {
    if ($(this).parents('.navbar').find('.navbar-collapse').hasClass('show')) {
        $('.navbar-expand-md .navbar-collapse').css('left', '-250px');
    } else {
        $('.navbar-expand-md .navbar-collapse').css('left', '0px');
    }
});
// Sidebar End

// Navbar Button Style Start
$(document).ready(function() {
    $('.navbar-toggler').click(function() {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active')
        } else {
            $(this).addClass('active')
        }
    });
});
// Navbar Button Style End

// Banner Slider Start
$(document).ready(function() {
    $('.bannerSlider').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        infinite: true
    });
});
// Banner Slider End

// Image Modal Start
$(document).ready(function() {
    $('.listImage').on('click', function() {
        $('#imageModal').modal('show');
        var modalImg = $(this).find('.listImageInner img').attr('src');
        var changesImg = $('#imageModal').find('.modalImageBox img').attr('src', modalImg);
    });
});
// Image Modal End

// Scroll To Section Start
$(document).ready(function() {
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 250
        }, 1300);
    }
    $('[data-scroll]').on('click', scrollToSection);
}());
// Scroll To Section End

// Scroll Top Function Start
$(document).ready(function() {
    var scrollTop = $(".scrollTop");
    $(scrollTop).on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });
});
// Scroll Top Function End