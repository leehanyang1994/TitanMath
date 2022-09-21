var offset = [0,0];
var divOverlay = document.getElementById ("BigShow");
var isDown = false;

const  BSC = document.querySelector('.BigShowContent');
//電腦端
divOverlay.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        divOverlay.offsetLeft - e.clientX,
        divOverlay.offsetTop - e.clientY
    ];
    if(offset[0] > 942){
        offset[0] = 942;
    }
    if(offset[0] < 0 ){
        offset[0] = 0;
    }


}, true);
document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(e) {
    event.preventDefault();
    if (isDown) {
        var Left = (e.clientX + offset[0]) / sRatio;
        if(Left >= 942){
            Left = 942;
        }
        if(Left <= 0){
            Left = 0;
        }

        var Top =(e.clientY + offset[1]) / sRatio;
        if(Top >= 396 ){
            Top = 396 
        }
        if(Top <= 0){
            Top = 0;
        }
        divOverlay.style.left = Left+ 'px';
        divOverlay.style.top  =Top + 'px';
        BigLeft = Left;
        BigTop = Top;
        //-10 -12
        var MathTop = Top;
        if(Top > 198){
            MathTop += (65 * BL); 
        }
        else if(Top < 198){
            MathTop -= (25 * BL); 
        }
        $('.BigShowContent').css('transform', 'scale('+BL +')  translate('+ (Left / -BL)   +'px,'+ (MathTop / -BL )+'px ) ' );

    }
}, true);

//手機端
divOverlay.addEventListener('touchstart', function(e) {
    isDown = true;
    offset = [
        divOverlay.offsetLeft - e.touches[0].clientX,
        divOverlay.offsetTop -  e.touches[0].clientY
    ];
    if(offset[0] > 942){
        offset[0] = 942;
    }
    if(offset[0] < 0 ){
        offset[0] = 0;
    }
}, true);

document.addEventListener('touchend', function() {
    isDown = false;
}, true);

document.addEventListener('touchmove', function(e) {
    if (isDown) {
        var Left = ( e.touches[0].clientX  + offset[0]) / sRatio;
        if(Left >= 942){
            Left = 942;
        }
        if(Left <= 0){
            Left = 0;
        }

        var Top =(e.touches[0].clientY  + offset[1]) / sRatio;
        if(Top >= 396 ){
            Top = 396 
        }
        if(Top <= 0){
            Top = 0;
        }
        divOverlay.style.left = Left+ 'px';
        divOverlay.style.top  =Top + 'px';
        BigLeft = Left;
        BigTop = Top;
        //-10 -12
        var MathTop = Top;
        if(Top > 198){
            MathTop += (65 * BL); 
        }
        else if(Top < 198){
            MathTop -= (25 * BL); 
        }
        $('.BigShowContent').css('transform', 'scale('+BL +')  translate('+ (Left / -BL)   +'px,'+ (MathTop / -BL )+'px ) ' );

    }
}, true);




  