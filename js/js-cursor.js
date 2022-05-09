var cursor = $(".cursor"),
	follower = $(".cursor--follow");

var posX = 0,
	posY = 0;

var mouseX = 0,
	mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {    
				left: posX - 12,
				top: posY - 12
			}
		});

		TweenMax.set(cursor, {
			css: {    
				left: mouseX,
				top: mouseY
			}
		});
	}
});

$(document).on("mousemove", function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$("a,input,.wpcf7-list-item-label,button").on("mouseenter", function() {
	cursor.addClass("active");
	follower.addClass("active");
});
$("a,input,.wpcf7-list-item-label,button").on("mouseleave", function() {
	cursor.removeClass("active");
	follower.removeClass("active");
});