$( document ).ready(function() {

	 new WOW().init();

 	$(".main-menu").on("click","a", function (event) {
        if(event.target.className=='enter-to-site')
            return;
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
      });

       $(".fixed-buttons-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
      });
});



