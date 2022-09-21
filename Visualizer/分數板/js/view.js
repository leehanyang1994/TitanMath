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
var Magnification = 1.0;


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
	}
	else {
		document.addEventListener("touchstart", touchHandler, { passive: false });
		document.addEventListener("touchmove", touchHandler, { passive: false });
		document.addEventListener("touchend", touchHandler, { passive: false });
		document.addEventListener("touchcancel", touchHandler, { passive: false });

	}
}
var NowType = 0;
var NowTool = 0;
var Min = 2;
var NowDenominator = [2, 2];
var NowMolecular = [1, 1];
var GraphicsW = 300;
var GraphicsH = 300;

var GraphicsW2 = 300;
var GraphicsH2 = 300;

var IsShowFraction = false;
var IsShow01 = true;
var IsShow02 = false;
var plus = 1;
var plus2 = 1;
var NowObjectId = "1";
var NowCount = 1;



/*window.onload = function () {
	$(".Page_Home").show();
	$(".Load").hide();
};*/

jQuery(document).ready(function ($) {
	var IsAnwser = false;
	var NowDoNext = false;
	init();
	$("#ObjectDiv").show();
	ReText();
	DoDraw();
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
	function paddingLeft(str, lenght) {
		if (str.length >= lenght)
			return str;
		else
			return paddingLeft("0" + str, lenght);
	}
	/*$( ".RemoveBlock" ).sortable({
		cancel: ".Object",
		start: function(event, ui) {


		},
		receive: function (event, ui) {
			$("#ObjectDiv").append($(ui.helper));
			Delete(NowObjectId);
	
			//Delete(NowObjectId);
			setTimeout(() => {
				$( ".RemoveBlock").html('');
			}, 100);
	
		},
		sort: function() {
			//$(this).sortable("cancel");
		},
		beforeStop: function (event, ui) {
	

	
		},
		over: function( event, ui ) {
			$( ".RemoveBlock" ).css("background-color","red");
		}
	}).disableSelection();*/
	$("#Object1").draggable({
		iframeFix: true,
		connectToSortable: ".RemoveBlock",
		scroll: true, scrollSensitivity: 100,
		start: function () {
			//$(".RemoveBlock").show();
			NowObjectId = 1;
			CheckIndex();
		},
		drag: function (event, ui) {

		},
		stop: function (event, ui) {
			//$(".RemoveBlock").hide();
			var BG1S = $(".RemoveBlock").offset().top;
			var S = $("#Object1").offset().top + $("#Object1").height();
			if (S >= BG1S) {
				Delete(NowObjectId);
			}

		},
	});
	$("#Object2").draggable({
		iframeFix: true,
		connectToSortable: ".RemoveBlock",
		scroll: true, scrollSensitivity: 100,
		start: function () {
			NowObjectId = 2;
			CheckIndex();
		},
		drag: function (event, ui) {

		},
		stop: function () {
			var BG1S = $(".RemoveBlock").offset().top;
			var S = $("#Object2").offset().top + $("#Object2").height();
			if (S >= BG1S) {
				Delete(NowObjectId);
			}
		},
	});

	//Click

	$(".btnSelect").mouseup(function (event) {
		if (NowType == 0) {
			NowType = 1;
			$(".Page_Plus").show();
			$(".Page_Home").hide();
			$(".Circle,.ToolSelect05").mouseup();
			//$("#TypeBtn").removeClass("btnChange").addClass("btnPlus");
			/*$("#ObjectDiv").hide();
			$("#ObjectDiv2").show();*/

		}
		else {
			NowType = 0;
			$(".Page_Plus").hide();
			$(".Page_Home").show();

			$(".Circle,.ToolSelect05").mouseup();
			//$("#TypeBtn").removeClass("btnPlus").addClass("btnChange");
			/*$("#ObjectDiv2").hide();
			$("#ObjectDiv").show();*/
		}
	});
	$(".ShowFraction").mouseup(function (event) {
		IsShowFraction = !IsShowFraction;
		if (IsShowFraction) {
			$(".ShowFraction").attr("src", "./img/bt02.png");
			$(".DivFraction").show();
		}
		else {
			$(".ShowFraction").attr("src", "./img/bt02A.png");
			$(".DivFraction").hide();
		}
		CheckShow();
	});

	$(".Fraction01").mouseup(function (event) {
		IsShow01 = !IsShow01;
		if (IsShow01) {
			$(".Fraction01").attr("src", "./img/bt02-2A.png");
		}
		else {
			$(".Fraction01").attr("src", "./img/bt02-2B.png");
		}
		CheckShow();
	});
	$(".Fraction02").mouseup(function (event) {
		console.log("02");
		IsShow02 = !IsShow02;
		if (IsShow02) {
			$(".Fraction02").attr("src", "./img/bt02-3A.png");
		}
		else {
			$(".Fraction02").attr("src", "./img/bt02-3B.png");
		}
		CheckShow();
	});
	$(".Object > .WordGroup > .Word01 > .UpDenominator").mouseup(function (event) {
		var ID = parseInt($($(this).parent().parent().parent()).attr("id").replace("Object", ""));
		console.log(ID);
		NowObjectId = ID;
		NowDenominator[NowObjectId - 1] += plus;
		var Max = Settings[NowTool].Max;
		if (NowDenominator[NowObjectId - 1] > Max) {
			NowDenominator[NowObjectId - 1] = Max;
		}
		else {
			ReText();
			DoDraw();
		}
	});
	$(".Object > .WordGroup > .Word01 > .DownDenominator").mouseup(function (event) {
		var ID = parseInt($($(this).parent().parent().parent()).attr("id").replace("Object", ""));
		console.log(ID);
		NowObjectId = ID;
		NowDenominator[NowObjectId - 1] -= plus;
		if (NowDenominator[NowObjectId - 1] < Min) {
			NowDenominator[NowObjectId - 1] = Min;
		}
		else {
			if (NowMolecular[NowObjectId - 1] > NowDenominator[NowObjectId - 1] * 2) {
				NowMolecular[NowObjectId - 1] = NowDenominator[NowObjectId - 1] * 2;
			}
			ReText();

			DoDraw();
		}


	});
	$(".Object > .WordGroup > .Word01 >.UpMolecular").mouseup(function (event) {
		var ID = parseInt($($(this).parent().parent().parent()).attr("id").replace("Object", ""));
		//var ID = $($(this).parent().parent().parent()).attr("id");
		console.log(ID);
		NowObjectId = ID;
		NowMolecular[NowObjectId - 1]++;
		var Max = NowDenominator[NowObjectId - 1] * 2;
		if (NowMolecular[NowObjectId - 1] > Max) {
			NowMolecular[NowObjectId - 1] = Max;
		}
		else {
			ReText();
			DoDraw();
		}
	});
	$(".Object > .WordGroup > .Word01 >.DownMolecular").mouseup(function (event) {
		var ID = parseInt($($(this).parent().parent().parent()).attr("id").replace("Object", ""));
		console.log(ID);
		NowObjectId = ID;
		NowMolecular[NowObjectId - 1]--;
		if (NowMolecular[NowObjectId - 1] < 1) {
			NowMolecular[NowObjectId - 1] = 1;
		}
		else {
			ReText();
			DoDraw();
		}
	});
	$("body").mouseup(function (event) {
		$(".ToolBar").hide();
	});
	$(".Circle,.ToolSelect05").mouseup(function (event) {
		if (NowType == 0) {
			NowTool = 0;
			plus = 1;
			NowMolecular = [1, 1];
			NowDenominator[0] = 2;
			NowDenominator[1] = 2
			$(".Object").css("top", "3%");
			$(".Object").css("left", "3%");
			$("#ObjectDiv").show();
			$(".Graphics > img").show();
			$(".Page_Home > .Tool >.DivNowTool > .NowTool").attr("src", "./img/" + Settings[NowTool].ToolImg);
			$(".Plus").css("background-image", "url(./img/plusA.png)");
			NowCount = 1;
			NowObjectId = 1;
			Delete(2);
			ReText();
			DoDraw();
		}
		else{
			plus2 = 1
			NowTool2 = 0;
			NowMolecular2 = [1, 1];
			NowDenominator2[0] = 2;
			NowDenominator2[1] = 2;
			$(".Page_Plus > .Tool >.DivNowTool >.NowTool").attr("src", "./img/" + Settings[NowTool2].ToolImg);
			NowObjectId2 = 1;
			DoDrawPlus();
			ReTextPlus();
			NowObjectId2 = 2;
			DoDrawPlus();
			ReTextPlus();

		}
	});
	$(".Square,.ToolSelect04").mouseup(function (event) {
		if (NowType == 0) {
			NowTool = 1;
			plus = 1;
			NowMolecular = [1, 1];
			NowDenominator[0] = 2;
			NowDenominator[1] = 2
			$(".Object").css("top", "3%");
			$(".Object").css("left", "3%");
			$("#ObjectDiv").show();
			$(".Graphics > img").show();
			$(".Page_Home > .Tool >.DivNowTool > .NowTool").attr("src", "./img/" + Settings[NowTool].ToolImg);
			$(".Plus").css("background-image", "url(./img/plusA.png)");
			NowCount = 1;
			NowObjectId = 1;
			Delete(2);
			ReText();
			DoDraw();
		}
		else{
			plus2 = 1;
			NowTool2 = 1;
			NowMolecular2 = [1, 1];
			NowDenominator2[0] = 2;
			NowDenominator2[1] = 2;
			$(".Page_Plus > .Tool >.DivNowTool >.NowTool").attr("src", "./img/" + Settings[NowTool2].ToolImg);
			NowObjectId2 = 1;
			DoDrawPlus();
			ReTextPlus();
			NowObjectId2 = 2;
			DoDrawPlus();
			ReTextPlus();
		}
	});
	$(".Triangle,.ToolSelect03").mouseup(function (event) {
		if (NowType == 0) {
			NowTool = 2;
			plus = 1;
			NowMolecular = [1, 1];
			NowDenominator[0] = 2;
			NowDenominator[1] = 2
			$(".Object").css("top", "3%");
			$(".Object").css("left", "3%");
			$(".Page_Home > .Tool >.DivNowTool > .NowTool").attr("src", "./img/" + Settings[NowTool].ToolImg);
			$("#ObjectDiv").show();
			$(".Graphics > img").show();
			$(".Plus").css("background-image", "url(./img/plusA.png)");
			Delete(2);
			NowCount = 1;
			NowObjectId = 1;
			ReText();
			DoDraw();
		}
		else{
			plus2 = 1;
			NowTool2 = 2;
			NowMolecular2 = [1, 1];
			NowDenominator2[0] = 2;
			NowDenominator2[1] = 2;
			$(".Page_Plus > .Tool >.DivNowTool >.NowTool").attr("src", "./img/" + Settings[NowTool2].ToolImg);
			NowObjectId2 = 1;
			DoDrawPlus();
			ReTextPlus();
			NowObjectId2 = 2;
			DoDrawPlus();
			ReTextPlus();
		}
	});
	$(".Rectangle,.ToolSelect02").mouseup(function (event) {
		if (NowType == 0) {
			NowTool = 3;
			plus = 1;
			NowMolecular = [1, 1];
			NowDenominator[0] = 2;
			NowDenominator[1] = 2
			$(".Object").css("top", "3%");
			$(".Object").css("left", "3%");
			console.log( Settings[NowTool].ToolImg);
			$(".Page_Home > .Tool >.DivNowTool > .NowTool").attr("src", "./img/" + Settings[NowTool].ToolImg);
			$("#ObjectDiv").show();
			$(".Graphics > img").show();
			$(".Plus").css("background-image", "url(./img/plusA.png)");
			Delete(2);
			NowCount = 1;
			NowObjectId = 1;
			ReText();
			DoDraw();
		}
		else{
			plus2 = 1;
			NowTool2 = 3;
			NowMolecular2 = [1, 1];
			NowDenominator2[0] = 2;
			NowDenominator2[1] = 2;
			$(".Page_Plus > .Tool >.DivNowTool >.NowTool").attr("src", "./img/" + Settings[NowTool2].ToolImg);
			NowObjectId2 = 1;
			DoDrawPlus();
			ReTextPlus();
			NowObjectId2 = 2;
			DoDrawPlus();
			ReTextPlus();
		}
	});
	$(".Apple,.ToolSelect01").mouseup(function (event) {
		if (NowType == 0) {
			NowTool = 4;
			plus = 2;
			NowMolecular = [1, 1];
			NowDenominator[0] = 2;
			NowDenominator[1] = 2
			$(".Plus").css("background-image", "url(./img/plusA.png)");


			$(".Page_Home > .Tool >.DivNowTool >.NowTool").attr("src", "./img/" + Settings[NowTool].ToolImg);
			$("#ObjectDiv").show();

			NowCount = 1;
			NowObjectId = 1;
			Delete(2);
			ReText();
			DoDraw();
		}
		else{
			plus2 =2;
			NowTool2 = 4;
			NowMolecular2 = [1, 1];
			NowDenominator2[0] = 2;
			NowDenominator2[1] = 2;
			$(".Page_Plus > .Tool >.DivNowTool >.NowTool").attr("src", "./img/" + Settings[NowTool2].ToolImg);
			NowObjectId2 = 1;
			DoDrawPlus();
			ReTextPlus();
			NowObjectId2 = 2;
			DoDrawPlus();
			ReTextPlus();
		}
	});

	$(".Up,.DivNowTool").mouseup(function (event) {
		$(".ToolBar").show();
		event.stopPropagation();
	});
	$(".Plus").mouseup(function (event) {
		console.log(NowCount);

		if (NowCount < 2) {


			NowCount++;
			if (NowCount == 2) {
				$(".Plus").css("background-image", "url(./img/plusB.png)");
			}
			if ($("#Object1").css("display") == "none") {
				NowObjectId = 1;
			}
			else if ($("#Object2").css("display") == "none") {
				NowObjectId = 2;
				$("#Object2").css("left","40%");
			}
			NowMolecular[NowObjectId - 1] = 1;
			NowDenominator[NowObjectId - 1] = 2;
			ReText();
			DoDraw();
		}
		event.stopPropagation();
	});


	$(".Page_Home > .Dlete").mouseup(function (event) {
		Delete(1);
		Delete(2);
		NowMolecular[0] = 1;
		NowMolecular[1] = 1;
		NowDenominator[0] = 2;
		NowDenominator[1] = 2;
		NowObjectId = 1;
		ReText();
		DoDraw();
	});
	$(".CloseW").mouseup(function (event) {
		$(".Page_Q").hide();
	});
	$(".Question").mouseup(function (event) {
		$(".Page_Q").show();
	});
	$(".Close").mouseup(function (event) {
		Close();
	});
	$("#Object1").mouseup(function (event) {
		NowObjectId = 1;
		CheckIndex();
	});
	$("#Object2").mouseup(function (event) {
		if ($("#Object2").css("display") != "none") {
			NowObjectId = 2;
			CheckIndex();
		}
	});

});
function CheckIndex() {
	if (NowObjectId == 1) {
		$("#Object1").css("z-index", 9999);
		$("#Object2").css("z-index", 9998);
	}
	else {
		$("#Object1").css("z-index", 9998);
		$("#Object2").css("z-index", 9999);
	}
}

