$(function () {
    const $hovered = $('a');
    var $background = '<span class="background"></span>';
    $('body').append($background);
    $background = $('span')[0];
    console.log($background);
    $('a').addClass('initial-color');

    function changeBackground() {
        //remove all classes from a
        $('a').removeClass();
        $('a').addClass('initial-color');

        const gCoords = this.getBoundingClientRect();
        // console.log(gCoords);
        let headerHeight = $('header')[0];

        let coord = {
            width: gCoords.width,
            height: gCoords.height,
            top: gCoords.top + window.scrollY,
            left: gCoords.left + window.scrollX
        };
        //background value changes
        $background.style.width = `${coord.width}px`;
        $background.style.height = `${coord.height}px`;
        $background.style.transform = `translate(${coord.left}px, ${coord.top}px`;
        $background.style.background = $('.initial-color').css('color');
        $background.style.border = $('.initial-color').css('color');
        $background.style.position = 'absolute';

        //change font color of a
        $(this).css('color' , '$darkgreen !important');
    }
    function getInitialClass() {
        $('a').removeClass();
        $('a').addClass('initial-color');
    }
    $hovered.mouseover(changeBackground);
    $background.scroll(function(){
        $background.css('display', 'none');
    });
//about


//big Images slides
let index = 0;
startSlides();
function startSlides(){

    

}

});