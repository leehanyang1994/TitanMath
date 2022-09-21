var IsMute = false;
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
		/*var head= document.getElementsByTagName('head')[0]; 
		var script= document.createElement('script'); 
		script.type= 'text/javascript'; 
		script.src= 'js/jquery.ui.touch-punch.min.js';  //要載入的js
		head.appendChild(script); */
		/*document.addEventListener("touchstart", touchHandler, { passive: false });
		document.addEventListener("touchmove", touchHandler, { passive: false });
		document.addEventListener("touchend", touchHandler, { passive: false });
		document.addEventListener("touchcancel", touchHandler, { passive: false });*/

		$("input").attr("readonly", "readonly");
	}
	else {
		document.addEventListener("touchstart", touchHandler, { passive: false });
		document.addEventListener("touchmove", touchHandler, { passive: false });
		document.addEventListener("touchend", touchHandler, { passive: false });
		document.addEventListener("touchcancel", touchHandler, { passive: false });

	}
}
var NowDIndex = 0;
var IsPlay = false;
var NowCount = 1;
var NowAudio = "video01";
var NowSound = "sound01";
var NowIndex = 0;
var Zindex = 0;

var LeftToolCount = 0;
var RightToolCount = 0;

var NowPage = ".Page_Number";
var NowPage2 = "";
var NowTool = "Position"; //Position  Plus Multiply Except
var LengthMax = 4;
var Chinese = false;
jQuery(document).ready(function ($) {

	var Find = (element) => element == $(".DescriptionImg").attr("src");
	NowDIndex =SettingDescription.findIndex(Find);

	CheckDescription();
	init();
	$("input").focus(function(){
		this.blur();
	});
	$("img").each(function (i, val) {
		var f = Enumerable.From(SettingL).Where(x => x.img == $(val).attr("src")).ToArray()[0];
		if (f != null) {
			$(val).css({ width: Math.round(f.W), height: Math.round(f.H) });
		}
		var f2 = Enumerable.From(SettingR).Where(x => x.img == $(val).attr("src")).ToArray()[0];
		if (f2 != null) {
			$(val).css({ width: Math.round(f2.W), height: Math.round(f2.H) });
		}
	});
	//隨機打亂陣列
	function randomsort(a, b) {
		return Math.random() > .5 ? -1 : 1;
	}

	//關閉瀏覽器
	function Close() {
		window.location.href = 'about:blank ';
		window.opener = null;
		window.open('', '_self');
		window.close();
	}
	//撥放念字
	function Read() {
		$("#read").attr("src", "./audio/question/" + nowquestion + ".mp3");
		$("#read")[0].currentTime = 0;
		$("#read")[0].play();
	}
	$('#read').bind('ended', function () {
	})
	//撥放結束
	$('#audio1').on('ended', function () {


	});


	
	$("body").mouseup(function (event) {
		$(".dragLeft").hide();
		$(".dragRight").hide();
		$(".SelectNumber").hide();
		$(".SelectNumberBig").hide();
	});
	//刪除
	/*$(".Delete").mouseup(function (event) {
		DeleteNumberPage();
		DeleteBigNumberPage();
	});*/
	//關閉
	$(".Close").mouseup(function (event) {
		Close();
	});

	
	$(".Question").mouseup(function (event) {
		$(".Description").show(	)
	});
	$(".DescriptionClose").mouseup(function (event) {

		$(".Description").hide(	)
	});
	$(".DescriptionLeft").mouseup(function (event) {
		NowDIndex--;
		CheckDescription();
	});

	$(".DescriptionRight").mouseup(function (event) {
		NowDIndex++;
		CheckDescription();
	});
	//數字鍵盤刪除
	$(".KeyDelete").mouseup(function (event) {
		event.stopPropagation();
		$(Selectinput).val("");
		$(Selectinput).keyup();
	});
	//數字輸入
	$(".Key").mouseup(function (event) {
		var e = jQuery.Event("keyup");
		e.which = 13;
		var v = $(Selectinput).focus().val() + $(this).attr("src").replace(".png", "").replace("./img/", "").replace("key_", "");
		$(Selectinput).focus().val(v).trigger(e);
		event.stopPropagation();
	});
	$(".Key0000").mouseup(function (event) {
		var e = jQuery.Event("keyup");
		e.which = 13;
		var v = $(Selectinput).focus().val() + $(this).attr("src").replace(".png", "").replace("./img/", "").replace("key_", "");
		$(Selectinput).focus().val(v).trigger(e);
		event.stopPropagation();
	});
	//數字鍵盤關閉
	$(".KeyX").mouseup(function (event) {
		$(".SelectNumber").hide();
		$(".SelectNumberBig").hide();
	});
	$(".btnSelectPage").mouseup(function (event) {

		switch (NowTool) {
			case "Plus":
				if ($(".SelectPageD").css("display") == "none") {
					$(".SelectPageD").show();
				}
				else {
					$(".SelectPageD").hide();
				}
				break;

			default:
				if ($(".SelectPage").css("display") == "none") {
					$(".SelectPage").show();
				}
				else {
					$(".SelectPage").hide();
				}
				break;
		}
	});

	//選擇種類
	$(".SelectPage > .Pagelul > div").mouseup(function (event) {
		var Num = $(this).attr("num");
	   //alert(Num +"       " +NowPage2);
		switch (Num) {
			case "0":
				if (NowPage2 != ".Page_BigNumber") {
					switch (NowTool) {
						case "Position":
							window.location = "BigNumber.html";
							break;
						case "Plus":
							window.location = "PlusBigNumber.html";
							break;
					}
				}
				break;
			case "1":
				if (NowPage2 != ".Page_Number") {
					switch (NowTool) {
						case "Position":
							window.location = "Number.html"
							break;
						case "Plus":
							window.location = "PlusNumber.html";
							break;
					}
					$(".Chinese").hide();
				}
				break;
			case "2":
				if (NowPage2 != ".Page_Length") {
					window.location = "Length.html";
				}
				break;
			case "3":
				if (NowPage2 != ".Page_Area") {
					window.location = "Area.html";
				}
				break;
			case "4":
				if (NowPage2 != ".Page_Bulk") {
					window.location = "Bulk.html";
				}
				break;
			case "5":
				if (NowPage2 != ".Page_Capacity") {
					window.location = "Capacity.html";
				}
				break;
			case "6":
				if (NowPage2 != ".Page_Weight") {
					window.location = "Weight.html";
				}
				break;
			default:
				break;
		}
		$(".SelectPage").hide();
	});
	$(".SelectPageD > .PagelulD > div").mouseup(function (event) {
		var Num = $(this).attr("num");

		switch (Num) {
			case "0":
				if (NowPage2 != ".Page_BigNumber") {
					switch (NowTool) {
						case "Position":
							window.location = "BigNumber.html";
							break;
						case "Plus":
							window.location = "PlusBigNumber.html";
							break;
					}
				}
				break;
			case "1":
				if (NowPage2 != ".Page_Number") {
					switch (NowTool) {
						case "Position":
							window.location = "Number.html"
							break;
						case "Plus":
							window.location = "PlusNumber.html";
							break;
					}
					$(".Chinese").hide();
				}
				break;
			default:
				break;
		}
		$(".SelectPage").hide();
	});
	//選擇工具
	$(".btnSelectType").mouseup(function (event) {

		if ($(".SelectType").css("display") == "none") {
			$(".SelectType").show();
		}
		else {
			$(".SelectType").hide();
		}
	});

	$(".SelectType > .Selectul > div").mouseup(function (event) {
		var Num = $(this).attr("num");
		switch (Num) {
			case "3":
				if (NowTool != "Position") {
					if (NowPage == ".Page_BigNumber") {
						window.location = "BigNumber.html";
					}
					else if (NowPage == ".Page_Number") {
						window.location = "Number.html"
					}
				}
				break;
			//除法
			case "2":
				if (NowTool != "Division") {
					window.location = "DivisionNumber.html";
				}
				break;
			//乘法
			case "1":
				if (NowTool != "Multiply") {
					window.location = "MultiplyNumber.html";
				}
				break;
			case "0":
				if (NowTool != "Plus") {
					if (NowPage == ".Page_BigNumber") {
						window.location = "PlusBigNumber.html";
					}
					else if (NowPage == ".Page_Number") {
						window.location = "PlusNumber.html";
					}
				}
				break;
			default:
				break;
		}
		$(".SelectPage").hide();
	});
	$(".Chinese > img").mouseup(function (event) {
		if (Chinese) {
			$(".Chinese > img").attr("src", "./img/btn03_off.png")
		}
		else {
			$(".Chinese > img").attr("src", "./img/btn03_on.png")
		}
		Chinese = !Chinese;
		if (NowPage = ".Page_BigNumber") {
			ChineseChange();
		}
	});
	//focus 輸入框
	$(".divinput,.divinput2").mouseup(function (event) {
		$(this).children("input").focus();
		Selectinput = $(this).children("input");
		var L = $(this).children("input").offset().left / sRatio;
		console.log($(this).outerHeight());

		var T = ($(this).children("input").offset().top + ($(this).outerHeight() * sRatio) + 3) / sRatio;
		var LP = (L / $(NowPage).outerWidth()) * 100;
		var TP = (T / $(NowPage).outerHeight()) * 100;

		switch (NowPage) {
			case ".Page_Number":
				$(".SelectNumber").css("left", LP + "%");
				$(".SelectNumber").css("top", TP + "%");
				$(".SelectNumber").css("display", "flex");
				break;
			case ".Page_BigNumber":
				$(".SelectNumberBig").css("left", LP + "%");
				$(".SelectNumberBig").css("top", TP + "%");
				$(".SelectNumberBig").css("display", "flex");
				break;
			default:
				break;
		}

		/*$(".SelectNumber").show();*/
		event.stopPropagation();
	});



	var dragStart = 0;
	var StartImgW = 0;
})

