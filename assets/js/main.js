$(document).ready(function () {
    $(".icon").click(function() {
        $(this).toggleClass('active');
        $(".navbar").toggleClass("active");
    });
});