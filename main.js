song = "";
song1 = "";
leftWristY = 0;
leftWristX = 0;
rightWristY = 0;
rightWristY = 0;

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
    
}

function modelLoaded(){
    console.log('yay!');
}

function preload(){
    song = loadSound("Harry Potter theme song.mp3");
    song1 = loadSound("Peter Pan.mp3");
    console.log('song loaded');
}

function draw(){
    image(video, 0, 0, 600, 500)
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("left = ", leftWristX + "," + leftWristY)
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("right = ", rightWristX + "," + rightWristY)
    }
}