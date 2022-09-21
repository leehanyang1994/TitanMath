var canvas = new fabric.Canvas('canvas');
const W = 1555;//1595
//開始位置
const StartW = 120;
//起始
var Start = 0;
//結束
var End = 2;
//刻度
var scale = 1;
//分幾格
var grid = 4;
//刻度清單
var scalevalue = [];
//刻度使用者清單
var scaleuse = [];
//顏色清單
var ColorList = ColorSettingArray.map(x => x);
//拿來做ScaleID
var scaleIDCount = 0;
//拿來做GroupID
var groupCount = 0;

var fixedCount = 2;


var IsShowPoint = false;
var IsShowNLine = true;

//中間線的長度
var LineWidth = 25;
//帶分數間格
var DMargin = 2;
//分母
var Denominator = 3;
//分子
var Molecular = 1;

jQuery(document).ready(function ($) {
    //DrawScale();
    canvas.selection = false;

    $(".PointClick").mouseup(function (event) {
        //點擊的X座標
        const x = (event.clientX / sRatio) - ($(".DrawDiv").offset().left / sRatio);
        //找到最相近的座標
        const r = findNearestNumber(scalevalue, x);
        //看此位子有沒有已被點擊過
        var Index = scaleuse.findIndex(x => x.clientX == r.clientX);

        if (r == undefined)
            return;
        if (Index == -1) {
            //新增箭頭
            groupCount++;
            let Data = {};
            Data.clientX = r.clientX;
            Data.id = groupCount;
            Data.IsInteger = r.IsInteger;
            Data.T = r.T
            Data.D = r.D
            Data.M = r.M
            scaleuse.push(Data);
            DrawT((r.clientX), Data, groupCount);
        }
        else {
            //移除箭頭
            let objindex = scaleuse.findIndex(x => x.clientX == r.clientX);
            Removebject("G" + scaleuse[objindex].id);
            Removebject("Txt" + scaleuse[objindex].id);
            Removebject("C" + scaleuse[objindex].id);
            scaleuse.splice(objindex, 1);
        }


    });
    canvas.on('object:selected', function (e) {

        if (e.target) {
        
            let objindex = -1;

            let id = parseInt(e.target.id.replace("Txt","").replace("G","").replace("C",""));
            objindex = scaleuse.findIndex(x => x.id == id);
            /*if (e.target.id.indexOf("Txt") > -1) {
       
            }
            else {
                objindex = scaleuse.findIndex(x => x.clientX == (e.target.left + 20));
            }*/
            //看此位子有沒有已被點擊過
            if (objindex != -1) {
                console.log(objindex);
                //移除箭頭
                Removebject("G" + scaleuse[objindex].id);
                Removebject("Txt" + scaleuse[objindex].id);
                Removebject("C" + scaleuse[objindex].id);
                scaleuse.splice(objindex, 1);
            }
        }
    });
});

