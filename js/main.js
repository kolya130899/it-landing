
		//DROPDOWN MENU
$(document).ready(function(){
	console.log($(document).width());
	var $menu = $('#nav li');
	$menu.hide();
	var wind = $(document).width();
	var attrib = $menu.attr('style');
	console.log(attrib);
	if (wind >= 1200 ){
		$('.my-toggle-btn').hover(
			function(){
					$menu.stop().slideDown(2000);
				},
			function(){
					$menu.stop().slideUp(2000);
				}

		);
	}
	else {
		$('.my-toggle-btn').on('click', function(){
			if (attrib === 'display: none;') {
				$menu.removeAttr('style')
			}
			else{
				$menu.attr('style', attrib);
			}
		});
	}
});
/*$(document).on("click", function (e) {
   if (!$menu.is(e.target) //if not menu...
   && $menu.has(e.target).length === 0)//...and not child of menu
   {
     $menu.slideUp(400);
  }
 });*/

/*$('.my-toggle-btn').on("click", function(){
	if($menu.hasClass('is-hidden')){
		$menu.removeClass('is-hidden');
		$menu.toggleClass('is-open');
	}
	else{
		$menu.toggleClass('is-hidden').fadeOut('slow');
	}
});

$*/







/*if($menu)
*/
