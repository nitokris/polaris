export function LV() {
    let _btn = $("#video-btn")
    _btn.on('click', function () {
        if ($(this).hasClass("loadvideo")) {
            $(this).addClass("video-pause").removeClass("loadvideo").hide();

        }
    });
}