var UnitType = 0;// 0 = 百 1 = 千 2 = 萬
var PlusType = 0;//0 = +  1= - 2= x 3=/
var NowSetp = 0;
var AllStep = 0;
var Step = [];
var FinalAnswer = 0;
var AllMaxLenth = 0;
var MaxValue = 1000;
jQuery(document).ready(function ($) {
    NowPage = ".Page_BigNumber";
    NowPage2 = ".Page_BigNumber";
    NowTool = "Multiply";
    LengthMax = 3;
    AllMaxLenth = 3;
    $(".Straight").mouseup(function (event) {
        if ($(".ShowStraight").css("display") == "none") {
            $(".ShowStraight").show();
            $(".Straight").attr("src", "./img/stage3/btn04_on.png");
        }
        else {
            $(".ShowStraight").hide();
            $(".Straight").attr("src", "./img/stage3/btn04_off.png");
        }
    });
    //下一步
    $(".AnsDown").mouseup(function (event) {
        if (NowSetp < AllStep) {
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
        if (NowSetp > 0) {
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
    function Clean() {
        $("#number1").val("");
        $("#number2").val("");

        $(".Page_BigNumber >.TypeNumber > .TypeNumberTable > tbody > .Number1Text > .td1").not(":hidden").each(function (i, val) {
            $(val).text("");
        });

        $(".Page_BigNumber >.TypeNumber > .TypeNumberTable > tbody > .Number2Text > .td1").not(":hidden").each(function (i, val) {
            $(val).text("");
        });
        Re();
        DoPlus();
    }
    $(".Delete").mouseup(function (event) {
        Clean();
    });


    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").mouseup(function (event) {
        Clean();
        switch (UnitType) {
            case 2:
                $(".PlusImg").css("left","35.8%");
                UnitType = 1;
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Hundred").attr("src", "./img/stage4/icon01_H_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Thousand").attr("src", "./img/stage4/icon01_K_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/stage4/icon01_M_off.png");

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td2").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td1_1").show();

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th2").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th1_1").show();
                LengthMax = 4;
                AllMaxLenth = 4;
                MaxValue = 10000;
                break;
            default:
                $(".PlusImg").css("left","24.8%");
                UnitType = 2;
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Hundred").attr("src", "./img/stage4/icon01_H_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Thousand").attr("src", "./img/stage4/icon01_K_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/icon01_M_on.png");

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td2").show();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td1_1").show();

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th2").show();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th1_1").show();
                LengthMax = 5;
                AllMaxLenth = 8;
                MaxValue = 100000000
                break;
        }
        DoPlus();
    });
    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Thousand").mouseup(function (event) {
        Clean();
        switch (UnitType) {
            case 1:
                $(".PlusImg").css("left","38.8%");
                UnitType = 0;
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Hundred").attr("src", "./img/stage4/icon01_H_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Thousand").attr("src", "./img/stage4/icon01_K_off.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/stage4/icon01_M_off.png");

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td2").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td1_1").hide();

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th2").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th1_1").hide();
                LengthMax = 3;
                AllMaxLenth = 3;
                MaxValue = 1000;
                DoPlus();
                break;
            default:
                $(".PlusImg").css("left","35.8%");
                UnitType = 1;
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Hundred").attr("src", "./img/stage4/icon01_H_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Thousand").attr("src", "./img/stage4/icon01_K_on.png");
                $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/stage4/icon01_M_off.png");

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td2").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td1_1").show();

                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th2").hide();
                $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th1_1").show();

                // $(".Page_BigNumber > .TypeNumber > .PlusTable").css("width","1178px");
                LengthMax = 4;
                AllMaxLenth = 4;
                MaxValue = 10000;
                //console.log(LengthMax);
                break;
        }
        DoPlus();
    });

    $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Hundred").mouseup(function (event) {
        Clean();
        $(".PlusImg").css("left","38.8%");
        UnitType = 0;
        $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Hundred").attr("src", "./img/stage4/icon01_H_on.png");
        $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Thousand").attr("src", "./img/stage4/icon01_K_off.png");
        $(".Page_BigNumber > .TypeNumber > .UnitSelect > .Million").attr("src", "./img/stage4/icon01_M_off.png");

        $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td2").hide();
        $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > tbody >  tr > .td1_1").hide();

        $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th2").hide();
        $(".Page_BigNumber > .TypeNumber > .TypeNumberTable > thead >  tr > .th1_1").hide();
        LengthMax = 3;
        AllMaxLenth = 3;
        MaxValue = 1000;
        DoPlus();
    });


});

