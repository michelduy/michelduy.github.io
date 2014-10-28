// JavaScript Document
$( document ).ready(function() {
// get anchors with href's that start with "#"
	$("a[href^=#]").click(function() {//only links that start with a #
	 var target = $($(this).attr("href"));
	 console.log("target:" +target);
	 // if the target exists: scroll to it...
	 if(target[0]){
		 // If the page isn't long enough to scroll to the target's position
		 // we want to scroll as much as we can. This part prevents a sudden 
		 // stop when window.scrollTop reaches its maximum.
		 var y = Math.min(target.offset().top, $(document).height() - $(window).height());
		 // also, don't try to scroll to a negative value...
		 y=Math.max(y,0);
		 // OK, you can scroll now...
		 $("html,body").stop().animate({ "scrollTop": y }, 1000);
	 }
	 return false;
	});
	
	
	$('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
	 if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
	  $("html,body").stop();
	 }
	})

});