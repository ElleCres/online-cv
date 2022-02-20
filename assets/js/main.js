jQuery(document).ready(function($) {

    $('.level-bar-inner').css('width', '0');
    
    $(window).on('load', function() {

        $('.level-bar-inner').each(function() {
        
            var itemWidth = $(this).data('level');
            
            $(this).animate({
                width: itemWidth
            }, 800);
            
        });

    });
   
    

});
function mobileNav() {
    var x = document.getElementById("myNavbar");
    if (x.className === "nav-item") {
      x.className += " active";
    } else {
      x.className == "nav-item";
    }
};
var pathname = window.location.pathname,
pages = ['', 'blog', 'about','contact'];

$('.nav-item').each(function(i) {
 if (pathname.includes(pages[i])) this.addClass('active');
 else if (this.className.includes('active')) this.removeClass('active');
});