/* 
* @Author: gicque_p
* @Date:   2015-09-29 12:23:57
* @Last Modified by:   gicque_p
* @Last Modified time: 2015-09-29 19:51:36
*/

$(document).ready(function() {
    $('.header').css('opacity', 0);
    $('.top').css('opacity', 0);

    $('.header').animate({opacity: 1}, 1500, function() {
        $('.top').animate({opacity: 1}, {duration: 1500}, function() {});
        // $('.top').show("blind", "easeOutExpo", 1000);
    });

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 800);

        return false;
    });
});