function CheckBigNumberSum(check, event) {
    var Val = $(check).val().toString();
    var num = parseInt($(check).attr("num"));

    if (!CheckSize(check)) {
        $(check).val(Val.substring(0, Val.length - 1));

        Val = $(check).val().toString();
        Val = padLeft(Val, AllMaxLenth);
        playsound("./audio/wrong.mp3");

        $(".Page_BigNumber > .TypeNumber > .Number" + num + " > .underline").text("");

        $(".Page_BigNumber >.TypeNumber > table > tbody > .Number" + num + "Text > td").not(":hidden").each(function (i, val) {
            $(val).text(Val[i]);
        });
        $(".StraightNumber" + num).text(Val);

        //DoPlus();
        return false;
    }
    //Val = padLeft(Val, AllMaxLenth );
    if ($(check).val().toString().length > LengthMax) {


        playsound("./audio/wrong.mp3");
        $(check).val(Val.substring(0, Val.length - 1));

        //超過去除最後
        Val = $(check).val().toString();
        Val = padLeft(Val, AllMaxLenth);

        event.stopPropagation();
        event.returnValue = false;
        event.cancelBubble = true;




        $(".Page_BigNumber > .TypeNumber > .Number" + num + " > .underline").text("");

        $(".Page_BigNumber >.TypeNumber > table > tbody > .Number" + num + "Text > td").not(":hidden").each(function (i, val) {
            $(val).text(Val[i]);
        });
        $(".StraightNumber" + num).text(Val);
        //DoPlus();
        return false;
    }
    else {
        Val = $(check).val().toString();
        Val = padLeft(Val, AllMaxLenth);


        $(".Page_BigNumber > .TypeNumber > .Number" + num + " > .underline").text("");


        $(".Page_BigNumber >.TypeNumber > table > tbody > .Number" + num + "Text > td").not(":hidden").each(function (i, val) {
            $(val).text(Val[i]);
            console.log(i + "            " + Val[i]);
        });

        $(".StraightNumber" + num).text(Val);
        DoPlus();
        return true;
    }
    //減法時下面不能比較大

}
function CheckSize(check) {
    var N1 = ParseNumber($("#number1").val().trim());
    var N2 = ParseNumber($("#number2").val().trim());
    if (N1 * N2 >= MaxValue) {
        return false;
    }
    return true;
}
function CheckUnit(Val) {
    //判斷萬
    if (Val.length > 4) {
        strCopy = Val.split('').reverse();
        if ((parseInt(strCopy[0]) + parseInt(strCopy[1]) + parseInt(strCopy[2]) + parseInt(strCopy[3])) == 0) {
            strCopy[0] = " ";
            strCopy[1] = " ";
            strCopy[2] = " ";
            strCopy[3] = "萬";
            Val = strCopy.reverse().join("");
        }
    }
    //判斷億
    if (Val.length > 8) {
        strCopy = Val.split('').reverse();
        if ((parseInt(strCopy[4]) + parseInt(strCopy[5]) + parseInt(strCopy[6]) + parseInt(strCopy[7])) == 0) {
            strCopy[4] = " ";
            strCopy[5] = " ";
            strCopy[6] = " ";
            strCopy[7] = "億";

            if (strCopy[3] == "萬") {
                strCopy[3] = " ";
            }

            console.log(strCopy);
            Val = strCopy.reverse().join("");
        }
    }
    //判斷兆
    if (Val.length > 12) {
        strCopy = Val.split('').reverse();
        if ((parseInt(strCopy[8]) + parseInt(strCopy[9]) + parseInt(strCopy[10]) + parseInt(strCopy[11])) == 0) {
            strCopy[8] = " ";
            strCopy[9] = " ";
            strCopy[10] = " ";
            strCopy[11] = "兆";
            if (strCopy[7] == "億") {
                strCopy[7] = " ";
            }
            Val = strCopy.reverse().join("");
        }
    }
    return Val;
}

