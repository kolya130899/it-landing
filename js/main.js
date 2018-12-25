
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
