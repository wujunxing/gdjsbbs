$(function () {

    if ($("#slider").find("img").length > 1) {
        $("#slider").nivoSlider({ pauseTime: 3000, controlNav: false, controlNavThumbs: true });
    }
    else {
        $("#slider").removeClass("nivoSlider");
    }

    $(".bbs_nav .links01").hover(function () {
        $(this).children(".slist").show()
    }, function () {
        $(this).children(".slist").hide()
    })

});
