// Add Your Scripts here
$(document).ready(function(){
    $('.navbar-toggle').click(function(){
        $('#menu').slideToggle(500);
        $('.navbar-toggle span').toggleClass('change');
    });
});