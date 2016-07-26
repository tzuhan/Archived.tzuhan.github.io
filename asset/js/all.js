var offset=300, offset_opcaity=1200, scroll_top_duration=700;
var width = $(window).width();
var height = $(window).height();
var x_red, x_blue, x_orange, x_white;



/*redefine positions and variables when window resize*/
$(window).resize(function() {
    reposition();
});


/*redefine positions and variables when window scroll*/
$(window).scroll(function() {
    reposition();
});

/*redefine position and variables when window opens*/
$(document).ready(function(){
    reposition();
});

/*Navigation bar animation*/
$("ul.navbar-nav > li").click(function(e) {
    $("ul.navbar-nav > li.active").removeClass("active");
    var $nav_tab = $(this);
    if(!$nav_tab.hasClass("active")){
        $nav_tab.addClass("active");
    }
});


/*Reposition function*/
function reposition(){
    width = $(window).width();
    height = $(window).height();

    //resize wave images position
    $('.wave-white').offset({top:2*height-200});

    $('.wave-orange').offset({top:2*height-225});

    $('.wave-blue').offset({top:2*height-250});

    $('.wave-red').offset({top:2*height-275});
};
/*//////////////////////////*/
/*Whale animation*/
/*//////////////////////////*/
//HTML5
/*
DrawWhale();

function DrawWhale(){
    var canvas = $('.whale-mask');
    var context = canvas.getContext("2d");
    var mask_img = document.createElement('IMG');
    var bg_img = document.createElement('IMG');
    var line_img = document.createElement('IMG');

    //if web:
    mask_img.src = "../img/web/whale-mask.png";
    bg_img.src = "../img/web/whale-bg.png";
    line_img.src = "../img/web/whale-line.png"

    DrawMaskImage();

    function DrawMaskImage(){
        context.save();
    };
};
*/