//確認上一步下一步的圖示
function CheckUpDownImg() {
    if (NowSetp >= AllStep) {
        $(".AnsDown").attr("src", "./img/stage3/ans_downB.png");
    }
    else {
        $(".AnsDown").attr("src", "./img/stage3/ans_downA.png");
    }

    if (NowSetp <= 0) {
        $(".AnsUp").attr("src", "./img/stage3/ans_upB.png");
    }
    else {
        $(".AnsUp").attr("src", "./img/stage3/ans_upA.png");
    }
}
//復原
function Re() {
    $(".Page_BigNumber > .TypeNumber > .Number1 > .underline").text("");
    $(".StraightAns").text("");

    var N1 = padLeft($("#number1").val(), AllMaxLenth);
    var N2 = padLeft($("#number2").val(), AllMaxLenth);

    for (let index = 3; index <= 8; index++) {
        $(".Page_BigNumber > .TypeNumber >.TypeNumberTable > tbody > .Number" + index + "Text > .td1").not(":hidden").each(function (i, val) {
            $(val).text("");
        });
    }
    $(".trAns").remove();
    console.log("123");
}
//動作
function DoStep() {
    //先復原
    Re();
    for (let i = 1; i <= NowSetp; i++) {
        var Data = Step[i - 1];
        var Starttd = 0;

        // console.log(Data.Value);
        for (let index = Data.Value.length; index >= 0; index--) {
            $($(".Page_BigNumber >.TypeNumber >.TypeNumberTable > tbody > .Number" + Data.RowIndex + "Text > .td1").not(":hidden")[Data.Index - Starttd]).text(Data.Value[index]);
            Starttd++;
        }
        /*$($(".Page_BigNumber >.TypeNumber >.TypeNumberTable > tbody > .Number3Text > .td1").not(":hidden")[Data.Index]).text(Data.Value);
        if(Data.Carry != null){
             $($(".Page_BigNumber >.TypeNumber > .PlusTable > tbody > tr > .td1").not(":hidden")[Data.Carry.Index]).text(Data.Carry.Value);
         }
         if(Data.N1Change != null){
            $($(".Page_BigNumber > .TypeNumber >.TypeNumberTable > tbody > .Number1Text > .td1").not(":hidden")[Data.N1Change.Index]).text(Data.N1Change.Value);
            $($(".Page_BigNumber >.TypeNumber >.TypeNumberTable > tbody > .Number1Text > .td1").not(":hidden")[Data.N1Change.Index]).addClass("Red");
         }*/
    }
    if (NowSetp >= AllStep) {
        ($(".Page_BigNumber >.TypeNumber >.TypeNumberTable > tbody > .Number" + Data.RowIndex + "Text ")).before("<tr class='TableLine trAns'></tr>");


        $(".Page_BigNumber > .TypeNumber > .Number1 > .underline").text(FinalAnswer);

        $(".StraightAns").text(FinalAnswer);


        /*var NT = padLeft(FinalAnswer.toString(),AllMaxLenth);
        $(".Page_BigNumber > .TypeNumber >.TypeNumberTable > tbody > .Number8Text > .td1").not(":hidden").each(function (i, val) {    
            $(val).text(NT[i]);
         });*/
    }
}

function DoPlus() {
    AllStep = 0;
    NowSetp = 0;
    Step = [];
    var ReturnVal = [];
    Re();
    CheckUpDownImg();
    if ($("#number1").val() != "" && $("#number2").val() != "") {

        $(".StraightNumber1").text($("#number1").val());
        $(".StraightNumber2").text($("#number2").val());
        //進位
        var Carry = 0;
        $(".AnsDown").attr("src", "./img/stage3/ans_downA.png");

        var N1 = padLeft($("#number1").val(), (LengthMax + 1));
        var N2 = $("#number2").val().trim();


        var N2Length = $("#number2").val().trim().length;
        var intN1 = ParseNumber($("#number1").val());

        FinalAnswer = ParseNumber(N1) * ParseNumber(N2);
        //乘法
        var StarIndex = AllMaxLenth;
        var RowIndex = 3;
        if (N2Length > 1) {
            for (let i = N2Length - 1; i >= 0; i--) {
                AllStep++;

                var rel = intN1 * ParseNumber(N2[i]);
                var Data =
                {
                    "StarIndex": StarIndex,
                    "Step": AllStep,
                    "Value": Array.from(String(rel), Number),
                    "Index": StarIndex,
                    "RowIndex": RowIndex,
                    "Carry": null,
                    "N1Change": null
                }
                StarIndex--;
                RowIndex++;
                ReturnVal.push(Data);
            }
        }

        //最後一步答案

        var NT = padLeft(FinalAnswer.toString(), AllMaxLenth).split('');
        var Data =
        {
            "Step": AllStep++,
            "Value": NT,
            "Index": AllMaxLenth,
            "RowIndex": RowIndex,
            "Carry": null,
            "N1Change": null
        }
        ReturnVal.push(Data);
        Step = ReturnVal;
    }
}
function ParseNumber(val) {
    return parseInt(val) || 0;
}