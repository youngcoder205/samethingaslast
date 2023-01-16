leftWristX = 0;
leftWristY = 0;
RightWristX = 0;
RightWristY = 0;

function setup() {
    canvas = createCanvas(600,500)
    canvas.center()
    video = createCapture(VIDEO)
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video,0,0,600,500)
}

song = ""
function preload() {
    song = loadSound("music.mp3")
}

function play()  {
    song.play()
    song.setVolume(1)
    song.rate(1)
}

function stop()  {
    song.stop()
}

function modelLoaded() {
    console.log('PoseNet is Initialized')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+leftWristY)

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX = " + RightWristX +" rightWristY = "+RightWristY)
    }

}
