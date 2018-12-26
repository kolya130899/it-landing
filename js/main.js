

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
       breakpoint: 768,
       settings: {
         arrows: false,
         centerMode: true,
         centerPadding: '20px',
         slidesToShow: 1
       }
     },
     {
       breakpoint: 480,
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
});

