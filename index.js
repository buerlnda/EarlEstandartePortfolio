$(document).ready(function(){
    console.log("niayo si jQuery")

    $('#link1').on('click', function (e) {
        console.log("niayo")
        $('.body-div').fadeIn(500);
        $('.login.wrap').fadeOut(500);
        $('html, body').animate(
            {
                scrollTop: $('#nameCard').offset().top,
            },
            500,
            'linear'
        );
    });
    $('#link2').on('click', function (e) {
        $('.body-div').fadeIn(500);
        $('.login.wrap').fadeOut(500);
        $('html, body').animate(
            {
                scrollTop: $('#techUsed').offset().top,
            },
            500,
            'linear'
        );
    });
    $('#link3').on('click', function (e) {
        $('.body-div').fadeIn(500);
        $('.login.wrap').fadeOut(500);
        $('html, body').animate(
            {
                scrollTop: $('#educBackground').offset().top,
            },
            500,
            'linear'
        );
    });
    $('#link4').on('click', function () {
        $('.login.wrap').fadeIn(500);
        $('.body-div').hide();
    });
    $(window).on('scroll', function(){
        console.log("scrolling")
        $('#techUsed').on('mouseenter touchmove',function(){
            $('.heading').fadeIn(500);
            $('#techContainer').animate({
                opacity: 1
            },1000)
        });
        $('.preContainer').on('mouseenter touchmove', function(){
            $('#preContainer').animate({
                opacity: 1
            },1000)
        })
        $('.elemContainer').on('mouseenter touchmove', function(){
            $('#elemContainer').animate({
                opacity: 1
            }, 1000)
        })
        $('.jhsContainer').on('mouseenter touchmove', function(){
            $('#jhsContainer').animate({
                opacity: 1
            },1000)
        })
        $('.shsContainer').on('mouseenter touchmove',function(){
            $('#shsContainer').animate({
                opacity: 1
            }, 1000)
        })
        $('.collegeContainer').on('mouseenter touchmove',function(){
            $('#collegeContainer').animate({
                opacity: 1
            }, 1000)
        })
    
    })
})
