//拿到数据
$(function(){
    $.ajax({
        url: "../data/index.json",
        type: "get",
        dataType: "json",
        success: function(json){
            console.log(json);
            //拿到数据
            var dom = ""
            $.each(json,function(index,item){
                dom = `
                <div class="addCart">
                    <div class="b-1">立即购买</div>
                    <div class="b-2" code = "${item.code}"><span class="iconfont">&#xe610;</span>加入购物车</div>
                    <div class="b-3">
                    <span class="iconfont">&#xe60b;</span>
                    <div>收藏</div>
                    </div>
                </div>
                `
            })
            //添加到页面上
              $(".rig-b").html(dom)
        }
    })
    //点击加入购物车,动态数据，通过事件委托来完成
    $(".rig-b").on("click",".addCart .b-2",function(){
        // alert(1)
        var code = $(this).attr("code")
        //判断是否之前存有数据
        if(localStorage.getItem("addCart")){//有数据
            //保存数据
            var cartArr = JSON.parse(localStorage.getItem("addCart"))
        }else{
            var cartArr = []
        }
        var hasGoods = false;
        if(cartArr.length > 0){
            $.each(cartArr,function(index,item){
                if(item.code === code){
                    item.num++;
                    hasGoods = true
                    return
                }
            })
        }
        if(!hasGoods){
            cartArr.push({code:code,num:1})
        }
        //更新本地数据
        localStorage.setItem("addCart",JSON.stringify(cartArr))
        //JSON.stringify() 方法用于将 JavaScript 值转换为 JSON 字符串
        alert("添加购物车成功")
    })
})