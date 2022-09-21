var UnitType = 0;// 0 = 萬 1 = 億 2 = 兆
jQuery(document).ready(function ($) {
    NowPage = ".Page_BigNumber";
    NowTool = "Position";
    LengthMax = 8;
    DeleteBigNumberPage();
    $(".Chinese").show();
    $(".Delete").mouseup(function (event) {
        DeleteBigNumberPage();
    });
    $(".Page_BigNumber > .TypeNumber > div > .Read").mouseup(function (event) {
        var Temp = $(".Page_BigNumber > .TypeNumber > div  > .divinput > #number" + $(this).attr("num"));
        if (Temp.val() != "") {
            var Val = Temp.val().toString();
            if (Val.length > LengthMax) {
                setTimeout(() => {
                    playsound("./audio/wrong.mp3");
                }, 100);
                Temp.val(Val.substring(0, LengthMax))
            }
            var val = parseInt(Temp.val());
            /*console.log(val );*/
            $(".Page_BigNumber > .TypeNumber > .Number" + $(this).attr("num") + " > .underline").text(zh(val));
        }
    });
    $(".Page_BigNumber > .TypeNumber > div > .Add").mouseup(function (event) {
        var num = parseInt($(this).attr("num"));
        $(".Page_BigNumber > .TypeNumber > div > .Add[num=" + num + "]").hide();
        $(".Page_BigNumber > .TypeNumber > .Number" + (num + 1)).show();
        $(".Page_BigNumber > .TypeNumber > .Number" + (num + 1) + "_1").show();
        $(".Page_BigNumber >.TypeNumber > table > tbody > .Number" + (num + 1) + "Text").show();
    });

    $(".Page_BigNumber > .TypeNumber > div > .Add").mouseup(function (event) {	  
		var num = parseInt($(this).attr("num") );
		$(".Page_BigNumber > .TypeNumber > div > .Add[num="+ num+"]").hide();
		$(".Page_BigNumber > .TypeNumber > .Number" + (num+ 1) ).show();
		$(".Page_BigNumber > .TypeNumber > .Number" + (num+ 1) + "_1").show();
		$(".Page_BigNumber >.TypeNumber > table > tbody > .Number" + (num+ 1) + "Text").show();
	});

    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Trillion").mouseup(function (event) {
        DeleteBigNumberPage();
        switch (UnitType) {
            case 2:
                UnitType = 1;
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Trillion").attr("src", "./img/icon01_T_off.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Billion").attr("src", "./img/icon01_B_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/icon01_M_on.png");

                $(".Page_BigNumber >  .TypeNumber > .TypeNumberTable > tbody >  tr > .td4").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td3").show();

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th4").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th3").show();

                LengthMax = 12;
                break;
            default:
                UnitType = 2;
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Trillion").attr("src", "./img/icon01_T_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Billion").attr("src", "./img/icon01_B_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/icon01_M_on.png");

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td4").show();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td3").show();

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th4").show();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th3").show();

                LengthMax = 16;
                break;
        }
    });
    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Billion").mouseup(function (event) {
        DeleteBigNumberPage();
        switch (UnitType) {
            case 1:
                UnitType = 0;
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Trillion").attr("src", "./img/icon01_T_off.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Billion").attr("src", "./img/icon01_B_off.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/icon01_M_on.png");

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td4").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td3").hide();

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th4").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th3").hide();
                LengthMax = 8;
                break;
            default:
                UnitType = 1;
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Trillion").attr("src", "./img/icon01_T_off.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Billion").attr("src", "./img/icon01_B_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/icon01_M_on.png");

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td4").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td3").show();

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th4").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th3").show();

                LengthMax = 12;
                console.log(LengthMax);
                break;
        }
    });

    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").mouseup(function (event) {
        DeleteBigNumberPage();
        UnitType = 0;
        $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Trillion").attr("src", "./img/icon01_T_off.png");
        $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Billion").attr("src", "./img/icon01_B_off.png");
        $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/icon01_M_on.png");

        $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td4").hide();
        $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td3").hide();

        $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th4").hide();
        $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th3").hide();

        LengthMax = 8;
    });


})
function ChineseChange(){
    $(".Page_BigNumber > .TypeNumber > div > .divinput > input").each(function (i, val){
        var num = parseInt($(val).attr("num"));
        var Val = $(val).val().toString();
        
        Val = padLeft(Val,LengthMax);
        console.log(Val);
        //$(".Page_BigNumber > .TypeNumber > .Number" + num + " > .underline").text("");
        if(Chinese){
            Val= CheckUnit(Val);
        }
        $(".Page_BigNumber >.TypeNumber > table > tbody > .Number" + num + "Text > td").not(":hidden").each(function (i, val) {
            $(val).text(Val[i]);
        });
     });
}
function DeleteBigNumberPage() {
    UnitType = 0;
    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Trillion").attr("src", "./img/icon01_T_off.png");
    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Billion").attr("src", "./img/icon01_B_off.png");
    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/icon01_M_on.png");

    $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td4").hide();
    $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td3").hide();

    $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th4").hide();
    $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th3").hide();
    
    Chinese = false;
    $(".Chinese > img").attr("src", "./img/btn03_off.png");

    $(".Page_BigNumber > .TypeNumber > div > div > input").val("");
    $(".Page_BigNumber > .TypeNumber > div > .underline").text("");

    $(".Page_BigNumber > .TypeNumber > .Number2").hide();
    $(".Page_BigNumber > .TypeNumber > .Number2_1").hide();
    $(".Page_BigNumber >.TypeNumber > table > tbody > .Number2Text").hide();

    $(".Page_BigNumber > .TypeNumber > .Number3").hide();
    $(".Page_BigNumber > .TypeNumber > .Number3_1").hide();
    $(".Page_BigNumber >.TypeNumber > table > tbody > .Number3Text").hide();

    $(".Page_BigNumber >.TypeNumber > table > tbody > tr > td").text("");

    $(".Page_BigNumber > .TypeNumber > div > .Add").show();

   /* $(".Page_BigNumber > .TypeNumber > .Number2").hide();

    $(".Page_BigNumber > .TypeNumber > div > .Add").show();*/

    $(".Page_BigNumber > .Left").remove();
    $(".Page_BigNumber > .Right").remove();
    LeftToolCount = 0;
    RightToolCount = 0;


    
}
function CheckBigNumberSum(check, event) {
    if ($(check).val().toString().length > LengthMax) {
        console.log(LengthMax);
        var Val = $(check).val().toString();
        playsound("./audio/wrong.mp3");
        $(check).val(Val.substring(0, LengthMax));
        event.stopPropagation();
        event.returnValue = false;
        event.cancelBubble = true;


        
        var num = parseInt($(check).attr("num"));

        Val = padLeft(Val.substring(0, LengthMax), LengthMax);

        $(".Page_BigNumber > .TypeNumber > .Number" + num + " > .underline").text("");
        if(Chinese){
            Val= CheckUnit(Val);
        }
        $(".Page_BigNumber >.TypeNumber > table > tbody > .Number" + num + "Text > td").not(":hidden").each(function (i, val) {
            console.log(i);
            $(val).text(Val[i]);
            console.log(Val[i]);
        });
        console.log(Val);
        return false;
    }
    else {

        var num = parseInt($(check).attr("num"));
        var Val = $(check).val().toString();
        Val = padLeft(Val, LengthMax);



        $(".Page_BigNumber > .TypeNumber > .Number" + num + " > .underline").text("");
        if(Chinese){
            Val= CheckUnit(Val);
        }
        $(".Page_BigNumber >.TypeNumber > table > tbody > .Number" + num + "Text > td").not(":hidden").each(function (i, val) {
            $(val).text(Val[i]);
   
        });
        console.log(Val);
        return true;
    }

}
function BigNumberPageResize(sRatio) {
    $(".Page_BigNumber > .TypeNumber").css({ width: Math.round(1800 * sRatio), height: Math.round(800 * sRatio) });

    $(".Page_BigNumber > .TypeNumber > .Number1").css({ width: Math.round(1800 * sRatio), height: Math.round(69 * sRatio) });
    $(".Page_BigNumber > .TypeNumber > .Number2").css({ width: Math.round(1800 * sRatio), height: Math.round(69 * sRatio) });
    $(".Page_BigNumber > .TypeNumber > .Number3").css({ width: Math.round(1800 * sRatio), height: Math.round(69 * sRatio) });


    $(".Page_BigNumber > .TypeNumber > div > .divinput").css({ width: Math.round(554 * sRatio), height: Math.round(69 * sRatio) });

    $(".Page_BigNumber > .TypeNumber > div > .divinput > input").css({ width: Math.round(435 * sRatio), height: Math.round(69 * sRatio) });

    $(".Page_BigNumber > .TypeNumber >.Number1_1").css({ width: Math.round(550 * sRatio), height: Math.round(69 * sRatio) });
    $(".Page_BigNumber > .TypeNumber >.Number2_1").css({ width: Math.round(550 * sRatio), height: Math.round(69 * sRatio) });
    $(".Page_BigNumber > .TypeNumber >.Number3_1").css({ width: Math.round(550 * sRatio), height: Math.round(69 * sRatio) });

    $(".Page_BigNumber > .TypeNumber > div > .divinput > input").css("font-size", Math.round(45 * sRatio) + "px");

    $(".Page_BigNumber > .TypeNumber > div > .txtTitle").css({ width: Math.round(30 * sRatio), height: Math.round(69 * sRatio) });
    $(".Page_BigNumber > .TypeNumber > div > .txtTitle").css("font-size", Math.round(45 * sRatio) + "px");

    $(".Page_BigNumber > .TypeNumber > div  > .underline").css({ width: Math.round(1040 * sRatio), height: Math.round(44 * sRatio) });
    $(".Page_BigNumber > .TypeNumber > div  > .underline").css("border-bottom-width", Math.round(2 * sRatio) + "px");
    $(".Page_BigNumber > .TypeNumber > div > .underline").css("font-size", Math.round(32 * sRatio) + "px");

    $(".Page_BigNumber > .TypeNumber > div > .Read").css({ width: Math.round(114 * sRatio), height: Math.round(68 * sRatio) });

    $(".Page_BigNumber > .TypeNumber > div > .Add").css({ width: Math.round(57 * sRatio), height: Math.round(57 * sRatio) });


    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th1").css({ width: Math.round(92 * sRatio), height: Math.round(69 * sRatio) });
    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th1").css("font-size", Math.round(45 * sRatio) + "px");

    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th2").css({ width: Math.round(92 * sRatio), height: Math.round(69 * sRatio) });
    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th2").css("font-size", Math.round(45 * sRatio) + "px");
    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th2_1").css("font-size", Math.round(38 * sRatio) + "px");

    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th3").css({ width: Math.round(92 * sRatio), height: Math.round(69 * sRatio) });
    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th3").css("font-size", Math.round(45 * sRatio) + "px");
    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th3_1").css("font-size", Math.round(38 * sRatio) + "px");

    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th4").css({ width: Math.round(92 * sRatio), height: Math.round(69 * sRatio) });
    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th4").css("font-size", Math.round(45 * sRatio) + "px");
    $(" .Page_BigNumber > .TypeNumber > .TypeNumberTable > thead > tr > .th4_1").css("font-size", Math.round(38 * sRatio) + "px");


    $(" .Page_BigNumber  > .TypeNumber > .TypeNumberTable > tbody > tr > .td1").css({ width: Math.round(92 * sRatio), height: Math.round(96 * sRatio) });
    $(" .Page_BigNumber  > .TypeNumber > .TypeNumberTable > tbody > tr > .td1").css("font-size", Math.round(45 * sRatio) + "px");

    $(" .Page_BigNumber > .TypeNumber  > .UnitSelect").css({ width: Math.round(240 * sRatio), height: Math.round(89 * sRatio) });


    $(".Page_BigNumber > .TypeNumber  > .UnitSelect > .Million").css({ width: Math.round(64 * sRatio), height: Math.round(64 * sRatio) });
    $(".Page_BigNumber > .TypeNumber  > .UnitSelect > .Billion").css({ width: Math.round(64 * sRatio), height: Math.round(64 * sRatio) });
    $(".Page_BigNumber > .TypeNumber  > .UnitSelect > .Trillion").css({ width: Math.round(64 * sRatio), height: Math.round(64 * sRatio) });
}