function padLeft(str, lenght) {
	if (str.length >= lenght)
		return str;
	else
		return padLeft(" " + str, lenght);
}
function padRight(str, lenght) {
	if (str.length >= lenght)
		return str;
	else
		return padRight(str + " ", lenght);
}
function playsound(src) {
	$("#audio1").attr("src", src);
	$("#audio1")[0].currentTime = 0;
	$("#audio1")[0].play();
}




function Check(check, event) {
	var keyCode = event.keyCode;
	if (keyCode == 8 || keyCode == 37 || keyCode == 39 || keyCode == 46 || (keyCode >= 96 && keyCode <= 105)) {
		var sum = $(check).val() + event.key;
	}
	else {
		event.preventDefault();
	}

	/*console.log(event);
	var integerAge = parseInt(sum);

	if(!isNaN( integerAge))  {
		console.log(sum);
	}

	if(event.key > 5){
		event.isTrusted = false;
		event.preventDefault();
		console.log(event);
		return false;
	}*/


}
String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}
function CheckDescription(){
	$(".DescriptionLeft").show();
	$(".DescriptionRight").show();
	$(".DescriptionImg").attr("src",SettingDescription[NowDIndex]);
	if(NowDIndex <= 0){
		NowDIndex = 0
		$(".DescriptionLeft").hide();
	}
	else if(NowDIndex >= (SettingDescription.length - 1)){
		NowDIndex = (SettingDescription.length - 1);
		$(".DescriptionRight").hide();
	}
}


