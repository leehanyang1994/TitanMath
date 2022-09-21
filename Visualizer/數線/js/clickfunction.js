
$('.info-page').css({
    background: `url(setpic/${set_pic_info[0]})`,
    backgroundSize: "cover"
})
if (set_pic_info.length > 1) {
    $('.info-btn-right').removeClass('display_none')
}
var picnowdisplay = 0
var picenddisplay = set_pic_info.length - 1
$('.info-btn-right').click(function () {
    picnowdisplay++
    $('.info-page').css({
        background: `url(setpic/${set_pic_info[picnowdisplay]})`,
        backgroundSize: "cover"
    })
    if (picnowdisplay == picenddisplay) {
        $('.info-btn-right').addClass('display_none')
    }
    if (picnowdisplay != 0) {
        $('.info-btn-left').removeClass('display_none')
    }
})
$('.info-btn-left').click(function () {
    picnowdisplay--
    $('.info-page').css({
        background: `url(setpic/${set_pic_info[picnowdisplay]})`,
        backgroundSize: "cover"
    })
    if (picnowdisplay == 0) {
        $('.info-btn-left').addClass('display_none')
    }
    if (picnowdisplay != picenddisplay) {
        $('.info-btn-right').removeClass('display_none')
    }

})
var stagenum = 0

