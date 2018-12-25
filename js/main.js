		//DROPDOWN MENU
var $menu = $('#nav li');
$menu.hide();
$('.my-toggle-btn').hover(
	function(){
			$menu.stop().slideDown(2000);
		},
	function(){
			$menu.stop().slideUp(2000);
		}

);
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
