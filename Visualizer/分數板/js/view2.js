var NowTool2 = 0;
var IsShowFraction2 = false;
var NowDenominator2 = [2, 2];
var NowMolecular2 = [1, 1];
var NowObjectId2 = 1;
var Min2 = 2;

jQuery(document).ready(function ($) {
    $(".ObjectP > .WordGroup > .Word01 > .UpDenominator").mouseup(function (event) {
		var ID = parseInt($($(this).parent().parent().parent()).attr("id").replace("ObjectP", ""));

		NowObjectId2 = ID;
		NowDenominator2[NowObjectId2 - 1] += plus2;
		var Max = Settings[NowTool2].Max;
		if (NowDenominator2[NowObjectId2 - 1] > Max) {
			NowDenominator2[NowObjectId2 - 1] = Max;
		}
		else {
			ReTextPlus();
			DoDrawPlus();
		}
	});
	$(".ObjectP > .WordGroup > .Word01 > .DownDenominator").mouseup(function (event) {
		var ID = parseInt($($(this).parent().parent().parent()).attr("id").replace("ObjectP", ""));
		console.log(ID);
		NowObjectId2 = ID;
		NowDenominator2[NowObjectId2 - 1] -= plus2;
		if (NowDenominator2[NowObjectId2 - 1] < Min) {
			NowDenominator2[NowObjectId2 - 1] = Min;
		}
		else {
			if (NowMolecular2[NowObjectId2 - 1] > NowDenominator2[NowObjectId2 - 1] * 2) {
				NowMolecular2[NowObjectId2 - 1] = NowDenominator2[NowObjectId2 - 1] * 2;
			}
			ReTextPlus();

			DoDrawPlus();
		}


	});
	$(".ObjectP > .WordGroup > .Word01 >.UpMolecular").mouseup(function (event) {
		var ID = parseInt($($(this).parent().parent().parent()).attr("id").replace("ObjectP", ""));
		//var ID = $($(this).parent().parent().parent()).attr("id");
		console.log(ID);
		NowObjectId2 = ID;
		NowMolecular2[NowObjectId2 - 1]++;
		var Max = NowDenominator2[NowObjectId2 - 1] * 2;
		if (NowMolecular2[NowObjectId2 - 1] > Max) {
			NowMolecular2[NowObjectId2 - 1] = Max;
		}
		else {
			ReTextPlus();
			DoDrawPlus();
		}
	});
	$(".ObjectP > .WordGroup > .Word01 >.DownMolecular").mouseup(function (event) {
		var ID = parseInt($($(this).parent().parent().parent()).attr("id").replace("ObjectP", ""));
		console.log(ID);
		NowObjectId2 = ID;
		NowMolecular2[NowObjectId2 - 1]--;
		if (NowMolecular2[NowObjectId2 - 1] < 1) {
			NowMolecular2[NowObjectId2 - 1] = 1;
		}
		else {
			ReTextPlus();
			DoDrawPlus();
		}
    });
    
	$(".ShowFraction2").mouseup(function (event) {
		IsShowFraction2 = !IsShowFraction2;
		if (IsShowFraction2) {
			$(".ShowFraction2").attr("src", "./img/bt04.png");
			//$(".DivFraction2").show();
			if($(".Fraction01P").css("opacity") == "1"){
				$(".Page_Plus > .Bar > .Anstype01 > .AddAns01").show();
				$(".Anstype01").show();
				$(".Anstype02").hide();
			}
			if($(".Fraction02P").css("opacity") == "1"){
				$(".Page_Plus > .Bar > .Anstype02 > .AddAns02").show();
				$(".Anstype02").show();
				$(".Anstype01").hide();
			}
		}
		else {
			$(".ShowFraction2").attr("src", "./img/bt04A.png");
			//$(".DivFraction2").hide();
			$(".Page_Plus > .Bar > .Anstype02 >  .AddAns02").hide();
			$(".Page_Plus > .Bar > .Anstype01 > .AddAns01").hide();
		}
		//CheckShow();
	});
	$(".Page_Plus > .Dlete").mouseup(function (event) {
		NowMolecular2[0] = 1;
		NowMolecular2[1] = 1;
		NowDenominator2[0] = 2;
		NowDenominator2[1] = 2;

		NowObjectId2 = 1;
		DoDrawPlus();
		ReTextPlus();
		NowObjectId2 = 2;
		DoDrawPlus();
		ReTextPlus();

	})


	$(".Fraction01P").mouseup(function (event) {
		if(	$(".Fraction01P").css("opacity") == "0" ){
			if($(".Fraction02P").css("opacity") == "1"){
				$(".Fraction02P").css("opacity", "0");
				$(".Page_Plus > .Bar > .Anstype02 >  .AddAns02").hide();
			}
			if($(".ShowFraction2").attr("src") == "./img/bt04.png"){
				$(".Anstype01").show();
				$(".Anstype02").hide();
				$(".Page_Plus > .Bar > .Anstype01 > .AddAns01").show();
			}

			$(".Fraction01P").css("opacity", "1");

			$("#ObjectP1 > .WordGroup > .AnsDiv > .Ans01").show();
			$("#ObjectP2 > .WordGroup > .AnsDiv > .Ans01").show();
			$("#ObjectP2 > .WordGroup > .AnsDiv > .Ans02").hide();
			$("#ObjectP1 > .WordGroup > .AnsDiv > .Ans02").hide();
			/*$(".Ans01").show();
			$(".Ans02").hide();*/
			$(".Page_Plus > .Bar > .Anstype01 > .AddAns01").show();
			$(".Anstype01").show();
			$(".Anstype02").hide();
			if (!IsShowFraction2) {
				$(".Page_Plus > .Bar > .Anstype02 >  .AddAns02").hide();
				$(".Page_Plus > .Bar > .Anstype01 > .AddAns01").hide();
			}
		}
		/*else{
			$(".Fraction01P").css("opacity", "0");
		}*/
	});
	
	$(".Fraction02P").mouseup(function (event) {
		if(	$(".Fraction02P").css("opacity") == "0" ){
			if($(".Fraction01P").css("opacity") == "1"){
				$(".Fraction01P").css("opacity", "0");
				$(".Page_Plus > .Bar > .Anstype01 > .AddAns01").hide();
			}
			if($(".ShowFraction2").attr("src") == "./img/bt04.png"){
				$(".Anstype02").show();
				$(".Anstype01").hide();
				$(".Page_Plus > .Bar > .Anstype02 >  .AddAns02").show();
			}

			$(".Fraction02P").css("opacity", "1");

			$("#ObjectP1 > .WordGroup > .AnsDiv > .Ans01").hide();
			$("#ObjectP2 > .WordGroup > .AnsDiv > .Ans01").hide();
			$("#ObjectP2 > .WordGroup > .AnsDiv > .Ans02").show();
			$("#ObjectP1 > .WordGroup > .AnsDiv > .Ans02").show();
			/*$(".Ans01").hide();
			$(".Ans02").show();*/
			$(".Page_Plus > .Bar > .Anstype02 >  .AddAns02").show();
			$(".Anstype02").show();
			$(".Anstype01").hide();
			if (!IsShowFraction2) {
				$(".Page_Plus > .Bar > .Anstype02 >  .AddAns02").hide();
				$(".Page_Plus > .Bar > .Anstype01 > .AddAns01").hide();
			}

		}
		/*else{
			$(".Fraction02P").css("opacity", "0");
		}*/
	});
});
function CheckIndexP() {
	if (NowObjectId == 1) {
		$("#ObjectP1").css("z-index", 9999);
		$("#ObjectP2").css("z-index", 9998);
	}
	else {
		$("#ObjectP1").css("z-index", 9998);
		$("#ObjectP2").css("z-index", 9999);
	}
}
function DoDrawPlus() {
	switch (NowTool2) {
		case 0:
            //console.log(NowObjectId2);
			DrawScreenPlus(280, NowDenominator2[NowObjectId2 - 1], NowMolecular2[NowObjectId2 - 1]);
			break;
		case 1:
			DrawSquarePlus(262, NowDenominator2[NowObjectId2 - 1], NowMolecular2[NowObjectId2 - 1]);
			break;
		case 2:
			DrawTrianglePlus(280, NowDenominator2[NowObjectId2 - 1], NowMolecular2[NowObjectId2 - 1]);
			break;
		case 3:
			DrawRectanglePlus(368, NowDenominator2[NowObjectId2 - 1], NowMolecular2[NowObjectId2 - 1]);
			break;
		case 4:
            console.log(NowDenominator2[NowObjectId2 - 1]);
            console.log(NowMolecular2[NowObjectId2 - 1]);
			DrawApplePlus(NowDenominator2[NowObjectId2 - 1], NowMolecular2[NowObjectId2 - 1]);
			break;
		default:
			break;
	}
	$("#ObjectP" + NowObjectId2 + " > .WordGroup").css("display", "flex");
	$("#ObjectP" + NowObjectId2).css("display", "flex");
	$("#ObjectP" + NowObjectId2 + " > .Graphics > img").show();
	$("#ObjectP" + NowObjectId2).show();
	CheckIndexP();
}