function Delete(ID) {

	NowDenominator[NowObjectId - 1] = 2;
	NowMolecular[NowObjectId - 1] = 1;
	$("#AppleGraphics" + ID).empty();
	$("#Object" + ID + " > .Graphics > img").attr("src", "");
	$("#Object" + ID + " > .Graphics > img").hide();
	$("#Object" + ID + " > .WordGroup").hide();
	$("#Object" + ID).css("top", "3%");
	$("#Object" + ID).css("left", "3%");
	$("#Object" + ID).hide();
	NowCount--;
	if (NowCount < 0) {
		NowCount = 0;
	}
	if (NowCount <= 1) {
		$(".Plus").css("background-image", "url(./img/plusA.png)");
	}
}

function DoDraw() {
	switch (NowTool) {
		case 0:
			DrawScreen2(280, NowDenominator[NowObjectId - 1], NowMolecular[NowObjectId - 1]);
			break;
		case 1:
			DrawSquare2(262, NowDenominator[NowObjectId - 1], NowMolecular[NowObjectId - 1]);
			break;
		case 2:
			DrawTriangle2(280, NowDenominator[NowObjectId - 1], NowMolecular[NowObjectId - 1]);
			break;
		case 3:
			DrawRectangle2(368, NowDenominator[NowObjectId - 1], NowMolecular[NowObjectId - 1]);
			break;
		case 4:
			DrawApple2(NowDenominator[NowObjectId - 1], NowMolecular[NowObjectId - 1]);
			break;
		default:
			break;
	}
	$("#Object" + NowObjectId + " > .WordGroup").css("display", "flex");
	$("#Object" + NowObjectId).css("display", "flex");
	$("#Object" + NowObjectId + " > .Graphics > img").show();
	$("#Object" + NowObjectId).show();
	CheckIndex();
}

