
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
		}
		else{
			menu.hide('slow');
		}
	});
});
