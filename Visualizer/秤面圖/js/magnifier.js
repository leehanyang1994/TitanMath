var divOverlay = document.getElementById ("BigShow");

/*$(".BigShow").draggable({
    scroll: false,
    containment: ".DragContent",
    disabled: false,
    start: function () {
    },
    stop: function (event, ui) {

    },
    drag: function (event, ui) {
        console.log(ui);
        var Left =  ui.offset().left ;
        var Top = ui.offset().top;

        var MathTop = Top;
        if(Top > (198 * sRatio)){
            MathTop += (65 *sRatio ); 
        }
        else if(Top < (198 * sRatio)){
            MathTop -= (25 * sRatio ); 
        }
        MathTop = MathTop / sRatio;
        Left = Left / sRatio;
        $('.BigShowContent').css('transform', 'scale('+BL +')  translate('+ (Left / -BL)   +'px,'+ (MathTop / -BL )+'px ) ' );
    },
    drop: function (event, ui) {

    }
});*/
var click = {
    x: 0,
    y: 0
};

$(".BigShow").draggable({
    scroll: false,
    containment: ".DragContent",
    disabled: false,
    start: function (event) {
        click.x = event.clientX;
        click.y = event.clientY;
    },
    stop: function (event, ui) {

    },
    drag: function (event, ui) {

        /*var zoom =sRatio;

        var original = ui.originalPosition;


        ui.position = {
            left: (event.clientX - click.x + original.left) / zoom,
            top:  (event.clientY - click.y + original.top ) / zoom
        };*/
        var percent = sRatio;
        var containmentArea = $(".DragContent");
        var contWidth = containmentArea.width(), contHeight = containmentArea.height();
        ui.position.left = Math.max(0, Math.min(ui.position.left / percent , contWidth - ui.helper.width()));
        ui.position.top = Math.max(0, Math.min(ui.position.top  / percent,  contHeight- ui.helper.height()));

       
        var Left =  ui.position.left ;
        var Top = ui.position.top;

        var MathTop = Top;
        if(Top > (198 )){
            MathTop += (65); 
        }
       else if(Top < (198 )){
            MathTop -= (25); 
        }

        BigLeft = Left;
        BigTop = Top;
       /* MathTop = MathTop / sRatio;
        Left = Left / sRatio;*/
        $('.BigShowContent').css('transform', 'scale('+BL +')  translate('+ (Left / -BL)   +'px,'+ (MathTop / -BL )+'px ) ' );
    },
    drop: function (event, ui) {

    }
});


function startFix(event, ui) {
    ui.position.left = 0;
    ui.position.top = 0;
}
 
function dragFix(event, ui) {
    var changeLeft = ui.position.left - ui.originalPosition.left; // find change in left
    var newLeft = ui.originalPosition.left + changeLeft / zoomScale; // adjust new left by our zoomScale
 
    var changeTop = ui.position.top - ui.originalPosition.top; // find change in top
    var newTop = ui.originalPosition.top + changeTop / zoomScale; // adjust new top by our zoomScale
 
    ui.position.left = newLeft;
    ui.position.top = newTop;
}