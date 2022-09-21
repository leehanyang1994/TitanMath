var PlusType = 0;//0 = +  1= -
var NowSetp = 0;
var AllStep = 0;
var Step =[];
var FinalAnswer = 0;
var FinalAnswer2 = 0;

jQuery(document).ready(function ($) {

    NowPage = ".Page_Number";
    NowPage2 =".Page_Capacity";
    NowTool = "Position";
    LengthMax = 1;
    $(".thtr1H").show();
    $(".thtr1S").hide();
    $(".thtr3H").show();
    $(".thtr3S").hide();
    // ShowStraight
    $(".Straight").mouseup(function (event) { 
        if($(".ShowStraight").css("display") == "none"){
            $(".ShowStraight").show();
            $(".Straight").attr("src","./img/stage3/btn04_on.png");
        }
        else{
            $(".ShowStraight").hide();
            $(".Straight").attr("src","./img/stage3/btn04_off.png");
        }
    });
    $(".Add").mouseup(function (event) {   
        var num = parseInt($(this).attr("num") );
		$(".Add[num="+ num+"]").hide();
		$(".Number" + (num+ 1) + "Text").show();
     });
    $(".imgflod").mouseup(function (event) {
        var num = parseInt($(this).attr("num"));
        if (num == 1) {
            //收起
            if ($(this).attr("src") == "img/stage2/btn_down.png") {
                $(".thtr" + num + "H").show();
                $(".thtr" + num + "S").hide();
                console.log(num);
            }
            else {
                $(".thtr" + num + "H").hide();
                $(".thtr" + num + "S").show();
            }
        }
        else{
            if ($(this).attr("src") == "img/stage2/btn_down.png") {
                $(".thtr" + num + "H").hide();
                $(".thtr" + num + "S").show();
                console.log(num);
            }
            else {
                $(".thtr" + num + "H").show();
                $(".thtr" + num + "S").hide();
            }
        }

    });
    function Clean(){
        $("input").val("");
        $(".Add").show();
        $(".Number1Text").show();
        $(".Number2Text").hide();
        $(".Number3Text").hide();
    }
    $(".Delete").mouseup(function (event) {
        Clean();
	});
	//focus 輸入框
    $("input").mouseup(function (event) {
        Selectinput = $(this);
        var LP = (((event.pageX + 10) / sRatio) / $(".Page_Number").outerWidth()) * 100;
        var TP = (((event.pageY + 60) / sRatio) / $(".Page_Number").outerHeight()) * 100;

        if(LP > 69){
           LP = 69;
        }
        $(".SelectNumber").css("left", LP + "%");
        $(".SelectNumber").css("top", TP + "%");
        $(".SelectNumber").css("display", "flex");
        event.stopPropagation();
    });
})

function CheckNumberSum(check, event) {
    if ($(check).val().toString().length > 1){
        var Val = $(check).val().toString();
        console.log(Val);
        $(check).val(Val.substring(1, 2)); 
    }
}


