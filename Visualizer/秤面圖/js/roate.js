
var sRSS

var w = 1920, h = 900;
var iw = $(window).innerWidth(), ih = $(window).innerHeight();
var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
sRatio = Math.min(xRatio, yRatio);
sRSS = sRatio
var a = Math.round(819 * sRSS)
var b = Math.round(819 * sRSS)

var vim = d3.select('.drawareamin').append('svg')
  .attr("width", a)
  .attr("height", b);

const el_min = document.querySelector('.pointer');

var orimin = 0
var last_set = ''
var last_set_M = ''
var readold = 0
var readold_M = 0
var circleall = 0
var circleall_M = 0
var m_cc

//旋轉電腦計算
function rotate_min(e) {
    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

    // 計算角度
    var a = Math.atan2(y, x) * 180 / Math.PI;
    var k = a % (360.0 / Scale);
    a = a - k + 180



    // Rotate
    el_min.style.transform = `rotate(${a - Adjustment}deg)`;

    let bb = el_min.style.transform.slice(7, 25)

    bb = parseFloat(bb)
   //bb = parseInt(bb)

    if (bb < 0) {
        bb = bb + 360
    }

    if (orimin > bb) {
        //console.log(orimin)
        bb = bb + 360
    }
    if (last_set == a && readold != a && (a - readold) > 0) {
        m_cc = m_cc + 30

        circleall = 1
    }
    /*console.log(bb);
    bb = Math.round(bb * 100) / 100;
    console.log(bb);*/


    if(bb){
        var V = bb;
        V = parseFloat(V);
        V = V % 360
        if (V < 0) {
            V = 360 + V
        }
    
        V = Math.round(V / (360.0 / MaxValue));

        $("#number2").val(V);
        $("#number1").val( Math.floor(V / 1000));
        $("#number3").val(Math.floor(V % 1000));
    }
   

    readold = a
}
//旋轉手機計算
function rotate_min_moblie(e) {
    const x = e.touches[0].clientX - centerX;
    const y = e.touches[0].clientY - centerY;
  
    // 計算角度
    var a = Math.atan2(y, x) * 180 / Math.PI;
    var k = a % (360.0 / Scale);
    a = a - k+ 180;

    // Rotate 
    el_min.style.transform = `rotate(${a - Adjustment}deg)`;

    let bb = el_min.style.transform.slice(7, 25)

    bb = parseFloat(bb)
    if (bb < 0) {
        bb = bb + 360
    }

    if (orimin > bb) {
        bb = bb + 360
    }

    if (last_set_M == a && readold_M != a && (a - readold_M) > 0) {
      m_cc = m_cc + 30
      drawpathmin(0, 360)
      circleall_M = 1
    }
    if(bb){
        var V = bb;
        V = parseFloat(V);
        V = V % 360
      
        if (V < 0) {
            V = 360 + V
        }
    
        V = Math.round(V / (360.0 / MaxValue));
        $("#number2").val(V);
        $("#number1").val( Math.floor(V / 1000));
        $("#number3").val(Math.floor(V % 1000));
    }
    readold_M = a
  }
//電腦點擊指針
$(".pointer").mousedown(function (e) {

    const x = e.clientX - centerX;
    const y = e.clientY - centerY;

   var temp =  Math.atan2(y, x);
    var a = Math.atan2(y, x) * 180 / Math.PI;

    var k = a % (360.0 / Scale);

    a = a - k + 180

    last_set = a
    readold = a
    circleall = 0
    document.addEventListener('mousemove', rotate_min);
  
  })
  //手機離開事件
  $('html').mouseup(function () {
    document.removeEventListener('mousemove', rotate_min);
    let bb = el_min.style.transform.slice(7, 25)

    if (bb) {

      bb = parseFloat(bb);
 
      bb = bb % 360
  
      if (bb < 0) {
        bb = 360 + bb
      }
      orimin = bb

      bb = Math.round(bb / (360.0 / MaxValue));

      $("#number2").val(bb);

      $("#number1").val( Math.floor(bb / 1000));
      $("#number3").val(Math.floor(bb % 1000));

    }
  })
  //電腦離開事件
  $('html').on('touchend', function () {
    document.removeEventListener('touchmove', rotate_min_moblie);

    let bb = el_min.style.transform.slice(7, 25)

    if (bb) {

      bb = parseFloat(bb);
 
      bb = bb % 360
  
      if (bb < 0) {
        bb = 360 + bb
      }
      orimin = bb

      bb = Math.round(bb / (360.0 / MaxValue));
      console.log(bb);
      $("#number2").val(bb);

      $("#number1").val( Math.floor(bb / 1000));
      $("#number3").val(Math.floor(bb % 1000));
    }
  
  })
  //手機移動事件
  $('.pointer').on('touchstart', function (e) {
    const x = e.touches[0].clientX - centerX;
    const y = e.touches[0].clientY - centerY;
  
    // Calculate angle based on mouse position
    var a = Math.atan2(y, x) * 180 / Math.PI;
    var k = Math.floor(a) % (360.0 / Scale)
    a = Math.floor(a) - k + 180
    last_set_M = a
    readold_M = a
    circleall_M = 0
    document.addEventListener('touchmove', rotate_min_moblie);
  
  
  });
  //重置
  function ReSet(){
      orimin = 0;
      last_set = '';
      last_set_M = '';
      readold = 0;
      readold_M = 0;
      circleall = 0;
      circleall_M = 0;

    $("#number2").val(0);
    $("#number1").val(0);
    $("#number3").val(0);
    el_min.style.transform = `rotate(${0 }deg)`;
  }
 //旋轉指針By Value
  function rotateByValue(val){
    var a = val * (360.0 / MaxValue);
    console.log(a);
    el_min.style.transform = `rotate(${a }deg)`;
  }
