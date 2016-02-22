/* 
* @Author: gicque_p
* @Date:   2015-09-29 12:23:57
* @Last Modified by:   gicque_p
* @Last Modified time: 2015-11-20 16:14:14
*/

$(document).ready(function() {
    $('.header').css('opacity', 0);
    $('.top').css('opacity', 0);

    $('.header').animate({opacity: 1}, 1500, function() {
        $('.top').animate({opacity: 1}, {duration: 1500}, function() {});
    });

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 50
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

    google.maps.event.addDomListener(window, 'load', initialize);
});

function isVisible(elementToBeChecked) {
    var TopView = $(window).scrollTop();
    var BotView = TopView + $(window).height();
    var TopElement = $(elementToBeChecked).offset().top;
    var BotElement = TopElement + $(elementToBeChecked).height();
    return ((BotElement <= BotView) && (TopElement >= TopView));
}

function initialize() {
    var mapCanvas = document.getElementById('map');

    var mapOptions = {
        center: new google.maps.LatLng(50.6403629, 3.0559652,21),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var map = new google.maps.Map(mapCanvas, mapOptions)

    var marker = new google.maps.Marker({
        position: new google.maps.LatLng(50.6403629, 3.0559652,21),
        title: "Je suis ici !"
    });

    marker.setMap(map);
}
