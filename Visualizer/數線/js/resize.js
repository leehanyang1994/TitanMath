$(function()
{
	$(window).resize(objSizeReset);
	objSizeReset();
	function objSizeReset() {
		convertSizeALL('.Page_Home');	


		//convertSizeALL('.labatable');
	}
	
	

	$(window).on('load', function(){
		objSizeReset();
	});


});
var sRatio=1;
var sRatio2=1;
var sRSS
var change_img = $('.AddCube').css("width")

var obj_padding
var cursor_padding
var src_thd = 'img/cube.svg';
var Now_Type = "1";
function convertSizeALL(className){
		
		var w = 1920, h = 900;
		var iw = $(window).innerWidth(), ih=$(window).innerHeight();
		var pRatio = window.devicePixelRatio || 0, xRatio=iw/w, yRatio=ih/h;

		sRatio = Math.min(xRatio, yRatio);
		$("body").css("transform","scale("+ 1 * sRatio+")");	
}
