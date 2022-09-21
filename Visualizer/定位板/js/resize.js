$(function()
{
	$(window).resize(objSizeReset);
	objSizeReset();
	function objSizeReset() {
		convertSizeALL('.Page_Home');	
		convertSizeALL('.Page_Number');
		convertSizeALL('.Page_BigNumber');

		//convertSizeALL('.labatable');
	}
	
	

	$(window).on('load', function(){
		objSizeReset();
	});


});
var sRatio=1;
var sRatio2=1;
function convertSizeALL(className){
		
		var w = 1920, h = 900;
		var iw = $(window).innerWidth(), ih=$(window).innerHeight();
		var pRatio = window.devicePixelRatio || 0, xRatio=iw/w, yRatio=ih/h;

		sRatio = Math.min(xRatio, yRatio);	
		$(className).css({width:Math.round(w*sRatio) ,height:Math.round(h*sRatio)});
		$(".btnSelectType").css({width:Math.round(202*sRatio),height:Math.round(79*sRatio)});
		$(".toolSelect").css({width:Math.round(340*sRatio),height:Math.round(78*sRatio)});

		

		$(".toolbar").css({width:Math.round(1920*sRatio),height:Math.round(93*sRatio)});
		

		


		

		NumberPageResize(sRatio);
		BigNumberPageResize(sRatio);
		$(".txtPage").css({width:Math.round(100*sRatio),height:Math.round(59*sRatio)});
		$(".txtPage").css("font-size", Math.round(40 * sRatio) + "px");
		
		$(".btnSelectPage").css({width:Math.round(208*sRatio),height:Math.round(76*sRatio)});
		$(".btnPageUp").css({width:Math.round(43*sRatio),height:Math.round(40*sRatio)});
		$(".SelectPage").css({width:Math.round(202*sRatio),height:Math.round(367*sRatio)});
		$(".Pagelul").css({width:Math.round(202*sRatio),height:Math.round(367*sRatio)});
		$(".Pagelul > div").css({width:Math.round(198*sRatio),height:Math.round(51*sRatio)});
		
		$(".toolLeft").css({width:Math.round(122*sRatio),height:Math.round(58*sRatio)});
		$(".toolRight").css({width:Math.round(122*sRatio),height:Math.round(58*sRatio)});
		$(".Left").css({width:Math.round(1422*sRatio),height:Math.round(36*sRatio)});
		$(".Left > div").css({height:Math.round(36*sRatio)});
		/*$(".Showtxt").css({height:Math.round(36*sRatio)});*/

		$(".Showtxt").css("transform","scale(" +1 * sRatio+ ")");


		$(".SelectNumber").css({width:Math.round(576*sRatio),height:Math.round(61*sRatio)});
		$(".SelectNumberBig").css({width:Math.round(676*sRatio),height:Math.round(61*sRatio)});
		
		$(".Key").css({width:Math.round(42*sRatio),height:Math.round(43*sRatio)});
		$(".KeyDelete").css({width:Math.round(43*sRatio),height:Math.round(43*sRatio)});
		$(".KeyX").css({width:Math.round(42*sRatio),height:Math.round(42*sRatio)});

		$(".Key0000").css({width:Math.round(97*sRatio),height:Math.round(43*sRatio)});
		

		$(".Delete,.Question,.Close").css({width:Math.round(76*sRatio),height:Math.round(76*sRatio)});
		
		/*$(".Showtxt").css("margin-top",(-4*yRatio)+"vh" );*/
		//$(".Showtxt").css("margin-top",Math.round(-35*(xRatio / yRatio )) +"px" );
		$("img").each(function (i, val){
			var f = Enumerable.From(SettingL).Where(x=>x.img ==  $(val).attr("src")).ToArray()[0];
			if(f != null){
				$(val).css({width:Math.round(f.W*sRatio),height:Math.round(f.H*sRatio)});
				//$($(val).parent().parent()).css({width:Math.round(f.W*sRatio),height:Math.round(f.H*sRatio)});
			}
			var f2 = Enumerable.From(SettingR).Where(x=>x.img ==  $(val).attr("src")).ToArray()[0];
			if(f2 != null){
				$(val).css({width:Math.round(f2.W*sRatio),height:Math.round(f2.H*sRatio)});
				//$($(val).parent().parent()).css({width:Math.round(f.W*sRatio),height:Math.round(f.H*sRatio)});
			}
		});
		$(".Right,.Left").css({width:Math.round(1422*sRatio),height:Math.round(64*sRatio)});
		$(".dragLeft,.dragRight").css({width:Math.round(41*sRatio),height:Math.round(41*sRatio)});

		$(".Chinese").css({width:Math.round(233*sRatio),height:Math.round(77*sRatio)});
		
		$(".Chinese > img").css({width:Math.round(155*sRatio),height:Math.round(67*sRatio)});
		//$(".Right").css("Left", 	$("#Right1 > div").outerWidth()  - (10 * sRatio) + "px");
	
		 
		
}
