
difference=0;
leftwristX=0;
rightwristX=0;

function setup(){
    canvas=createCanvas(600,600);
    canvas.position(550,135);
    video=createCapture(VIDEO);
    video.size(550,550);
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on("pose",getposes)
}


function getposes(result){
    if (result.length>0){
console.log(result);



leftwristX=result[0].pose.leftWrist.x;
rightwristX=result[0].pose.rightWrist.x;
console.log(rightwristX,leftwristX);
difference=floor(leftwristX - rightwristX);
    }
}

function draw(){
    background("#449dd0");
    document.getElementById("Fonty").innerHTML="font size of the text will be" + difference + "px";
    fill("#4ab3a1");
    textSize(difference);
    text("Michael", 300,300);
}
function modelLoaded(){
    console.log("Posenet is Initilized");
}
