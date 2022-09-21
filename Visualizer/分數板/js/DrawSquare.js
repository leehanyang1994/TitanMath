function DrawSquare2(varwidth, varDenominator, varMolecular) {
    var canvas = document.getElementById("canvas");
    //分母
    var Denominator = varDenominator;
    //分子
    var Molecular = varMolecular;

    var height = varwidth
    var width = varwidth;
    var Center = width / 2;
    var widthStep = varwidth / Denominator;

    var Now = 0;
    var zi = 1000;


    if (Molecular > Denominator) {
        canvas.width = 630;
        canvas.height = 300;
        if (NowObjectId == 1) {
            GraphicsW = 630;
            GraphicsH = 300;
        }
        else{
            GraphicsW2 = 630;
            GraphicsH2 = 300;
        }
    }
    else {
        canvas.width = 300;
        canvas.height = 300;
        if (NowObjectId == 1) {
            GraphicsW = 300;
            GraphicsH = 300;
        }
        else{
            GraphicsW2 = 300;
            GraphicsH2 = 300;
        }
    }
    ObjH = 500;
    ObjH2 = 500;
    for (var i = 1; i <= Denominator; i++) {
        var ctx2 = canvas.getContext("2d");
        //var ctx2 = new C2S(width, height);
        //ctx2.clearRect(0, 0, width, height);
        ctx2.beginPath();
        ctx2.setLineDash([3, 1]);

        ctx2.rect(Now, 0, widthStep, height)

        if (i > Molecular) {
            ctx2.fillStyle = "#FFFFFF";
            ctx2.fill();
        }
        else {
            ctx2.fillStyle = "#f9bfd5";
            ctx2.fill();
        }

        ctx2.strokeStyle = "#000000";
        ctx2.lineWidth = 0.5;
        ctx2.stroke();

        Now += widthStep;
        zi++;

    }
    if (Molecular > Denominator) {
        var Mar = 30;
        Now = 0;
        zi = 1000;
        for (var i = 1; i <= Denominator; i++) {
            var ctx2 = canvas.getContext("2d");
            ctx2.beginPath();
            ctx2.setLineDash([3, 1]);

            ctx2.rect(Now + width + Mar, 0, widthStep, height)

            if (i > (Molecular - Denominator)) {
                ctx2.fillStyle = "#FFFFFF";
                ctx2.fill();
            }
            else {
                ctx2.fillStyle = "#f9bfd5";
                ctx2.fill();
            }

            ctx2.strokeStyle = "#000000";
            ctx2.lineWidth = 0.5;
            ctx2.stroke();

            Now += widthStep;
            zi++;
        }
    }
    var s = canvas.toDataURL();
    /*$("#AppleGraphics").hide();
    $(".Graphics").show();
   
     $(".Graphics > img").attr("src",s);*/

    $("#Object" + NowObjectId + " > #AppleGraphics" + NowObjectId).hide();
    $("#Object" + NowObjectId + " > .Graphics").show();
    $("#Object" + NowObjectId + "> .Graphics > img").attr("src", s);
    ctx2.clearRect(0, 0, GraphicsW, GraphicsH);
    convertSizeALL('.Page_Home');

}

function DrawSquarePlus(varwidth, varDenominator, varMolecular) {
    var canvas = document.getElementById("canvas");
    //分母
    var Denominator = varDenominator;
    //分子
    var Molecular = varMolecular;

    var height = varwidth
    var width = varwidth;
    var Center = width / 2;
    var widthStep = varwidth / Denominator;

    var Now = 0;
    var zi = 1000;


    if (Molecular > Denominator) {
        canvas.width = 630;
        canvas.height = 300;
        if (NowObjectId2 == 1) {
            GraphicsW = 630;
            GraphicsH = 300;
        }
        else{
            GraphicsW2 = 630;
            GraphicsH2 = 300;
        }
    }
    else {
        canvas.width = 300;
        canvas.height = 300;
        if (NowObjectId2 == 1) {
            GraphicsW = 300;
            GraphicsH = 300;
        }
        else{
            GraphicsW2 = 300;
            GraphicsH2 = 300;
        }
    }
    ObjH = 500;
    ObjH2 = 500;
    for (var i = 1; i <= Denominator; i++) {
        var ctx2 = canvas.getContext("2d");
        //var ctx2 = new C2S(width, height);
        //ctx2.clearRect(0, 0, width, height);
        ctx2.beginPath();
        ctx2.setLineDash([3, 1]);

        ctx2.rect(Now, 0, widthStep, height)

        if (i > Molecular) {
            ctx2.fillStyle = "#FFFFFF";
            ctx2.fill();
        }
        else {
            ctx2.fillStyle = "#f9bfd5";
            ctx2.fill();
        }

        ctx2.strokeStyle = "#000000";
        ctx2.lineWidth = 0.5;
        ctx2.stroke();

        Now += widthStep;
        zi++;

    }
    if (Molecular > Denominator) {
        var Mar = 30;
        Now = 0;
        zi = 1000;
        for (var i = 1; i <= Denominator; i++) {
            var ctx2 = canvas.getContext("2d");
            ctx2.beginPath();
            ctx2.setLineDash([3, 1]);

            ctx2.rect(Now + width + Mar, 0, widthStep, height)

            if (i > (Molecular - Denominator)) {
                ctx2.fillStyle = "#FFFFFF";
                ctx2.fill();
            }
            else {
                ctx2.fillStyle = "#f9bfd5";
                ctx2.fill();
            }

            ctx2.strokeStyle = "#000000";
            ctx2.lineWidth = 0.5;
            ctx2.stroke();

            Now += widthStep;
            zi++;
        }
    }
    var s = canvas.toDataURL();

    $("#ObjectP" + NowObjectId2 + " > #AppleGraphicsP" + NowObjectId2).hide();
    $("#ObjectP" + NowObjectId2 + " > .Graphics").show();
    $("#ObjectP" + NowObjectId2 + "> .Graphics > img").attr("src", s);

    ctx2.clearRect(0, 0, GraphicsW, GraphicsH);

    convertSizeALL('.Page_Plus');
}