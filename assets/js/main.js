$(document).ready(() => {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.header',
        triggerHook: 0,
        duration: '100%'
    })
        .setPin('.header', { pushFollowers: false })
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sec2',
        offset: '-150%',
    })
        .setClassToggle('.hat', 'up')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sec2',
        offset: '-150%',
    })
        .setClassToggle('.header h2', 'right')
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sec2',
        offset: '-150%',
    })
        .setClassToggle('.header p', 'shrink')
        .addTo(controller);

    $('.smaller').each(i => {
        new ScrollMagic.Scene({
            triggerElement: $('.smaller')[i],
            offset: '-200%',
            duration: '100%'
        })
            .setClassToggle($('.smaller')[i],'slide-in')
            .addTo(controller);
    });

    $(window).on('scroll', () => {
        if ($(window).scrollTop() < $('.empty').position().top - $('header').outerHeight()) {$('.logo').css('fill', 'white'); return; }
        $('.logo').css('fill', 'black');
    })
});