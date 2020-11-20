
//进度条
export function progressBar() {
    if (document.body.clientWidth > 860) {
        $(window).scroll(function () {
            var s = $(window).scrollTop(),
                a = $(document).height(),
                b = $(window).height(),
                result = parseInt(s / (a - b) * 100),
                cached = $("#progressBar");
            cached.css("width", result + "%");
            cached.css("background", "orange");
        });
    }
}