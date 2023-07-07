$(function(){
$('.search').click(function(){

    $('.searchform').toggle();

})

$('.btn_1').click(function(){

    $('.left_family').toggle();
    $('.btn_1').toggleClass('on');
    $('.right_family').hide();
    $('.btn_2').removeClass('on')
})
$('.btn_2').click(function(){

    $('.right_family').toggle();
    $('.btn_2').toggleClass('on')
    $('.left_family').hide();
    $('.btn_1').removeClass('on')
})
$('.btn_menu').click(function(){
    $('.allmenu_wrap').show();
})
$('.btn_close').click(function(){
    $('.allmenu_wrap').hide();
})

// 패밀리 사이트 버튼을 클릭했을 때
// 한 번은 - 또 한 번 클릭하면 +


    // 주메뉴에 마우스를 가져다 댈 때(mouse enter) 보이게 하고 마우스를 빼면(mouse leave) 안 보이게

$('.gnb>li').mouseenter(function(){
    $('.header_wrap').stop().animate({'height':340},300)
    $('.gnb .depth2').stop().slideDown(300)

})
$('.header_wrap').mouseleave(function(){
    $('.header_wrap').stop().animate({'height':70},300)
    $('.gnb .depth2').stop().slideUp(300)
})


// 제목
// 문단
// 영상

let video_tit = ['D TOWER','Canakkale 1915 Bridge','Petrochemical Plant']
let video_p = ['도시를 개발하다','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.']
let video_url = ['https://www.youtube.com/embed/lAJ3SGjbdr4','https://www.youtube.com/embed/vM8b0CZd2Ww','https://www.youtube.com/embed/gehtA1gfXPc']

$('.list li').click(function(){
    console.log('클릭')
    let num = $(this).index()
    console.log(num)
    $('.modal_wrap').fadeIn()
    $('.tit h2').text(video_tit[num])
    $('.tit p').text(video_p[num])
    $('.tit iframe').attr('src',video_url[num])


    $('.btn').click(function(){
        $('.modal_wrap').fadeOut() 
    })

    $('.btn_list .prev').click(function(){
        
        if(num == 0){
            num = 2;

        }else{
            num--
        }
        $('.tit h2').text(video_tit[num])
        $('.tit p').text(video_p[num])
        $('.tit iframe').attr('src',video_url[num])

    })
    $('.btn_list .next').click(function(){
        
        if(num == 2){
            num = 0;

        }else{
            num++
        }
        $('.tit h2').text(video_tit[num])
        $('.tit p').text(video_p[num])
        $('.tit iframe').attr('src',video_url[num])

    })

})













})
