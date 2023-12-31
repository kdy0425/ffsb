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
$(document).ready(function () {
    var activeItem = null;
    var sectionOffsets = {};

    // 메인 퀵메뉴
    $('.item a').each(function () {
        var targetId = $(this).data('rel');
        var targetElement = $('#' + targetId);
        if (targetElement.length > 0) {
            sectionOffsets[targetId] = targetElement.offset().top;
        }
    });

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var scrollThreshold = windowHeight / 5; 

        var clickedItem = null;
        for (var targetId in sectionOffsets) {
            var targetOffset = sectionOffsets[targetId];
            if (scrollPos + scrollThreshold >= targetOffset && scrollPos - scrollThreshold < targetOffset) {
                clickedItem = $('.item a[data-rel="' + targetId + '"]');
            }
        }
        if (scrollPos <= sectionOffsets["section_01"] + scrollThreshold && activeItem) {
            $('.item a').removeClass('active');
            activeItem = null;
        }
        if (scrollPos <= sectionOffsets["section_01"] + scrollThreshold) {
            $('.item a[data-rel="section_01"]').addClass('active');
            activeItem = $('.item a[data-rel="section_01"]');
        } else {
            if (clickedItem) {
                if (activeItem !== clickedItem) {
                    $('.item a').removeClass('active');
                    clickedItem.addClass('active');
                    activeItem = clickedItem;
                }
            }
        }
    });

    // 클릭 이벤트
    $('.item a').click(function () {
        var targetId = $(this).data('rel');
        if (targetId == 'section_01') {
            var targetOffset = sectionOffsets[targetId];
        } else {
            var targetOffset = sectionOffsets[targetId] + 60;
        }

        $('.item a').removeClass('active');
        $(this).addClass('active');
        activeItem = this;

        $('html, body').animate(
            {
                scrollTop: targetOffset,
            },
            500 
        );
    });
});