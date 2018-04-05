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


$(function(){
  $('.moduleContent').hide();
  $('.btnContent').click(function(){
    $('.moduleContent').show();
    $('.btnContent')
  });
});


$('.moduleContent').click(function(){
     $('.moduleContent, .inner').hide();
});
$('.inner').click(function(e){
   e.stopPropagation();
});



// Get the modal
var modal = document.getElementById('moduleContent');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
