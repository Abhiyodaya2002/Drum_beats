var len=document.querySelectorAll("button").length;
for(var i=0;i<len;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function (){
     var but=this.innerHTML; //here we are detecting which "button " was pressed on website and passing it to a giveevent function
     giveevent(but);
     giveanimation(but);
    });
}


document.addEventListener("keypress",function(event) //here we are detection keyboard press
{
// here "event" which is in function argument has the event which was performed by your keyboard i.e. which key of keyboard you have  pressed.
//instead of "event" , you can write any other name.
giveevent(event.key); //here we are passing event.key which contains just the value of key which wass pressed. It is necessary to check which keyboard key was pressed bec we want the sound on pressing only the seven specified keys on website.
giveanimation(event.key);
});


function giveevent( but) //it just check and performes the action when the specified button was clicked.
{
    if(but=='w')
 {
     var aud1=new Audio("sounds/crash.mp3");
     aud1.play();
 }
 if(but=='a')
 {
     var aud2=new Audio("sounds/kick-bass.mp3");
     aud2.play();
 }
 if(but=='s')
 {
     var aud3=new Audio("sounds/snare.mp3");
     aud3.play();
 }
 if(but=='d')
 {
     var aud4=new Audio("sounds/tom-1.mp3");
     aud4.play();
 }
 if(but=='j')
 {
     var aud5=new Audio("sounds/tom-2.mp3");
     aud5.play();
 }
 if(but=='k')
 {
     var aud6=new Audio("sounds/tom-3.mp3");
     aud6.play();
 }
 if(but=='l')
 {
     var aud7=new Audio("sounds/tom-4.mp3");
     aud7.play();
 }
}

function giveanimation(but) //it gives an animation on pressing the button bey mouse and keyboard by adding an extra class .pressed to each button when action is performed and then removing that class after sometime when the action gets performed.
{
//note each button has an extra class which has same name as that of button like .w , .s, etc.
var activebut=document.querySelector("."+but);
activebut.classList.add("pressed");
setTimeout(function() {
    activebut.classList.remove("pressed");
    
}, 200);
}