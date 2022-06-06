window.addEventListener("DOMContentLoaded", function() {
    document.getElementById("primary").scrollIntoView();
    document.getElementById("copy").innerHTML = "© " + new Date().getFullYear() + " MandaiWorld";
});


var scrollToEl;
$(function() {
    var scrollVal = $(window).scrollTop();
    $(window).scroll(function(){
        var scrollValNow = $(window).scrollTop();
        if(scrollVal < scrollValNow && scrollToEl != "secondary") {
            scrollToEl = "secondary";
            document.getElementById(scrollToEl).scrollIntoView({behavior: "smooth"});
        } else if(scrollVal > scrollValNow && scrollToEl != "primary") {
            scrollToEl = "primary";
            document.getElementById(scrollToEl).scrollIntoView({behavior: "smooth"});
        }
        scrollVal = scrollValNow;
    });
});