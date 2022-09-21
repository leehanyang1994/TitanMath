jQuery(document).ready(function ($) {
    // x 10工具
	var click = {
		x: 0,
		y: 0
	};
	$(".toolLeft").mouseup(function (event) {	 
		LeftToolCount++;
		var div = '<div class="Left" id="Left'+LeftToolCount+'"> '
	                   +'<img class="dragLeft" src="./img/tool_drag.png" >'
				       +'<div style="display: inline-block;">'
				          +'<img class="Showimg" src="./img/arrow/L10.png" >'
				       +'</div></div>'
		$(NowPage).append(div);
		convertSizeALL(NowPage);

		$(".Left").draggable({
			connectToSortable: ".toolbar",
			scroll: true, scrollSensitivity: 100,
			start: function(event) {
				click.x = event.clientX;
				click.y = event.clientY;
			},
			drag: function (event, ui) {
				var zoom = parseFloat($('body').css('transform').match(/matrix\(\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*)\)/)[1]);
				var original = ui.originalPosition;
				ui.position = {
					left: (event.clientX - click.x + original.left) / zoom,
					top:  (event.clientY - click.y + original.top ) / zoom
				};
			},
			stop: function (event, ui) {
				if(ui.offset.top *sRatio> $(".toolbar").offset().top ){
					console.log(ui.offset.top );
					$(this).remove();

				}
			}

		});
		$(".Left").click(function (event) {	 
			event.stopPropagation();
			$(".dragLeft").hide();
			$(".dragRight").hide();
			$(this).children(".dragLeft").show();
		});
		$(".dragLeft").draggable({	
			axis: "x" ,
			scroll: true, scrollSensitivity: 100,
			start: function (event, ui) {
				click.x = event.clientX;
				click.y = event.clientY;
				dragStart = ui.offset.left;
				StartImgW = $(this).parent().children("div").children(".Showimg").outerWidth() *sRatio;
				console.log(StartImgW);
				$(this).css("opacity", 0.3);
			},
			stop: function (event, ui) {
				var w = $(this).parent().children("div").children(".Showimg").outerWidth() ;
				//$(this).css("left",((1422 * sRatio)- w) +"px" );
				$(this).css("left",((1422 )- w) +"px" );
				$(this).css("left","" );
				$(this).css("opacity", 1);
			
				/*if( $(".toolbar").offset().top ){
		
				}*/
				
			},
			drag: function (event, ui) {
				var zoom = parseFloat($('body').css('transform').match(/matrix\(\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*)\)/)[1]);
				var original = ui.originalPosition;
				ui.position = {
					left: (event.clientX - click.x + original.left) / zoom,
					top:  (event.clientY - click.y + original.top ) / zoom
				};

				var w = $(this).parent().children("div").children(".Showimg").outerWidth();
				var nw = dragStart -ui.offset.left;
				var NowIndex = 0;
				SettingL.forEach(function(item,index){

					if(nw + StartImgW >= (item.W *sRatio )){
						NowIndex =index;
					}
				  });
				if($(this).parent().children("div").children(".Showimg").attr("src") != SettingL[NowIndex].img){
					$(this).parent().children("div").children(".Showimg").attr("src",SettingL[NowIndex].img);
					/*var t = SettingL[NowIndex].img.replace(".png","").replace("./img/","");
					$(this).parent().children("div").children(".Showtxt").text( "x "+t);*/
					convertSizeALL(NowPage);
				}
			},
			drop: function (event, ui) {
	
			}
		});
	});

    	// x 1/100 工具
	$(".toolRight").mouseup(function (event) {	 
		RightToolCount++;
		var div = '<div class="Right" id="Right'+RightToolCount+'"> '
	                   +'<img class="dragRight" src="./img/tool_drag.png" >'
				       +'<div style="display: inline-block;">'
				          +'<img class="Showimg ShowimgRight" src="./img/arrow/R10.png" >'
				       +'</div></div>'
		$(NowPage).append(div);
		convertSizeALL(NowPage);

		$(".Right").draggable({
			connectToSortable: ".toolbar",
			scroll: true, scrollSensitivity: 100,
			start: function(event) {
				click.x = event.clientX;
				click.y = event.clientY;
			},
			drag: function (event, ui) {
				var zoom = parseFloat($('body').css('transform').match(/matrix\(\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*)\)/)[1]);
				var original = ui.originalPosition;
				ui.position = {
					left: (event.clientX - click.x + original.left) / zoom,
					top:  (event.clientY - click.y + original.top ) / zoom
				};
			},
			stop: function (event, ui) {
				if(ui.offset.top *sRatio > $(".toolbar").offset().top ){
					console.log(ui.offset.top );
					$(this).remove();
				}
			}
		});

		$(".Right").click(function (event) {	 
			event.stopPropagation()
			$(".dragLeft").hide();
			$(".dragRight").hide();
			$(this).children(".dragRight").show();
		});

		$(".dragRight").draggable({	
			axis: "x" ,
			scroll: true, scrollSensitivity: 100,
			start: function (event, ui) {
				click.x = event.clientX;
				click.y = event.clientY;
				dragStart = ui.offset.left;
				StartImgW = $(this).parent().children("div").children(".Showimg").outerWidth() *sRatio;
				console.log(dragStart);
				console.log(StartImgW);
				$(this).css("opacity", 0.3);
			},
			stop: function (event, ui) {
				var w = $(this).parent().children("div").children(".Showimg").outerWidth() ;
				//$(this).css("left",w - (18 * sRatio) +"px" );
				$(this).css("left",w - (18 ) +"px" );
				$(this).css("opacity", 1);
			},
			drag: function (event, ui) {
				var zoom = parseFloat($('body').css('transform').match(/matrix\(\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*),\s*(-?\d*\.?\d*)\)/)[1]);
				var original = ui.originalPosition;
				ui.position = {
					left: (event.clientX - click.x + original.left) / zoom,
					top:  (event.clientY - click.y + original.top ) / zoom
				};
				
				var w = $(this).parent().children("div").children(".Showimg").outerWidth();
	
				var nw = ui.offset.left - dragStart;
				console.log(nw);
				var NowIndex = 0;
	
				SettingR.forEach(function(item,index){
					if(nw + StartImgW >= (item.W * sRatio) ){
						NowIndex =index;
					}
				  });
				if($(this).parent().children("div").children(".Showimg").attr("src") != SettingR[NowIndex].img){
					$(this).parent().children("div").children(".Showimg").attr("src",SettingR[NowIndex].img);
					/*var t = Setting[NowIndex].img.replace(".png","").replace("./img/","");
					$(this).parent().children("div").children(".Showtxt").text( "x 1/"+t );*/
					convertSizeALL(NowPage);
				}
			},
			drop: function (event, ui) {
	
			}
		});
	});
    //移除工具
    $( ".toolbar" ).sortable({
		items :"xxx",  
		stop: function( event, ui ) {
			$("#"+ $(ui.item).attr("id") ).remove();
		}
	  }).disableSelection();
})
