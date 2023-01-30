$(document).ready(function () {

    $(".header .header-wrap .nav ul li").mouseover(function(){
        let list =$(this).index()
        $(".header .header-wrap .nav ul li").removeClass("on").eq(list).addClass("on")
    }).mouseout(function(){
        $(".header .header-wrap .nav ul li").removeClass("on")
    })


    const swiper2 = new Swiper(".main-banner",{
        autoplay:{
            delay:3000
        },
        loop:true,
        pagination: {
            el: ".swiper-pagination",
            dynamicBullets: true,
        },
    })
    
});