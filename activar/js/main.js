/*  ---------------------------------------------------
  Template Name: Activitar
  Description:  Activitar Fitness HTML Template
  Author: Colorlib
  Author URI: https://colorlib.com
  Version: 1.0
  Created: Colorlib
---------------------------------------------------------  */

'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.gallery-controls ul li').on('click', function () {
            $('.gallery-controls ul li').removeClass('active');
            $(this).addClass('active');
        });
        if ($('.gallery-filter').length > 0) {
            var containerEl = document.querySelector('.gallery-filter');
            var mixer = mixitup(containerEl);
        }

        $('.blog-gird').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
        });

    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    /*------------------
        Navigation
    --------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Menu Hover
    --------------------*/
    $(".header-section .nav-menu .mainmenu ul li").on('mousehover', function () {
        $(this).addClass('active');
    });
    $(".header-section .nav-menu .mainmenu ul li").on('mouseleave', function () {
        $('.header-section .nav-menu .mainmenu ul li').removeClass('active');
    });

    /*------------------
        Carousel Slider
    --------------------*/
    $(".hero-items").owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
    });

    /*------------------
        Testimonial Slider
    --------------------*/
    $(".testimonial-slider").owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        items: 1,
        dots: true,
        navText: ['<i class="arrow_carrot-left"></i>', '<i class="arrow_carrot-right"></i>'],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.video-popup').magnificPopup({
        type: 'iframe'
    });

    $('.image-popup').magnificPopup({
        type: 'image'
    });

    /*------------------
        Magnific Popup
    --------------------*/
    $('.show-result-select').niceSelect();

    /*------------------
       Timetable Filter
    --------------------*/
    $('.timetable-controls ul li').on('click', function () {
        var tsfilter = $(this).data('tsfilter');
        $('.timetable-controls ul li').removeClass('active');
        $(this).addClass('active');

        if (tsfilter == 'all') {
            $('.classtime-table').removeClass('filtering');
            $('.ts-item').removeClass('show');
        } else {
            $('.classtime-table').addClass('filtering');
        }
        $('.ts-item').each(function () {
            $(this).removeClass('show');
            if ($(this).data('tsmeta') == tsfilter) {
                $(this).addClass('show');
            }
        });
    });

    // Modal
    $('[data-podal=sekil]').on('click', function () {
        $('.overlay, #sekil').css("display", "flex").hide().fadeIn();
        $sw.hammer({ drag_lock_to_axis: true }).on("swipe drag scroll", function (event) {
            event.gesture.preventDefault();
            if (event.gesture.direction == Hammer.DIRECTION_LEFT || event.gesture.direction == Hammer.DIRECTION_RIGHT) {
                if (event.type == "swipe") {
                    swipeAction(event);
                } else {
                    dragAction(event);
                }
            }
        })
    })



    $('.overlay').on('click', function (e) {
        if (!$(e.target).hasClass('.podal') && !$(e.target).closest('.podal').length) {
            $('.overlay, #sekil').fadeOut();
        }
    })

    $('.podal_close').on('click', function () {
        $('.overlay, #sekil').fadeOut();
    })

    
      $('.tabs_content_tab_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        /* focusOnSelect: true */
      }
      );
    
    
    
      $('.tabs_nav_tab').on('click', function () {
        $('.tabs_content_tab').removeClass('active');
        $('.tabs_content_tab[data-id="' + $(this).attr('data-id') + '"]').addClass('active');
      })

    $('.single-item2').slick({
        arrows: true,
      }
      );

})(jQuery);