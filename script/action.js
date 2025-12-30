
let number = 0

$('.btn_next').click(function(){
    number = number + 1;

    if(number == 3){
        number = 0
    }

    $('.hero ul').css({marginLeft:-number*100+'%'});
    console.log(number);
})

$('.btn_prev').click(function(){
    number = number - 1;

    if(number == -1){
        number = 2
    }

    $('.hero ul').css({marginLeft:-number*100+'%'});
    console.log(number);
})


$('.hamburger').click(function(){
    $('header .gnb').toggleClass('on').css({display:'flex'})
    $('header .hamburger').toggleClass('on')
    $('.gnb')
    $('.gnb > li > a').click(function(e){
        if ($(window).width() <= 780) {
            e.preventDefault();

            $(this).parent().toggleClass('on').siblings().removeClass('on');
        }
    })
})