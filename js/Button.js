function BtnActive() {
    $('#index-log').hover(function () {
        $('#index-log > p').attr("box-shadow","3px -3px 3px #999 inset")
    })
    $('.btn-1').hover(function () {
        $('.btn-1 img').attr({
            src: "images/按钮1-2.png"
        });
        $('.btn-1 img').animate({
            width:'+=10px',
            top: '-=5px'
        },'fast')
    },function () {
        $('.btn-1 img').attr({
            src: "images/按钮1-1.png"
        })
        $('.btn-1 img').animate({
            top: '+=5px',
            width:'-=10px'
        })
    });
    $('.btn-2').hover(function () {
        $('.btn-2 img').attr({
            src: "images/按钮2-2.png"
        });
        $('.btn-2 img').animate({
            width:'+=10px',
            left: '-=5px'
        },'fast')
    },function () {
        $('.btn-2 img').attr({
            src: "images/按钮2-1.png"
        });
        $('.btn-2 img').animate({
            width:'-=10px',
            left: '+=5px'
        })
    });
    $('.btn-3').hover(function () {
        $('.btn-3 img').attr({
            src: "images/按钮3-2.png"
        })
        $('.btn-3 img').animate({
            width:'+=10px',
            top: '-=5px',
            right: '+=10px'
        },'fast')
    },function () {
        $('.btn-3 img').attr({
            src: "images/按钮3-1.png"
        });
        $('.btn-3 img').animate({
            width:'-=10px',
            top: '+=5px',
            right: '-=10px'
        })
    })
    $('.btn-4').hover(function () {
        $('.btn-4 img').attr({
            src: "images/按钮4-2.png"
        });
        $('.btn-4 img').animate({
            width:'+=10px',
            left: '-=5px',
            top: '-=10px'
        },'fast')
    },function () {
        $('.btn-4 img').attr({
            src: "images/按钮4-1.png"
        });
        $('.btn-4 img').animate({
            width:'-=10px',
            left: '+=5px',
            top: '+=10px'
        })
    })
}
BtnActive();