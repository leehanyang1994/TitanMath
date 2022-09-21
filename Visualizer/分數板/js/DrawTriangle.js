function DrawTrianglePlus(varwidth, varDenominator, varMolecular) {
    var canvas = document.getElementById("canvas");
    //分母
    var Denominator = varDenominator;
    //分子
    var Molecular = varMolecular;

    canvas.width = varwidth;

    //等腰三角

    var height = varwidth * Math.sin(Math.PI / 3);//計算等腰三角形的高
    canvas.height = height + 10;
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
        //回到頂點
        ctx2.moveTo(Center, 0);
        // /
        ctx2.lineTo(Now, height);
        //_

        var End = (i * widthStep);

        ctx2.lineTo(End, height);
        //畫回頂點
        ctx2.lineTo(Center, 0);
        if (i > Molecular) {
            ctx2.fillStyle = "#FFFFFF";
            ctx2.fill();
        }
        else {
            ctx2.fillStyle = "#ffd2a8";
            ctx2.fill();
        }

        ctx2.strokeStyle = "#000000";
        ctx2.lineWidth = 0.5;
        ctx2.stroke();
        //var myRectangle = ctx2.getSerializedSvg(true);

        // div.insertAdjacentHTML('beforeend', myRectangle);

        Now += widthStep;
        zi++;

    }
    if (Molecular > Denominator) {
        var Mar = 30;
        Now = 0;
        zi = 1000;
        for (var i = 1; i <= Denominator; i++) {
            var ctx2 = canvas.getContext("2d");
            //var ctx2 = new C2S(width, height);
            //ctx2.clearRect(0, 0, width, height);
            ctx2.beginPath();
            ctx2.setLineDash([3, 1]);
            //回到頂點
            ctx2.moveTo(Center + width + Mar, 0);
            // /
            ctx2.lineTo(Now + width + Mar, height);
            //_

            var End = (i * widthStep);
            ctx2.lineTo(End + width + Mar, height);
            //畫回頂點
            ctx2.lineTo(Center + width + Mar, 0);
            if (i > (Molecular - Denominator)) {
                ctx2.fillStyle = "#FFFFFF";
                ctx2.fill();
            }
            else {
                ctx2.fillStyle = "#ffd2a8";
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
    /* $("#AppleGraphics").hide();
     $(".Graphics").show();
      $(".Graphics > img").attr("src",s);*/

      $("#ObjectP" + NowObjectId2 + " > #AppleGraphicsP" + NowObjectId2).hide();
      $("#ObjectP" + NowObjectId2 + " > .Graphics").show();
      $("#ObjectP" + NowObjectId2 + "> .Graphics > img").attr("src", s);
  
      ctx2.clearRect(0, 0, GraphicsW, GraphicsH);
  
      convertSizeALL('.Page_Plus');

}

function DrawTriangle2(varwidth, varDenominator, varMolecular) {
    var canvas = document.getElementById("canvas");
    //分母
    var Denominator = varDenominator;
    //分子
    var Molecular = varMolecular;

    canvas.width = varwidth;

    //等腰三角

    var height = varwidth * Math.sin(Math.PI / 3);//計算等腰三角形的高
    canvas.height = height + 10;
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
        //回到頂點
        ctx2.moveTo(Center, 0);
        // /
        ctx2.lineTo(Now, height);
        //_

        var End = (i * widthStep);

        ctx2.lineTo(End, height);
        //畫回頂點
        ctx2.lineTo(Center, 0);
        if (i > Molecular) {
            ctx2.fillStyle = "#FFFFFF";
            ctx2.fill();
        }
        else {
            ctx2.fillStyle = "#ffd2a8";
            ctx2.fill();
        }

        ctx2.strokeStyle = "#000000";
        ctx2.lineWidth = 0.5;
        ctx2.stroke();
        //var myRectangle = ctx2.getSerializedSvg(true);

        // div.insertAdjacentHTML('beforeend', myRectangle);

        Now += widthStep;
        zi++;

    }
    if (Molecular > Denominator) {
        var Mar = 30;
        Now = 0;
        zi = 1000;
        for (var i = 1; i <= Denominator; i++) {
            var ctx2 = canvas.getContext("2d");
            //var ctx2 = new C2S(width, height);
            //ctx2.clearRect(0, 0, width, height);
            ctx2.beginPath();
            ctx2.setLineDash([3, 1]);
            //回到頂點
            ctx2.moveTo(Center + width + Mar, 0);
            // /
            ctx2.lineTo(Now + width + Mar, height);
            //_

            var End = (i * widthStep);
            ctx2.lineTo(End + width + Mar, height);
            //畫回頂點
            ctx2.lineTo(Center + width + Mar, 0);
            if (i > (Molecular - Denominator)) {
                ctx2.fillStyle = "#FFFFFF";
                ctx2.fill();
            }
            else {
                ctx2.fillStyle = "#ffd2a8";
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
    /* $("#AppleGraphics").hide();
     $(".Graphics").show();
      $(".Graphics > img").attr("src",s);*/

    $("#Object" + NowObjectId + " > #AppleGraphics" + NowObjectId).hide();
    $("#Object" + NowObjectId + " > .Graphics").show();
    $("#Object" + NowObjectId + "> .Graphics > img").attr("src", s);
    ctx2.clearRect(0, 0, GraphicsW, GraphicsH);
    convertSizeALL('.Page_Home');

}
