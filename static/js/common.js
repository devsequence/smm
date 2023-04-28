AOS.init();
$('.header-btn').on('click', function (e) {
    var $this = $(this);
    $this.toggleClass('active');
    $('.header').toggleClass('active');
});
$(".why-slider").slick({
    speed: 500,
    fade: true,
    cssEase: 'linear',
    dots: true,
    prevArrow: $('.more-slider-prev'),
    nextArrow: $('.more-slider-next'),
    appendDots: $('.slider-dots__list'),

});

$('.courses-item').each(function (e) {
    var $ths = $(this);
    var $thsText = $ths.find('.courses-item__text').text();
    var dots = "...";
    var limit = 290;
    if($thsText.length > limit){
        var string = '';
        string = $thsText.substring(0,limit) +dots;
        $ths.find('.courses-item__text').text(string);
        $ths.find('.btn-secondary').on('click', function (e) {
            e.preventDefault();
            var $ths = $(this);
            var $thsParents = $ths.parents('.courses-item');
            var $thsParentsTop = $thsParents.offset().top;
            $ths.find('span').toggleClass('hidden');
            $thsParents.toggleClass('active');
            $('html, body').animate({
                scrollTop: $thsParentsTop
            }, 300);
            if($thsParents.hasClass('active')){
                $thsParents.find('.courses-item__text').text($thsText);
            }else {
                $thsParents.find('.courses-item__text').text(string);
            }
            return false;
        });
    }else{
        $ths.find('.btn-secondary').on('click', function (e) {
            e.preventDefault();
            var $ths = $(this);
            var $thsParents = $ths.parents('.courses-item');
            var $thsParentsTop = $thsParents.offset().top;
            $ths.find('span').toggleClass('hidden');
            $thsParents.toggleClass('active');
            $('html, body').animate({
                scrollTop: $thsParentsTop
            }, 300);
            return false;
        });
    }

});

$(".speakers-slider").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.speakers-slider-nav .prev'),
    nextArrow: $('.speakers-slider-nav .next'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});
$('.video-button').on('click', function() {
    $(this).find('img').toggleClass('hidden');
    var video = $(".author-video__media video").get(0);
    if ( video.paused ) {
        video.play();
    } else {
        video.pause();
    }
    return false;
});
$('.video-item').on('click', function() {
    var video = $(this).find('video').get(0);
    if ( video.paused ) {
        video.play();

    } else {
        video.pause();

    }
    return false;
});
$('.prev, .next').on('click', function() {
    var video = $('video').get(0);
    video.pause();


});
$(".reviews-slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: $('.reviews-slider-nav .prev'),
    nextArrow: $('.reviews-slider-nav .next')
});
$(".price-slider").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.price-slider .prev'),
    nextArrow: $('.price-slider .next'),
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                dots: true,
                slidesToScroll: 1,
                variableWidth: true
            }
        },
    ]
});
$('.header-logo a, .footer-logo a, .to-top').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
});
$('.step-item__title').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    $this.next().slideToggle();
    $this.parent().toggleClass('open');
});

if($('.hero').length > 0){
    $(window).on('scroll', function() {
        var $this = $(this),
            $header = $('.header');
        if ($this.scrollTop() > 1) {
            $header.addClass('scroll-nav');
        }

        else{
            $header.removeClass('scroll-nav');
        }
        if ($this.scrollTop() > 780) {
            $('.to-top').addClass('active');
        }else{
            $('.to-top').removeClass('active');
        }
    });
    $('.header-nav a, .footer-nav a, .btn-scroll').on('click', function (e) {
        e.preventDefault();
        var ths = $(this);
        var thsId = ths.data('id');
        var headerHeight = $('.header').height();
        if ($(ths).data('id')) {
            $('html, body').animate({
                scrollTop: $('#'+thsId).offset().top - 120
            }, 1000);
            $('.header, .header-btn').removeClass('active');
            return false;
        }else{
            $('.popup').addClass('active');
            ths.addClass('active');
        }
    });
}else{
    $('.header').addClass('page-header');
    $('.header-nav a, .footer-nav a').on('click', function (e) {
        var ths = $(this);
        if ($(ths).data('id')){}else{
            $('.popup').addClass('active');
            ths.addClass('active');
        }
    });
}
// $(document).mouseup(function (e){
//     var div = $('next');
//     if (!div.is(e.target)
//         && div.has(e.target).length === 0) {
//
//     }
// });