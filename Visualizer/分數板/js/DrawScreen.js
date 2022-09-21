function DrawScreenPlus(varwidth, varDenominator, varMolecular) {
    var cvs = document.getElementById('canvas');

    //分母
    var Denominator = varDenominator;
    //分子
    var Molecular = varMolecular;
    if (Molecular > Denominator) {
        cvs.width = 630;
        cvs.height = 300;
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

        cvs.width = 300;
        cvs.height = 300;
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
   
    var NowAngle = 270;
    var AngleStep = 360.0 / Denominator;
    var width = varwidth + 10;
    var height = varwidth + 10;

    var r = varwidth / 2;
    var Center = (width + 10.0) / 2;

    for (var i = 1; i <= Denominator; i++) {
        var ctx = cvs.getContext('2d');
        ctx.beginPath();
        ctx.setLineDash([8, 6]);
        ctx.moveTo(Center, Center);
        ctx.arc(Center, Center, r, angleToRadian(NowAngle), angleToRadian(NowAngle + AngleStep));

        if (i > Molecular) {
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
        }
        else {
            ctx.fillStyle = "#8adfe6";
            ctx.fill();
        }
        if (i == Denominator) {
            ctx.moveTo(Center, Center);
            ctx.lineTo(Center, 10);
        }
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        NowAngle += AngleStep;

    }

    if (Molecular > Denominator) {
        var Mar = 30;
        for (var i = 1; i <= Denominator; i++) {
            var ctx = cvs.getContext('2d');
            ctx.beginPath();
            ctx.setLineDash([8, 6]);
            ctx.moveTo(Center + width + Mar, Center);
            ctx.arc(Center + width + Mar, Center, r, angleToRadian(NowAngle), angleToRadian(NowAngle + AngleStep));

            if (i > (Molecular - Denominator)) {
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
            }
            else {
                ctx.fillStyle = "#8adfe6";
                ctx.fill();
            }
            if (i == Denominator) {
                ctx.moveTo(Center + width + Mar, Center);
                ctx.lineTo(Center + width + Mar, 10);
            }
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = "#000000";
            ctx.stroke();
            NowAngle += AngleStep;
        }
    }
    var s = canvas.toDataURL();

    $("#ObjectP" + NowObjectId2 + " > #AppleGraphicsP" + NowObjectId2).hide();
    $("#ObjectP" + NowObjectId2 + " > .Graphics").show();
    $("#ObjectP" + NowObjectId2 + "> .Graphics > img").attr("src", s);

    ctx.clearRect(0, 0, GraphicsW, GraphicsH);

    convertSizeALL('.Page_Plus');

}
function DrawScreen2(varwidth, varDenominator, varMolecular) {
    var cvs = document.getElementById('canvas');

    //分母
    var Denominator = varDenominator;
    //分子
    var Molecular = varMolecular;
    if (Molecular > Denominator) {
        cvs.width = 630;
        cvs.height = 300;
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

        cvs.width = 300;
        cvs.height = 300;
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
    // var ctx2 = new C2S(200, 200);
    /*
    * 畫弧( 畫的是路徑 )
    * ctx.arc( 圓心x軸座標，圓心y軸座標，半徑, 起點弧度，結束點弧度，是否逆時針畫(可選) )  //預設順時針
    * * arc方法內部會先從當前路徑結束點到弧的起點畫一條路徑線。
    * * 起點弧度、結束點弧度以及弧度的方向共同決定了弧的大小。
    * * */
    /*//圓心
    var CenterX = 100;
    var CenterY = 100;
    //半徑
    var r = 100
     ctx.arc(CenterX, CenterY, r, angleToRadian(0), angleToRadian(90)); //弧度是順時針算的
     ctx2.moveTo(CenterX, CenterY);
     ctx2.lineTo(Now, height);
     ctx2.lineTo(Now, height);
     ctx.stroke();*/
    var NowAngle = 270;
    var AngleStep = 360.0 / Denominator;
    var width = varwidth + 10;
    var height = varwidth + 10;

    var r = varwidth / 2;
    var Center = (width + 10.0) / 2;

    /*var objdiv = document.getElementById("Object");
    var objdiv2 = $( "#Object" ).clone();

    var div = objdiv.cloneNode(true);

    div.id  = "Object01";
    div.style.display ="";
    div.innerHTML = "";*/

    for (var i = 1; i <= Denominator; i++) {
        var ctx = cvs.getContext('2d');
        //var ctx = new C2S(width, height);
        //ctx.clearRect(0, 0, width, height);
        ctx.beginPath();
        ctx.setLineDash([8, 6]);
        ctx.moveTo(Center, Center);
        ctx.arc(Center, Center, r, angleToRadian(NowAngle), angleToRadian(NowAngle + AngleStep));
        //ctx.closePath();
        if (i > Molecular) {
            ctx.fillStyle = "#FFFFFF";
            ctx.fill();
        }
        else {
            ctx.fillStyle = "#8adfe6";
            ctx.fill();
        }
        if (i == Denominator) {
            ctx.moveTo(Center, Center);
            ctx.lineTo(Center, 10);
        }
        ctx.lineWidth = 0.5;
        ctx.strokeStyle = "#000000";
        ctx.stroke();
        NowAngle += AngleStep;
        //var myRectangle = ctx.getSerializedSvg(true);
        //div.insertAdjacentHTML('beforeEnd', myRectangle);
        //div.append(myRectangle);
        //objdiv2.children(".Graphics").append(myRectangle);
    }

    if (Molecular > Denominator) {
        var Mar = 30;
        for (var i = 1; i <= Denominator; i++) {
            var ctx = cvs.getContext('2d');
            ctx.beginPath();
            ctx.setLineDash([8, 6]);
            ctx.moveTo(Center + width + Mar, Center);
            ctx.arc(Center + width + Mar, Center, r, angleToRadian(NowAngle), angleToRadian(NowAngle + AngleStep));
            //ctx.closePath();
            if (i > (Molecular - Denominator)) {
                ctx.fillStyle = "#FFFFFF";
                ctx.fill();
            }
            else {
                ctx.fillStyle = "#8adfe6";
                ctx.fill();
            }
            if (i == Denominator) {
                ctx.moveTo(Center + width + Mar, Center);
                ctx.lineTo(Center + width + Mar, 10);
            }
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = "#000000";
            ctx.stroke();
            NowAngle += AngleStep;
        }
    }
    var s = canvas.toDataURL();
    /*
    $("#AppleGraphics").hide();
    $(".Graphics").show();
    $(".Graphics > img").attr("src",s);*/

    $("#Object" + NowObjectId + " > #AppleGraphics" + NowObjectId).hide();
    $("#Object" + NowObjectId + " > .Graphics").show();
    $("#Object" + NowObjectId + "> .Graphics > img").attr("src", s);
    //objdiv2.show();
    //console.log(objdiv2);
    //$("#Triangle").append(objdiv2);
    //BindEvent();
    ctx.clearRect(0, 0, GraphicsW, GraphicsH);

    convertSizeALL('.Page_Home');
    //document.getElementById("Triangle").appendChild(objdiv2);
}
// 把角度轉換為弧度
function angleToRadian(angle) {
    return Math.PI / 180.0 * angle;
}