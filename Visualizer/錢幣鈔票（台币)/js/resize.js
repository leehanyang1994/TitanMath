$(function () {
    $(window).resize(objSizeReset);
    objSizeReset();
    function objSizeReset() {
        convertSizeALL('.outside-frame');

    }



    $(window).on('load', function () {
        objSizeReset();
        $('.defaultImg').removeClass('loadingnone')
        $('.now_num').removeClass('loadingnone')

    });


});
var sRSS
var change_img = $('.img_thd').css("width")

var cursor_padding
var obj_padding


var src_thd = 'img/newa1000.svg'
var src_fiftyhun = 'img/newa500.svg'
var src_hun = 'img/newa100.svg'
var src_fifty = 'img/newa50.svg'
var src_ten = 'img/newa10.svg'
var src_five = 'img/newa5.svg'
var src_one = 'img/newa1.svg'


var countscaleone 


function convertSizeALL(className) {

    var w = 1920, h = 900;
    var iw = $(window).innerWidth(), ih = $(window).innerHeight();
    var pRatio = window.devicePixelRatio || 0, xRatio = iw / w, yRatio = ih / h, sRatio = 1;
    sRatio = Math.min(xRatio, yRatio);
    sRSS = sRatio
    $('.background-img').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background1").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".background").css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $(".showbox").css({ width: Math.round(1480 * sRatio), height: Math.round(697 * sRatio) });
    $('.changeMoneyAreaTop').css({ width: Math.round(359 * sRatio), height: Math.round(31 * sRatio) });
    $('.changeMoneyAreaBottom').css({ width: Math.round(385 * sRatio), height: Math.round(697 * sRatio) });
    $('.change_btn').css({ width: Math.round(333 * sRatio), height: Math.round(83 * sRatio) });
    $('.close_btn').css({ width: Math.round(76 * sRatio), height: Math.round(77 * sRatio) });
    $('.useteach').css({ width: Math.round(263 * sRatio), height: Math.round(78 * sRatio) });
    $('.countpic').css({ width: Math.round(262 * sRatio), height: Math.round(163 * sRatio) });
    $('.delete_btn').css({ width: Math.round(65 * sRatio), height: Math.round(52 * sRatio) });
    $('.toggleDisplayBtn').css({ width: Math.round(175 * sRatio), height: Math.round(52 * sRatio) });


    $('.inputarea').css({ width: Math.round(159 * sRatio), height: Math.round(79 * sRatio) });
    $('.arrow').css({ width: Math.round(19 * sRatio), height: Math.round(13 * sRatio) });
    $('.choosenum').css({ width: Math.round(149 * sRatio), height: Math.round(565 * sRatio) });

    $('.img_thd').css({ width: Math.round(167 * sRatio), height: Math.round(73 * sRatio) });
    $('.img_fivehun').css({ width: Math.round(167 * sRatio), height: Math.round(73 * sRatio) });
    $('.img_hun').css({ width: Math.round(149 * sRatio), height: Math.round(72 * sRatio) });
    $('.img_fifty').css({ width: Math.round(80 * sRatio), height: Math.round(80 * sRatio) });

    $('.img_ten').css({ width: Math.round(70 * sRatio), height: Math.round(70 * sRatio) });
    $('.img_five').css({ width: Math.round(60 * sRatio), height: Math.round(60 * sRatio) });

    $('.img_one').css({ width: Math.round(50 * sRatio), height: Math.round(50 * sRatio) });


    $('.img_thd1').css({ width: Math.round(167 * sRatio), height: Math.round(73 * sRatio) });
    $('.img_fiv1').css({ width: Math.round(167 * sRatio), height: Math.round(73 * sRatio) });
    $('.img_hun1').css({ width: Math.round(149 * sRatio), height: Math.round(72 * sRatio) });
    $('.img_fif1').css({ width: Math.round(80 * sRatio), height: Math.round(80 * sRatio) });

    $('.img_ten1').css({ width: Math.round(70 * sRatio), height: Math.round(70 * sRatio) });
    $('.img_ive1').css({ width: Math.round(60 * sRatio), height: Math.round(60 * sRatio) });

    $('.img_one1').css({ width: Math.round(50 * sRatio), height: Math.round(50 * sRatio) });

    $('.now_num').css({ fontSize: Math.round(20 * sRatio) })






    $('.realmoneyarea').css({ width: Math.round(265 * sRatio), height: Math.round(59 * sRatio) });
    $('.realmoney').css({ width: Math.round(133 * sRatio), height: Math.round(53 * sRatio) });

    $('.numberframe').css({ width: Math.round(125 * sRatio), borderRadius: Math.round(5 * sRatio) });


    $('.numlist').css({ height: Math.round(54.2 * sRatio), fontSize: Math.round(35 * sRatio) })
    $('.dragselected').css({ width: Math.round(355 * sRatio), height: Math.round(200 * sRatio) });
    $('.selectedframe').css({ width: Math.round(330 * sRatio), height: Math.round(185 * sRatio), boxShadow: `0px ${Math.round(30 * sRatio)}px ${Math.round(30 * sRatio)}px inset rgba(34, 34, 34, 0.452),0px ${-Math.round(30 * sRatio)}px ${Math.round(30 * sRatio)}px inset rgba(34, 34, 34, 0.466) ` });
    $('.box').css({ width: Math.round(330 * sRatio), height: Math.round(185 * sRatio) })
    $('.img_box').css({ width: Math.round(330 * sRatio), height: Math.round(185 * sRatio), backgroundPosition: `0 ${Math.round(378 * sRatio)}px`, backgroundSize: `${Math.round(330 * sRatio)}px ${Math.round(812 * sRatio)}px` })
    $('.movetopbtn').css({ width: Math.round(56 * sRatio), height: Math.round(39 * sRatio) });
    $('.movedownbtn').css({ width: Math.round(56 * sRatio), height: Math.round(39 * sRatio) });
    $('.enter_input').css({ width: Math.round(70 * sRatio), height: Math.round(30 * sRatio), fontSize: Math.round(30 * sRatio) })
    $('.count').css({ width: Math.round(180 * sRatio), height: Math.round(100 * sRatio), fontSize: Math.round(55 * sRatio) })
    $('.mask').css({ width: Math.round(w * sRatio), height: Math.round(h * sRatio) });
    $('.info').css({ width: Math.round(673*1.6  * sRatio), height: Math.round(456 *1.6* sRatio) });
    $('.info-page').css({ width: Math.round(1039  * sRatio), height: Math.round(687.6* sRatio),borderRadius: Math.round(15 * sRatio) });
    $('.info-btn-left,.info-btn-right').css({ width: Math.round(35 * sRatio), height: Math.round(35 * sRatio) });

    $('.btn_close_inset').css({ width: Math.round(53 * sRatio), height: Math.round(53 * sRatio) });
    if (realmoneynow == 0) {
        $('.realpic').css({
            backgroundPosition: `0 -${Math.round(53 * sRSS)}px`
        })
    } else if (realmoneynow == 1) {
        $('.realpic').css({
            backgroundPosition: "0 0px"
        })
    }
    $('.realpic').css({
        backgroundPosition: "0 0px"

    })

    canvas.setHeight(655 * sRatio);
    canvas.setWidth(1815 * sRatio);
    $('.canvas-container').css({ borderRadius: Math.round(20 * sRatio) })
    canvas.discardActiveObject();

    stagenum = 0

    var nowW = $('.img_thd').css('width')
    console.log(nowW)
    console.log(change_img)

    countscale = parseInt(nowW) / parseInt(change_img)
    var objse = canvas.getObjects()
    objse.forEach((obj) => {


        obj.scaleX = obj.scaleX * countscale

        obj.scaleY = obj.scaleY * countscale
        obj.left = obj.left * countscale
        obj.top = obj.top * countscale
        obj.setCoords()
        // obj.width=  obj._element.naturalWidth* scalenow
        // obj.height=  obj._element.naturalHeigh* scalenow


    });
    change_img = nowW







    fabric.Object.prototype.customiseCornerIcons({
        settings: {
            borderColor: 'black',
            cornerSize: Math.round(40 * sRatio),
            cornerShape: 'circle',
            cornerBackgroundColor: 'rgba(0,0,0,0)',
            cornerPadding: 0
        },

        tr: {

            icon: 'img/tX.svg',
        },
        bl: {
            icon: 'img/tR.svg',

        },
        br: {
            settings: {
                borderColor: '#0094dd',

                cornerShape: 'circle',
            },
            icon: 'img/tB.svg'
        },
    }, function () {
        canvas.renderAll()
    })

    fabric.Object.prototype.set({
        padding: Math.round(10 * sRatio)
    })
    fabric.Object.prototype.set({
        borderColor: '#0094dd',
        lockScalingFlip: true
    })


    cursor_padding = Math.round(40 * sRatio)
    obj_padding = Math.round(10 * sRatio)





}
