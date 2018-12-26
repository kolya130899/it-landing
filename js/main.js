		//SLIDER
 $('.center').slick({
   centerMode: true,
   infinite: true,
   arrows: false,
   autoplay: true,
   autoplaySpeed: 2000,
   centerPadding: '30px',
   slidesToShow: 3,
   adaptiveWidht: true,
   responsive: [
     {
       breakpoint: 992,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '20px',
         slidesToShow: 2
       }
     },
     {
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '20px',
         slidesToShow: 1
       }
     }
   ]
 });

		//DROPDOWN MENU
$(document).ready(function(){
	var menu = $('#nav');
	menu.hide();
	var atr = menu.attr('style');

	$('.my-toggle-btn').on('click', function(){
		atr = menu.attr('style');
		if (atr === 'display: none;') {
			menu.show('slow');
		}
		else{
			menu.hide('slow');
		}
	});

	var menuItem = $('#nav li');
	menuItem.on('click', function(){
		menu.hide();
	});

});

		//SCROLLING ANIMATION
$(document).ready(function(){
    $("#nav").on("click","#a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 1500);
    });
});



