//拿到商品信息
$(function () {
    //拿到商品列表信息
    $.ajax({
        url: "../data/index.json",
        type: "get",
        dataType: "json",
        success: function (json) {//拿到json数据
            console.log(json);
            var listdom = "";
<<<<<<< HEAD
            $.each(json,function (index, item) {
                //动态创建元素
                listdom += `
                <li>
                    <div class="li-one">
                        <a href=""><img src="${item.imgurl}" alt=""></a>
                        </div>
                        <div class="li-two">
                        <h4><a href="">${item.title}</a></h4>
                        <span>${item.price}</span>
                    </div>
                </li>
                `
            })
            $(".lilili").html(listdom)
        }
    })
    
=======
            $.each(function (index, item) {
                //动态创建元素
                listdom = `
                <div class="swiper-slide swiper-text">
                    <ul>
                        <li class="lili">
                            <div class="li-one">
                                <a href=""><img src="${item.imgurl}" alt=""></a>
                                </div>
                                <div class="li-two">
                                <h4><a href="">${item.title}</a></h4>
                                <span>${item.price}</span>
                            </div>
                        </li>        
                    </ul>
                </div>
                `
            })
        } 
    })
    $(".swiper .swiper-box").html(listdom)
>>>>>>> 621e6d5d9d941cbb77c02af72512db1e5c0969fe
})