$(document).ready(function () {

    $('.anim').each(function () {
        console.log($(this))
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
            // the element is visible, do something
            var anim = $(this).attr('anim');
            console.log(anim);
            $(this).addClass('animate__animated ' + anim)
        } else {

        }
    });
    $(window).scroll(function () {
        $('.anim').each(function () {
            console.log($(this))
            var top_of_element = $(this).offset().top;
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
            var top_of_screen = $(window).scrollTop();

            if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)) {
                // the element is visible, do something
                var anim = $(this).attr('anim');
                console.log(anim);
                $(this).addClass('animate__animated ' + anim)
            } else {

            }
        });
    });

    $('.menu-hamburguesa>img').click(function(){
        document.getElementById('modal').style.display = "flex";
    });

    $('.modal-close').click(function(){
        document.getElementById('modal').style.display = "none";
    });
});