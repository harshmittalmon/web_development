
var random1 = Math.floor(Math.random()*6)+1;
var random2 = Math.floor(Math.random()*6)+1;
var string1 = "dice" + random1 +".png"
var string2 = "dice"+random2 +".png";
document.querySelectorAll("img")[0].setAttribute("src",string1);
document.querySelectorAll("img")[1].setAttribute("src",string2);
var heading = document.querySelector("h1");
heading.innerText  = "bye !";   
document.querySelector(".container").classList.add("extra");