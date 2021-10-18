function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  }
  // If element is scrolled into view, fade it in
  $(window).scroll(function() {
    $('.anipoka').each(function() {
      if (isScrolledIntoView(this) === true) {
        //data-wos
        var pokamate = $(this).attr('data-wos');
        $(this).addClass(pokamate);
      }
    });
  });

