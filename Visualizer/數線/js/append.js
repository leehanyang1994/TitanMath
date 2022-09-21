var thd_number


var thdcount = -1




var thdlittlemove = 0


var numnum = 0
var numnum1 = 0


var keydownblur = 0


$('body').keydown(function (event) {
    if (event.which == 13 && $('.count').is(":focus")) {
        canvas.clear();
        keydownblur = 1

        idontknowwhatiwrite()
        $('.Number').val('')
        $('.count').blur()



    }
    if (event.which == 13 && !$('.count').is(":focus")) {

        appendmoney()

    }



})





function appendmoney() {
    thd_number = $('.Number').val().replace(/[^0-9]/ig, "");

    console.log(thd_number)


    numnum = -1
    if (thd_number != "") {
        thdcount += 1
    }
   /* if (thdcount > 4.2) {
        thdcount = 0
        thdlittlemove += 50
    }
    if (thdlittlemove > 150) {
        thdlittlemove = 0
    }*/

    var arr_one = new Array()
    $('.Number').val("");
    for (i = 0; i < thd_number; i++) {
        $('.AddCube').click();
        /*var s_1 = 0
        var s_1_1 = 0
        const imgEl_1 = document.createElement('img')
        imgEl_1.src = src_thd
        imgEl_1.alt = '1000'

        imgEl_1.onload = (e) => {


            const image = new fabric.Image(imgEl_1, {
                width: e.target.naturalWidth,
                height: e.target.naturalHeight,
                scaleX: parseInt($('.AddCube').width()) / e.target.naturalWidth,
                scaleY: parseInt($('.AddCube').height()) / e.target.naturalHeight,

                top: 650 * sRSS,
                left: 0 * sRSS
            })
            canvas.add(image)

            image.alt = 1
            image.set({
                borderColor: '#01B0F1'
            })



            canvas.renderAll();


            image._element.alt = '1000'
            arr_one.push(image)

            var maxWidthRed = 20 * sRSS
            var maxTOP = 20 * sRSS
            numnum++
            if (arr_one.length <= 5) {
                s_1 += 10


                image.animate('top', 30 * sRSS + (maxTOP * thdcount) + 110 * sRSS * numnum, {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (10 * sRSS) + (maxWidthRed * thdcount) + (thdlittlemove * sRSS), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
            } else if (arr_one.length > 5 && arr_one.length <= 10) {
                s_1_1 += 10


                image.animate('top', 30 * sRSS + (maxTOP * thdcount) + 110 * sRSS * (numnum - 5), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })
                image.animate('left', (50 * sRSS) + (maxWidthRed * thdcount) + (thdlittlemove * sRSS), {
                    duration: 800 + s_1,
                    onChange: canvas.renderAll.bind(canvas),

                    easing: fabric.util.ease.easeInOutExpo
                })

            }
        }*/
    }

    setTimeout(function ww() {
        var items = canvas.getObjects()
        var Array_sum
        var ArrTest = new Array();　// 宣告一個新的陣列為 ArrTest

        for (i = 0; i < items.length; i++) {
            ArrTest[i] = parseInt(items[i]._element.alt)

        }
        Array_sum = SumData(ArrTest)
        $(".count").val(Array_sum+ change_Array_sum)
    }, 500)


}