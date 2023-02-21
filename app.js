//====================NAVBAR BACKGROUND COLOR CHANGE START====================//
$(window).scroll(function(){
    $(".navbar").toggleClass("scroll", $(this).scrollTop()>100);
});
//====================NAVBAR BACKGROUND COLOR CHANGE ENDED====================//

//====================TYPE EFFECT FOR HERO START====================//
var typed = new Typed('.title', {
    strings:["UI/UX Developer", "Web Designer", "Front-End Developer", "Web Developre"],
    typeSpeed:100,
    loop:true
})
//====================TYPE EFFECT FOR HERO ENDED====================//