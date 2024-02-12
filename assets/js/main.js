$(document).ready(() => {
    var controller = new ScrollMagic.Controller();

    $('.smaller').each(i => {
        new ScrollMagic.Scene({
            triggerElement: $('.smaller')[i],
            offset: '-200%',
            duration: '1    00%'
        }).setClassToggle($('.smaller')[i],'slide-in').addIndicators().addTo(controller);
    })
});