function ReText() {
	if (NowDenominator[NowObjectId - 1] > Settings[NowTool].Max) {
		NowDenominator[NowObjectId - 1] = Settings[NowTool].Max;
	}
	if (NowMolecular[NowObjectId - 1] > NowDenominator[NowObjectId - 1] * 2) {
		NowMolecular[NowObjectId - 1] = NowDenominator[NowObjectId - 1] * 2;
	}

	$("#Object" + NowObjectId + " > .WordGroup > .Word01 > .txtDenominator").text(NowDenominator[NowObjectId - 1]);
	$("#Object" + NowObjectId + " > .WordGroup > .Word01 > .txtMolecular").text(NowMolecular[NowObjectId - 1]);

	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans01 > .Ans01Denominator").text(NowDenominator[NowObjectId - 1]);
	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans01 > .Ans01Molecular").text(NowMolecular[NowObjectId - 1]);

	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans02  > .Ans02Denominator").text(NowDenominator[NowObjectId - 1]);

	if (NowMolecular[NowObjectId - 1] % NowDenominator[NowObjectId - 1] == 0) {
		$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans02 > .block2").show();
		$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans03 > .block3").show();
	}
	else {
		$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans02 > .block2").hide();
		$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans03 > .block3").hide();
	}
	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans02 > .Ans02Molecular").text(NowMolecular[NowObjectId - 1] % NowDenominator[NowObjectId - 1]);
	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans02 > .Ans021Molecular").text(Math.floor(NowMolecular[NowObjectId - 1] / NowDenominator[NowObjectId - 1]));


	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans03 > .Ans03Denominator").text(NowDenominator[NowObjectId - 1]);
	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans03 > .Ans03Molecular").text(NowMolecular[NowObjectId - 1]);

	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans03 > .Ans031Denominator").text(NowDenominator[NowObjectId - 1]);
	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans03 > .Ans031Molecular").text(NowMolecular[NowObjectId - 1] % NowDenominator[NowObjectId - 1]);
	$("#Object" + NowObjectId + " > .WordGroup > .AnsDiv > .Ans03 > .Ans032Molecular").text(Math.floor(NowMolecular[NowObjectId - 1] / NowDenominator[NowObjectId - 1]));



}

