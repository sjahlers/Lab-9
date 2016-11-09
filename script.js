$(document).ready(function() { 
	
	/*$("nav li").mouseenter(function(){
		$(this).fadeTo("fast", 0.25);
	});
	
	$("nav li").mouseleave(function(){
		$(this).fadeTo("fast", 1);
	});*/

//using hover method instead of mouseenter and leave
	$("nav li").hover(function(){
	    $( this ).fadeTo("fast",0.25);
		}, 
		function() {
		$( this ).fadeTo("fast",1);
	});
	
//change background color and add clicked text
	$("nav li").click(function(){
		$(this).css({
			'background-color': 'rgb(172, 205, 226)'
		});
	});
	
	$("nav li").click(function(){
		$(this).text("Clicked!");
	});
	
});