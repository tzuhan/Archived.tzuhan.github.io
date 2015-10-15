var offset=300, offset_opcaity=1200, scroll_top_duration=700;
var width = $(window).width();
var height = $(window).height();
var x_red, x_blue, x_orange, x_white;



/*redefine positions and variables when window resize*/
$(window).resize(function() {
    width = $(window).width();
    height = $(window).height();

    //resize wave images position
    $('.wave-white').offset({top:height-200});

    $('.wave-orange').offset({top:height-225});

    $('.wave-blue').offset({top:height-250});

    $('.wave-red').offset({top:height-275});
});

/*Redefine positions and variables when window scroll*/
$(window).scroll(function() {
    width = $(window).width();
    height = $(window).height();

    //resize wave images position
    $('.wave-white').offset({top:height-200});

    $('.wave-orange').offset({top:height-225});

    $('.wave-blue').offset({top:height-250});

    $('.wave-red').offset({top:height-275});
});

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