function CheckShow() {
	if (IsShowFraction) {
		$(".ShowFraction").attr("src", "./img/bt02.png");
		if (IsShow01 && IsShow02) {
			$("#Object1 > .WordGroup > .AnsDiv").show();
			$("#Object2 > .WordGroup > .AnsDiv").show();

			$("#Object1 > .WordGroup > .AnsDiv > .Ans01").hide();
			$("#Object1 > .WordGroup > .AnsDiv > .Ans02").hide();
			$("#Object1 > .WordGroup > .AnsDiv > .Ans03").show();

			$("#Object2 > .WordGroup > .AnsDiv > .Ans01").hide();
			$("#Object2 > .WordGroup > .AnsDiv > .Ans02").hide();
			$("#Object2 > .WordGroup > .AnsDiv > .Ans03").show();
			/*$(".Ans01").hide();
			$(".Ans02").hide();
			$(".Ans03").show();*/
		}
		else if (IsShow01) {
			$("#Object1 > .WordGroup > .AnsDiv").show();
			$("#Object2 > .WordGroup > .AnsDiv").show();

			$("#Object1 > .WordGroup > .AnsDiv > .Ans01").show();
			$("#Object1 > .WordGroup > .AnsDiv > .Ans02").hide();
			$("#Object1 > .WordGroup > .AnsDiv > .Ans03").hide();

			$("#Object2 > .WordGroup > .AnsDiv > .Ans01").show();
			$("#Object2 > .WordGroup > .AnsDiv > .Ans02").hide();
			$("#Object2 > .WordGroup > .AnsDiv > .Ans03").hide();
			/*$(".Ans01").show();
			$(".Ans02").hide();
			$(".Ans03").hide();*/
		}
		else if (IsShow02) {
			$("#Object1 > .WordGroup > .AnsDiv").show();
			$("#Object2 > .WordGroup > .AnsDiv").show();

			$("#Object1 > .WordGroup > .AnsDiv > .Ans01").hide();
			$("#Object1 > .WordGroup > .AnsDiv > .Ans02").show();
			$("#Object1 > .WordGroup > .AnsDiv > .Ans03").hide();

			$("#Object2 > .WordGroup > .AnsDiv > .Ans01").hide();
			$("#Object2 > .WordGroup > .AnsDiv > .Ans02").show();
			$("#Object2 > .WordGroup > .AnsDiv > .Ans03").hide();
			/*$(".Ans01").hide();
			$(".Ans02").show();
			$(".Ans03").hide();*/
		}
		else {
			$("#Object1 > .WordGroup > .AnsDiv").hide();
			$("#Object2 > .WordGroup > .AnsDiv").hide();

			$("#Object1 > .WordGroup > .AnsDiv > .Ans01").hide();
			$("#Object1 > .WordGroup > .AnsDiv > .Ans02").hide();
			$("#Object1 > .WordGroup > .AnsDiv > .Ans03").hide();

			$("#Object2 > .WordGroup > .AnsDiv > .Ans01").hide();
			$("#Object2 > .WordGroup > .AnsDiv > .Ans02").hide();
			$("#Object2 > .WordGroup > .AnsDiv > .Ans03").hide();
			/*$(".Ans01").hide();
			$(".Ans02").hide();
			$(".Ans03").hide();*/
		}
	}
	else {
		$(".ShowFraction").attr("src", "./img/bt02A.png");
		$("#Object1 > .WordGroup > .AnsDiv").hide();
		$("#Object2 > .WordGroup > .AnsDiv").hide();

		$("#Object1 > .WordGroup > .AnsDiv > .Ans01").hide();
		$("#Object1 > .WordGroup > .AnsDiv > .Ans02").hide();
		$("#Object1 > .WordGroup > .AnsDiv > .Ans03").hide();

		$("#Object2 > .WordGroup > .AnsDiv > .Ans01").hide();
		$("#Object2 > .WordGroup > .AnsDiv > .Ans02").hide();
		$("#Object2 > .WordGroup > .AnsDiv > .Ans03").hide();
		/*$(".Ans01").hide();
		$(".Ans02").hide();
		$(".Ans03").hide();*/
	}
}