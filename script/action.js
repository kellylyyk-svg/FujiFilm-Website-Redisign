
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
    $('.gnb > li').removeClass('on')
    })

    $('.gnb > li > a').click(function(e){
        if ($(window).width() <= 780) {

            $(this).parent().toggleClass('on').siblings().removeClass('on');
        }
    })

    $('.lnb > li').click(function(){
        $(this).css({background:'#6BB4CF'}).siblings().css({background:'none'})
    })


$('.tag > a').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on').siblings().removeClass('on');
})


$(".section_nav li").click(function(e){
    e.preventDefault();
    const target = $("." + $(this).data("target"));

    $("html, body").animate({
        scrollTop: target.offset().top
    }, 600);
});







   $('.next_btn').click(function() {
    const $category = $('.category');
    const $firstItem = $category.find('li').first();

    // 1. 첫 번째 아이템에 페이드 아웃 효과 적용
    $firstItem.addClass('fade-out');

    // 2. 슬라이드 이동 (카드 너비 + 간격만큼)
    $category.animate({
        marginLeft: '-405px' 
    }, 500, function() {
        // 3. 애니메이션 완료 후 실행
        $firstItem.appendTo($category).removeClass('fade-out'); // 맨 뒤로 이동
        $category.css('margin-left', '0'); // 위치 리셋
        
        updateProgressBar(); // 막대 위치 업데이트
    });
});

// 프로그레스 바 막대 위치 제어 (순환형이므로 현재 순서 기준 계산)
let currentIdx = 0;
const total = $('.category li').length;

function updateProgressBar() {
    currentIdx = (currentIdx + 1) % total;
    const barWidth = 839;
    const thumbWidth = 195;
    const moveRange = barWidth - thumbWidth;
    
    let barPos = (currentIdx / (total - 1)) * moveRange;
    $('.slidebar').get(0).style.setProperty('--progress', `${barPos}px`);
}


    