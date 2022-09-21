var canvas = new fabric.Canvas('canvas');
const W = 1555;//1595
//開始位置
const StartW = 120;
//起始
var Start = 0;
//結束
var End = 10;
//刻度
var scale = 1;
//分幾格
var grid = 1;
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
//HideObject("Scale",0)
//DrawScale();
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
            Data.text = r.text;
            Data.id = groupCount;
            scaleuse.push(Data);
            DrawT((r.clientX), r.text, groupCount);
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
            /*if(e.target.id.indexOf("Txt") > -1){
                objindex = scaleuse.findIndex(x => x.clientX == e.target.left);
            }
            else{
                objindex = scaleuse.findIndex(x => x.clientX == (e.target.left + 20));
            }*/
            //看此位子有沒有已被點擊過
            if (objindex != -1) {
                //移除箭頭
                Removebject("G" + scaleuse[objindex].id);
                Removebject("Txt" + scaleuse[objindex].id);
                Removebject("C" + scaleuse[objindex].id);
                scaleuse.splice(objindex, 1);
            }
        }
    });
});

//畫使用者點的座標
function DrawT(x, value, id) {

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
    var tt = parseFloat(parseFloat(value).toFixed(fixedCount)).toString();
    const text = new fabric.IText(tt, {
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
//畫刻度
function DrawScale() {
    scaleIDCount = 0;
    const scaleCount = parseFloat(((End - Start)).toFixed(fixedCount));
    const distance = (W / scaleCount);

    var Endi = scaleIDCount;
    let EndX = 0;

    const Op = IsShowNLine ? 1 : 0;

    console.log(scaleCount);

    for (let i = 0; i <= scaleCount; i += scale) {
        Endi =  parseFloat( (i + Start).toFixed(fixedCount) );
        i =  parseFloat( i.toFixed(fixedCount) );
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
        let T = parseFloat( (i + Start).toFixed(fixedCount) );
        const text = new fabric.IText( T.toString(), {
            id: "Scale" + scaleIDCount,
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
        canvas.add(text);

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
                Data.clientX = (j * griddistance) + StartgridW;
                Data.text = parseFloat((((i + Start) - scale) + ((j / grid) * scale)).toFixed(fixedCount));

                scalevalue.push(Data);
                canvas.add(lineG);
            }
        }


    }

   //紀錄最後的點座標
   let tempData = {};
   //let V= parseFloat((End - Start) - ((End - Start) % scale) + Start);

   tempData.clientX =EndX;
   var ttt =   parseFloat( ((End - Start) - ((End - Start) % scale) + Start).toFixed(fixedCount));

   tempData.text = parseFloat((End - Start) - ((End - Start) % scale) + Start).toFixed(fixedCount);
   scalevalue.push(tempData);

    //不能整除時顯示所輸入的最大值
    if (Endi != End) {

        scaleIDCount++;
        //畫線
        const lineY = new fabric.Line([((End - Start) * distance) + StartW, 50, ((End - Start) * distance) + StartW, 95], {
            stroke: 'black',
            strokeWidth: 3,
            selectable: false,
            type: 'line'
        });
        canvas.add(lineY);
        //刻度文字
        const text = new fabric.IText(End.toString(), {
            id: "Scale" + scaleIDCount,
            top: 130,
            left: ((End - Start) * distance) + StartW,
            fontFamily: '微軟正黑體',
            fontSize: 40,
            angle: 0,
            originX: 'center',
            originY: 'center',
            fill: '#FF0000',
            hoverCursor: "default",
            selectable: false,
            opacity: Op
        });
        canvas.add(text);

        const griddistance = (distance * scale) / grid;

        const StartgridW = EndX;


        for (let j = 1; j < grid; j++) {
            if ((j * griddistance) + StartgridW > W + StartW) {
               // console.log((j * griddistance) + StartgridW);
                break;
            }
            //畫線
            const lineG = new fabric.Line([(j * griddistance) + StartgridW, 50, (j * griddistance) + StartgridW, 85], {
                stroke: 'black',
                strokeWidth: 1,
                selectable: false,
                type: 'line'
            });
            //紀錄點座標
            let Data = {};
            Data.clientX = (j * griddistance) + StartgridW;
         

            Data.text = parseFloat(
                ((scaleCount - (scaleCount % scale)) + Start + ( j  / grid * scale)).toFixed(fixedCount)
            );

            scalevalue.push(Data);
            canvas.add(lineG);
        }
    }

    let Data = {};
    Data.clientX = ((End - Start) * distance) + StartW;
    Data.text = parseFloat(End.toFixed(fixedCount));
    scalevalue.push(Data);
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


