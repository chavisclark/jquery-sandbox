function updateOutput() {
  $("iframe").contents().find("html").html(
    "<html><head><style type='text/css'>" + 
    $("#cssBody").val() + "</style></head><body>" + 
    $("#htmlBody").val() + "</body></html>"
    );
}
///Toggle highlight function
$(".toggleButton").hover(function() {
  $(this).addClass("highlightedButton")
}, function() {
  $(this).removeClass("highlightedButton")
});

///Toggle active panel function
$(".toggleButton").click(function() {
  var panelId = $(this).attr("id") + "Panel";

  $(this).toggleClass("active");
  $(this).removeClass("highlightedButton");
  $("#" + panelId).toggleClass("hidden");

  numberOfActivePanels = 4 - $('.hidden').length;
  $(".panelBody").width(($(window).width() / numberOfActivePanels ) - 10);
});

var numberOfActivePanels = 4 - $('.hidden').length;
$(".panelBody").width(($(window).width() / numberOfActivePanels ) - 10);

/// Set height of bodyContainer and margins
var headerHeight = $("#header").height() * 1.4;
$("#bodyContainer").css('top', headerHeight + "px");
$(".panel > span").css('margin-top', headerHeight + "px");
$("#bodyContainer").height($(window).height() - (headerHeight * 3.2) );

updateOutput();


///Handle events on textarea elements
$("textarea").on('change keyup paste', function() {
  updateOutput();
});

$("textarea").on('blur', function() {
  document.getElementById("outputBody").contentWindow.eval($("#javascriptBody").val());
});