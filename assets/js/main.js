$(document).ready(() => {
    var controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: '.sec2',
        offset: $('.sec2').height() / -2,
        duration: $('.sec2').height() * 2
    }).setClassToggle('.sec2', 'slide-in').addIndicators().addTo(controller);

    new ScrollMagic.Scene({
        triggerElement: '.sec3',
        offset: $('.sec3').height() / -2,
        duration: $('.sec3').height() * 2
    }).setClassToggle('.sec3', 'slide-in').addTo(controller);

    console.log(controller);
});