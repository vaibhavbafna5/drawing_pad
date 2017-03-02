$(document).ready(function () {
	var i = 0; 
	var j = 0; 
	for (i = 0; i < 10; i++) {
		for (j = 0; j < 10; j++) {
			var $unit = $("<div class='unit'></div>"); 
			$unit.appendTo("#container"); 
		}
	}
	$("#container").on('mouseenter', '.unit', function() { 
		$(this).addClass('hover'); 
	}); 
});