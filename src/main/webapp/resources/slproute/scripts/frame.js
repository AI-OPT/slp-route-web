$(function(){
$(".wrapper-left ul li li").click(function () {
                $(".wrapper-left ul li li").each(function () {
                    $(this).removeClass("current");
                });
                $(this).removeClass("active");
            });
});

//导航右侧信息弹出
$(function(){
$(".msg").click(function () {
   $(".msg-cnt").animate({right:'0'},200);
});
});

$(function(){
$(".p a").click(function () {
   $(".msg-cnt").animate({right:'-280px'},200);
});
});
//导航右侧信息弹出结束

//table切换
$(function(){
$(".pst-table ul li a").click(function () {
                $(".pst-table ul li a").each(function () {
                    $(this).removeClass("current");
                });
                $(this).addClass("current");
            });
$('.pst-table ul li a').click(function(){
  var index=$('.pst-table ul li a').index(this);
      if(index==0){
     $('#date1').show();
  $('#date2').hide();
   }
   if(index==1){
     $('#date2').show();
  $('#date1').hide();
   }
  }); 
});
//table切换结束

//点击展开
$(document).ready(function(){
  $(".nav-form ul li .sos a").click(function () {
	  $(".open ").slideToggle(100);
	  $(".nav-form ").toggleClass("reorder remove");
	  });
});
//点击结束


			
//点击展开
$(function () {
    var st = 100;
    $('.group-ly a').click(function () {
		$(this).toggleClass("imga imgb");
		$(this).parent().parent().parent().parent().children('.group-list').slideToggle();
    });
});

//点击结束			

//已选中关闭
$(function(){
$(".nav-form .close1").click(function () {
	$(this).parent('.choice').hide();
	});
	});
	
//已选中关闭
$(function(){
$(".right-topnav .dclose").click(function () {
	$(".right-topnav").hide(300)
	});
	});
	
//table 点击展开
$(function () {
    $(".nav-tplist-table-none table tr .click a").click(function () {
		$(this).children('i').toggleClass("icon-minus icon-plus");
		$(this).parent().parent().parent().parent().parent().parent().parent().children('.zhank').slideToggle(100);
    });
});	
			