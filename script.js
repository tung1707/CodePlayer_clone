function updateOutput()//run html,css code in iframe
{
    $("iframe").contents().find("html").html("<html><head><style>" + $("#cssPanel").val() + "</style></head><body>" + $("#htmlPanel").val() + "</body></html>")
    document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val())//run js song song voi html,css
}

$(".toggleButton").hover(function () //khi togglebutton hover
    {
        $(this).addClass("highlightedButton")
    }, function () {
        $(this).removeClass("highlightedButton")//highlightButton khi hover
    })

$(".toggleButton").click(function ()//khi togglebutton click
{
    $(this).toggleClass("active")
    $(this).removeClass("highlightedButton")
    var panelId = $(this).attr("id") + "Panel"
    $("#" + panelId).toggleClass("hidden")
    var numberOfActivePanels = 4 - $('.hidden').length
    $(".panel").width(($(window).width() / numberOfActivePanels) - 10)
})

$(".panel").height($(window).height() - $("#header").height() - 15)//take window height
$(".panel").width(($(window).width() / 2) - 10)
updateOutput()
$("textarea").on('change keyup paste', function ()//update cung luc html va output khong reload
{
    updateOutput()
});
