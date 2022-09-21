$(function()
{
	$(window).resize(objSizeReset);
	objSizeReset();
	function objSizeReset() {
		convertSizeALL('.Page_Home');
		convertSizeALL('.Page_Plus');
	}
	
	

	$(window).on('load', function(){
		objSizeReset();
	});


});
var sRatio=1;
var sRatio2=1;
var ObjH = 500;
var ObjH2 = 500;
function convertSizeALL(className){
		
		var w = 1920, h = 900;
		var iw = $(window).innerWidth(), ih=$(window).innerHeight();
		var pRatio = window.devicePixelRatio || 0, xRatio=iw/w, yRatio=ih/h;
		sRatio = Math.min(xRatio, yRatio);	
		$(className).css({width:Math.round(w*sRatio) ,height:Math.round(h*sRatio)});
		$(".Page_Q").css({width:Math.round(w*sRatio) ,height:Math.round(h*sRatio)});
		$(".windows").css({width:Math.round(1352*sRatio) ,height:Math.round(827*sRatio)});
		$(".CloseW").css({width:Math.round(98*sRatio) ,height:Math.round(98*sRatio)});
		$(".Bar").css({width:Math.round(1920*sRatio) ,height:Math.round(207*sRatio)});
		$(".btnSelect").css({width:Math.round(412*sRatio) ,height:Math.round(123*sRatio)});
		$("#ObjectDiv").css({width:Math.round(1920*sRatio) ,height:Math.round(714*sRatio)});
		
		$(".btnChange,.btnPlus").css({width:Math.round(210*sRatio) ,height:Math.round(110*sRatio)});

		$(".Tool").css({width:Math.round(314*sRatio) ,height:Math.round(146*sRatio)});

		$(".Up,.Plus").css({width:Math.round(47*sRatio) ,height:Math.round(46*sRatio)});
		$(".Word01").css({width:Math.round(503*sRatio) ,height:Math.round(72*sRatio)});

		$("#Object1").css({width:Math.round(800*sRatio) ,height:Math.round(ObjH*sRatio)});
		$("#Object2").css({width:Math.round(800*sRatio) ,height:Math.round(ObjH2*sRatio)});

		$("#Object1 > .Graphics").css({width:Math.round(GraphicsW*sRatio) ,height:Math.round(GraphicsH*sRatio)});
		$("#Object2 > .Graphics").css({width:Math.round(GraphicsW2*sRatio) ,height:Math.round(GraphicsH2*sRatio)});

		$(".WordGroup").css({width:Math.round(800*sRatio) ,height:Math.round(153*sRatio)});

		$("#AppleGraphics1,	.AppleGraphics > div").css({width:Math.round(GraphicsW*sRatio) ,height:Math.round(GraphicsH*sRatio)});
		$("#AppleGraphics2,	.AppleGraphics > div").css({width:Math.round(GraphicsW2*sRatio) ,height:Math.round(GraphicsH2*sRatio)});

		$("#AppleGraphics1 > div").css({width:Math.round(GraphicsW*sRatio) ,height:Math.round(244*sRatio)});
		$("#AppleGraphics2 > div").css({width:Math.round(GraphicsW2*sRatio) ,height:Math.round(244*sRatio)});

		$(".AppleGraphics > div > div").css({width:Math.round(126*sRatio) ,height:Math.round(121*sRatio)});
		$(".AppleGraphics > div > div > img").css({width:Math.round(126*sRatio) ,height:Math.round(121*sRatio)});
		$(".UpDenominator,.DownDenominator,.UpMolecular,.DownMolecular").css({width:Math.round(48*sRatio) ,height:Math.round(33*sRatio)});
		$(".ToolBar").css({width:Math.round(299*sRatio) ,height:Math.round(422*sRatio)});
		$(".ToolSelect01,.ToolSelect02,.ToolSelect03,.ToolSelect04,.ToolSelect05").css({width:Math.round(279*sRatio) ,height:Math.round(81*sRatio)});
		/*$(".txtMolecular,.txtDenominator").css({width:Math.round(79*sRatio) ,height:Math.round(69*sRatio)});
		$(".txtMolecular,.txtDenominator").css("line-height" ,Math.round(69*sRatio) +"px");
		$(".txtMolecular,.txtDenominator").css("font-size" ,Math.round(50*sRatio) + "px");*/

		$(".Ans01").css({width:Math.round(184*sRatio) ,height:Math.round(153*sRatio)});
		$(".Ans02").css({width:Math.round(273*sRatio) ,height:Math.round(153*sRatio)});
		$(".Ans03").css({width:Math.round(410*sRatio) ,height:Math.round(153*sRatio)});

		//$(".AnsDiv").css({width:Math.round(410*sRatio) ,height:Math.round(153*sRatio)});

		/*$(".Ans01Denominator").css({width:Math.round(79*sRatio) ,height:Math.round(69*sRatio)});
		$(".Ans01Denominator").css("line-height" ,Math.round(69*sRatio) +"px");
		$(".Ans01Denominator").css("font-size" ,Math.round(50*sRatio) + "px");*/
		$(".txt").css({width:Math.round(79*sRatio) ,height:Math.round(69*sRatio)});
		$(".txt").css("line-height" ,Math.round(69*sRatio) +"px");
		$(".txt").css("font-size" ,Math.round(50*sRatio) + "px");

		$(".Apple").css({width:Math.round(64*sRatio) ,height:Math.round(67*sRatio)});
		$(".Square").css({width:Math.round(62*sRatio) ,height:Math.round(62*sRatio)});
		$(".Triangle").css({width:Math.round(76*sRatio) ,height:Math.round(66*sRatio)});
		$(".Rectangle").css({width:Math.round(116*sRatio) ,height:Math.round(60*sRatio)});
		$(".Circle").css({width:Math.round(70*sRatio) ,height:Math.round(69*sRatio)});
		$(".DivNowTool").css({width:Math.round(314*sRatio) ,height:Math.round(95*sRatio)});
		$(".ShowFraction,.ShowFraction2").css({width:Math.round(146*sRatio) ,height:Math.round(146*sRatio)});
		$(".DivFraction,.DivFraction2").css({width:Math.round(351*sRatio) ,height:Math.round(131*sRatio)});
		
		$(".Question,.Dlete,.Close").css({width:Math.round(90*sRatio) ,height:Math.round(91*sRatio)});
		$(".NowTool").css({width:Math.round(Settings[NowTool].Width*sRatio) ,height:Math.round(Settings[NowTool].Height*sRatio)});

		$(".NowTool2").css({width:Math.round(Settings[NowTool2].Width*sRatio) ,height:Math.round(Settings[NowTool2].Height*sRatio)});
		$(".Fraction01,.Fraction02").css({width:Math.round(108*sRatio) ,height:Math.round(108*sRatio)});
		

		$(".block2,.block3").css({width:Math.round(90*sRatio) ,height:Math.round(155*sRatio)});
		$(".blockP3,.blockP11,.blockP21").css({width:Math.round(100*sRatio) ,height:Math.round(155*sRatio)});

		$(".txtadd01").css({width:Math.round(482*sRatio) ,height:Math.round(62*sRatio)});
		$(".Add01").css({width:Math.round(97*sRatio) ,height:Math.round(155*sRatio)});

		$(".Add02").css({width:Math.round(142*sRatio) ,height:Math.round(155*sRatio)});

		
		$(".Add011").css({width:Math.round(180*sRatio) ,height:Math.round(155*sRatio)});

		$(".Add021").css({width:Math.round(230*sRatio) ,height:Math.round(155*sRatio)});

		$(".AddAns01").css({width:Math.round(144*sRatio) ,height:Math.round(155*sRatio)});
		$(".AddAns02").css({width:Math.round(230*sRatio) ,height:Math.round(155*sRatio)});
		$(".Fraction01P").css({width:Math.round(123*sRatio) ,height:Math.round(146*sRatio)});
		$(".Fraction02P").css({width:Math.round(123*sRatio) ,height:Math.round(146*sRatio)});
		
		$("#ObjectDiv2").css({width:Math.round(1920*sRatio) ,height:Math.round(507*sRatio)});
		$(".WordGroup").css({width:Math.round(800*sRatio) ,height:Math.round(153*sRatio)});



		$("#ObjectP1").css({width:Math.round(800*sRatio) ,height:Math.round(ObjH*sRatio)});
		$("#ObjectP2").css({width:Math.round(800*sRatio) ,height:Math.round(ObjH2*sRatio)});

		$("#ObjectP1 > .Graphics").css({width:Math.round(GraphicsW*sRatio) ,height:Math.round(GraphicsH*sRatio)});
		$("#ObjectP2 > .Graphics").css({width:Math.round(GraphicsW2*sRatio) ,height:Math.round(GraphicsH2*sRatio)});

		$(".ObjectP > .WordGroup").css({width:Math.round(800*sRatio) ,height:Math.round(153*sRatio)});

		var AppleScale = 0.6;
		$("#AppleGraphicsP1").css({width:Math.round(GraphicsW*AppleScale*sRatio) ,height:Math.round(GraphicsH*AppleScale*sRatio)});
		$("#AppleGraphicsP2").css({width:Math.round(GraphicsW2*AppleScale*sRatio) ,height:Math.round(GraphicsH2*AppleScale*sRatio)});

		$("#AppleGraphicsP1 > div").css({width:Math.round(GraphicsW*AppleScale*sRatio) ,height:Math.round(244* AppleScale*sRatio)});
		$("#AppleGraphicsP2 > div").css({width:Math.round(GraphicsW2*AppleScale*sRatio) ,height:Math.round(244*AppleScale*sRatio)});

		$("#AppleGraphicsP1 > div > div").css({width:Math.round(126* AppleScale *sRatio) ,height:Math.round(121 *AppleScale*sRatio)});
		$("#AppleGraphicsP2 > div > div").css({width:Math.round(126* AppleScale *sRatio) ,height:Math.round(121 * AppleScale*sRatio)});
		$("#AppleGraphicsP1 > div > div > img").css({width:Math.round(126 * AppleScale*sRatio) ,height:Math.round(121 *AppleScale*sRatio)});
		$("#AppleGraphicsP2 > div > div > img").css({width:Math.round(126 * AppleScale*sRatio) ,height:Math.round(121 *AppleScale*sRatio)});

		$(".AddAns01P").css({width:Math.round(169*sRatio) ,height:Math.round(155*sRatio)});
		$(".AddAns02P").css({width:Math.round(255*sRatio) ,height:Math.round(155*sRatio)});

		$(".AddAns01MolecularP").css({width:Math.round(94*sRatio) ,height:Math.round(69*sRatio)});
		$(".AddAns01DenominatorP").css({width:Math.round(94*sRatio) ,height:Math.round(69*sRatio)});

		$(".AddAns02MolecularP").css({width:Math.round(94*sRatio) ,height:Math.round(69*sRatio)});
		
		$(".AddAns02MolecularP").css({width:Math.round(94*sRatio) ,height:Math.round(69*sRatio)});
		/*$(".AddAns022MolecularP").css({width:Math.round(94*sRatio) ,height:Math.round(69*sRatio)});*/
		$(".AddAns02DenominatorP").css({width:Math.round(94*sRatio) ,height:Math.round(69*sRatio)});

		$(".blockP3").css({width:Math.round(124*sRatio) ,height:Math.round(155*sRatio)});
		
		//$(".Graphics").css({width:Math.round(290*sRatio) ,height:Math.round(290*sRatio)});
		//$(".Graphics > svg").css("transform", "scale("+ 1 *  sRatio +")");
		//$(".Graphics > svg").css({width:Math.round(290*sRatio) ,height:Math.round(290*sRatio)});

}
