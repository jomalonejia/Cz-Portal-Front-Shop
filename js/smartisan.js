$(document).ready(function() {
    $(".image li:eq(0)").show();
    var num = 0;
    $(".anniu li").click(function() {
        num = $(this).index();
        $(".image li:eq(" + num + ")").show();
        $(".image li:eq(" + num + ")").siblings().hide();
    })

    var automatic = setInterval(function() {
        num++;
        num = num % 2;
        $(".image li:eq(" + num + ")").show();
        $(".image li:eq(" + num + ")").siblings().hide();
    }, 5000);
    $(".app1").mouseenter(function() {
            $(this).hide();
            $(this).next().show();
        })
    $(".app2").mouseleave(function() {
            $(this).hide();
            $(this).prev().show();
        });
})