function ReTextPlus() {
	if (NowDenominator2[NowObjectId2 - 1] > Settings[NowTool2].Max) {
		NowDenominator2[NowObjectId2 - 1] = Settings[NowTool2].Max;
	}
	if (NowMolecular2[NowObjectId2 - 1] > NowDenominator2[NowObjectId2 - 1] * 2) {
		NowMolecular2[NowObjectId2 - 1] = NowDenominator2[NowObjectId2 - 1] * 2;
	}

	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .Word01 > .txtDenominator").text(NowDenominator2[NowObjectId2 - 1]);
	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .Word01 > .txtMolecular").text(NowMolecular2[NowObjectId2 - 1]);

	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans01 > .Ans01Denominator").text(NowDenominator2[NowObjectId2 - 1]);
	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans01 > .Ans01Molecular").text(NowMolecular2[NowObjectId2 - 1]);

	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans02  > .Ans02Denominator").text(NowDenominator2[NowObjectId2 - 1]);

	if (NowMolecular2[NowObjectId2 - 1] % NowDenominator2[NowObjectId2 - 1] == 0) {
		$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans02 > .block2").show();
		$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans03 > .block3").show();
	}
	else {
		$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans02 > .block2").hide();
		$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans03 > .block3").hide();
	}
	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans02 > .Ans02Molecular").text(NowMolecular2[NowObjectId2 - 1] % NowDenominator2[NowObjectId2 - 1]);
	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans02 > .Ans021Molecular").text(Math.floor(NowMolecular2[NowObjectId2 - 1] / NowDenominator2[NowObjectId2 - 1]));


	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans03 > .Ans03Denominator").text(NowDenominator2[NowObjectId2 - 1]);
	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans03 > .Ans03Molecular").text(NowMolecular2[NowObjectId2 - 1]);

	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans03 > .Ans031Denominator").text(NowDenominator2[NowObjectId2 - 1]);
	$("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans03 > .Ans031Molecular").text(NowMolecular2[NowObjectId2 - 1] % NowDenominator2[NowObjectId2 - 1]);
    $("#ObjectP" + NowObjectId2 + " > .WordGroup > .AnsDiv > .Ans03 > .Ans032Molecular").text(Math.floor(NowMolecular2[NowObjectId2 - 1] / NowDenominator2[NowObjectId2 - 1]));
    



    $(".Add01Molecular").text(NowMolecular2[0]);
    $(".Add01Denominator").text(NowDenominator2[0]);
    $(".Add02Molecular").text(NowMolecular2[1]);
    $(".Add02Denominator").text(NowDenominator2[1]);

	if(NowMolecular2[0] % NowDenominator2[0] == 0){
		$(".blockP11").show();
	}
	else{
		$(".blockP11").hide();
	}
	if(NowMolecular2[1] % NowDenominator2[1] == 0){
		$(".blockP21").show();
	}
	else{
		$(".blockP21").hide();
	}

	$(".Add011Molecular").text(NowMolecular2[0] % NowDenominator2[0]);
    $(".Add012Molecular").text(Math.floor(NowMolecular2[0] / NowDenominator2[0]));
    $(".Add011Denominator").text(NowDenominator2[0]);

	$(".Add021Molecular").text(NowMolecular2[1] % NowDenominator2[1]);
    $(".Add022Molecular").text(Math.floor(NowMolecular2[1] / NowDenominator2[1]));
    $(".Add021Denominator").text(NowDenominator2[1]);

    var AnsDenominator = lcm(NowDenominator2[0], NowDenominator2[1]);
    var Molecular1 = (AnsDenominator / NowDenominator2[0] ) * NowMolecular2[0];
    var Molecular2 = (AnsDenominator / NowDenominator2[1] ) * NowMolecular2[1];
    var  Molecular = Molecular1+ Molecular2;
    $(".AddAns01Molecular").text(Molecular);
    $(".AddAns01Denominator").text(AnsDenominator);

    $(".AddAns022Molecular").text( Math.floor(Molecular / AnsDenominator));
	if (Molecular % AnsDenominator== 0) {
		$(" .blockP3").show();
    }
    else{
        $(" .blockP3").hide();
    }
   
    $(".AddAns02Molecular").text( Molecular % AnsDenominator );
    $(".AddAns02Denominator").text(AnsDenominator);

}
function gcd(m, n) {
    if (n) return gcd(n, m % n);
    return m;
  }
function lcm(m, n) {
    return (m * n) / gcd(m, n);
  }