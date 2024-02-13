$(document).ready(() => {
    var controller = new ScrollMagic.Controller();

    // #region Header Timeline

    var headerTimeline = new TimelineMax()
        .to('header details', 3, {
            x: window.innerWidth - $('.logo').outerWidth() * 2 - 50,
            ease: 'power1.inOut'
        }, 0)
        .to('.hat', 1, {
            y: $(window).height() / -2,
            ease: 'circle.in'
        }, 1)
        .to('.duck', 1, {
            y: -1000,
            rotate: '7200deg',
            scale: '10% 10%',
            ease: 'power1.in'
        }, 1)
        .to('.header h2', 1, {
            x: $(window).width() - $('.header h2').outerWidth(),
            ease: 'power1.in'
        }, 1)
        .to('.header p', 1, {
            y: 100,
            scale: '0 0',
            ease: 'power1.in'
        }, 1);

    // #endregion

    // #region Lower Sections Timeline

    var sectionsTimeline = new TimelineMax()
        .from('.sec2', 1, {
            x: 1000,
            ease: 'circle.out'
        }, 0)
        .from('.sec3', 1, {
            x: -1000,
            ease: 'circle.out'
        }, .5);

    // #endregion

    // #region Header

    new ScrollMagic.Scene({
        triggerElement: '.header',
        triggerHook: 0,
        duration: '100%'
    })
        .setTween(headerTimeline)
        .addTo(controller)

    new ScrollMagic.Scene({
        triggerElement: '.header',
        triggerHook: 0,
        duration: '25%'
    })
        .setPin('.header', { pushFollowers: false })
        .addTo(controller);

    // #endregion

    // #region Lower Sections

    new ScrollMagic.Scene({
        triggerElement: '.lower',
        triggerHook: 1,
        duration: $('.lower').height()
    })
        .setTween(sectionsTimeline)
        .addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.parallax',
        triggerHook: 1,
        duration: $('.parallax').height() + $(window).height()
    })
        .setTween(TweenMax.from('.parallax img', 1, { y:'-50%', ease: 'none' }))
        .addTo(controller);

    $(window).on('scroll', () => {
        if ($(window).scrollTop() < $('.empty').position().top - $('header').outerHeight()) {$('header svg').css('fill', 'white'); return; }
        $('header svg').css('fill', 'black');
    });

    $('.logo-sum').on('click', e => {
        e.preventDefault();
        $('header details').prop('open') ? closeLogo() : openLogo();
    });
});

let opening = new TweenMax.from('header details li', 1, {
    scale: 0,
    ease: 'back.out',
    paused: true
});

let closing = new TweenMax.to('header details li', 1, {
    scale: 0,
    ease: 'power3.inOut',
    paused: true
});

function openLogo() {
    if (!closing.isActive() && !opening.isActive()) {
        $('header details').prop('open', true);
        opening.play(0);
    }
}

function closeLogo() {
    if (!closing.isActive() && !opening.isActive()) {
        closing.play(0);
        setTimeout(() => { $('header details').prop('open', false), TweenMax.to('header details li', 0, { scale: 1 }) }, 1000);
    }
}