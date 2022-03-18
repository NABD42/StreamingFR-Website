(function ($){
    ("use strict");

    // closes the sidebar menu
    $(".menu-toggle").click(function(e){
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass(
            "fa-bars fa-times"
        );
        $(this).toggleClass("active");
    });

  //smooth scrolling using jquery and easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top,
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });
  $("#sidebar-wrapper .js-scroll-trigger").click(function () {
    $("#sidebar-wrapper").removeClass("active");
    $("menu-toggle").removeClass("active");
    $(".menu-toggle > fa.bars, .menu-toggle > .fa-times").toggleClass(
      "fa-bars fa-times"
    );
  });

  $(document).scroll(function () {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $(".scroll-to-top").fadeIn();
    } else {
      $(".scroll-to-top").fadeOut();
    }
  });
})(jQuery);


// Search bar

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search Data.json and filter it
const searchStates = async searchText => {
  const res = await fetch('../src/Data.json');
  const states = await res.json();

  //Get matches to current text input
  let matches = states.filter(state => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    return state.title.match(regex);
  });

  if(searchText.length === 0) {
    matches = [];
  }

  console.log(matches);
};

search.addEventListener('input', () => searchStates(search.value));