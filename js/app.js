/* 
* @Author: gicque_p
* @Date:   2015-09-29 12:23:57
* @Last Modified by:   gicque_p
* @Last Modified time: 2015-10-07 12:44:08
*/

$(document).ready(function() {
    $('.header').css('opacity', 0);
    $('.top').css('opacity', 0);

    $('.header').animate({opacity: 1}, 1500, function() {
        $('.top').animate({opacity: 1}, {duration: 1500}, function() {});
    });

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 800);

        return false;
    });

    $(window).scroll(function(){
        if (isVisible($('#home'))) {
            $('a[href=#home]').parent().addClass('disabled-link');
        } else {
            $('a[href=#home]').parent().removeClass('disabled-link');
        }

        if (isVisible($('#me h3'))) {
            $('a[href=#me]').parent().addClass('disabled-link');
        } else {
            $('a[href=#me]').parent().removeClass('disabled-link');            
        }
        
        if (isVisible($('#projects h3'))) {
            $('a[href=#projects]').parent().addClass('disabled-link');
        } else {
            $('a[href=#projects]').parent().removeClass('disabled-link');            
        }

        if (isVisible($('#contact h3'))) {
            $('a[href=#contact]').parent().addClass('disabled-link');
        } else {
            $('a[href=#contact]').parent().removeClass('disabled-link');            
        }
    });
});

function isVisible(elementToBeChecked) {
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $(elementToBeChecked).offset().top;
    var BotElement = TopElement + $(elementToBeChecked).height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}
