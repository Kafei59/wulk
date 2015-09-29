/* 
* @Author: gicque_p
* @Date:   2015-09-29 12:23:57
* @Last Modified by:   gicque_p
* @Last Modified time: 2015-09-29 12:33:44
*/

$(document).ready(function() {
    $('.top').css('opacity', 0);
    $('.top').delay(1500).animate({opacity: 1}, 1500, function() {});

    $('.header').css('opacity', 0);
    $('.header').animate({opacity: 1}, 1500, function() {});
});
