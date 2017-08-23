/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
  if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
    $('.navbar-toggle:visible').click();
  }
});

$(document).ready(function(){
    $('[tool-tip-toggle="tooltip-text"]').tooltip({
        placement : 'bottom'
    });
});

$(document).ready(function(){
  $('.chocolat-parent').Chocolat({
    loop           : false,
    duration: 300,
    overlayOpacity : 0.9,
    fullScreen        : false,
    enableZoom        : false,
    zoomedPaddingX: function (imgWidth, canvasWidth) {
        // add a padding around the zoomed image
        // default to 0
        return canvasWidth / 4;
    },
    zoomedPaddingY: function (imgHeight, canvasHeight) {
        // add a padding around the zoomed image
        // default to 0
        return canvasHeight / 4;
    }

  });
  $('#ForCover').Chocolat({
      loop           : true,
      imageSize     : 'cover',
      enableZoom    :  false,
      overlayOpacity : 0.9,
      zoomedPaddingX: function (imgWidth, canvasWidth) {
          // add a padding around the zoomed image
          // default to 0
          return canvasWidth / 4;
      },
      zoomedPaddingY: function (imgHeight, canvasHeight) {
          // add a padding around the zoomed image
          // default to 0
          return canvasHeight / 4;
      }
  });
});

$(document).ready(function(){

  $('#ex3').Chocolat({ on:'click',
magnify:0.25
 });

});
