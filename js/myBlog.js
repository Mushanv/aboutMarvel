$(window).scroll(function (){
    if($(".navbar").offset().top>30){
        $("header").addClass("movenav");
    }else{
        $("header").removeClass("movenav");
    }
});
$(document).ready(function(){
    $("#zhankai").click(function(){
        if($(this).text()=="展开"){
            $(".hidecon").show();
            $(this).text("收起");
        }else{
            $(".hidecon").hide();
            $(this).text("展开");
        }
	});
});