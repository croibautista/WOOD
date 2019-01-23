$(document).ready(function() {
  $('[data-toggle="popover"]').popover();

  //Hide popover when clicking outside
  $(document).on('click', function(e) {
    $('[data-toggle="popover"],[data-original-title]').each(function() {
      //the 'is' for buttons that trigger popups
      //the 'has' for icons within a button that triggers a popup
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        (($(this).popover('hide').data('bs.popover') || {}).inState || {}).click = false // fix for BS 3.3.6
      }

    });
  });

});




// Date Range
var start = 1984;
var end = new Date().getFullYear();
var options = "";
for (var year = start; year <= end; year++) {
  options += "<option>" + year + "</option>";
}
var start2 = 2018;
var end2 = new Date().getFullYear();
var options2 = "";
for (var year2 = start2; year2 <= end2; year2++) {
  options2 += "<option>" + year2 + "</option>";
}

document.getElementById("year").innerHTML = options;
document.getElementById("year2").innerHTML = options2;

//   $(".dropdown-menu li a").click(function(){
//   $(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
//   $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
// });



$(function(){
  $('#myDropdown').popover({
     
      placement: 'bottom',
      html:true,
      template: '<div class="popover"><div class="arrow"></div><div class="popover-content"></div>',
      content:  $('#myForm').html()
  }).on('click', function(){
    // had to put it within the on click action so it grabs the correct info on submit
    // $('#myForm').popover('show');
})
})


// pop-over events
$('#myDropdown').on('show.bs.popover', function () {
  // do something…
  console.log("aaaaaa")
}).on('shown.bs.popover', function () {
  console.log("bbbbbbb")
}).on('hide.bs.popover', function () {
  console.log("cccccc")
}).on('hidden.bs.popover', function () {
  console.log("dddddd")
})

