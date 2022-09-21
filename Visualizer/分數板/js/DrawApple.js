function DrawApple2(varDenominator, varMolecular) {
    var canvas = document.getElementById("AppleGraphics" + NowObjectId);
    //分母
    var Denominator = varDenominator;
    //分子
    var Molecular = varMolecular;

    var height = 121 * 2;
    var width = 126 * (varDenominator / 2 + 1) + 10;
    var Wrap = 1;
    var MarH = 10;
    width = 126 * (varDenominator / 2);
    Wrap = 1;
    /*if(varDenominator > 6){
        width = 126 * 6 + 10;
        Wrap = 2;
    }
    else{
       
        Wrap = 1;
    }*/
    if (varMolecular > varDenominator) {
        Wrap = 2;
        height = 121 * 2 * Wrap + MarH;
    }
    else {
        Wrap = 1;
        height = 121 * 2 * Wrap;
    }



    if (Molecular > Denominator) {
        canvas.width = width;
        canvas.height = height;
        if (NowObjectId == 1) {
            GraphicsW = width;
            GraphicsH = height;
        }
        else {
            GraphicsW2 = width;
            GraphicsH2 = height;
        }
    }
    else {
        canvas.width = width;
        canvas.height = height;
        if (NowObjectId == 1) {
            GraphicsW = width;
            GraphicsH = height;
        }
        else {
            GraphicsW2 = width;
            GraphicsH2 = height;
        }
    }

    if (NowObjectId == 1) {
        ObjH = height + 170;
    }
    else {
        ObjH2 = height + 170;
        console.log(height);
    }
    /*var img2 = document.getElementById("img02");

    var img1 = document.getElementById("img01");*/
    var str = '<div>';
    $("#AppleGraphics" + NowObjectId).empty();
    for (var i = 1; i <= Denominator; i++) {
        if (i <= Molecular) {
            str += '<div><img src="./img/apple01.png" style="width:100%;height:100%;z-index: 9996;position:absolute;">'
            str += '<img src="./img/apple03.png" style="width:100%;height:100%;position:absolute;"></div>';
        }
        else {
            str += '<div><img src="./img/apple02.png" style="width:100%;height:100%;z-index: 9996;position:absolute;">'
            str += '<img src="./img/apple03.png" style="width:100%;height:100%;position:absolute;"></div>';
        }
    }
    str += '</div>';
    if (Molecular > Denominator) {
        var Mar = 30;
        str += '<div style="margin-top:2%">';
        for (var i = 1; i <= Denominator; i++) {
            if (i <= (Molecular - Denominator)) {
                str += '<div><img src="./img/apple01.png" style="width:100%;height:100%;z-index: 9996;position:absolute;">'
                str += '<img src="./img/apple03.png" style="width:100%;height:100%;position:absolute;"></div>';

            }
            else {
                str += '<div><img src="./img/apple02.png" style="width:100%;height:100%;z-index: 9996;position:absolute;">'
                str += '<img src="./img/apple03.png" style="width:100%;height:100%;position:absolute;"></div>';
            }
        }
        str += '</div>';
    }

    $("#Object" + NowObjectId + " > #AppleGraphics" + NowObjectId).append(str);
    $("#Object" + NowObjectId + "  > .Graphics").hide();
    $("#Object" + NowObjectId + "  > #AppleGraphics" + NowObjectId).show();


    /*$("#AppleGraphics").append(str);
    $(".Graphics").hide();
    $("#AppleGraphics").show();*/
    //var s = canvas.toDataURL();
    //$(".Graphics > img").attr("src",s);
    //ctx2.clearRect(0, 0, GraphicsW, GraphicsH);
    convertSizeALL('.Page_Home');

}

function DrawApplePlus(varDenominator, varMolecular) {
    var canvas = document.getElementById("AppleGraphicsP" + NowObjectId2);
    //分母
    var Denominator = varDenominator;
    //分子
    var Molecular = varMolecular;

    var height = 121 * 2;
    var width = 126 * (varDenominator / 2 + 1) + 10;
    var Wrap = 1;
    var MarH = 10;
    width = 126 * (varDenominator / 2);
    Wrap = 1;
    /*if(varDenominator > 6){
        width = 126 * 6 + 10;
        Wrap = 2;
    }
    else{
       
        Wrap = 1;
    }*/
    if (varMolecular > varDenominator) {
        Wrap = 2;
        height = 121 * 2 * Wrap + MarH;
    }
    else {
        Wrap = 1;
        height = 121 * 2 * Wrap;
    }



    if (Molecular > Denominator) {
        canvas.width = width;
        canvas.height = height;
        if (NowObjectId2 == 1) {
            GraphicsW = width;
            GraphicsH = height;
        }
        else {
            GraphicsW2 = width;
            GraphicsH2 = height;
        }
    }
    else {
        canvas.width = width;
        canvas.height = height;
        if (NowObjectId2 == 1) {
            GraphicsW = width;
            GraphicsH = height;
        }
        else {
            GraphicsW2 = width;
            GraphicsH2 = height;
        }
    }

    if (NowObjectId2== 1) {
        ObjH = height + 170;
    }
    else {
        ObjH2 = height + 170;
        console.log(height);
    }
    /*var img2 = document.getElementById("img02");

    var img1 = document.getElementById("img01");*/
    var str = '<div>';
    $("#AppleGraphicsP" + NowObjectId2).empty();
    for (var i = 1; i <= Denominator; i++) {
        if (i <= Molecular) {
            str += '<div><img src="./img/apple01.png" style="width:100%;height:100%;z-index: 9996;position:absolute;">'
            str += '<img src="./img/apple03.png" style="width:100%;height:100%;position:absolute;"></div>';
        }
        else {
            str += '<div><img src="./img/apple02.png" style="width:100%;height:100%;z-index: 9996;position:absolute;">'
            str += '<img src="./img/apple03.png" style="width:100%;height:100%;position:absolute;"></div>';
        }
    }
    str += '</div>';
    if (Molecular > Denominator) {
        var Mar = 30;
        str += '<div style="margin-top:2%">';
        for (var i = 1; i <= Denominator; i++) {
            if (i <= (Molecular - Denominator)) {
                str += '<div><img src="./img/apple01.png" style="width:100%;height:100%;z-index: 9996;position:absolute;">'
                str += '<img src="./img/apple03.png" style="width:100%;height:100%;position:absolute;"></div>';

            }
            else {
                str += '<div><img src="./img/apple02.png" style="width:100%;height:100%;z-index: 9996;position:absolute;">'
                str += '<img src="./img/apple03.png" style="width:100%;height:100%;position:absolute;"></div>';
            }
        }
        str += '</div>';
    }

    $("#ObjectP" + NowObjectId2 + " > #AppleGraphicsP" + NowObjectId2).append(str);
    $("#ObjectP" + NowObjectId2 + "  > .Graphics").hide();
    $("#ObjectP" + NowObjectId2 + "  > #AppleGraphicsP" + NowObjectId2).show();


    /*$("#AppleGraphics").append(str);
    $(".Graphics").hide();
    $("#AppleGraphics").show();*/
    //var s = canvas.toDataURL();
    //$(".Graphics > img").attr("src",s);
    //ctx2.clearRect(0, 0, GraphicsW, GraphicsH);
    convertSizeALL('.Page_Plus');

}