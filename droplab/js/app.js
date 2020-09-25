//array we put the raindrops in
let yPos = []
let xPos = []

//setup function to create canvas
function setup(){
    createCanvas(400,300)
}

//everything we want to happen continuously
function draw(){
    background(0, 100, 100);
    
    if(mouseIsPressed){
        yPos.push(mouseY);
        xPos.push(mouseX);
    }

    for(let i = 0; i < yPos.length; i++){
        rect(xPos[i], yPos[i], 20, 20)
        yPos[i] += 3
    }
}