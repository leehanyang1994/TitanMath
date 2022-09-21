var PlusType = 0;//0 = +  1= -
var NowSetp = 0;
var AllStep = 0;
var Step =[];
var FinalAnswer = 0;
var FinalAnswer2 = 0;
jQuery(document).ready(function ($) {

    NowPage = ".Page_Number";
    NowTool = "Division";
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
        if(AllStep == 0){
            console.log(AllStep);
            return;
        }
       
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
        $(".Page_BigNumber >.TypeNumber > .TypeNumberTable > tbody > .Number2Text > .td1").not(":hidden").each(function (i, val) {
            $(val).text("");
        });
        Re();
        DoPlus();
    }
    $(".Delete").mouseup(function (event) {
        Clean();
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
    $(".Page_Number > .TypeNumber > .Number1 > .underline2").text("");
    $(".StraightAns").text("");

    $(".TableLine").hide();

    var N1 = padLeft($("#number1").val() ,LengthMax  );
    var N2 = padLeft($("#number2").val() ,LengthMax  );
    for (let i = 1; i < 11; i++) {
        $(".Page_Number >.TypeNumber > .TypeNumberTable > tbody > .Number"+ i+"Text > .td1").each(function (i, val) {   
            $(val).text("");
         });
    }
    $(".Page_Number >.TypeNumber > .TypeNumberTable > tbody > .Number2Text > .td1").each(function (i, val) {
        $(val).text(N1[i]);
    });
    $(".DivideTable > tbody > tr > td").each(function (i, val) { 
        $(val).text(N2[i]);
   });
    /*$(".Page_Number > .TypeNumber >.TypeNumberTable > tbody > .Number3Text > .td1").each(function (i, val) {
   
    });
    $(".PlusTable > tbody > tr > .td1").each(function (i, val) {
        $(val).text("");
    });*/
}
//動作
function DoStep(){
    //先復原
    Re();
    for (let i = 1; i <= NowSetp; i++) {
        var Data = Step[i - 1];
        //商
        $($(".Page_Number >.TypeNumber >.TypeNumberTable > tbody > .Number1Text > .td1")[Data.Quotient.Index]).text(Data.Quotient.Value);


        //商*除數
        $(".Page_Number >.TypeNumber > .TypeNumberTable > tbody > .Number"+ Data.RowIndex +"Text > .td1").each(function (i, val) {   
            $(val).text(Data.Value[i]);
         });
         //餘數
         $(".Page_Number >.TypeNumber > .TypeNumberTable > tbody > .Number"+ Data.Remainde.RowIndex +"Text > .td1").each(function (i, val) {   
            $(val).text(Data.Remainde.Value[i]);
         });
         $(".Line"+Data.Step ).show();

    }
    if(NowSetp >= AllStep){
		$(".Page_Number > .TypeNumber > .Number1 > .underline").text(FinalAnswer);
        $(".Page_Number > .TypeNumber > .Number1 > .underline2").text(FinalAnswer2);
    }
}
function CheckNumberSum(check,event){
    LengthMax = parseInt($(check).attr("maxlength"));
    var Val = 	$(check).val().toString();
    var num = parseInt($(check).attr("num") );
    Val = padLeft(Val,LengthMax);
    if($(check).val()== "0"){

        playsound("./audio/wrong.mp3");

        $(check).val("");
        if(num.toString() == "2"){
            $(".Page_Number >.TypeNumber > table > tbody > .Number"+ num+"Text > td").each(function (i, val) {
                $(val).text("");
            });
        }
        else{
            $(".DivideTable > tbody > tr > td").each(function (i, val) {  
                $(val).text("");
             });
        }


        event.stopPropagation();
		event.returnValue = false;
		event.cancelBubble = true;
        DoPlus();
        return false;
    }
    if($(check).val().toString().length > LengthMax){

		playsound("./audio/wrong.mp3");
		$(check).val(	Val.substring(0,LengthMax) );

        //超過去除最後
        Val = $(check).val().toString();
        Val = padLeft(Val,LengthMax);
		event.stopPropagation();
		event.returnValue = false;
		event.cancelBubble = true;
        console.log(Val);

        if(num.toString() == "2"){
            $(".Page_Number >.TypeNumber > table > tbody > .Number"+ num+"Text > td").each(function (i, val) {
                $(val).text(Val[i]);
            });
        }
        else{
            $(".DivideTable > tbody > tr > td").each(function (i, val) {  
                $(val).text(Val[i]);
             });
        }
        DoPlus();
		return false;
	}
	else{
        if(num.toString() == "2"){
            $(".Page_Number >.TypeNumber > table > tbody > .Number"+ num+"Text > td").each(function (i, val) {
                $(val).text(Val[i]);
            });
        }
        else{
            $(".DivideTable > tbody > tr > td").each(function (i, val) {  
                $(val).text(Val[i]);
             });
        }

        DoPlus();
		return true;
	}
 

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
        var N1 = padLeft($("#number1").val(),(LengthMax));
        var N2 = padLeft($("#number2").val(),(LengthMax));

        //答案
        FinalAnswer = Math.floor(ParseNumber(N1) / ParseNumber(N2));
        //餘
        FinalAnswer2 = Math.floor(ParseNumber(N1) % ParseNumber(N2));
        //計算數字
        var N1Math = N1.trim();
        var N2Math = N2.trim();

        //位數
        var NlCount =  N1Math.length;
        var N2Count = N2Math.length;

        //步驟數
        var StepCount = (NlCount - N2Count ) + 1
        //一次除幾位
        var DCount = N2Count;
        //餘數
        var Remainder = "0";
        

        //商數起始位置
        var QuotientIndex = (LengthMax - NlCount) + (N2Count - 1); 
        
        var RowIndex = 3;
        //起始位置
        var ColumnIndex = (LengthMax - NlCount);

        var MathIndex = ColumnIndex;

        var TempNIndex = 0;

        for (let i = 0; i < StepCount; i++) {
            AllStep++;
            var MN1 = 0;
            var Temp = "";
            if(Remainder != "0"){
                Temp += Remainder;
            }
            if(i == 0){
                for (var N1index = TempNIndex; N1index < DCount; N1index++) {
                    Temp+= N1Math[N1index] ;
               }
            }
            else{
                Temp += N1Math[TempNIndex + (DCount - 1)];
            }


            MN1 =  ParseNumber(Temp) ;

            //商數 
            var Q =  Math.floor(MN1 / N2Math);
            //商
            var Val = N2Math * Q;
            //餘
            var R = MN1 % N2Math;
            Remainder = R.toString();

            if(DCount + MathIndex < 4){
                R =  padLeft(R.toString(),DCount +MathIndex ) + N1[(DCount + MathIndex)];
            }

            var TempQ = padLeft(Val.toString(),(DCount + MathIndex));
           TempQ = padRight(TempQ,LengthMax);
           var TempR =  padLeft(R.toString(),(DCount + MathIndex))
           TempR = padRight(TempR,LengthMax);
            Data = 
            { 
                "MathIndex":MathIndex,
                "R":R,
                "Remainder":Remainder,
                "N2Math":N2Math,
                "MN1":MN1,
                "Q":Q,
                "Val":Val,
                "Step": AllStep ,
                "Quotient" : {
                    "Value": Q,
                    "Index": QuotientIndex
                } ,
                "Value": TempQ,
                "Index": i,
                "RowIndex": RowIndex,
                "Remainde":{
                    "RowIndex": (RowIndex+1),
                    "Index":i,
                    "Value": TempR
                }
            }
            ReturnVal.push(Data);
            QuotientIndex++;
            RowIndex+=2;
            MathIndex++;
            TempNIndex++;
        }
        Step = ReturnVal;
        
    }
}
function ParseNumber(val){
    return parseInt(val) || 0;
}