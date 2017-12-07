console.log("HI!");
$(document).ready(function() {
	console.log('hello friends');
	$('#greeting').click(function(){
		$(this).toggleClass('alt');
	});
});