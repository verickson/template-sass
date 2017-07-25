$('nav').onePageNav({
	scrollSpeed: 750,
	scrollThreshold: 0.5,
});
//this is the on click for the hamburger icon
$("#Hamburger").click(function(){
	$("ul").slideToggle();
});

//variable for the nav to be shown
var nav = $('ul');
//resize the window to show the nav after it is hidden from the slide toggle
$(window).resize(function(){
	var width = $(window).width();
	//width bigger then breakpoint and the nav is hidden it should remove the style attribute from the nav
	//nav refers to the var at the top
	if(width > 768 && nav.is(':hidden')){
		nav.removeAttr('style');
	}
});

$("[data-fancybox]").fancybox({
	// Options will go here
  	loop : true,
  	//protect: true,
  	arrows : true,
  	keyboard : true,
	buttons : [
		'slideShow',
		'fullScreen',
		'thumbs',
		'close'
	]
});
