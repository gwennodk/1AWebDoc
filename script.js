window.onscroll = function () {
    var blooper = document.getElementById("myVideo");

    if (blooper.getBoundingClientRect().bottom < 100 || blooper.getBoundingClientRect().top > 150)
        blooper.pause();
    else
        blooper.play();
}

function displayForm() {
    var form = document.getElementById("form");
    if (form.style.display === "block") {
        form.style.display = "none";
    } else {
        form.style.display = "block";
    }
}

$(window).scroll(function() {
    var height = $(window).scrollTop();
    
    //console.log(height);
    
        
if(height > 250){
    $('.fade-1').animate({'opacity':'1'},500);
    }
    
if(height > 1600){
    $('.fade-2').animate({'opacity':'1'},500);
    }
    
    if(height > 2600){
    $('.fade-3').animate({'opacity':'1'},500);
    }
    
    if(height > 5000){
    $('.fade-4').animate({'opacity':'1'},500);
    }
    
    if(height > 6000){
    $('.fade-5').animate({'opacity':'1'},500);
    }
});