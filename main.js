function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw(){
    image(video,150,100,350,200);
    tint(tint_color);
    fill("pink");
    stroke("orange");
    noFill();
    rect(30, 20, 600, 400);
}

function filter_tint()
{
    tint_color= document.getElementById("color_name").value;

}

function take_snapshot(){
    save('student_name.png');
}