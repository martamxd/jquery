$(document).ready(function(){
//ustawienia karuzeli
var speed =500; //fade speed
var autoswitch = true //automatyczne przechodzenie do kolejnego slajdu
var autoswitch_speed =200; //szybkosc przejscia

//dodanie klasy aktywnej
$(".slide").first().addClass("active")
//ukrycie wszystkich slajdow
$(".slide").hide();
//pokazanie aktywnego slajdu
$(".active").show();

//on click na next
$("#next").click(function(){
    $("active").removeClass("active").addClass("oldActive");
    if($(".oldActive").is(":last-child")){
        $(".slide").first().addClass("active");
    } else {
        $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $("slide").fadeOut(speed);
    $(".active").fadeIn(speed);
});
//on click na prev
$("#prev").click(function(){
    $("active").removeClass("active").addClass("oldActive");
    if($(".oldActive").is(":first-child")){
        $(".slide").last().addClass("active");
    } else {
        $(".oldActive").next().addClass("active");
    }
    $(".oldActive").removeClass("oldActive");
    $("slide").fadeOut(speed);
    $(".active").fadeIn(speed);
});


});
