jQuery(".flexslider").flexslider({
    animation: "fade",
    controlNav: false,
    directionNav: false,
    touch: true,
    drag: true,
    slideshow: true,
    prevText: "",
    nextText: "",
    slideshowSpeed: 5000,
    animationSpeed: 2000,
});

// Fancybox Config
$('[data-fancybox]').fancybox({
    buttons: ["slideShow", "zoom", "fullScreen", "close"],
    loop: false,
    protect: true,
    arrows: true,
    transitionEffect: "slide",
});

$(document).ready(function () {
    $('.play-btn').click(function () {
        $('.vdo-modal video')[0].play();
    })
    $('.vdo-modal').on('hidden.bs.modal', function () {  // Using Bootstrap's modal event
        $('.vdo-modal video')[0].pause();  // Pause the video
        $('.vdo-modal video')[0].currentTime = 0;  // Reset the video to the beginning
    });
})


var swiperOptions = {
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 0,
        // pauseOnMouseEnter:true,
        disableOnInteraction: false,
    },
    loopAddBlankSlides: true,
    cssMode: true,
    slidesPerView: 6,
    speed: 5000,
    grabCursor: false,
    loopAdditionalSlides: 2,
    spaceBetween: 50,
    breakpoints: {
        575: {
            slidesPerView: 2,
        },

        767: {
            slidesPerView: 3,


        },

        991: {
            slidesPerView: 4,


        },

        1199: {
            slidesPerView: 5,
        },
    },
};

var swiper = new Swiper(".clients .swiper-container", swiperOptions);





$(document).ready(function () {
    if ($(window).width() > 991) {
        var footerHeight = $('footer').outerHeight();
        $('footer').prev().addClass('before-footer').css('margin-bottom', footerHeight);
    }
});
$(document).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 50) {
        $('header').addClass('scrolled');

    } else {
        $('header').removeClass('scrolled');
    }
})
$(document).scroll(function () {
    var scroll_foot = $(window).scrollTop();
    if (scroll_foot >= 100) {
        $('footer').addClass('visible');

    } else {
        $('footer').removeClass('visible');
    }
})

gsap.registerPlugin(ScrollTrigger);

const backTextWrapper = document?.querySelectorAll(".moving-text");

backTextWrapper.forEach((section) => {

    ScrollTrigger.create({
        trigger: section,
        start: 'center center',
        end: '+=100%',
        pin: false
    })

    const textLines = section?.querySelectorAll(".big-caption");

    textLines.forEach(function (line, index) {

        const [x, xEnd] = index % 2
            ? [window.innerWidth, (line.scrollWidth - section.offsetWidth) * -1]
            : [line.scrollWidth * -1, 0];

        gsap.fromTo(
            line,
            { x },
            {
                force3D: false,
                x: xEnd,
                scrollTrigger: {
                    trigger: section,
                    scrub: 0.5,
                    start: '-100% bottom',
                    end: '+=250%',

                }
            }
        );

    })

});
new WOW().init();
$('.toggle-menu').click(function () {
    $('.menu').addClass('open-menu');
    $('body').addClass('menu-open');
})
$('.close-menu-btn').click(function () {
    $('.menu').removeClass('open-menu');
    $('body').removeClass('menu-open');
})
$('.drop-down').each(function () {
    var $dropdown = $(this);

    $("a.dropdown-toggle.main-toggle", $dropdown).click(function (e) {
        e.preventDefault();
        $div = $(".drop-menu", $dropdown);
        $div.slideToggle();
        $(".drop-menu").not($div).slideUp();
        return false;
    });

});
$('.has-sub-menu').each(function () {
    var $dropdownsub = $(this);

    $(".dropdown-toggle.sub-toggle", $dropdownsub).click(function (e) {
        e.preventDefault();
        $div1 = $(".sub-menu", $dropdownsub);
        $div1.slideToggle();
        $(".sub-menu").not($div1).slideUp();
        return false;
    });

});
$(window).on("load", function () {
    jQuery(".preloader")
        .fadeOut("slow", function () {
            jQuery(this).addClass("loaded");
        });
});


if ($(window).width() > 575) {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            for (let i = 0; i <= index; i++) {
                tabs[i].classList.add('active');
                tabs[i].classList.add('clicked');
            }


            for (let i = index + 1; i < tabs.length; i++) {
                tabs[i].classList.remove('active');
                tabs[i].classList.remove('clicked');
            }


            tabs[index].classList.remove('clicked');
        });
    });
}
if ($(window).width() < 576) {
    $(document).ready(function () {
        $('.vision-tabs .tab h3').on('click', function () {
            $(this).next('.text-wrap').slideToggle();
            $('.vision-tabs .text-wrap').not($(this).next('.text-wrap')).slideUp();
        });
    });
}