var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) {
        //判斷瀏覽器IE,谷歌滑輪事件 

        //向上滾
        if (e.wheelDelta > 0) {
            if (NowIndex == 0) {
                return;
            }
            NowIndex--;
            if (NowIndex < 0) {
                NowIndex = 0;
            }
            var Temp = (NowIndex * Math.round(330 * sRatio));
            $(".TopicScroll").scrollTop(Temp);
        }
        //向下滾
        if (e.wheelDelta < 0) {
            if (NowIndex > (IndexCount - 1)) {
                return;
            }
            NowIndex++;
            if (NowIndex > (IndexCount - 1)) {
                NowIndex = (IndexCount - 1);
            }
            var Temp = (NowIndex * Math.round(330 * sRatio));
            $(".TopicScroll").scrollTop(Temp);
        }
    }
    // else if (e.detail) {
    //     //Firefox滑輪事件 
    //     if (e.detail > 0) {
    //         //當滑輪向上滾動時 
    //         alert("滑輪向上滾動");
    //     }
    //     if (e.detail < 0) {
    //         //當滑輪向下滾動時 
    //         alert("滑輪向下滾動");
    //     }
    // }
}
//給頁面繫結滑輪滾動事件 
if (document.addEventListener) {
    //firefox 
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滾動滑輪觸發scrollFunc方法 //ie 谷歌
window.onmousewheel = document.onmousewheel = scrollFunc;
var realmoneynow = 0
$('.realmoneyarea').click(function () {
    if (realmoneynow == 0) {

        stagenum = 0
        src_thd = 'img/cube.svg'

        $('.img_thd').attr('src', `${src_thd}`)




        /*  $('.img_box').css({
              background: "url(img/bar34.png)",
              width: Math.round(330 * sRSS),
              height: Math.round(185 * sRSS),
              backgroundPosition: `0 ${Math.round(378 * sRSS)}px`,
              backgroundSize: `${Math.round(330 * sRSS)}px ${Math.round(812 * sRSS)}px`
          })*/
        $(".realmoney").css({
            left: "86.56%",

        })
        $('.realpic').css({
            backgroundPosition: `0 -${Math.round(53 * sRSS)}px`

        })
        var objse = canvas.getObjects()
        objse.forEach((obj) => {
            var scalenowX = obj.scaleX
            var scalenowY = obj.scaleY
            console.log(obj)
            var whatisthis = obj._element.alt

            obj.setSrc(`img/b${whatisthis}.svg`,
                function () {
                    obj._element.alt = whatisthis

                    canvas.renderAll();
                });

        });
        if (isiOS) {
            objse.forEach((obj) => {
                if (parseInt(obj._element.alt) > 50) {
                    obj.scaleX = sRSS
                    obj.scaleY = sRSS
                }
                else if (parseInt(obj._element.alt) == 50) {
                    obj.scaleX = 0.9 * sRSS
                    obj.scaleY = 0.9 * sRSS
                }
                else if (parseInt(obj._element.alt) < 50) {
                    obj.scaleX = 0.85 * sRSS
                    obj.scaleY = 0.85 * sRSS
                }
                else if (parseInt(obj._element.alt) == 1) {
                    obj.scaleX = 0.70 * sRSS
                    obj.scaleY = 0.70 * sRSS
                }
            });
        }
        canvas.renderAll()
        realmoneynow = 1
    }
    else if (realmoneynow == 1) {
        stagenum = 0
        src_thd = 'img/cube.svg'

        $('.img_thd').attr('src', `${src_thd}`)







        $('.img_box').css({
            background: "url(img/bar22.png)",
            width: Math.round(330 * sRSS),
            height: Math.round(185 * sRSS),
            backgroundPosition: `0 ${Math.round(378 * sRSS)}px`,
            backgroundSize: `${Math.round(330 * sRSS)}px ${Math.round(812 * sRSS)}px`
        })
        $(".realmoney").css({
            left: "80.3%",


        })
        $('.realpic').css({
            backgroundPosition: "0 0px"

        })
        var objse = canvas.getObjects()
        objse.forEach((obj) => {
            console.log(obj)

            var whatisthis = obj._element.alt
            console.log(whatisthis)
            obj.setSrc(`img/newa${whatisthis}.svg`,
                function () {
                    obj._element.alt = whatisthis

                    canvas.renderAll();
                });

        });
        if (isiOS) {
            objse.forEach((obj) => {
                if (parseInt(obj._element.alt) > 50) {
                    obj.scaleX = sRSS
                    obj.scaleY = sRSS
                }

                else if (parseInt(obj._element.alt) == 50) {
                    obj.scaleX = 0.9 * sRSS
                    obj.scaleY = 0.9 * sRSS
                }
                else if (parseInt(obj._element.alt) < 50) {
                    obj.scaleX = 0.85 * sRSS
                    obj.scaleY = 0.85 * sRSS
                }
                else if (parseInt(obj._element.alt) == 1) {
                    obj.scaleX = 0.75 * sRSS
                    obj.scaleY = 0.75 * sRSS
                }
            });
        }
        realmoneynow = 0



    }

})
//放大
$(".Big").mouseup(function (event) {
    $(".BigDiv").css("display", "flex");


    $(".BigImg").attr("src", $($(".TopicScroll > div")[NowIndex]).children("img").attr("src").replace("/small/", "/enlarge/"));
});
//箭頭上
$(".up").click(function (event) {
    if (NowIndex == 0) {
        return;
    }
    NowIndex--;
    if (NowIndex < 0) {
        NowIndex = 0;
    }
    var Temp = (NowIndex * Math.round(330 * sRatio));
    $(".TopicScroll").scrollTop(Temp);
});
//箭頭下
$(".down").click(function (event) {
    if (NowIndex > (IndexCount - 1)) {
        return;
    }
    NowIndex++;
    if (NowIndex > (IndexCount - 1)) {
        NowIndex = (IndexCount - 1);
    }
    var Temp = (NowIndex * Math.round(330 * sRatio));
    $(".TopicScroll").scrollTop(Temp);
});
//基礎 進階選擇
$(".SelectType,.SelectTxt,.SelectTypeUp").mouseup(function (event) {
    event.stopPropagation();
    if(	$(".SelectTypeDiv").css("display")== "none"){
        $(".SelectTypeDiv").show();
    }
    else{
        $(".SelectTypeDiv").hide();
    }

});
$(".Select").mouseup(function (event) {
    var Temp = $(this).attr("num");
    AddTopoc(parseInt(Temp));
    $(".SelectTxt").text($(this).text());
    $(".SelectTypeDiv").hide();
});
//選數字
$(".NumberUp").mouseup(function (event) {
    event.stopPropagation();
    if(	$(".SelectNumberDiv").css("display")== "none"){
        $(".SelectNumberDiv").show();
    }
    else{
        $(".SelectNumberDiv").hide();
    }
});
$(".SelectNumber").mouseup(function (event) {
    event.stopPropagation();
    var Temp = parseInt($(this).attr("num"));
    $(".enter_input").val(Temp);
    var e = jQuery.Event("keydown"); 
    e.which = 13; // Enter 
    $(".enter_input").trigger(e); 
    HideAll();
});
//全部隱藏
function HideAll() {
	$(".Content > div > div > .Change,.Content > div > div > .Delete,.Content > div > div > .Copy").css("visibility", "hidden");
	//$(".EditBox").css("border-color", "transparent");
	$(".EditBox").css("visibility", "hidden");

	$(".SelectTypeDiv").hide();
	$(".SelectNumberDiv").hide();
	//visibility: hidden;
}
var clickDisplayNoneThd = 0
var clickDisplayNoneHrd = 0
var clickDisplayNoneten = 0
var clickDisplayNoneOne = 0
var clickDisplayNoneFiftyHrd = 0
var clickDisplayNonefifty = 0
var clickDisplayNonefive = 0

//Cube箭頭
$('.arrow1').click(function (e) {
    e.stopPropagation();
    $('.choosenum').not('.choosenum1').css({
        transform: "scale(0)"
    })
    if (clickDisplayNoneThd == 0) {
        $('.choosenum1').css({
            transform: "scale(1)"
        })

        setTimeout(function () {
            clickDisplayNoneThd = 1
        }, 100)
    } else if (clickDisplayNoneThd == 1) {
        $('.choosenum1').css({
            transform: "scale(0)"
        })
        clickDisplayNoneThd = 0
    }
})



$('body').bind('click', function (event) {
    if (clickDisplayNoneThd == 1) {


        $('.choosenum1').css({
            transform: "scale(0)"
        })
    }
    clickDisplayNoneThd = 0
});

var togglecount = 0



$('.numlist').click(function () {
    let showClick = $(this).data("numval")
    let amount = $(this).closest(".choosenum").data("amount")
    $(`.enter_${amount}`).val(showClick == 10 ? "+10" : `+${showClick}`)
    appendmoney()

})
function SumData(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    return sum;
}

$(".count").bind('input porpertychange', function () {
    if ($('.count').val() > 10999) {
        $('.count').val(10999)
    }
})
var blurnow = 0
$('.count').focus(function () {
    $('.count').val("")
    blurnow = 1
})
$('.count').blur(function (e) {
    setTimeout(function () {
        blurnow = 0
    }, 200)
    console.log(e)
    if ($('.count').val() == "") {
        setTimeout(function ww() {
            var items = canvas.getObjects()
            var Array_sum
            var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

            for (i = 0; i < items.length; i++) {
                ArrTest[i] = parseInt(items[i]._element.alt)

            }
            Array_sum = SumData(ArrTest)
            $(".count").val(Array_sum + change_Array_sum)
        }, 500)
    } else {
        if (keydownblur == 0) {
            canvas.clear();

            idontknowwhatiwrite()
            $('.enter_thd').val('')
            $('.enter_hrd').val('')
            $('.enter_ten').val('')
            $('.enter_one').val('')

        } else {
            keydownblur = 0
        }

    }
})
//隨機出題
$(".Random").mouseup(function (event) {
    NowIndex = getRandomInt((IndexCount - 1));
    var Temp = (NowIndex * Math.round(330 * sRatio));
    $(".TopicScroll").scrollTop(Temp);
});
function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

$('.btn_close_inset').click(function () {
    $('.mask').addClass("display_none")

})
//使用說明
$('.Description').click(function () {
    $(".Block").show();
})
$('.CloseDescription').click(function () {
    $(".Block").hide();
})

$(".enter_input").bind('input porpertychange', function () {
    if (isNaN($(this).val())) {
        $(this).val("");
    }
    else if ($(this).val() > 10) {
        $(this).val(10)
    }
   /* if (!isNaN($(this).val())) {
        let num = $(this).val()
        num = parseInt(num)
        $(this).val("+" + num)
    }
    if (isNaN($(this).val())) {
        $(this).val("+" + 0)

    }*/
})

var u = navigator.userAgent;
var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
//輸入數量
$('.enter_input').blur(function () {

    if (isAndroid || isiOS) {
        appendmoney()
    }
})
$('.useteach').click(function () {

})
//刪除
$('.DeleteAll').click(function () {
    if (blurnow == 0) {

        clickappend_1000 = 0
        clickrow_1000 = 0
        clicklittlemove_1000 = 0

       

        arrayOne = []
        arrayfive = []
        arrayten = []
        arrayfifty = []
        arrayhun = []
        arrayfivehun = []
        arrayths = []

        canvas.clear()
        $('.count').val(0)
        thdcount = -1
      
        changeArray = []
        change_Array_sum = 0


        thdlittlemoveleft = 0

        numnum = 0

    }

})
//關閉
$('.Close').click(function () {
    window.location.href = 'about:blank ';
    window.opener = null;
    window.open('', '_self');
    window.close();

})
$('.BigClose').click(function () {
    $(".BigDiv").hide();
})

var _clipboard;
//複製Cube
function Copy() {
    var activeObject = canvas.getActiveObject();
    activeObject.clone(function (cloned) {
        console.log(cloned);
        canvas.discardActiveObject();
        cloned.set({
            left: cloned.left + 10,
            top: cloned.top + 10,
            evented: true
        });
        if (cloned.type === 'activeSelection') {
            // active selection needs a reference to the canvas.
            cloned.canvas = canvas;
            cloned.forEachObject(function (obj) {
                canvas.add(obj);
            });
            cloned.setCoords();
        } else {
            canvas.add(cloned);
        }
        canvas.setActiveObject(cloned);
        canvas.requestRenderAll();
    });

}
fabric.Canvas.prototype.customiseControls({
    tl: {
        action: function () {

        }
    },
    tr: {
        action: function (e) {
            var ji = canvas.getActiveObject()
            console.log(ji)
            console.log(objseleted)
            if (ji.cacheKey == objseleted) {
                if (ji) {
                    var index = changeArray.indexOf(ji);
                    if (index > -1) {
                        console.log(index)

                        changeArray.splice(index, 1);
                        var stage = new Array()
                        for (i = 0; i < changeArray.length; i++) {
                            stage.push(parseInt(changeArray[i]._element.alt))
                        }

                        change_Array_sum = SumData(stage)

                    }
                    canvas.remove(ji)
                }
            }
            if (ji._objects) {
                function getSelection() {

                    return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                }

                var o = getSelection();

                o._objects.forEach(function (object, key) {
                    var index = changeArray.indexOf(object);
                    if (index > -1) {
                        console.log(index)

                        changeArray.splice(index, 1);
                        var stage = new Array()
                        for (i = 0; i < changeArray.length; i++) {
                            stage.push(parseInt(changeArray[i]._element.alt))
                        }

                        change_Array_sum = SumData(stage)

                    }
                    canvas.remove(object);
                });
                canvas.discardActiveObject()

            }



            canvas.renderAll();
            setTimeout(function ww() {
                var items = canvas.getObjects()
                var Array_sum
                var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

                for (i = 0; i < items.length; i++) {
                    ArrTest[i] = parseInt(items[i]._element.alt)

                }
                Array_sum = SumData(ArrTest)
                $(".count").val(Array_sum + change_Array_sum)
            }, 500)






        },
        cursor: 'pointer'
    },
    bl: {
        action: "rotate",

    },
    br: {
        action: function () {
        },

        cursor: 'pointer'
    },
    mb: {
        action: function () {

        }
    },
    mt: {
        action: function () {

        }
    },
    ml: {
        action: function () {

        }
    },
    mr: {
        action: function () {

        }
    },
    mtr: {
        action: function () {

        }
    },
}, function () {

    canvas.renderAll()
})

fabric.Canvas.prototype.customiseControls({
    bl: {
        action: function () {

        },
        cursor: 'pointer'

    },
    br: {
        action: function () {

        },
        cursor: 'pointer'
    },
}, function () {

    canvas.renderAll()
})

fabric.Object.prototype.setControlsVisibility({
    bl: true, // 左下
    br: true, // 右下
    mb: false, // 下中
    ml: false, // 中左
    mr: false, // 中右
    mt: false, // 上中
    tl: false, // 上左
    tr: true, // 上右
    mtr: false // 旋轉控制鍵
})

fabric.Canvas.prototype.cursorMap[1] = 'pointer'
// fabric.Canvas.prototype.cursorMap[2] = 'pointer'
fabric.Canvas.prototype.cursorMap[3] = 'pointer'
// fabric.Canvas.prototype.cursorMap[4] = 'pointer'
fabric.Canvas.prototype.cursorMap[5] = 'pointer'
// fabric.Canvas.prototype.cursorMap[6] = 'pointer'
// fabric.Canvas.prototype.cursorMap[7] = 'pointer'
// fabric.Canvas.prototype.cursorMap[8] = 'pointer'
// fabric.Canvas.prototype.cursorMap[9] = 'pointer'
// fabric.Canvas.prototype.cursorMap[1] = 'pointer'




var objseleted

canvas.on('selection:updated', function (e) {
    console.log("updated");
    fabric.Canvas.prototype.customiseControls({
        bl: {
            action: function () {

            },
            cursor: 'pointer'

        },
        br: {
            action: function () {

            },
            cursor: 'pointer'
        },
    }, function () {

        canvas.renderAll()
    })

    setTimeout(function () {
        objseleted = e.target.cacheKey
        console.log(objseleted)
    }, 120)
    setTimeout(function () {
        objscalerotate = e.target.cacheKey
        console.log(objseleted)
        fabric.Canvas.prototype.customiseControls({
            tl: {
                action: function () {

                }
            },
            tr: {
                action: function (e) {


                    var ji = canvas.getActiveObject()
                    console.log(ji)
                    console.log(objseleted)
                    if (ji.cacheKey == objseleted) {
                        if (ji) {

                            canvas.remove(ji)
                        }
                    }
                    if (ji._objects) {
                        function getSelection() {

                            return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                        }

                        var o = getSelection();

                        o._objects.forEach(function (object, key) {

                            canvas.remove(object);
                        });
                        canvas.discardActiveObject()

                    }



                    canvas.renderAll();

                    setTimeout(function ww() {
                        var items = canvas.getObjects()
                        var Array_sum
                        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

                        for (i = 0; i < items.length; i++) {
                            ArrTest[i] = parseInt(items[i]._element.alt)

                        }
                        Array_sum = SumData(ArrTest)
                        $(".count").val(Array_sum + change_Array_sum)
                    }, 500)




                },
                cursor: 'pointer'
            },
            bl: {
                action: 'rotate',
                cursor: 'pointer'

            },
            br: {
                action: "scale",
                cursor: 'pointer'
            },
            mb: {
                action: function () {

                }
            },
            mt: {
                action: function () {

                }
            },
            ml: {
                action: function () {

                }
            },
            mr: {
                action: function () {

                }
            },
            mtr: {
                action: function () {

                }
            },
        }, function () {

            canvas.renderAll()
        })
    }, 500)
});








canvas.on('object:selected', e => {
    console.log("selected");
    fabric.Canvas.prototype.customiseControls({
        bl: {
            action: function () {

            },
            cursor: 'pointer'

        },
        br: {
            action: function () {

            },
            cursor: 'pointer'
        },
    }, function () {

        canvas.renderAll()
    })
    if (e.target) {
        console.log(e)
        e.target.bringToFront()
        setTimeout(function () {
            objseleted = e.target.cacheKey
            console.log(33456);
            canvas.renderAll();
        }, 120)
        setTimeout(function () {
            objscalerotate = e.target.cacheKey
            console.log(objseleted)
            fabric.Canvas.prototype.customiseControls({
                tl: {
                    action: function () {

                    }
                },
                tr: {
                    action: function (e) {


                        var ji = canvas.getActiveObject()
                        console.log(ji)
                        console.log(objseleted)
                        if (ji.cacheKey == objseleted) {
                            if (ji) {

                                canvas.remove(ji)
                            }
                        }
                        if (ji._objects) {
                            function getSelection() {

                                return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                            }

                            var o = getSelection();

                            o._objects.forEach(function (object, key) {

                                canvas.remove(object);
                            });
                            canvas.discardActiveObject()

                        }



                        canvas.renderAll();

                        setTimeout(function ww() {
                            var items = canvas.getObjects()
                            var Array_sum
                            var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

                            for (i = 0; i < items.length; i++) {
                                ArrTest[i] = parseInt(items[i]._element.alt)

                            }
                            Array_sum = SumData(ArrTest)
                            $(".count").val(Array_sum + change_Array_sum)
                        }, 500)




                    },
                    cursor: 'pointer'
                },
                bl: {
                    action: 'rotate',
                    cursor: 'pointer'

                },
                br: {
                    action: function () {
                        Copy();
                    },
                    cursor: 'pointer'
                },
                mb: {
                    action: function () {

                    }
                },
                mt: {
                    action: function () {

                    }
                },
                ml: {
                    action: function () {

                    }
                },
                mr: {
                    action: function () {

                    }
                },
                mtr: {
                    action: function () {

                    }
                },
            }, function () {

                canvas.renderAll()
            })
            
        }, 500)
    }


    // canvas.moveTo(e.target, 0);
})

//清除選中
canvas.on('selection:cleared', e => {
    objseleted = 0
})

//圈選

canvas.on('selection:created', e => {
    if (e.selected.length > 1) {
        console.log("created");
        
        fabric.Canvas.prototype.customiseControls({
            bl: {
                action: function () {

                },
                cursor: 'pointer'

            },
            br: {
                action: function () {

                },
                cursor: 'pointer'
            },
        }, function () {

            canvas.renderAll()
        })
        console.log(e.target);
        if (e.target) {
            console.log(e)
            e.target.bringToFront()
            setTimeout(function () {
                objseleted = e.target.cacheKey
                console.log(objseleted)
            }, 120)
            setTimeout(function () {
                objscalerotate = e.target.cacheKey
                console.log(objseleted)
                fabric.Canvas.prototype.customiseControls({
                    tl: {
                        action: function () {

                        }
                    },
                    tr: {
                        action: function (e) {


                            var ji = canvas.getActiveObject()
                            console.log(ji)
                            console.log(objseleted)
                            if (ji.cacheKey == objseleted) {
                                if (ji) {

                                    canvas.remove(ji)
                                }
                            }
                            if (ji._objects) {
                                function getSelection() {

                                    return canvas.getActiveObject() == null ? canvas.getActiveGroup() : canvas.getActiveObject()
                                }

                                var o = getSelection();

                                o._objects.forEach(function (object, key) {

                                    canvas.remove(object);
                                });
                                canvas.discardActiveObject()

                            }



                            canvas.renderAll();

                            setTimeout(function ww() {
                                var items = canvas.getObjects()
                                var Array_sum
                                var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

                                for (i = 0; i < items.length; i++) {
                                    ArrTest[i] = parseInt(items[i]._element.alt)

                                }
                                Array_sum = SumData(ArrTest)
                                $(".count").val(Array_sum + change_Array_sum)
                            }, 500)




                        },
                        cursor: 'pointer'
                    },
                    bl: {
                        action: 'rotate',
                        cursor: 'pointer'

                    },
                    br: {
                        action: function () {
                            Copy();
                        },
                        cursor: 'pointer'
                    },
                    mb: {
                        action: function () {

                        }
                    },
                    mt: {
                        action: function () {

                        }
                    },
                    ml: {
                        action: function () {

                        }
                    },
                    mr: {
                        action: function () {

                        }
                    },
                    mtr: {
                        action: function () {

                        }
                    },
                }, function () {

                    canvas.renderAll()
                })
            }, 500)
        }
    }

})






















var left1 = 0;
var top1 = 0;
var scale1x = 0;
var scale1y = 0;
var width1 = 0;
var height1 = 0;
var angle = 0

canvas.on('object:scaling', function (e) {
    var obj = e.target;
    // obj.set('strokeWidth', 50)

    obj.setCoords();
    var brNew = obj.getBoundingRect();

    if (((brNew.width + brNew.left) >= obj.canvas.width * 0.80 - (20 * sRSS)) || ((brNew.height + brNew.top) >= obj.canvas.height - (20 * sRSS)) || ((brNew.left < (20 * sRSS)) || (brNew.top < (20 * sRSS)))) {
        obj.left = left1;
        obj.top = top1;
        obj.scaleX = scale1x;
        obj.scaleY = scale1y;
        obj.width = width1;
        obj.height = height1;
    }
    else {
        left1 = obj.left;
        top1 = obj.top;
        scale1x = obj.scaleX;
        scale1y = obj.scaleY;
        width1 = obj.width;
        height1 = obj.height;
    }
});
canvas.on('object:rotating', function (e) {
    var obj = e.target;
    obj.setCoords();
    var brNew = obj.getBoundingRect();

    if (((brNew.width + brNew.left) >= obj.canvas.width * 0.80 - (20 * sRSS)) || ((brNew.height + brNew.top) >= obj.canvas.height - (20 * sRSS)) || ((brNew.left < (20 * sRSS)) || (brNew.top < (20 * sRSS)))) {
        obj.left = left1;
        obj.top = top1;
        obj.scaleX = scale1x;
        obj.scaleY = scale1y;
        obj.width = width1;
        obj.height = height1;
        obj.angle = angle1;
    }
    else {
        left1 = obj.left;
        top1 = obj.top;
        scale1x = obj.scaleX;
        scale1y = obj.scaleY;
        width1 = obj.width;
        height1 = obj.height;
        angle1 = obj.angle;

    }
});





var arrayOne = []
var arrayfive = []
var arrayten = []
var arrayfifty = []
var arrayhun = []
var arrayfivehun = []
var arrayths = []






/*canvas.on('object:moving', function (e) {
    var obj = e.target;
    // if object is too big ignore
    if (obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width) {
        return;
    }
    obj.setCoords();
    // top-left  corner
    if (obj.getBoundingRect().top || obj.getBoundingRect().left) {
        obj.top = Math.max(obj.top, obj.top + (30 * sRSS) - obj.getBoundingRect().top);
        obj.left = Math.max(obj.left, obj.left + (30 * sRSS) - obj.getBoundingRect().left);
    }
    // bot-right corner
    // if (obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width) {
    //     obj.top = Math.min(obj.top, obj.canvas.height - obj.getBoundingRect().height + obj.top - obj.getBoundingRect().top);
    //     obj.left = Math.min(obj.left, obj.canvas.width - (30 * sRSS) - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);
    // }

    if (obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width * 0.78) {
        obj.left = Math.min(obj.left, obj.canvas.width * 0.78 - (30 * sRSS) - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);

    }

    if (obj.getBoundingRect().left > obj.canvas.width * 0.80 && obj.getBoundingRect().top + obj.getBoundingRect().height < obj.canvas.height * 0.65) {

    }









    var obj = e.target;
    var objjj = obj._objects ? obj._objects : e.target
    obj.setCoords();

    // if ((obj.getBoundingRect().left + obj.getBoundingRect().width/2) > obj.canvas.width * 0.80 && obj.getBoundingRect().top + obj.getBoundingRect().height < obj.canvas.height * 0.65) {
    var clientXnow = e.e.clientX || e.e.targetTouches[0].clientX


    


    if (objjj == e.target) {
        if (clientXnow > objjj.canvas.width * 0.85) {
            var index = changeArray.indexOf(objjj);
            if (index > -1) {
            } else {
                if (objjj._element.alt == 1) {
                    arrayOne.push(objjj)
                } else if (objjj._element.alt == 5) {
                    arrayfive.push(objjj)
                } else if (objjj._element.alt == 10) {
                    arrayten.push(objjj)
                } else if (objjj._element.alt == 50) {
                    arrayfifty.push(objjj)
                } else if (objjj._element.alt == 100) {
                    arrayhun.push(objjj)
                } else if (objjj._element.alt == 500) {
                    arrayfivehun.push(objjj)
                } else if (objjj._element.alt == 1000) {
                    arrayths.push(objjj)
                }
                changeArray.push(objjj)
                canvas.remove(objjj)

            }





        }
    }

    if (objjj == obj._objects) {
        for (i = 0; i < objjj.length; i++) {
            if (clientXnow > obj.canvas.width * 0.85) {

                var index = changeArray.indexOf(objjj[i]);
                if (index > -1) {
                } else {
                    if (objjj[i]._element.alt == 1) {
                        arrayOne.push(objjj[i])
                    } else if (objjj[i]._element.alt == 5) {
                        arrayfive.push(objjj[i])
                    } else if (objjj[i]._element.alt == 10) {
                        arrayten.push(objjj[i])
                    } else if (objjj[i]._element.alt == 50) {
                        arrayfifty.push(objjj[i])
                    } else if (objjj[i]._element.alt == 100) {
                        arrayhun.push(objjj[i])
                    } else if (objjj[i]._element.alt == 500) {
                        arrayfivehun.push(objjj[i])
                    } else if (objjj[i]._element.alt == 1000) {
                        arrayths.push(objjj[i])
                    }
                    changeArray.push(objjj[i])
                    canvas.remove(objjj[i])
                    canvas.discardActiveObject()


                }






            }
        }
    }

    var stage = new Array()


    function pusharray(arr) {
        for (i = 0; i < arr.length; i++) {
            stage.push(parseInt(arr[i]._element.alt))
        }
    }


    pusharray(arrayOne)

    pusharray(arrayten)
    pusharray(arrayhun)
    pusharray(arrayths)
    pusharray(arrayfive)
    pusharray(arrayfivehun)
    pusharray(arrayfifty)


    change_Array_sum = SumData(stage)

    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum + change_Array_sum)

    }, 500)







});*/

var changeArray = new Array()
var change_Array_sum = 0




setInterval(function () {
    if (arrayths.length != 0) {
        $('.img_thd1').removeClass('opc0')
        $('.thd1_num').removeClass('opc0')
        $('.thd1_num .num_span').text(arrayths.length)
    } else {
        $('.img_thd1').addClass('opc0')
        $('.thd1_num').addClass('opc0')
        $('.thd1_num .num_span').text(0)
    }

    if (arrayfivehun.length != 0) {
        $('.img_fiv1').removeClass('opc0')
        $('.fiv1_num').removeClass('opc0')
        $('.fiv1_num .num_span').text(arrayfivehun.length)

    } else {
        $('.img_fiv1').addClass('opc0')
        $('.fiv1_num').addClass('opc0')
        $('.fiv1_num .num_span').text(0)
    }

    if (arrayhun.length != 0) {
        $('.img_hun1').removeClass('opc0')
        $('.hun1_num').removeClass('opc0')
        $('.hun1_num .num_span').text(arrayhun.length)

    } else {
        $('.img_hun1').addClass('opc0')
        $('.hun1_num').addClass('opc0')
        $('.hun1_num .num_span').text(0)
    }

    if (arrayfifty.length != 0) {
        $('.img_fif1').removeClass('opc0')
        $('.fif1_num').removeClass('opc0')
        $('.fif1_num .num_span').text(arrayfifty.length)

    } else {
        $('.img_fif1').addClass('opc0')
        $('.fif1_num').addClass('opc0')
        $('.fif1_num .num_span').text(0)
    }


    if (arrayten.length != 0) {
        $('.img_ten1').removeClass('opc0')
        $('.ten1_num').removeClass('opc0')
        $('.ten1_num .num_span').text(arrayten.length)

    } else {
        $('.img_ten1').addClass('opc0')
        $('.ten1_num').addClass('opc0')
        $('.ten1_num .num_span').text(0)
    }

    if (arrayfive.length != 0) {
        $('.img_ive1').removeClass('opc0')
        $('.ive1_num').removeClass('opc0')
        $('.ive1_num .num_span').text(arrayfive.length)

    } else {
        $('.img_ive1').addClass('opc0')
        $('.ive1_num').addClass('opc0')
        $('.ive1_num .num_span').text(0)
    }

    if (arrayOne.length != 0) {
        $('.img_one1').removeClass('opc0')
        $('.one1_num').removeClass('opc0')
        $('.one1_num .num_span').text(arrayOne.length)

    } else {
        $('.img_one1').addClass('opc0')
        $('.one1_num').addClass('opc0')
        $('.one1_num .num_span').text(0)
    }
}, 100)









canvas.on('object:moved', function (e) {
    var obj = e.target;

    $('.test').text(obj.scaleX + "," + obj.scaleY)

    if (obj.getBoundingRect().left + obj.getBoundingRect().width > $('.canvas-container').width() + $('.canvas-container').offset().left) {

        var obj = e.target;
        var obkkk = obj._objects ? obj._objects : e.target
        obj.setCoords();

        // if ((obj.getBoundingRect().left + obj.getBoundingRect().width/2) > obj.canvas.width * 0.80 && obj.getBoundingRect().top + obj.getBoundingRect().height < obj.canvas.height * 0.65) {

        if (obkkk == e.target) {
            canvas.remove(obkkk)
        }

        if (obkkk == obj._objects) {
            obkkk.forEach(function (object, key) {
                canvas.remove(object);
            });
            canvas.discardActiveObject()

        }


        canvas.renderAll();

        setTimeout(function ww() {
            var items = canvas.getObjects()
            var Array_sum
            var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

            for (i = 0; i < items.length; i++) {
                ArrTest[i] = parseInt(items[i]._element.alt)

            }
            Array_sum = SumData(ArrTest)
            $(".count").val(Array_sum + change_Array_sum)
        }, 500)
    }


})
var count22 = -1
var littlemoveleft = 0
var littlemovetop = 0
var start = 1
$('.change_btn').click(function () {

    var bgP = $('.img_box').css('backgroundSize')
    var jj = bgP.slice(5, 15)

    var jdj = stagenum / (parseInt(jj) / 7)

    var o = (jdj % 7)
    if (Math.sign(stagenum) == -1) {
        o = o + 7
        if (o == 7) {
            o = 0
        }
    }
    console.log(o)
    o = Math.round(o)
    switch (o) {
        case 0:
            o = 3
            break;
        case 1:
            o = 4
            break;
        case 2:
            o = 5
            break;
        case 3:
            o = 6
            break;
        case 4:
            o = 0
            break;
        case 5:
            o = 1
            break;
        case 6:
            o = 2
            break;
        default:
            console.log('Sorry');
    }

    // if(o==5)
    console.log(o)

    var r = /^\+?[1-9][0-9]*$/

    var numnum = 0
    var numnum1 = 0
    var numnum2 = 0
    var numnum3 = 0
    var numnum4 = 0
    var numnum5 = 0
    var numnum6 = 0

    if (o == 0 && change_Array_sum > 0) {
        if (change_Array_sum / 1 <= 50) {
            count22 = -1
            numnum = -1
            if (o == 0) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10

            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_one
                imgEl_1.alt = '1'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_one').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_one').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: 1500 * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '1'
                    arr_one.push(image)
                    const om = 300

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }

                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0





                }
            }
            arrayOne = []
            arrayfive = []
            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []

        } else {
            alert(`兌換後最大數不得大於50，目前兌換區域總數為${change_Array_sum}，請去除${change_Array_sum - 50}後再兌換，或另外選擇兌換單位`)
        }
    }









    if (o == 6 && change_Array_sum > 0) {
        if (change_Array_sum / 5 <= 50 && r.test(change_Array_sum / 5)) {
            count22 = -1
            numnum = -1
            if (o == 6) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10

            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 5; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_five
                imgEl_1.alt = '5'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_five').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_five').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '5'
                    arr_one.push(image)
                    const om = 300

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {
                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0






















                }
            }

            arrayOne = []
            arrayfive = []
            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 5) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換`)

        } else {


            let remaining = change_Array_sum % 5

            change_Array_sum = change_Array_sum - change_Array_sum % 5

            count22 = -1
            numnum = -1
            if (o == 6) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10

            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 5; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_five
                imgEl_1.alt = '5'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_five').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_five').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '5'
                    arr_one.push(image)
                    const om = 300

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {
                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0



                }
            }



            arrayOne = arrayOne.splice(0, remaining)
            arrayfive = []
            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []


            // changeArray = changeArray.concat(arrayOne)
            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)
                pusharray(changeArray)
                change_Array_sum = SumData(stage)

            }, 200)

        }


    }









    if (o == 5 && change_Array_sum > 0) {
        if (change_Array_sum / 10 <= 50 && r.test(change_Array_sum / 10)) {
            count22 = -1
            numnum = -1
            if (o == 5) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 10; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_ten
                imgEl_1.alt = '10'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_ten').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_ten').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 10
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '10'
                    arr_one.push(image)
                    const om = 300

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }


                    changeArray = []
                    change_Array_sum = 0


                }
            }
            arrayOne = []
            arrayfive = []
            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 10) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換`)

        } else {

            let remaining = change_Array_sum % 10
            change_Array_sum = change_Array_sum - change_Array_sum % 10


            count22 = -1
            numnum = -1
            if (o == 5) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 10; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_ten
                imgEl_1.alt = '10'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_ten').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_ten').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 10
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '10'
                    arr_one.push(image)
                    const om = 300

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }


                    changeArray = []
                    change_Array_sum = 0


                }
            }




            // arrayOne = arrayOne.splice(0, remaining)

            let ch500 = remaining

            if ((ch500 - 5) >= 0 && arrayfive.length != 0) {
                for (i = 0; i < arrayfive.length; i++) {
                    ch500 = ch500 - 5
                    if ((ch500 - 5) < 0) {
                        arrayfive = arrayfive.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfive = []
            }

            if ((ch500 - 1) >= 0 && arrayOne.length != 0) {
                for (i = 0; i < arrayOne.length; i++) {
                    ch500 = ch500 - 1
                    if ((ch500 - 1) < 0) {
                        arrayOne = arrayOne.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayOne = []
            }


            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []



            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)
                changeArray = changeArray.concat(arrayfive)
                pusharray(changeArray)
                change_Array_sum = SumData(stage)



            }, 200)


        }










    }
    if (o == 4 && change_Array_sum > 0) {
        if (change_Array_sum / 50 <= 50 && r.test(change_Array_sum / 50)) {
            count22 = -1
            numnum = -1
            if (o == 4) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 50; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_fifty
                imgEl_1.alt = '50'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_fifty').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_fifty').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 50
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '50'
                    arr_one.push(image)
                    const om = 240

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0







                }
            }
            arrayOne = []
            arrayfive = []
            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 50) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換`)

        } else {

            let remaining = change_Array_sum % 50
            change_Array_sum = change_Array_sum - change_Array_sum % 50

            count22 = -1
            numnum = -1
            if (o == 4) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 50; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_fifty
                imgEl_1.alt = '50'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_fifty').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_fifty').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 50
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '50'
                    arr_one.push(image)
                    const om = 240

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0







                }
            }

            let ch500 = remaining

            if ((ch500 - 10) >= 0 && arrayten.length != 0) {
                for (i = 0; i < arrayten.length; i++) {
                    ch500 = ch500 - 10
                    if ((ch500 - 10) < 0) {
                        arrayten = arrayten.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayten = []
            }

            if ((ch500 - 5) >= 0 && arrayfive.length != 0) {
                for (i = 0; i < arrayfive.length; i++) {
                    ch500 = ch500 - 5
                    if ((ch500 - 5) < 0) {
                        arrayfive = arrayfive.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfive = []
            }

            if ((ch500 - 1) >= 0 && arrayOne.length != 0) {
                for (i = 0; i < arrayOne.length; i++) {
                    ch500 = ch500 - 1
                    if ((ch500 - 1) < 0) {
                        arrayOne = arrayOne.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayOne = []
            }





            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []



            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)
                changeArray = changeArray.concat(arrayfive)
                changeArray = changeArray.concat(arrayten)

                pusharray(changeArray)
                change_Array_sum = SumData(stage)



            }, 200)

        }


































    }



    if (o == 3 && change_Array_sum > 0) {
        if (change_Array_sum / 100 <= 50 && r.test(change_Array_sum / 100)) {
            count22 = -1
            numnum = -1
            if (o == 3) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 100; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_hun
                imgEl_1.alt = '100'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_hun').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_hun').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 100
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '100'
                    arr_one.push(image)
                    const om = 150

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0







                }
            }
            arrayOne = []
            arrayfive = []
            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 100) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換`)
        } else {
            let remaining = change_Array_sum % 100
            change_Array_sum = change_Array_sum - change_Array_sum % 100
            count22 = -1
            numnum = -1
            if (o == 3) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 100; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_hun
                imgEl_1.alt = '100'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_hun').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_hun').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 100
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '100'
                    arr_one.push(image)
                    const om = 150

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0







                }
            }

            let ch500 = remaining
            if ((ch500 - 50) >= 0 && arrayfifty.length != 0) {
                for (i = 0; i < arrayfifty.length; i++) {
                    ch500 = ch500 - 50
                    if ((ch500 - 50) < 0) {
                        arrayfifty = arrayfifty.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfifty = []
            }

            if ((ch500 - 10) >= 0 && arrayten.length != 0) {
                for (i = 0; i < arrayten.length; i++) {
                    ch500 = ch500 - 10
                    if ((ch500 - 10) < 0) {
                        arrayten = arrayten.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayten = []
            }

            if ((ch500 - 5) >= 0 && arrayfive.length != 0) {
                for (i = 0; i < arrayfive.length; i++) {
                    ch500 = ch500 - 5
                    if ((ch500 - 5) < 0) {
                        arrayfive = arrayfive.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfive = []
            }

            if ((ch500 - 1) >= 0 && arrayOne.length != 0) {
                for (i = 0; i < arrayOne.length; i++) {
                    ch500 = ch500 - 1
                    if ((ch500 - 1) < 0) {
                        arrayOne = arrayOne.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayOne = []
            }


            arrayhun = []
            arrayfivehun = []
            arrayths = []

            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)
                changeArray = changeArray.concat(arrayfive)
                changeArray = changeArray.concat(arrayten)
                changeArray = changeArray.concat(arrayfifty)

                pusharray(changeArray)
                change_Array_sum = SumData(stage)



            }, 200)

        }




    }







    if (o == 2 && change_Array_sum > 0) {
        if (change_Array_sum / 500 <= 50 && r.test(change_Array_sum / 500)) {
            count22 = -1
            numnum = -1
            if (o == 2) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 500; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_fiftyhun
                imgEl_1.alt = '500'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_fivehun').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_fivehun').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 500
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '500'
                    arr_one.push(image)
                    const om = 150

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0







                }
            }
            arrayOne = []
            arrayfive = []
            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 500) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換`)
        } else {
            let remaining = change_Array_sum % 500
            change_Array_sum = change_Array_sum - change_Array_sum % 500

            count22 = -1
            numnum = -1
            if (o == 2) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 500; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_fiftyhun
                imgEl_1.alt = '500'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_fivehun').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_fivehun').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 500
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '500'
                    arr_one.push(image)
                    const om = 150

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0







                }
            }


            let ch500 = remaining

            if ((ch500 - 100) >= 0 && arrayhun.length != 0) {
                for (i = 0; i < arrayhun.length; i++) {
                    ch500 = ch500 - 100
                    if ((ch500 - 100) < 0) {
                        arrayhun = arrayhun.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayhun = []
            }
            if ((ch500 - 50) >= 0 && arrayfifty.length != 0) {
                for (i = 0; i < arrayfifty.length; i++) {
                    ch500 = ch500 - 50
                    if ((ch500 - 50) < 0) {
                        arrayfifty = arrayfifty.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfifty = []
            }

            if ((ch500 - 10) >= 0 && arrayten.length != 0) {
                for (i = 0; i < arrayten.length; i++) {
                    ch500 = ch500 - 10
                    if ((ch500 - 10) < 0) {
                        arrayten = arrayten.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayten = []
            }

            if ((ch500 - 5) >= 0 && arrayfive.length != 0) {
                for (i = 0; i < arrayfive.length; i++) {
                    ch500 = ch500 - 5
                    if ((ch500 - 5) < 0) {
                        arrayfive = arrayfive.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfive = []
            }

            if ((ch500 - 1) >= 0 && arrayOne.length != 0) {
                for (i = 0; i < arrayOne.length; i++) {
                    ch500 = ch500 - 1
                    if ((ch500 - 1) < 0) {
                        arrayOne = arrayOne.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayOne = []
            }



            arrayfivehun = []
            arrayths = []




            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)
                changeArray = changeArray.concat(arrayfive)
                changeArray = changeArray.concat(arrayten)
                changeArray = changeArray.concat(arrayfifty)
                changeArray = changeArray.concat(arrayhun)

                pusharray(changeArray)
                change_Array_sum = SumData(stage)



            }, 200)
        }




    }










    if (o == 1 && change_Array_sum > 0) {
        if (change_Array_sum / 1000 <= 50 && r.test(change_Array_sum / 1000)) {
            count22 = -1
            numnum = -1
            if (o == 1) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 1000; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_thd
                imgEl_1.alt = '1000'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_thd').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_thd').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1000
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '1000'
                    arr_one.push(image)
                    const om = 150

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0







                }
            }
            arrayOne = []
            arrayfive = []
            arrayten = []
            arrayfifty = []
            arrayhun = []
            arrayfivehun = []
            arrayths = []
        } else if (Math.floor(change_Array_sum / 1000) > 50) {
            alert(`兌換後數值已大於50，請調整後再進行兌換`)
        } else {
            let remaining = change_Array_sum % 1000
            change_Array_sum = change_Array_sum - change_Array_sum % 1000


            count22 = -1
            numnum = -1
            if (o == 1) {
                count22 += 1
            }

            littlemoveleft += 10
            littlemovetop += 10
            if (littlemoveleft > 50) {
                littlemoveleft = 0
                littlemovetop = 0
            }

            var arr_one = new Array()
            for (i = 0; i < change_Array_sum / 1000; i++) {
                var s_1 = 0
                var s_1_1 = 0
                // var w = 0 
                const imgEl_1 = document.createElement('img')
                imgEl_1.src = src_thd
                imgEl_1.alt = '1000'

                imgEl_1.onload = (e) => {


                    const image = new fabric.Image(imgEl_1, {
                        width: e.target.naturalWidth,
                        height: e.target.naturalHeight,
                        scaleX: parseInt($('.img_thd').width()) / e.target.naturalWidth,
                        scaleY: parseInt($('.img_thd').height()) / e.target.naturalHeight,

                        top: 20 * sRSS,
                        left: (1500) * sRSS
                    })
                    canvas.add(image)

                    image.alt = 1000
                    image.set({
                        borderColor: '#01B0F1'
                    })



                    canvas.renderAll();


                    image._element.alt = '1000'
                    arr_one.push(image)
                    const om = 150

                    var nowchange1 = om / arr_one.length
                    for (i = 0; i < arr_one.length; i++) {
                        arr_one[i].left = (1500 + i * nowchange1) * sRSS
                    }
                    var maxWidthRed = 265 * sRSS
                    // for (i = 0; i < arr_one.length; i++) {
                    if (arr_one.length <= 5) {
                        s_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * numnum, {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (45 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 600 + s_1 * 5,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                        }

                    } else if (arr_one.length > 5 && arr_one.length <= 10) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 5), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (165 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }


                    } else if (arr_one.length > 10 && arr_one.length <= 15) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 10), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (285 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    } else if (arr_one.length > 15 && arr_one.length <= 20) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 15), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (405 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 20 && arr_one.length <= 25) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 20), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (525 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 25 && arr_one.length <= 30) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 25), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (645 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    else if (arr_one.length > 30 && arr_one.length <= 35) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 30), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (765 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }

                    else if (arr_one.length > 35 && arr_one.length <= 40) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 35), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (885 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 40 && arr_one.length <= 45) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 40), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1005 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }
                    else if (arr_one.length > 45 && arr_one.length <= 50) {
                        s_1_1 += 10
                        image.animate('top', 30 * sRSS + 112 * sRSS, {
                            duration: 300 + s_1,
                            onChange: canvas.renderAll.bind(canvas),

                            easing: fabric.util.ease.easeInOutExpo,
                            onComplete: function () {

                                gototheway(numnum)
                            }
                        })



                        function gototheway() {
                            numnum++
                            image.animate('top', 30 * sRSS + littlemovetop * sRSS + 112 * sRSS * (numnum - 45), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })
                            image.animate('left', (1125 * sRSS) + (maxWidthRed * count22) + (littlemoveleft * sRSS), {
                                duration: 800 + s_1,
                                onChange: canvas.renderAll.bind(canvas),

                                easing: fabric.util.ease.easeInOutExpo
                            })

                        }

                    }


                    canvas.discardActiveObject();


                    for (i = 0; i < changeArray.length; i++) {

                        canvas.remove(changeArray[i])

                    }



                    changeArray = []
                    change_Array_sum = 0







                }
            }




            let ch500 = remaining
            if ((ch500 - 500) >= 0 && arrayfivehun.length != 0) {
                for (i = 0; i < arrayfivehun.length; i++) {
                    ch500 = ch500 - 500
                    if ((ch500 - 500) < 0) {
                        arrayfivehun = arrayfivehun.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfivehun = []
            }
            if ((ch500 - 100) >= 0 && arrayhun.length != 0) {
                for (i = 0; i < arrayhun.length; i++) {
                    ch500 = ch500 - 100
                    if ((ch500 - 100) < 0) {
                        arrayhun = arrayhun.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayhun = []
            }
            if ((ch500 - 50) >= 0 && arrayfifty.length != 0) {
                for (i = 0; i < arrayfifty.length; i++) {
                    ch500 = ch500 - 50
                    if ((ch500 - 50) < 0) {
                        arrayfifty = arrayfifty.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfifty = []
            }

            if ((ch500 - 10) >= 0 && arrayten.length != 0) {
                for (i = 0; i < arrayten.length; i++) {
                    ch500 = ch500 - 10
                    if ((ch500 - 10) < 0) {
                        arrayten = arrayten.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayten = []
            }

            if ((ch500 - 5) >= 0 && arrayfive.length != 0) {
                for (i = 0; i < arrayfive.length; i++) {
                    ch500 = ch500 - 5
                    if ((ch500 - 5) < 0) {
                        arrayfive = arrayfive.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayfive = []
            }

            if ((ch500 - 1) >= 0 && arrayOne.length != 0) {
                for (i = 0; i < arrayOne.length; i++) {
                    ch500 = ch500 - 1
                    if ((ch500 - 1) < 0) {
                        arrayOne = arrayOne.splice(0, i + 1)
                        break
                    }
                }
            } else {
                arrayOne = []
            }



            arrayths = []
            setTimeout(function () {
                let stage = new Array()
                function pusharray(arr) {
                    for (i = 0; i < arr.length; i++) {
                        stage.push(parseInt(arr[i]._element.alt))
                    }
                }
                changeArray = []
                changeArray = changeArray.concat(arrayOne)
                changeArray = changeArray.concat(arrayfive)
                changeArray = changeArray.concat(arrayten)
                changeArray = changeArray.concat(arrayfifty)
                changeArray = changeArray.concat(arrayhun)
                changeArray = changeArray.concat(arrayfivehun)

                pusharray(changeArray)
                change_Array_sum = SumData(stage)



            }, 200)
        }




    }















})





var clickappend_1000 = 0
var clickrow_1000 = 0
var clicklittlemove_1000 = 0
var Count = 0;




$('.AddCube').click(function (e) {
    /*Count++;
    if(Count > 50){
        Count = 50;
        return;
    }*/
    console.log(e.target);
    let movingImage = e.target
    const image_qq = new fabric.Image(movingImage, {
        width: movingImage.naturalWidth,
        height: movingImage.naturalHeight,
        scaleX: movingImage.width / movingImage.naturalWidth,
        scaleY: movingImage.height / movingImage.naturalHeight,
        top: 40 * sRSS + 110 * clickappend_1000 * sRSS + clicklittlemove_1000 * sRSS,
        left: 40 * sRSS + clickrow_1000 * 270 * sRSS + clicklittlemove_1000 * sRSS,
        lockScalingFlip: true
    })
    image_qq.alt = 1
    image_qq.set({
        borderColor: '#01B0F1'
    })


    clickappend_1000++
    //直的超過多少
    if (clickappend_1000 == 8) {
        clickrow_1000++
        clickappend_1000 = 0
    }
    //橫的超過多少
    if (clickrow_1000 == 5) {
        clickrow_1000 = 0
        clicklittlemove_1000 += 10
    }
    if (clicklittlemove_1000 > 50) {
        clicklittlemove_1000 = 0
    }
    image_q.push(image_qq)

    canvas.add(image_qq)
    movingImage = ""
    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        //$(".count").val(Array_sum + change_Array_sum)

    }, 500)

})

//更改題目
function AddTopoc(Type) {
	if (NowType == Type) {
		return;
	}
	else {
		NowType = Type;
	}
	$(".TopicScroll").html('');
	NowIndex = 0;
	$(".TopicScroll").scrollTop(0);
	if (NowType == 0) {

		var str = '';
		IndexCount = BasisCount;
		for (let index = 1; index <= BasisCount; index++) {
			str += '<div><img src="./img/topic/small/基礎' + index + '.jpg"></div>';
		}
		//console.log(str);
		$(".TopicScroll").append(str);

	}
	else {
		var str = '';
		IndexCount = AdvancedCount;
		for (let index = 1; index <= AdvancedCount; index++) {
			str += '<div><img src="./img/topic/small/進階' + index + '.jpg"></div>';
		}
		$(".TopicScroll").append(str);
	}
	convertSizeALL('.Page_Home');
}
var IndexCount = 15;
var NowType = -1;
var BasisCount = 15;
var AdvancedCount = 34;

    AddTopoc(0);