//畫刻度
function DrawScale() {
    scaleIDCount = 0;
    const scaleCount = (End - Start) * Denominator;//parseFloat(((End - Start)).toFixed(fixedCount));
    const distance = (W / scaleCount);

    var Endi = scaleIDCount;
    let EndX = 0;

    const Op = IsShowNLine ? 1 : 0;



    for (let i = 0; i <= scaleCount; i += 1) {
        Endi = parseFloat((i + Start).toFixed(fixedCount));
        i = parseFloat(i.toFixed(fixedCount));
        //畫線
        EndX = (i * distance) + StartW;
        const lineY = new fabric.Line([(i * distance) + StartW, 40, (i * distance) + StartW, 95], {
            stroke: 'black',
            strokeWidth: 3,
            selectable: false,
            type: 'line'
        });
        canvas.add(lineY);
        scaleIDCount++;

        //刻度文字

        let T = parseFloat((i + Start).toFixed(fixedCount));

        var group;
        if (i % Denominator == 0) {
            const text = new fabric.IText((Start + (i / Denominator)).toString(), {
                top: 130,
                left: (i * distance) + StartW,
                fontFamily: '微軟正黑體',
                fontSize: 40,
                angle: 0,
                originX: 'center',
                originY: 'center',
                centeredRotation: true,
                fill: '#000',
                hoverCursor: "default",
                selectable: false,
                opacity: Op
            });
            group = new fabric.Group([text], { id: 'Scale' + scaleIDCount, selectable: false, hoverCursor: "default", opacity: 1 });
        }
        else {
            //分子
            var txtD = (i % Denominator).toString();
            if((Start + (i / Denominator)) < 0){
                txtD = (Denominator -  (i % Denominator)).toString();
            }
          
            const textM = new fabric.IText(txtD, {
                top: 130,
                left: (i * distance) + StartW,
                fontFamily: '微軟正黑體',
                fontSize: 40,
                angle: 0,
                originX: 'center',
                originY: 'center',
                centeredRotation: true,
                fill: '#000',
                hoverCursor: "default",
                selectable: false,
                opacity: Op
            });
            //中間線
    
            const textL = new fabric.Line([(i * distance) + StartW - LineWidth , 152 , (i * distance) + StartW + LineWidth, 152], {
                stroke: 'black',
                strokeWidth: 3,
                selectable: false,
                type: 'line',
                opacity: Op
            });
            /*const textL = new fabric.IText("一", {
                top: 156,
                left: (i * distance) + StartW,
                fontFamily: '微軟正黑體',
                fontSize: 40,
                angle: 0,
                originX: 'center',
                originY: 'center',
                centeredRotation: true,
                fill: '#000',
                hoverCursor: "default",
                selectable: false,
                opacity: Op
            });*/
            //分母
            const textD = new fabric.IText(Denominator.toString(), {
                top: 180,
                left: (i * distance) + StartW,
                fontFamily: '微軟正黑體',
                fontSize: 40,
                angle: 0,
                originX: 'center',
                originY: 'center',
                centeredRotation: true,
                fill: '#000',
                hoverCursor: "default",
                selectable: false,
                opacity: Op
            });

            if (i > Denominator || Start != 0) {
                //帶分數
                if(parseInt(Start + (i / Denominator)) != 0 || (Start + (i / Denominator)) < 0){
                    let textT;
                    if((Start + (i / Denominator)) < 0 && (Start + (i / Denominator)) > -1){
                        textT = new fabric.IText("-", {
                            top: 156,
                            left: (i * distance) + StartW - DMargin - LineWidth,
                            fontFamily: '微軟正黑體',
                            fontSize: 40,
                            angle: 0,
                            originX: 'right',
                            originY: 'center',
                            centeredRotation: true,
                            fill: '#000',
                            hoverCursor: "default",
                            selectable: false,
                            opacity: Op
                        });
                    }
                    else{
                        textT = new fabric.IText(parseInt(Start + (i / Denominator)).toString(), {
                            top: 156,
                            left: (i * distance) + StartW - DMargin -LineWidth,
                            fontFamily: '微軟正黑體',
                            fontSize: 40,
                            angle: 0,
                            originX: 'right',
                            originY: 'center',
                            centeredRotation: true,
                            fill: '#000',
                            hoverCursor: "default",
                            selectable: false,
                            opacity: Op
                        });
                    }
 

                    group = new fabric.Group([textM, textL, textD, textT], { id: 'Scale' + scaleIDCount, selectable: false, hoverCursor: "default", opacity: 1 });
                }
                else{
                    group = new fabric.Group([textM, textL, textD], { id: 'Scale' + scaleIDCount, selectable: false, hoverCursor: "default", opacity: 1 });
                }

            }
            else {
                group = new fabric.Group([textM, textL, textD], { id: 'Scale' + scaleIDCount, selectable: false, hoverCursor: "default", opacity: 1 });
            }

        }



        canvas.add(group);
        //畫小刻度
        if (i > 0) {
            const griddistance = (distance * scale) / grid;
            const StartgridW = ((i - scale) * distance) + StartW;
            for (let j = 0; j < grid; j++) {
                //畫線
                const lineG = new fabric.Line([(j * griddistance) + StartgridW, 50, (j * griddistance) + StartgridW, 85], {
                    stroke: 'black',
                    strokeWidth: 1,
                    selectable: false,
                    type: 'line'
                });
                //紀錄點座標
                let Data = {};

                if (j == 0) {
                    Data.clientX = (j * griddistance) + StartgridW;
                    if ((i - 1) % Denominator == 0) {
                        Data.IsInteger = true;
                        Data.M = (Start + ((i - 1) / Denominator));
                    }
                    else {
                        Data.IsInteger = false;
                        Data.T = parseInt(Start + ((i - 1) / Denominator));
                        Data.D = Denominator;
                        Data.M = (i - 1) % Denominator;
                        if( Start + ((i - 1) / Denominator) < 0){
                            if(Start + ((i - 1) / Denominator) < 0 && Start + ((i - 1) / Denominator) > -1){
                                Data.T = -0.1;
                            }
                            Data.M  = Denominator - Data.M;
                        }
                    }
                }
                else {
                    Data.clientX = (j * griddistance) + StartgridW;
                    Data.IsInteger = false;
                    Data.T = parseInt(Start + ((i - 1) / Denominator));
                    if( Start + ((i - 1) / Denominator) < 0){
                        if(i == 1){
                            if(Start + (i / Denominator) < 0 && Start + (i / Denominator) > -1){
                                Data.T =-0.1;
                            }
                            else{
                                Data.T = parseInt(Start + (i / Denominator));
                            }
                    
                        }
                    }
                    Data.D = grid * Denominator;
                    Data.M = (((i - 1) * grid) %  (grid * Denominator) )+ j;

                    if( Start + ((i - 1) / Denominator) < 0){
                        if(Start + ((i - 1) / Denominator) < 0 && Start + ((i - 1) / Denominator) > -1){
                            Data.T = -0.1;
                        }
                        Data.M  = (grid * Denominator) - Data.M;
                    }

                }
                scalevalue.push(Data);
                canvas.add(lineG);
                //Data.text =  Start +"/" + grid * Denominator;




            }
        }


    }
    //紀錄最後的點座標
    let tempData = {};
    tempData.clientX = EndX;
    tempData.IsInteger = true;
    tempData.M = End;
    scalevalue.push(tempData);
}

