var SourePage = "";

var mobileDevice = ['android', 'webos', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
function CanTouch() {

	try { document.createEvent("TouchEvent"); return true; }

	catch (e) { return false; }

}
function isMobileDevice() {
	var isMobileDevice = false
	var Agent = navigator.userAgent.toLowerCase();

	for (var i = 0; i < mobileDevice.length; i++) {
		if (Agent.match(mobileDevice[i]) != null) {
			return true;
		}
	}
	return false;
}
function isMobile() {
	var useragent = navigator.userAgent;
	useragent = useragent.toLowerCase();

	if (useragent.indexOf('iphone') != -1) {
		return true;
	}
	else if (useragent.indexOf('ipad') != -1 || useragent.indexOf('ipod') != -1) {
		return true;
	}
	else if (useragent.indexOf('android') != -1) {
	}
	else {
		return false;
	}
}


var mouseMoved = false;
function touchHandler(event) {
	// Declare the default mouse event.
	var mouseEvent = "mousedown";
	// Create the event to transmit.
	var simulatedEvent = document.createEvent("MouseEvent");

	switch (event.type) {
		case "touchstart":
			mouseEvent = "mousedown";
			break;
		case "touchmove":

			//If this has been hit, then it's a move and a mouseup, not a click
			//will be transmitted.

			mouseMoved = true;
			mouseEvent = "mousemove";
			break;
		case "touchend":

			//Check to see if a touchmove event has been fired. If it has
			//it means this have been a move and not a click, if not
			//transmit a mouse click event.

			if (!mouseMoved) {
				mouseEvent = "click";
			} else {
				mouseEvent = "mouseup";
			}
			// Initialize the mouseMove flag back to false.
			mouseMoved = false;
			break;
	}

	var touch = event.changedTouches[0];


	//Build the simulated mouse event to fire on touch events.

	simulatedEvent.initMouseEvent(mouseEvent, true, true, window, 1,
		touch.screenX, touch.screenY,
		touch.clientX, touch.clientY, false,
		false, false, false, 0, null);


	//Transmit the simulated event to the target. This, in combination
	//with the case statement above, ensures that click events are still
	//transmitted and bubbled up the chain.

	touch.target.dispatchEvent(simulatedEvent);


	//Prevent default dragging of element.

	//event.preventDefault();
	event.stopPropagation();
}

var isMobile = false;
var isiPhoneiPad = false;
var Selectinput = null;
function init() {

	if (isMobileDevice()) {
		console.log("123");
		/*var head= document.getElementsByTagName('head')[0]; 
		var script= document.createElement('script'); 
		script.type= 'text/javascript'; 
		script.src= 'js/jquery.ui.touch-punch.min.js';  //要載入的js
		head.appendChild(script); */
		/*document.addEventListener("touchstart", touchHandler, { passive: false });
		document.addEventListener("touchmove", touchHandler, { passive: false });
		document.addEventListener("touchend", touchHandler, { passive: false });
		document.addEventListener("touchcancel", touchHandler, { passive: false });*/
	}
	else {
		document.addEventListener("touchstart", touchHandler, { passive: false });
		document.addEventListener("touchmove", touchHandler, { passive: false });
		document.addEventListener("touchend", touchHandler, { passive: false });
		document.addEventListener("touchcancel", touchHandler, { passive: false });

	}
}



var NowType = 0; // 0 = 1KG 1= 3KG  2 = 10KG
jQuery(document).ready(function ($) {

	init();
	Scale = 200;
	MaxValue = 1000;
	Adjustment = 90;
	//關閉瀏覽器
	function Close() {
		window.location.href = 'about:blank ';
		window.opener = null;
		window.open('', '_self');
		window.close();
	}
	$(".DescriptionClose").mouseup(function (event) {
		$(".DescriptioPage").hide();
	});
	$(".Description").mouseup(function (event) {
		$(".DescriptioPage").show();
	});
	$(".SelectScale,.up").mouseup(function (event) {
		event.stopPropagation();
		if ($(".SelectScale1KG").css("display") == "flex" || $(".SelectScale3KG").css("display") == "flex") {
			ReSelect();
			return;
		}
		switch (NowType) {
			case 0:
				$(".SelectScale1KG").css("display", "flex");
				break;
			case 1:
				$(".SelectScale3KG").css("display", "flex");
				break;
		}
	});

	$(".SelectScale1KG > div").mouseup(function (event) {
		var Num = $(this).attr("num");
		var txt = $(this).attr("txt");
		ReSet();
		switch (Num) {
			case "0":
				$(".SVGBG").attr("src", "./img/svg/1kg_10g.svg");
				$(".Scaletxt").text(txt);
				Scale = 100;
				MaxValue = 1000;
				Adjustment = 90;
				ReSelect();
				break;
			case "1":
				$(".SVGBG").attr("src", "./img/svg/1kg_5g.svg");
				$(".Scaletxt").text(txt);
				Scale = 200;
				MaxValue = 1000;
				Adjustment = 90;
				ReSelect();
				break;
		}
	});
	$(".SelectScale3KG > div").mouseup(function (event) {
		var Num = $(this).attr("num");
		var txt = $(this).attr("txt");
		ReSet();
		switch (Num) {
			case "0":
				$(".SVGBG").attr("src", "./img/svg/3kg_100g.svg");
				$(".Scaletxt").text(txt);
				Scale = 30;
				MaxValue = 3000;
				Adjustment = 96;
				ReSelect();
				break;
			case "1":
				$(".SVGBG").attr("src", "./img/svg/3kg_50g.svg");
				$(".Scaletxt").text(txt);
				Scale = 60;
				MaxValue = 3000;
				Adjustment = 90;
				ReSelect();
				break;
			case "2":
				$(".SVGBG").attr("src", "./img/svg/3kg_10g.svg");
				$(".Scaletxt").text(txt);
				Scale = 300;
				MaxValue = 3000;
				Adjustment = 90;
				ReSelect();
				break;
		}
	});
	$(".btn_1kg").mouseup(function (event) {
		ReSelect();
		NowType = 0;
		ReSet();
		$(".SVGBG").attr("src", "./img/svg/1kg_5g.svg");
		Scale = 200;
		MaxValue = 1000;
		Adjustment = 90;
		$(".Scaletxt").text("5g");
		ReBtn();
		$(".btn_1kg").attr("src", "./img/btn01_b.png");

		$(".imgScale").show();
		$(".SelectScale").show();

		$(".unit1").show();
		$(".unit2").hide();

		$(".img_g_kg").attr("src","./img/BG_w03.png");
	});
	$(".btn_3kg").mouseup(function (event) {
		ReSelect();
		NowType = 1;
		ReSet();
		$(".SVGBG").attr("src", "./img/svg/3kg_10g.svg");

		Scale = 300;
		MaxValue = 3000;
		Adjustment = 90;

		$(".Scaletxt").text("10g");
		ReBtn();
		$(".btn_3kg").attr("src", "./img/btn02_b.png");

		$(".imgScale").show();
		$(".SelectScale").show();

		$(".unit1").hide();
		$(".unit2").show();

	});
	$(".btn_100kg").mouseup(function (event) {
		ReSelect();
		NowType = 2;
		ReSet();
		$(".SVGBG").attr("src", "./img/svg/100kg.svg");
		Scale = 100;
		Adjustment = 90;
		MaxValue = 100;

		$(".Scaletxt").text("100kg");
		ReBtn();
		$(".btn_100kg").attr("src", "./img/btn03_b.png");

		$(".imgScale").hide();
		$(".SelectScale").hide();

		$(".unit1").show();
		$(".unit2").hide();

		$(".img_g_kg").attr("src","./img/BG_w02.png");
	});
	$(".Big").mouseup(function (event) {
		if ($(".Big").attr("src") == "./img/btn06.png") {
			$(".BigShowContent").html("");
			$(".BigShowContent").append($(".Content").html());
			$(".BigShow").show();
			$(".Block").show();
			$(".Big").attr("src", "./img/btn07.png")
			var MathTop = BigTop;
			if (BigTop > 198) {
				MathTop += (65 * BL);
			}
			else if (BigTop < 198) {
				MathTop -= (25 * BL);
			}
			$('.BigShowContent').css('transform', 'scale(' + BL + ')  translate(' + (BigLeft / -BL) + 'px,' + (MathTop / -BL) + 'px ) ');
		}
		else {
			$(".BigShowContent").html("");
			$(".BigShow").hide();
			$(".Block").hide();
			$(".Big").attr("src", "./img/btn06.png")
		}

	});
	$(".ShowPointer").mouseup(function (event) {
		if($(this).attr("src") == "./img/btn04.png"){
			$(this).attr("src","./img/btn05.png") ;
			$(".pointer").hide();
		}
		else{
			$(this).attr("src","./img/btn04.png");
			$(".pointer").show();
		}
	});
	$(".ShowWeight").mouseup(function (event) {
		if($(this).attr("src") == "./img/btn04.png"){
			$(this).attr("src","./img/btn05.png") ;
			$(".txtinput").hide();
		}
		else{
			$(this).attr("src","./img/btn04.png");
			if(NowType == 1){
				$(".txtinput").show();
			}
			else{
				$(".txtinput").show();
			}
	
			
		}
	});
	$(".Re").mouseup(function (event) {
		ReSet();
	});

	
	$(".Close").mouseup(function (event) {
		Close();
	});

});
function ParseNumber(val) {
	return parseInt(val) || 0;
}
function Check(check, event) {
	var keyCode = event.keyCode;
	if (keyCode == 8 || keyCode == 37 || keyCode == 39 || keyCode == 46 || (keyCode >= 96 && keyCode <= 105)) {
		var sum = $(check).val() + event.key;
	}
	else {
		if( !(keyCode >= 48 && keyCode <= 57)){
			event.preventDefault();
		}
	}
}

function CheckNumberSum(check, event, num) {

	var V = ParseNumber($(check).val().toString())

	switch (num) {
		case 1:
			if (V > 2) {
				V = 2
				$(check).val(2);
				event.stopPropagation();
				event.returnValue = false;
				event.cancelBubble = true;
				var Temp = ParseNumber($("#number1").val()) * 1000 + ParseNumber($("#number3").val());
				rotateByValue(Temp);
				return false;
			}
			else if (V < 0) {
				V = 0;
				$(check).val(0);
				event.stopPropagation();
				event.returnValue = false;
				event.cancelBubble = true;
				var Temp = ParseNumber($("#number1").val()) * 1000 + ParseNumber($("#number3").val());
				rotateByValue(Temp);
			}
			else {
				var Temp = ParseNumber($("#number1").val()) * 1000 + ParseNumber($("#number3").val());
				rotateByValue(Temp);
				return true;
			}
			break;
		case 2:
			if (V > (MaxValue - 1)) {
				V = (MaxValue - 1);
				//playsound("./audio/wrong.mp3");
				$(check).val((MaxValue - 1));
				event.stopPropagation();
				event.returnValue = false;
				event.cancelBubble = true;
				rotateByValue(V);
				return false;
			}
			else if (V < 0) {
				V = 0;
				$(check).val(0);
				event.stopPropagation();
				event.returnValue = false;
				event.cancelBubble = true;
				rotateByValue(V);
			}
			else {
				rotateByValue(V);
				return true;
			}
			break;
		case 3:
			if (V > 999) {
				V = 999
				$(check).val(999);
				event.stopPropagation();
				event.returnValue = false;
				event.cancelBubble = true;
				var Temp = ParseNumber($("#number1").val()) * 1000 + ParseNumber($("#number3").val());
				rotateByValue(Temp);
				return false;
			}
			else if (V < 0) {
				V = 0;
				$(check).val(0);
				event.stopPropagation();
				event.returnValue = false;
				event.cancelBubble = true;
				var Temp = ParseNumber($("#number1").val()) * 1000 + ParseNumber($("#number3").val());
				rotateByValue(Temp);
			}
			else {
				var Temp = ParseNumber($("#number1").val()) * 1000 + ParseNumber($("#number3").val());
				rotateByValue(Temp);
				return true;
			}
			break;
	}

}
function ReBtn() {
	$(".btn_1kg").attr("src", "./img/btn01_a.png");
	$(".btn_3kg").attr("src", "./img/btn02_a.png");
	$(".btn_100kg").attr("src", "./img/btn03_a.png");
}
function ReSelect() {
	$(".SelectScale1KG").hide();
	$(".SelectScale3KG").hide();
}
function dragstart_handler(ev) {
	console.log("dragStart");
	// Add the target element's id to the data transfer object
	ev.dataTransfer.setData("text/plain", ev.target.id);
}



