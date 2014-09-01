// JAVASCRIPT FILE

$('#mobileMenuButton').click(function(){
	$('body').toggleClass('menuOpen');
});

$(document).ready(function() {
	$(".fancybox").fancybox({
		helpers : {
			overlay : {
				css : {
					'background' : 'rgba(58, 42, 45, 0.95)'
				}
			}
		}
	});
});
