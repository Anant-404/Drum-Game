//detecting button press

for(var i=0;i<document.querySelectorAll(".drum").length;i++){//for loop adds event listener to all the buttons that has class .drums this saves lines of codes 

document.querySelectorAll("button")[i].addEventListener("click",function(){
          
    //whatever u want to do when clicked 

    //var audio = new Audio("sounds/tom-1.mp3");
    //audio.play();
    //console.log(this);//to get which button triggered the eventlistener
    var buttonInnerhtml=this.innerHTML;
    makesound(buttonInnerhtml);
    buttonanimation(buttonInnerhtml);
 
});

//detecting keyboard press
document.addEventListener("keypress", function(event){//now whole website listens to keypress
    makesound(event.key);
    buttonanimation(event.key);
});

}
function makesound(key){
    switch(key){
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
        break;
        case "a":
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
        break;
        case "s":
            var tom2 = new Audio("sounds/tom-3.mp3");
            tom2.play();
        break;
        case "d":
            var tom3 = new Audio("sounds/tom-4.mp3");
            tom3.play();
        break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
        break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
        break;

        default:

    }
}
function buttonanimation(currentkey){
  var activebutton = document.querySelector("." + currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function(){
activebutton.classList.remove("pressed");
  },100);
}
