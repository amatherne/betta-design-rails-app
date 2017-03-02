// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery




$(document).ready(function() {

    // $(document).on('turbolinks:load', function() {

    $('.hamburger').click(function() {
        $('.responsive-menu').toggleClass('expand raise');
    })

    // $(function($) {
    $('a[href$="#blog"]').click(function() {
        $('#blog-posts').toggleClass('show');
        $('.close-me').toggleClass('show');
        $('.mini-blog').toggleClass('show');
        $('.main-bg').toggleClass('dim');
        $('.responsive-menu.expand.raise').toggleClass('expand raise');

    })

    $('a[href$="#portfolio"]').click(function() {
        $('#portfolio-posts').toggleClass('show');
        $('.close-me').toggleClass('show');
        $('.mini-portfolio').toggleClass('show');
        $('.main-bg').toggleClass('dim');
        $('.responsive-menu.expand.raise').toggleClass('expand raise');

    })


    $('a[href$="#contact"]').click(function() {
        $('.main-bg').toggleClass('dim');
        $('#contact-page').toggleClass('show');
        $('.close-me').toggleClass('show');
        $('.responsive-menu.expand.raise').toggleClass('expand raise');


    })
    $('.close-me').click(function() {
        $("[class$='show']").toggleClass('show');
        $('.main-bg').toggleClass('dim');

    })

    // })


    $('.dropdown').on('touchstart', function(e) {
        'use strict'; //satisfy code inspectors
        var link = $(this); //preselect the link
        if (link.hasClass('drop')) {
            return true;
        } else {
            link.addClass('drop');
            $('.dropwdown').not(this).removeClass('drop');
            e.preventDefault();
            return false; //extra, and to make sure the function has consistent return points
        }
    });

    // var wrap = $(".responsive-menu");

    // wrap.on("scroll", function(e) {

    //   if (this.scrollTop > 50) {
    //     wrap.addClass("fix-header");
    //   } else {
    //     wrap.removeClass("fix-header");
    //   }

    // });


    $(".one").click(function() {
        $('html, body').animate({
            scrollTop: $("#one").offset().top - 90
        }, 1000);
    });
    $(".two").click(function() {
        $('html, body').animate({
            scrollTop: $("#two").offset().top - 90
        }, 1000);
    });

    $(".three").click(function() {
        $('html, body').animate({
            scrollTop: $("#three").offset().top - 90
        }, 1000);
    });

    $(".four").click(function() {
        $('html, body').animate({
            scrollTop: $("#four").offset().top - 90
        }, 1000);
    });

    $(".five").click(function() {
        $('html, body').animate({
            scrollTop: $("#five").offset().top - 90
        }, 1000);
    });



    window.onscroll = changePos;

    function changePos() {

        if (window.pageYOffset > 25) {
            $('.header').addClass('hide-header');
        } else {
            $('.header').removeClass('hide-header');
        }

        if (window.pageYOffset > 400) {
            $('.header').addClass('fix-header');
            // $('.header').removeClass('hide-header');

        } else {
            $('.header').removeClass('fix-header');
        }
    }


    $(window).load(function() {
        // $(".loader").fadeOut(3000);
        $(".loader").removeClass("fade");
    })

    // var slider = new SimpleSlider(document.getElementById('blog-posts'), {
    //     autoPlay: true,
    //     transitionDuration: 1.5,
    //     transitionDelay: 5,
    //     ease: SimpleSlider.defaultEase,
    //     onChange: null,
    //     onChangeEnd: null,
    //     transitionProperty: 'width',
    //     startValue: '0.1%',
    //     visibleValue: '100%',
    //     endValue: '0.1%'

    // });

});