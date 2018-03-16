$(document).ready(function() {
  $('select').niceSelect();
});


$(document).ready(function(){
  $('form input').change(function () {
    $('form p').text(this.files.length + " file(s) selected");
  });
});


//Custom Radio & Checkbox Button
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Initialize popover component
$(function () {
  $('[data-toggle="popover"]').popover()
})
