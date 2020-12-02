//ajax加载文章
export function XHL() {
    // opera 浏览器补丁
    let $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
    // console.log($body)
    //设置点击事件
    $('body').on('click', '#pagination a', function () {

        $(this).addClass("loading").text("");
        $.ajax({
            type: "POST",
            url: $(this).attr("href") + "#main",
            success: function (data) {
                result = $(data).find("#main .post");
                let nextHref = $(data).find("#pagination a").attr("href");
                // In the new content
                $("#main").append(result.fadeIn(500));
                $("#pagination a").removeClass("loading").text("Previous");
                if (nextHref != undefined) {
                    $("#pagination a").attr("href", nextHref);
                } else {
                    // If there is no link, that is the last page, then remove the navigation
                    $("#pagination").html("<span>Don't have more ...</span>");
                }
            }
        });
        return false;
    });
}