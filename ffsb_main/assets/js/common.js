//nav hover  header 디자인 효과
let bgHeight = 0;
$("#nav").hover(
    function () {
        $("#header").addClass("hover");
        $(".sc_form").hide();
        $(".info_ly").hide();
        if(bgHeight == 0){
            $('#nav .in_wrap').each(function(){
                if(bgHeight < $(this).outerHeight()){
                    bgHeight = $(this).outerHeight();
                }
            });
            $('.nav_bg').outerHeight(bgHeight + $('#header').outerHeight());
            $('#nav .in_wrap').outerHeight(bgHeight);
        }
    },
    function () {
        $("#header").removeClass("hover");
    }
);

$(".btn_search").click(function (event) {
    event.stopPropagation(); 
    $(".info_ly").hide();
    $(".sc_form").show();
});
$(".sc_close").click(function (event) {
    event.stopPropagation(); 
    $(".sc_form").hide();
});
$(document).click(function (event) {
    if ($(event.target).closest(".sc_form").length === 0) {
        if ($(".sc_form:visible").length > 0) {
            $(".sc_form").hide();
        }
    }
});

$(".btn_menuall").click(function (event) {
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $("#header").removeClass("all");
        $('.nav_all').hide();
    }else{
        $(this).addClass('active');
        $("#header").addClass("all");
        $('.nav_all').show();
    }
});
$(document).click(function (event) {
    if($(event.target).hasClass("btn_menuall")){
        return ;
    }
    if ($(event.target).closest(".nav_all").length === 0) {
        if ($(".nav_all:visible").length > 0) {
            $(".btn_menuall").removeClass("active");
            $("#header").removeClass("all");
            $(".nav_all").hide();
        }
    }
});

//totop
$(window).scroll(function () {
    var scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 100) {
        $("#to_top").css('opacity', '1')
    } else {
        $("#to_top").css('opacity', '0')
    }
});
$("#to_top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
});

//푸터 family sites
$(".family_sites_open").on("click", function(e) {
	e.stopPropagation();
	$(this).toggleClass("active");
	$(".sites").toggle();
});
$(document).on("click", function(event) {
	var $trigger = $(".family_sites");
	if($trigger !== event.target && !$trigger.has(event.target).length) {
		$(".family_sites_open").removeClass("active");
		$(".sites").hide();
	}    
});

//상단으로 버튼
$('.to_top').click(function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
});
