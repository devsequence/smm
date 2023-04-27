AOS.init({disable: 'mobile'});
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
    prevArrow: $('.speakers-slider-prev'),
    nextArrow: $('.speakers-slider-next')
});
$('.header-logo a, .footer-logo a').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
    return false;
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
$(document).mouseup(function (e){
    var div = $('.popup');
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.header-nav a, .footer-nav a').removeClass('active');
    }
});