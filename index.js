/* Bootstrap 4 Youtube Modal */
$(document).ready(function () {
    var $videoSrc;
    $('.video-btn').click(function () {
        $videoSrc = $(this).data("src");
    });
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#videoBox").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0&amp;rel=0");
    });
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#videoBox").attr('src', $videoSrc);
    });
});