function CheckUnit(Val){
    //判斷萬
    if(Val.length > 4){
        strCopy = Val.split('').reverse();
        if( (parseInt(strCopy[0]) + parseInt(strCopy[1])  + parseInt(strCopy[2])  + parseInt(strCopy[3]) ) == 0){
            strCopy[0] = " ";
            strCopy[1] = " ";
            strCopy[2] = " ";
            strCopy[3] = "萬";
            Val= strCopy.reverse().join("");
         }
    }
    //判斷億
    if(Val.length > 8){
        strCopy = Val.split('').reverse();
        if( (parseInt(strCopy[4]) + parseInt(strCopy[5])  + parseInt(strCopy[6])  + parseInt(strCopy[7]) ) == 0){
            strCopy[4] = " ";
            strCopy[5] = " ";
            strCopy[6] = " ";
            strCopy[7] = "億";

            if(strCopy[3] == "萬"){
                strCopy[3] = " ";
            }

            console.log(strCopy);
            Val= strCopy.reverse().join("");
        }
    }
    //判斷兆
    if(Val.length > 12){
        strCopy = Val.split('').reverse();
        if( (parseInt(strCopy[8]) + parseInt(strCopy[9])  + parseInt(strCopy[10])  + parseInt(strCopy[11]) ) == 0){
            strCopy[8] = " ";
            strCopy[9] = " ";
            strCopy[10] = " ";
            strCopy[11] = "兆";
            if(strCopy[7] == "億"){
                strCopy[7] = " ";
            }
            Val= strCopy.reverse().join("");
        }
    }
    return Val;
}
