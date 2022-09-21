var PlusType = 0;//0 = +  1= -
var NowSetp = 0;
var AllStep = 0;
var Step =[];
var FinalAnswer = 0;

var IsShowAns = false;

var TempN1  = null;
jQuery(document).ready(function ($) {

    NowPage = ".Page_Number";
    NowPage2 = ".Page_Number";
    NowTool = "Plus";
    LengthMax = 4;
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
    //下一步
    $(".AnsDown").mouseup(function (event) {
        if(NowSetp < AllStep){
            NowSetp++;
            DoStep();
           /*var Data = Step[NowSetp - 1];
           $($(".TypeNumberTable > tbody > .Number3Text > .td1")[Data.Index]).text(Data.Value);
           if(Data.Carry != null){
            $($(".PlusTable > tbody > tr > .td1")[Data.Carry.Index]).text(Data.Carry.Value);
           }*/
        }
        CheckUpDownImg();
    });
    //上一步
    $(".AnsUp").mouseup(function (event) {
        if(NowSetp > 0){
            NowSetp--;
            DoStep();
        }
        CheckUpDownImg();
    });
    //解答
    $(".Ans").mouseup(function (event) { 
        if(NowSetp !=AllStep ){
            NowSetp = AllStep;
        }
        else{
            NowSetp = 0;
        }
        DoStep();
        CheckUpDownImg();
    });
    function Clean(){
        $("#number1").val("");
        $("#number2").val("");
        $(".StraightNumber1").text($("#number1").val());
        $(".StraightNumber2").text($("#number2").val());
        $(".StraightAns").text("");
        
        $(".TypeNumber > .TypeNumberTable > tbody > .Number2Text > .td1").not(":hidden").each(function (i, val) {
            $(val).text("");
        });
        Re();
        DoPlus();
    }
    $(".Delete").mouseup(function (event) {
        Clean();
	});
    //加減
    $(".Plus").mouseup(function (event) { 
        Clean();
        if(PlusType == 0){
            PlusType = 1;
            $(".Plus").attr("src","./img/stage3/btn_minus.png");

            $(".PlusImg").attr("src","./img/stage3/minus.png");
            $(".StraightImg").attr("src","./img/stage3/minus.png");
            DoPlus();
            
        }
        else{
            PlusType = 0;
            $(".Plus").attr("src","./img/stage3/btn_plus.png");

            $(".PlusImg").attr("src","./img/stage3/plus.png");
            $(".StraightImg").attr("src","./img/stage3/plus.png");
            DoPlus();
        }
    });


})
//確認上一步下一步的圖示
function CheckUpDownImg(){
    if(NowSetp >= AllStep){
        $(".AnsDown").attr("src","./img/stage3/ans_downB.png");
    }
    else{
        $(".AnsDown").attr("src","./img/stage3/ans_downA.png");
    }

    if(NowSetp <= 0){
        $(".AnsUp").attr("src","./img/stage3/ans_upB.png");
    }
    else{
        $(".AnsUp").attr("src","./img/stage3/ans_upA.png");
    }
}
//復原
function Re(){
    $(".Page_Number > .TypeNumber > .Number1 > .underline").text("");
    $(".StraightAns").text("");
    
    var N1 = padLeft($("#number1").val() ,(LengthMax  ));
    var N2 = padLeft($("#number2").val() ,(LengthMax ));
    $(".Page_Number >.TypeNumber > .TypeNumberTable > tbody > .Number1Text > .td1").each(function (i, val) {
        $(val).text("");
        $(val).removeClass("Red");
        $(val).text(N1[i]);
    });
    $(".Page_Number > .TypeNumber >.TypeNumberTable > tbody > .Number3Text > .td1").each(function (i, val) {
        $(val).text("");
    });
    $(".PlusTable > tbody > tr > .td1").each(function (i, val) {
        $(val).text("");
    });
}
//動作
function DoStep(){
    //先復原
    Re();
    if(AllStep <= 0)
      return;
    for (let i = 1; i <= NowSetp; i++) {
        var Data = Step[i - 1];
        $($(".Page_Number >.TypeNumber >.TypeNumberTable > tbody > .Number3Text > .td1")[Data.Index]).text(Data.Value);
        if(Data.Carry != null){
             $($(".Page_Number >.TypeNumber > .PlusTable > tbody > tr > .td1")[Data.Carry.Index]).text(Data.Carry.Value);
         }
         if(Data.N1Change != null){
            if(Data.N1Change.Value != 9){
                $($(".Page_Number > .TypeNumber >.TypeNumberTable > tbody > .Number1Text > .td1")[Data.N1Change.Index]).text(Data.N1Change.Value);
                 $($(".Page_Number >.TypeNumber >.TypeNumberTable > tbody > .Number1Text > .td1")[Data.N1Change.Index]).addClass("Red");
            }
            var Count = Data.N1Change.DoCount;
            if(Count> 1){
                for (let index = 1; index < Count ; index++) {
                    var TempData = Step[(i - 1 +index)];
                    if(TempData.Carry != null){
                        $($(".Page_Number >.TypeNumber > .PlusTable > tbody > tr > .td1")[TempData.Carry.Index]).text(TempData.Carry.Value);
                    }
                    if(TempData.N1Change != null){
                        if(TempData.N1Change.Value != 9){
                            $($(".Page_Number > .TypeNumber >.TypeNumberTable > tbody > .Number1Text > .td1")[TempData.N1Change.Index]).text(TempData.N1Change.Value);
                            $($(".Page_Number >.TypeNumber >.TypeNumberTable > tbody > .Number1Text > .td1")[TempData.N1Change.Index]).addClass("Red");
                        }

                    }
                }

            }
         }
    }
    if(NowSetp >= AllStep){
		$(".Page_Number > .TypeNumber > .Number1 > .underline").text(FinalAnswer);
        $(".StraightAns").text(FinalAnswer);
    }
}
function CheckNumberSum(check,event){
    //LengthMax = parseInt($(check).attr("maxlength"));
    var Val = 	$(check).val().toString();
    var num = parseInt($(check).attr("num") );
    Val = padLeft(Val,(LengthMax ));

    if(!CheckSize(check)){
		event.stopPropagation();
		event.returnValue = false;
		event.cancelBubble = true;

        if(PlusType == 1 && num == 1){
            $("#number2").val("");

            $(".Number2Text > td").each(function (i, val) {
                $(val).text("");
            });
        }
        else{
            $(check).val($(check).val().substring(0, $(check).val().length - 1));

            Val = $(check).val().toString();
            Val = padLeft(Val,(LengthMax ));    
        }

        playsound("./audio/wrong.mp3");

        $(".Page_Number > .TypeNumber > .Number" + num + " > .underline").text("");
		$(".Page_Number >.TypeNumber > table > tbody > .Number"+ num+"Text > td").each(function (i, val) {
            $(val).text(Val[i]);
		});
        $(".StraightNumber"+ num).text(Val);
        DoPlus();
        return false;
    }

    if($(check).val().toString().length > LengthMax){

		playsound("./audio/wrong.mp3");
		$(check).val(	Val.substring(0,LengthMax) );

        //超過去除最後
        Val = $(check).val().toString();
        Val = padLeft(Val,(LengthMax));
		event.stopPropagation();

		event.returnValue = false;
		event.cancelBubble = true;

		$(".Page_Number >.TypeNumber > table > tbody > .Number"+ num+"Text > td").each(function (i, val) {
            $(val).text(Val[i]);
		});
        $(".StraightNumber"+ num).text(Val);
		return false;
	}
	else{
		//$(".Page_Number > .TypeNumber > .Number"+ num+" > .underline").text("");
		$(".Page_Number >.TypeNumber > table > tbody > .Number"+ num+"Text > td").each(function (i, val) {
			$(val).text(Val[i]);
		});
        $(".StraightNumber"+ num).text(Val);
        DoPlus();
		return true;
	}
 

}
function CheckSize(check){
    var Val = $(check).val().toString();
    var num = parseInt($(check).attr("num"));
    Val = padLeft(Val,(LengthMax ));
    //if(PlusType == 1 && $("#number1").val() != "" && $("#number2").val() != ""){
    if(PlusType == 1 && num == 2){
        var N1 = ParseNumber($("#number1").val().trim());
        var N2 = ParseNumber($("#number2").val().trim());

        if(N1 < N2){
            return false;
        }
    }
    if(PlusType == 1 && num == 1){
        var N1 = ParseNumber($("#number1").val().trim());
        var N2 = ParseNumber($("#number2").val().trim());
        if(N1 < N2){
            return false;
        }
    }
    if(PlusType == 0 && LengthMax == 4){
        var N1 = ParseNumber($("#number1").val().trim());
        var N2 = ParseNumber($("#number2").val().trim());
        if(N1 + N2 > 9999){
            return false;
        }
    }
    return true;
}
function DoPlus(){
    AllStep = 0;
    NowSetp = 0;
    Step =[];
    var ReturnVal = [];
    Re();
    CheckUpDownImg();
    if($("#number1").val() != "" && $("#number2").val() != ""){
        
        $(".StraightNumber1").text($("#number1").val());
        $(".StraightNumber2").text($("#number2").val());
        //進位
        var  Carry = 0;
        $(".AnsDown").attr("src","./img/stage3/ans_downA.png");
        var N1 = padLeft($("#number1").val(),(LengthMax  ));
        var N2 = padLeft($("#number2").val(),(LengthMax ));

        //加法
        if(PlusType == 0){
            FinalAnswer = ParseNumber(N1) +ParseNumber(N2);
            for (let i = (LengthMax - 1); i >= 0; i--) {
                var int1 = ParseNumber(N1[i]);
                var int2 = ParseNumber(N2[i]);

                if( isNaN(parseInt(N1[i]))&& isNaN(parseInt(N2[i]))&& Carry == 0){
                    continue;
                }
                else{
                    //console.log(AllStep);
                    AllStep++;
                    var Temp = int1 + int2 + Carry;
                    var Data;
                    //判斷進位
                    if(Temp.toString().length > 1){
                        Carry = 1;
                        Data = 
                        { 
                            "Step": AllStep ,
                            "Value":(ParseNumber(Temp.toString()[1])),
                            "Index": i,
                            "Carry":
                            {
                                "Value": Carry,
                                "Index": (i - 1)
                            },
                            "N1Change":null
                        }
                        ReturnVal.push(Data);
                    }
                    else{
                        Carry = 0;
                        Data = 
                        { 
                            "Step": AllStep ,
                            "Value":(ParseNumber(Temp.toString()[0])),
                            "Index": i,
                            "Carry": null,
                            "N1Change":null
                        }
                        ReturnVal.push(Data);
                    }
                }    
            }
        }
        else{
            FinalAnswer = ParseNumber(N1) - ParseNumber(N2);
            var IsDoCarry = false;
            for (let i = (LengthMax ); i >= 0; i--) {

                var int1 = ParseNumber(N1[i]);
                var int2 = ParseNumber(N2[i]);

                var Nextint1 = ParseNumber(N1[i - 1]);
                if( isNaN(parseInt(N1[i]))&& isNaN(parseInt(N2[i]))&& Carry == 0){
                    continue;
                }
                else{


                    AllStep++;
                    var Temp = int1 - Carry - int2;
                 

                    //判斷不夠大要跟前一位借
                    if(Temp < 0){
                        Carry = 1;
                        var N1ChangeValue = (Nextint1 - 1);

                        if(N1ChangeValue < 0){
                            N1ChangeValue = (Nextint1  + 10 - 1);
                        }

                        var D = 0;
                        //N1.replaceAt(2,"0")
                         //判斷連續幾個0
                         if(int1 - Carry == 0){
                            D = CheckLenghtSetp(N1.replaceAt(i,"0"),i);
                        }
                        else{
                            D = CheckLenghtSetp(N1,i);
                        }
                     

                        Data = 
                        { 
                            "Step": AllStep ,
                            "Value":(10 + Temp),
                            "Index": i,
                            "Carry":
                            {
                                "Value": IsDoCarry ? 9: 10,
                                "Index": i
                            },
                            "N1Change":
                             {
                                "Index": (i - 1),
                                "Value": N1ChangeValue,
                                "DoCount":D
                            }
                             
                        }

                        ReturnVal.push(Data);
                        if(Nextint1 == 0){
                            IsDoCarry = true;
                        }
                        else{
                            IsDoCarry = false;
                        }
                       
                    }
                    else{
                        Carry = 0;
                        Data = 
                        { 
                            "Step": AllStep ,
                            "Value": Temp,
                            "Index": i,
                            "Carry": null,
                            "N1Change":null
                        }
                        ReturnVal.push(Data);
                        IsDoCarry = false;
                    }

                }
            }
        }
        Step = ReturnVal;
    }
}
function CheckLenghtSetp(val,i){
    var DoLength = 0;
    for (let index = i ; index >= 0; index--) {
        console.log(val[index]);
        //DoLength++;
        if( ParseNumber(val[index]) != 0){
            break;
        }
        DoLength++;
    }
    return DoLength;
}
function reverse(s){
    return s.split("").reverse().join("");
}
function ParseNumber(val){
    return parseInt(val) || 0;
}