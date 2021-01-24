$(function() {

    // スクロールアニメーション
    AOS.init ({
        offset: 200,
        delay: 100,
        duration: 500,
        easing: 'ease-out',
        once: true,
    });

    // クリックしたらページトップへ移動
    $('#header-logo').click(function(){
        $('html, body').animate({
            'scrollTop': 0
        }, 500);
    });

    // ヘッダーのリンクをクリックしたら移動する
    $('.header-nav a').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top - 20;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
    });

    // スクロールしたらヘッダーを固定する
    $(window).scroll(function() {
        var fvHeight = $('#fv').height();
        var scroll = $(window).scrollTop();
        var $headerLink = $('.header-nav li');
        if(scroll >= fvHeight) {
            $('header').addClass('header-fixed');
            $headerLink.addClass('header-fixed');
            $('#header-logo').addClass('header-fixed');
        } else {
            $('header').removeClass('header-fixed');  
            $headerLink.removeClass('header-fixed'); 
            $('#header-logo').removeClass('header-fixed');
        }
    });

    // ハンバーガーメニューのhover時
    $('#js-hamburger').hover (
        function() {
            // マウスが乗った時
            $(this).addClass('hover');
            $('.hamburger__line').addClass('hover');
        },
        function() {
            // マウスが離れた時
            $(this).removeClass('hover');
            $('.hamburger__line').removeClass('hover');
        }
    );

    // ハンバーガーメニューをクリックすると
    $('#js-hamburger').click(function() {
        $('body').toggleClass('is-drawerActive');
        // メニューが開いたり閉じたりする
        if ($(this).attr('aria-expanded') == 'false') {
            $(this).attr('aria-expanded', 'true');
            $('#js-global-menu').attr('area-hidden', 'false');
        } else {
            $(this).attr('aria-expanded', 'false');
            $('#js-global-menu').attr('area-hidden', 'true');
        }
    });
    $('#js-drawer-background').click(function() {
        $('body').removeClass('is-drawerActive');
        $('#js-hamburger').attr('aria-expanded', 'false');
        $('#js-global-menu').attr('area-hidden', 'true');
    });

    // ハンバーガメニューのリンクを押すとメニューが閉じて移動
    $('#js-global-menu a').click(function() {
        var id = $(this).attr('href');
        var position = $(id).offset().top - 20;
        $('html, body').animate({
            'scrollTop': position
        }, 500);
        $('body').removeClass('is-drawerActive');
        $('#js-hamburger').attr('aria-expanded', 'false');
        $('#js-global-menu').attr('area-hidden', 'true');
    });

});
