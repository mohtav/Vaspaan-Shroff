function collapseNavbar() {
    $(".navbar").offset().top > 50 ? $(".navbar-fixed-top").addClass("top-nav-collapse") : $(".navbar-fixed-top").removeClass("top-nav-collapse");
}

$(window).scroll(collapseNavbar), $(document).ready(collapseNavbar), $(function() {
    $("a.page-scroll").bind("click", function(event) {
        var $anchor = $(this);
        $("html, body").stop().animate({
            scrollTop: $($anchor.attr("href")).offset().top
        }, 1500, "easeInOutExpo"), event.preventDefault();
    });
}), $(".navbar-collapse ul li a").click(function() {
    "dropdown-toggle active" != $(this).attr("class") && "dropdown-toggle" != $(this).attr("class") && $(".navbar-toggle:visible").click();
}), $(document).ready(function() {
    $('[tool-tip-toggle="tooltip-text"]').tooltip({
        placement: "bottom"
    });
}), $(document).ready(function() {
    $(".chocolat-parent").Chocolat({
        loop: !1,
        duration: 300,
        overlayOpacity: .9,
        fullScreen: !1,
        enableZoom: !1,
        zoomedPaddingX: function(imgWidth, canvasWidth) {
            return canvasWidth / 4;
        },
        zoomedPaddingY: function(imgHeight, canvasHeight) {
            return canvasHeight / 4;
        }
    }), $("#ForCover").Chocolat({
        loop: !0,
        imageSize: "cover",
        enableZoom: !1,
        overlayOpacity: .9,
        zoomedPaddingX: function(imgWidth, canvasWidth) {
            return canvasWidth / 4;
        },
        zoomedPaddingY: function(imgHeight, canvasHeight) {
            return canvasHeight / 4;
        }
    });
});