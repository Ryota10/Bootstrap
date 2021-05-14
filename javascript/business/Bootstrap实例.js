$(function () {
    setScroll()
    setCarousel();
    setDropDownCon();
})

//刷新页面时强制滚动条回到顶部
function setScroll() {
    $(this).on('beforeunload', function () {
        $(this).scrollTop(0);
    });
}

//设置轮播事件
function setCarousel() {
    $(".carousel").carousel({
        interval: 3000,
        pause: null,
        wrap: true
    })
}

//设置 nav——标签页 下拉框联动
function setDropDownCon() {
    $("#about-nav>li>a").click(function (e) {
        e.preventDefault();
        var $href = $(this).attr("href");
        $("#self-tablist>li>a[href=" + $href + "]").tab('show');

        //滚动条定位到标签页
        $(document).scrollTop($("#self-bookmarkPage").offset().top);
    });
}