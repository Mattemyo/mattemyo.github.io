$(function() {
  //HIGHLIGHT
  const $hovered = $("nav a");
  var $background = '<span class="background"></span>';
  $("nav").append($background);
  $background = $("span")[0];
  console.log($background);
  $("nav a").addClass("initial-color");

  function changeBackground() {
    //remove all classes from a depending on screen size
    if ($(window).innerWidth() <= 640) {
      return;
    }
    $("nav a").removeClass();
    $("nav a").addClass("initial-color");

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
  // === EVENT DEPENDS ON SIZE OF SCREEN === //

  $hovered.on("mouseover", changeBackground);

  // ============= SLIDES ============= //
  const figure = document.querySelector("figure");
  let isSlideshowPaused = false;
  figure.addEventListener("mouseenter", function() {
    isSlideshowPaused = true;
  });

  figure.addEventListener("mouseleave", function() {
    isSlideshowPaused = false;
  });

  const numOfSlides = $("div.slide").length;
  //total number of % that has been translated
  let total = 0;
  let slideInterval = window.setInterval(function() {
    // if paused
    if (isSlideshowPaused) {
      return;
    }
    //20% decrease in translateX for every slide
    total -= 20;
    figure.style.transform = `translateX(${total}%)`;
    if (total === -20 * numOfSlides) {
      figure.style.transform = `translateX(${0}%)`;
      total = 0;
    }
  }, 10000);

  //==============SCROLL =============//

  $("ul a").on("click", function(e) {
    e.preventDefault();
    $("html, body").stop(true);
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

    $("html, body")
      .animate(
        {
          scrollTop: finishOffset + bounce
        },
        diff * 0.5 + same
      )
      .animate(
        {
          scrollTop: finishOffset - bounce - adj
        },
        diff * 0.2 + same / 2
      );
  });
  // stop animation on manual scroll
  $(window).on("mousewheel", function(e) {
    $("html, body").stop(true);
  });

  // ====================  DISPLAY TECHNOLOGIES ON HOVER OR NOT DEPENDING ON SCREENSIZE ==================== //
  $(window).innerWidth() <= 1024
    ? $(".technologies").css({ opacity: 1 })
    : showTech();

  function showTech() {
    $(".listed-project").on("mouseenter", function(e) {
      e.preventDefault();
      $(this)
        .find(".technologies")
        .stop()
        .animate(
          {
            opacity: 1
          },
          500
        );
    });

    $(".listed-project").on("mouseleave", function(e) {
      e.preventDefault();

      $(this)
        .find(".technologies")
        .stop()
        .animate(
          {
            opacity: 0
          },
          500
        );
    });
  }

  // docready
});
