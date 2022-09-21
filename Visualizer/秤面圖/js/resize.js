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
/*var centerX = 1083
var centerY = 432*/
//var centerX = 439.5;
//var centerY = 739.5;
var centerX = 759.5;
var centerY =  459.5;
var Scale = 200;
var MaxValue = 1000;
var BigLeft = 0;
var BigTop = 0;
var BL = 1.2;
var Adjustment = 90;
function convertSizeALL(className) {

	var w = 1920, h = 900;
	var iw = $(window).innerWidth(), ih = $(window).innerHeight();
	var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h;

	sRatio = Math.min(xRatio, yRatio);
	$("body").css("transform","scale("+ 1 * sRatio+")");

    centerX = $('.dot').offset().left + $('.dot').width() / 2
    centerY = $('.dot').offset().top + $('.dot').height() / 2


}
