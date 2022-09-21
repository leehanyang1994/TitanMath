$(function () {
	$(window).resize(objSizeReset);
	objSizeReset();
	function objSizeReset() {
		convertSizeALL('.Page_Home');
		//convertSizeALL('.labatable');
	}



	$(window).on('load', function () {
		objSizeReset();
	});
	$(window).on("orientationchange", function () {
		objSizeReset();
	});


});
var sRatio = 1;
var sRatio2 = 1;
function convertSizeALL(className) {

	var sw = window.screen.width;
	var w = 1920, h = 900;
	var sr = w / sw;

	var iw = $(window).innerWidth(), ih = $(window).innerHeight();
	var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h;

	sRatio = Math.min(xRatio, yRatio);
	$("body").css("transform","scale("+ 1 * sRatio+")");

}
