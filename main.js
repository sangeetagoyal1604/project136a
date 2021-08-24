status="";
function preload() {

}
function setup() {
    canvas=createCanvas(350,300);
video=createCapture(VIDEO);
video.size(350,300);
video.hide();
    canvas.center();
}
function draw() {
    image(video,0,0,350,300);
} 
function start() {
    
 objectdetector=ml5.objectDetector('cocossd',modelloaded); 
document.getElementById("statuschange").innerHTML="status:Detecting objects";
document.getElementById(question).value;

}
function modelloaded() {
    status=true;
    console.log("modelloaded");
    
}