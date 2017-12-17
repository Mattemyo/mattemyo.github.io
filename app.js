$(function () {
    const $hovered = $('a');
    var $background = '<span class="background"></span>';
    $('body').append($background);
    $background = $('span')[0];
    console.log($background);
    $('a').addClass('initial-color')

    function changeBackground() {
        //remove all classes from a
        // $('a').removeClass();
        // $('a').addClass('initial-color');

        const gCoords = this.getBoundingClientRect();
        // console.log(gCoords);
        let headerHeight = $('header')[0];

        let coord = {
            width: gCoords.width,
            height: gCoords.height,
            top: gCoords.top + window.scrollY,
            left: gCoords.left + window.scrollX
        };

        console.log(coord.height);
        console.log($(this).css('background'));


        //values of span depends on span that is hovered
        $background.style.width = `${coord.width}px`;
        $background.style.height = `${coord.height}px`;
        $background.style.transform = `translate(${coord.left}px, ${coord.top}px`;
        $background.style.background = $('.initial-color').css('color');
        $background.style.border = $('.initial-color').css('color');

        //change font color of a
        $(this).addClass('inverse-color');
    }
    function getInitialClass() {
        $('a').removeClass();
        $('a').addClass('initial-color');
    }
    $hovered.mouseleave(getInitialClass);
    $hovered.mouseenter(getInitialClass, changeBackground);
});