jQuery(document).ready(function ($) {
	NowPage = ".Page_Number";
	NowPage2 = ".Page_Number";
	NowTool = "Position";
    LengthMax = 4;
	DeleteNumberPage();
    $(".Delete").mouseup(function (event) {
        DeleteNumberPage();
    });
    $(".Page_Number > .TypeNumber > div > .Read").mouseup(function (event) {	  
		var Temp = $(".Page_Number > .TypeNumber > div  > .divinput > #number" + $(this).attr("num") );
		if( Temp.val() != ""){
			var Val = Temp.val().toString();
			if( Val.length > LengthMax){
				setTimeout(() => {
					playsound("./audio/wrong.mp3");
				}, 100);
				Temp.val(Val.substring(0,LengthMax) )
			}
			var val =  parseInt(Temp.val());
			/*console.log(val );*/
			$(".Page_Number > .TypeNumber > .Number"+$(this).attr("num") + " > .underline").text(zh(val));
		}
	});
	$(".Page_Number > .TypeNumber > div > .Add").mouseup(function (event) {	  
		var num = parseInt($(this).attr("num") );
		$(".Page_Number > .TypeNumber > div > .Add[num="+ num+"]").hide();
		$(".Page_Number > .TypeNumber > .Number" + (num+ 1) ).show();
		$(".Page_Number > .TypeNumber > .Number" + (num+ 1) + "_1").show();
		$(".Page_Number >.TypeNumber > table > tbody > .Number" + (num+ 1) + "Text").show();
	});
})
function CheckNumberSum(check,event){
    if($(check).val().toString().length > LengthMax){
		var Val = 	$(check).val().toString();
		playsound("./audio/wrong.mp3");
		$(check).val(	Val.substring(0,LengthMax) );
		event.stopPropagation();
		event.returnValue = false;
		event.cancelBubble = true;

		var num = parseInt($(check).attr("num") );

		Val = padLeft(Val,LengthMax);
		$(".Page_Number > .TypeNumber > .Number"+ num+" > .underline").text("");
		$(".Page_Number >.TypeNumber > table > tbody > .Number"+ num+"Text > td").each(function (i, val) {
			$(val).text(Val[i]);
		});
		return false;
	}
	else{

		var num = parseInt($(check).attr("num") );
		var Val = 	$(check).val().toString();
		Val = padLeft(Val,LengthMax);
		$(".Page_Number > .TypeNumber > .Number"+ num+" > .underline").text("");
		$(".Page_Number >.TypeNumber > table > tbody > .Number"+ num+"Text > td").each(function (i, val) {
			$(val).text(Val[i]);
		});
		return true;
	}

}
function DeleteNumberPage(){
    $(".Page_Number > .TypeNumber > div > div > input").val("");
    $(".Page_Number > .TypeNumber > div > .underline").text("");

    $(".Page_Number > .TypeNumber > .Number2").hide();
    $(".Page_Number > .TypeNumber > .Number2_1").hide();
    $(".Page_Number >.TypeNumber > table > tbody > .Number2Text").hide();

    $(".Page_Number > .TypeNumber > .Number3").hide();
    $(".Page_Number > .TypeNumber > .Number3_1").hide();
    $(".Page_Number >.TypeNumber > table > tbody > .Number3Text").hide();
    
    $(".Page_Number >.TypeNumber > table > tbody > tr > td").text("");


    $(".Page_Number > .TypeNumber > .Number2").hide();
    /*$(".Number2,.Number2Text,.Number2_1").hide();
    $(".Number3,.Number3Text,.Number3_1").hide();
    $("td").text("");*/
    $(".Page_Number > .TypeNumber > div > .Add").show();

    $(".Page_Number > .Left").remove();
    $(".Page_Number > .Right").remove();
	
    LeftToolCount = 0;
    RightToolCount = 0;
}
function NumberPageResize(sRatio){
	$(".Page_Number > .TypeNumber").css({width:Math.round(900*sRatio),height:Math.round(800*sRatio)});

	$(".Page_Number > .TypeNumber > .Number1").css({width:Math.round(900*sRatio),height:Math.round(69*sRatio)});
	$(".Page_Number > .TypeNumber > .Number2").css({width:Math.round(900*sRatio),height:Math.round(69*sRatio)});
	$(".Page_Number > .TypeNumber > .Number3").css({width:Math.round(900*sRatio),height:Math.round(69*sRatio)});


	$(".Page_Number > .TypeNumber > div > .divinput").css({width:Math.round(211*sRatio),height:Math.round(69*sRatio)});

	$(".Page_Number > .TypeNumber > div > .divinput > input").css({width:Math.round(110*sRatio),height:Math.round(69*sRatio)});

	$(".Page_Number > .TypeNumber >.Number1_1").css({width:Math.round(550*sRatio),height:Math.round(69*sRatio)});
	$(".Page_Number > .TypeNumber >.Number2_1").css({width:Math.round(550*sRatio),height:Math.round(69*sRatio)});
	$(".Page_Number > .TypeNumber >.Number3_1").css({width:Math.round(550*sRatio),height:Math.round(69*sRatio)});

	$(".Page_Number > .TypeNumber > div > .divinput > input").css("font-size",Math.round(45*sRatio) +"px" );
	$(".Page_Number > .TypeNumber > div > .underline").css("font-size",Math.round(45*sRatio) +"px" );
	$(".Page_Number > .TypeNumber > div > .txtTitle").css({width:Math.round(30*sRatio),height:Math.round(69*sRatio)});
	$(".Page_Number > .TypeNumber > div > .txtTitle").css("font-size",Math.round(45*sRatio) +"px" );

	$(".Page_Number > .TypeNumber > div  > .underline").css({width:Math.round(340*sRatio),height:Math.round(69*sRatio)});
	$(".Page_Number > .TypeNumber > div  > .underline").css("border-bottom-width",Math.round(2*sRatio) + "px");

	$(".Page_Number > .TypeNumber > div > .Read").css({width:Math.round(114*sRatio),height:Math.round(68*sRatio)});

	$(".Page_Number > .TypeNumber > div > .Add").css({width:Math.round(57*sRatio),height:Math.round(57*sRatio)});
		
	$(" .Page_Number > .TypeNumber > .TypeNumberTable > thead > tr > .th1").css({width:Math.round(92*sRatio),height:Math.round(69*sRatio)});
	
	$(" .Page_Number > .TypeNumber > .TypeNumberTable > thead > tr > .th1").css("font-size",Math.round(45*sRatio) +"px" );
	

	$(" .Page_Number  > .TypeNumber > .TypeNumberTable > tbody > tr > .td1").css({width:Math.round(92*sRatio),height:Math.round(96*sRatio)});
	$(" .Page_Number  > .TypeNumber > .TypeNumberTable > tbody > tr > .td1").css("font-size",Math.round(45*sRatio) +"px" );
}