$(function() {
  //HIGHLIGHT
  const $hovered = $("a");
  var $background = '<span class="background"></span>';
  $("nav").append($background);
  $background = $("span")[0];
  console.log($background);
  $("a").addClass("initial-color");

  function changeBackground() {
    //remove all classes from a
    $("a").removeClass();
    $("a").addClass("initial-color");

    const gCoords = this.getBoundingClientRect();
    let headerHeight = $("header")[0];

    let coord = {
      width: gCoords.width,
      height: gCoords.height,
      top: gCoords.top + window.scrollY,
      left: gCoords.left + window.scrollX
    };
    //background value changes
    $background.style.width = `${coord.width}px`;
    $background.style.height = `${coord.height}px`;
    $background.style.transform = `translate(${coord.left}px`;
    //add class

    $background.style.background = $(".initial-color").css("color");
    $background.style.position = "absolute";
  }

  $hovered.mouseover(changeBackground);

  //SLIDES
  const $figure = $("figure")[0];
  console.log($figure);
  figure = document.querySelector("figure");

  //total number of % that has been translated
  let total = 0;
  window.setInterval(() => {
    //20% decrease in translateX for every slide
    total -= 20;
    figure.style.transform = `translateX(${total}%)`;
  }, 5000);

  //ADD NICE SCROLL

  $("ul a").on("click", function(e) {
    e.preventDefault();
    $("html, body").stop();
    //href in navbar refers to id of container
    const id = $(this).attr("href");
    //position of container
    const finishOffset = $(id).offset().top - 42;
    //offset of current window
    const windowOffset = $(window).scrollTop();
    //speed depends on distance between current and final position
    const diff = Math.abs(finishOffset - windowOffset);

    let bounce;
    let same = 0;
    let adj = 0;
    if (diff < 200) {
      bounce = 0;
      same = 300;
    } else if (windowOffset < finishOffset) {
      bounce = 10;
    } else {
      bounce = -30;
      adj = 40;
    }

    console.log(finishOffset);
    $("html, body")
      .animate({ scrollTop: finishOffset + bounce }, diff * 2 + same)
      .animate({ scrollTop: finishOffset - bounce - adj }, diff + same / 2);
  });
});
