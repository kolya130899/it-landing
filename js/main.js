
		//DROPDOWN MENU
$(document).ready(function(){
	var width = $(window).width();
	console.log(width);
	var menu = $('#nav');
	menu.hide();
	var atr = menu.attr('style');
	console.log(atr);

	$('.my-toggle-btn').on('click', function(){
		atr = menu.attr('style');
		console.log(atr);
		if (atr === 'display: none;') {
			menu.show('slow');
			menu.attr('style','display: block;');
			/*menu.removeAttr('style');
			*/
		}
		else{
			menu.hide('slow');
			/*menu.removeAttr('style');
			menu.attr('style','display: none;');*/
		}
	});


	/*console.log($(document).width());

	menu.hide();
	var wind = $(document).width();

	if (wind >= 1200 ){
		$('.my-toggle-btn').hover(
			function(){

				},
			function(){
					menu.stop().slideUp(2000);
				}

		);
	}
	else {

	}*/
});
