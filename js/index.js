//swipper 轮播图部分
var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

//吸顶效果
var newBox = document.querySelector(".new")
var xiding = document.querySelector(".xiding-l")
window.onscroll = function(){
  var stop = document.documentElement.scrollTop
  if(stop >= 595){
    xiding.style.position = "fixed"
    xiding.style.top = 0
  }
  if(stop < 595){
    xiding.style.position = "absolute"
    xiding.style.position = 0
  }
}

// 点击时出现登录页面和遮挡层
var gotoA = document.querySelector(".header .header-box .head-right .list .gotoA")
var goto = document.querySelector(".goto")
// var body = document.querySelector("body")
var mask = document.querySelector(".mask")
//关闭登录页面
var x = document.querySelector(".goto .x")
gotoA.onclick = function(){
  // alert(1)
  mask.style.display = "block"

  goto.style.display = "block";
  goto.style.position = "fixed";
  goto.style.top = "168px";
  goto.style.left = "50%";
  goto.style.transform = "translate(-50%, -50%)"
  goto.style.zIndex = 1090
}
x.onclick = function(){
  // alert(1)
  goto.style.display = "none";
  mask.style.display = "none"
} 

