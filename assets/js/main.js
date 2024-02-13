$(document).ready(() => {
    var controller = new ScrollMagic.Controller();

    // #region .header

    new ScrollMagic.Scene({
        triggerElement: '.header',
        triggerHook: 0,
        duration: '25%'
    })
        .setPin('.header', { pushFollowers: false })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sec2',
        offset: '-200%',
    })
        .setClassToggle('.hat', 'up')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sec2',
        offset: '-200%',
    })
        .setClassToggle('.header h2', 'right')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sec2',
        offset: '-200%',
    })
        .setClassToggle('.header p', 'shrink')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sec2',
        offset: '-200%',
    })
        .setClassToggle('.header .duck', 'bewm')
        .addTo(controller);

    // #endregion

    $('.smaller').each(i => {
        new ScrollMagic.Scene({
            triggerElement: $('.smaller')[i],
            offset: '-250%',
            duration: '100%'
        })
            .setClassToggle($('.smaller')[i],'slide-in')
            .addTo(controller);
    });

    new ScrollMagic.Scene({
        triggerElement: '.parallax',
        triggerHook: 0,
        offset: -800,
        duration: 1600
    })
        .setTween(TweenMax.from('.parallax img', 1, { y:'-30%', ease: Power0.easeNone }))
        .addTo(controller);

    $(window).on('scroll', () => {
        if ($(window).scrollTop() < $('.empty').position().top - $('header').outerHeight()) {$('.logo').css('fill', 'white'); return; }
        $('.logo').css('fill', 'black');
    })
});