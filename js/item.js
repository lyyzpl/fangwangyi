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


//放大镜效果
var minBox = document.querySelector(".text .text-box .text-bottom .text-lef .lef-t")
var maskImg = document.querySelector(".text .text-box .text-bottom .text-lef .lef-t .mask-img")
var maxBox = document.querySelector(".text .text-box .text-bottom .text-rig .move")
var maxImg = document.querySelector(".text .text-box .text-bottom .text-rig .move img")
//鼠标移动时
minBox.onmousemove = function (ev){
    var e = ev || event
    // 计算msk的定位坐标
    var maskLeft = e.clientX - offset(minBox).left - maskImg.clientWidth/2
    var maskTop = e.clientY - offset(minBox).top - maskImg.clientHeight/2
    // console.log(e.clientX);
    // console.log(minBox.clientX);
    // console.log(maskImg.clientWidth);
    // 限制mask移动范围
    if (maskLeft < 0) {
      maskLeft = 0
    }
    if (maskLeft >= (minBox.clientWidth-maskImg.clientWidth)) {
      maskLeft = minBox.clientWidth-maskImg.clientWidth
    }
    if (maskTop < 0) {
      maskTop = 0
    }
    if (maskTop >= (minBox.clientHeight-maskImg.clientHeight)) {
      maskTop = minBox.clientHeight-maskImg.clientHeight
    }
  
    maskImg.style.left = maskLeft + 'px'
    maskImg.style.top = maskTop + 'px'
  
    var scaleX = maskLeft/(minBox.clientWidth-maskImg.clientWidth)
    var scaleY = maskTop/(minBox.clientHeight-maskImg.clientHeight)
  
    // 大图也跟随移动
    maxImg.style.left = -scaleX*(maxImg.clientWidth-maxBox.clientWidth) + 'px'
    maxImg.style.top = -scaleY*(maxImg.clientHeight-maxBox.clientHeight) + 'px'
  }
  
  minBox.onmouseenter = function (){
    maskImg.style.display = 'block'
    maxBox.style.display = 'block'
  }
  minBox.onmouseleave = function (){
    maskImg.style.display = 'none'
    maxBox.style.display = 'none'
  }


//根据code跳转到对应的链接



