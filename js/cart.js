$(function(){
    if(localStorage.getItem("addCart")){
        var cartArr = JSON.parse(localStorage.getItem("addCart"))
        $.ajax({
            url: "../data/index.json",
            type: "get",
            dateType: "json",
            success: function(json){
                console.log(json);
                var domStr = ""
                $.each(cartArr,function(index,item){
                    $.each(json,function(ind,obj){
                        if(item.code === obj.code){
                            domStr += `
                            <li>
                                <img src="${obj.imgurl}" alt="">
                                <h3>${obj.title}</h3>
                                <p>${obj.price}</p>
                                <span>${item.num}</span>
                                <em code="${obj.code}">删除</em>
                            </li>
                            ` 
                        }
                    })
                })
                $('.list').html(domStr)
            }
        })
        // 商品移出购物车
    $('.list').on('click','li em',function (){
        // 删除该商品对应的li
        $(this).parent().remove()
  
        // 更新本地存储中的数据
        var code = $(this).attr('code') // 要删除商品的编号
        // 删除数组元素：pop()  unshift()  splice(index,1)
        $.each(cartArr,function (index,item){
          if (item.code === code) {
            cartArr.splice(index,1)
            return false
          }
        })
  
        // 判断购物车是否还有数据
        if (cartArr.length > 0) {
          // 更新本地数据
          localStorage.setItem('addCart',JSON.stringify(cartArr))
        } else {
          // 清除本地数据
          localStorage.removeItem('addCart')
          var nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据！</li>'
          $('.list').html(nodata)
        }
  
        alert('商品移出购物车成功！')
  
      })
    }else {// 没数据
        var nodata = '<li style="line-height: 70px; text-align: center;">购物车暂无数据！</li>'
        $('.list').html(nodata)
    } 
})
