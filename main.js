function preload(){
sound=('mixkit-bell-notification-933.wav');
}

function setup(){
    canvas= createCanvas(680, 360);
    canvas.center();
}

function draw(){
if(objects[i].label=person){
    document.getElementById("status").innerHTML="Status: Person Detected";
    sound.stop();


}

else{
    document.getElementById("status").innerHTML="Status: Person Not Detected";
    sound.play();
}

if(objects[i].lenght<0){
    document.getElementById("status").innerHTML="Status: Person Not Detected";
    sound.play();
}
}