//畫使用者點的座標
function DrawT(x, Data, id) {

    const Op = IsShowPoint ? 1 : 0;
    const Color = GetColor();
    //點
    const circle = new fabric.Circle({
        id: "C" + id,
        radius: 7.5,
        left: (x - 7.5),
        top: 60,
        fill: Color,
        strokeWidth: 0,
        stroke: Color,
        selectable: false,
        hoverCursor: "pointer"
    })
    canvas.add(circle)

    //箭頭
    const triangle = new fabric.Triangle({
        id: "T" + id,
        width: 40,
        height: 50,
        left: (x - 20),
        top: 87.5,
        fill: Color,
        strokeWidth: 0,
        stroke: Color,
    })
    const rect = new fabric.Rect({
        width: 5,
        height: 65,
        rx: 0, // 圆角半径（x轴方向）
        ry: 0, // 圆角半径（y轴方向）
        fill: Color,
        left: (x - 5),
        top: 136
    })



    var group = new fabric.Group([triangle, rect], { id: 'G' + id, selectable: true, hoverCursor: "pointer", opacity: Op });
    canvas.add(group);


    if (Data.IsInteger) {

        const text = new fabric.IText(Data.M.toString(), {
            id: 'Txt' + id,
            top: 230,
            left: x,
            fontFamily: '微軟正黑體',
            fontSize: 40,
            angle: 0,
            originX: 'center',
            originY: 'center',
            centeredRotation: true,
            fill: Color,
            hoverCursor: "pointer",
            selectable: true,
            opacity: Op
        });
        canvas.add(text);
    }
    else {
        var group2;
        //分子
        const textM = new fabric.IText(Data.M.toString(), {
            top: 230,
            left: x,
            fontFamily: '微軟正黑體',
            fontSize: 40,
            angle: 0,
            originX: 'center',
            originY: 'center',
            centeredRotation: true,
            fill: Color,
            hoverCursor: "pointer",
            opacity: 1
        });
        //中間線


        const textL = new fabric.Line( [x - LineWidth , 251 , x + LineWidth, 251], {
            stroke:  Color,
            strokeWidth: 3,
            selectable: false,
            type: 'line',
            hoverCursor: "pointer",
            opacity: 1
        });
        //分母
        const textD = new fabric.IText(Data.D.toString(), {
            top: 280,
            left: x,
            fontFamily: '微軟正黑體',
            fontSize: 40,
            angle: 0,
            originX: 'center',
            originY: 'center',
            centeredRotation: true,
            fill: Color,
            hoverCursor: "pointer",
            opacity: 1
        });

        if (Data.T != 0) {
            var DataT = Data.T.toString();
            if(Data.T == -0.1){
                DataT = "-";
            }
            //帶分數
            const textT = new fabric.IText(DataT, {
                top: 256,
                left: x - LineWidth - DMargin,
                fontFamily: '微軟正黑體',
                fontSize: 40,
                angle: 0,
                originX: 'right',
                originY: 'center',
                centeredRotation: true,
                fill: Color,
                hoverCursor: "pointer",
                opacity: 1
            });

            group2 = new fabric.Group([textM, textL, textD, textT], { id: 'Txt' + id, selectable: true, hoverCursor: "pointer", opacity: Op });
        }
        else {
            group2 = new fabric.Group([textM, textL, textD], { id: 'Txt' + id, selectable: true, hoverCursor: "pointer", opacity: Op });
        }

        canvas.add(group2);
    }



}

//設定物件透明度
function OpacityObject(id, opacity) {
    canvas.forEachObject(function (obj) {
        if (obj.id && obj.id.toString().indexOf(id) > -1) {
            obj.opacity = opacity;
        }
    });
    canvas.renderAll();
}

//移除
function Removebject(id) {
    canvas.forEachObject(function (obj) {
        if (obj.id && obj.id.toString().indexOf(id) > -1) {
            canvas.remove(obj)
        }
    });
    canvas.renderAll();
}
function removeAll() {
    scalevalue = [];
    scaleuse = [];
    ColorList = ColorSettingArray.map(x => x);
    canvas.forEachObject(function (obj) {
        canvas.remove(obj)
    });
    canvas.renderAll();
}

//尋找最靠近的數字
const findNearestNumber = (arr, target) => {
    let result = arr[0];
    for (let i = 1, len = arr.length; i < len; i++) {
        if (Math.abs(arr[i].clientX - target) < Math.abs(result.clientX - target)) {
            result = arr[i];
        };
    };
    return result;
};

//隨機顏色
function GetColor() {

    const i = parseInt(Math.random() * ColorList.length);
    const Color = ColorList[i];
    ColorList.splice(i, 1);
    if (ColorList.length == 0) {
        ColorList = ColorSettingArray.map(x => x);
    }
    return Color;
}