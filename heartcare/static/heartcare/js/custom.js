// JavaScript Document
$(document).ready(function () {
    'use strict';
    //main slider
    if ($('#main-slider').length) {
        $('#main-slider').owlCarousel({
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }
    //Testimonial Slider
    if ($('#testimonial-slider').length) {
        $('#testimonial-slider').owlCarousel({
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        })
    }
    if ($('.eventcountdown').length) {
        var austDay = new Date();
        austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
        $('.eventcountdown').countdown({
            until: austDay
        });
        $('#year').text(austDay.getFullYear());
    }
    //Team Slider
    if ($('#team-slider').length) {
        $('#team-slider').owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        })
    }
    //Team Slider
    if ($('#rpro-slider').length) {
        $('#rpro-slider').owlCarousel({
            loop: true,
            nav: false,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        })
    }
    //date picker
    if ($('#datetimepicker1').length) {
        $('#datetimepicker1').datetimepicker();
    }
    //date picker
    if ($('#datetimepicker3').length) {
        $('#datetimepicker3').datetimepicker({
            format: 'LT'
        });
    }
    //sidemenu
    $("#menu-close").on('click', function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    $("#menu-toggle").on('click', function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });
    // Preety Photo
    if ($('.gallery').length) {
        $("area[data-rel^='prettyPhoto']").prettyPhoto();
        $(".gallery:first a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'normal',
            theme: 'light_square',
            slideshow: 3000,
            autoplay_slideshow: false
        });
        $(".gallery:gt(0) a[data-rel^='prettyPhoto']").prettyPhoto({
            animation_speed: 'fast',
            slideshow: 10000,
            hideflash: true
        });
    } // Preety Photo End
    // Google Map
    if ($('#map_canvas').length) {
        $('#map_canvas').mapit();
    }
}) //end
$(document).ready(function () {
    "use strict";

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function () {
                count($this)
            }, 50);
        }
    }
    if ($('.stat-count').length) {
        $(".stat-count").each(function () {
            $(this).data('count', parseInt($(this).html(), 10));
            $(this).html('0');
            count($(this));
        });
    }
});

setTimeout(function () {
    $('#alert-msg').remove();
}, 3000);