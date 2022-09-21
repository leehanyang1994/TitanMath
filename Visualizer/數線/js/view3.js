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



jQuery(document).ready(function ($) {


	Start = 0;
	End = 1;
    grid = 1;
    Denominator = 10;
    Now_Type="3";
	init();

	DrawScale();
	$('input[type="number"]').on('keyup',function(){
        v = parseInt($(this).val());
        min = parseInt($(this).attr('min'));
        max = parseInt($(this).attr('max'));

        if (v < min){
            $(this).val(min);
        } else if (v > max){
            $(this).val(max);
        }
    })
	$(".divScaleSelect > div").mouseup(function (event) {
		const x = $(this).attr("num");
		$("#imgScale").attr("num",x);
		$("#imgScale").removeClass().addClass("imgScale");
		$("#imgScale").addClass("imgScale"+x);
		$(".divScaleSelect").hide();
	});
	$(".btnScale").mouseup(function (event) {
		if($(".divScaleSelect").css("display") == "none"){
			$(".divScaleSelect").show();
		}
		else{
			$(".divScaleSelect").hide();
		}
	});
	/*類別*/
	$(".divTypeSelect > div").mouseup(function (event) {
		const x = $(this).attr("num");
		$(".divTypeSelect").hide();
		if(x == Now_Type)
		{
			return;
		}
		switch (x) {
			case "3":
                window.location = "index3.html";
				break;
			case "2":
				window.location = "index2.html";
				break;
			case "1":
				window.location = "index.html";
				break;

			default:
				break;
		}
	});
	$(".btnType").mouseup(function (event) {
		if ($(".divTypeSelect").css("display") == "none") {
			$(".divTypeSelect").show();
		}
		else {
			$(".divTypeSelect").hide();
		}
	});
	$(".divGridSelect > div").mouseup(function (event) {
		const x = $(this).attr("num");
		$("#imgGrid").attr("num",x);
		$("#imgGrid").removeClass().addClass("imgGrid");
		$("#imgGrid").addClass("imgGrid"+x);
		$(".divGridSelect").hide();
	});
	$(".btnGrid").mouseup(function (event) {
		if($(".divGridSelect").css("display") == "none"){
			$(".divGridSelect").show();
		}
		else{
			$(".divGridSelect").hide();
		}
	});

	$(".btnOK").mouseup(function (event) {	

		Start =  parseInt($(".inputMin").val());
		End =  parseInt($(".inputMax").val());
		if(End <= Start){
			alert("最大值必須大於最小值");
			return;
		}
		Denominator = parseInt($("#imgScale").attr("num"));
		grid = parseInt($("#imgGrid").attr("num"));

		groupCount = 0;
		scalevalue = [];
		scaleuse = [];
		removeAll();
		DrawScale();
	});
	$(".Close").mouseup(function (event) {	
		Close();
	});
	$(".Re").mouseup(function (event) {	
		Removebject("G");
		Removebject("Txt");
		Removebject("C");
		scaleuse = [];
		groupCount = 0;
	});
	$(".Memo").mouseup(function (event) {
		$(".Description").show(	);
	});
	$(".DescriptionClose").mouseup(function (event) {
		$(".Description").hide(	);
	});
    //點座標
	$(".Point").mouseup(function (event) {	
		if($(".Point").attr("src") == "./img/btn05_a.png"){
			IsShowPoint = false;
			$(".Point").attr("src","./img/btn05_b.png") 
			OpacityObject("G",0);
			OpacityObject("Txt",0);
		}
		else{
			$(".Point").attr("src","./img/btn05_a.png") 
			IsShowPoint = true;
			OpacityObject("G",1);
			OpacityObject("Txt",1);
		}
	
	});
   //數線座標 
	$(".NLine").mouseup(function (event) {	
		if($(".NLine").attr("src") == "./img/btn06_a.png"){
			IsShowNLine = false;
			$(".NLine").attr("src","./img/btn06_b.png") 
			OpacityObject("Scale",0);

		}
		else{
			IsShowNLine = true;
			$(".NLine").attr("src","./img/btn06_a.png") 
			OpacityObject("Scale",1);

		}
	
	});
	
});
	//關閉瀏覽器
	function Close() {
		window.location.href = 'about:blank ';
		window.opener = null;
		window.open('', '_self');
		window.close();
	}