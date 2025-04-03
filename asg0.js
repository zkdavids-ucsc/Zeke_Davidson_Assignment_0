//asg0.js

var canvas;
var ctx;

function main(){
    //Retrieve <canvas> element
    canvas = document.getElementById('cnv1');
    if (!canvas){
        console.log('Failed to retrieve the <canvas> element');
        return;
    }

    //Get the rendering context for 2DCG
    ctx = canvas.getContext('2d');

    //Draw a blue rectangle
    ctx.fillStyle = 'rgba(0, 0, 0, 1.0)'; //Set color
    ctx.fillRect(0, 0, canvas.width, canvas.height); //Fill a rectangle with the color

    let v1x = document.getElementById("v1x").value;
    let v1y = document.getElementById("v1y").value;
    let v2x = document.getElementById("v2x").value;
    let v2y = document.getElementById("v2y").value;

    let v1 = new Vector3([v1x, v1y, 0]);
    drawVector(v1, "red");
    let v2 = new Vector3([v2x, v2y, 0]);
    drawVector(v2, "blue");
}
function drawVector(v, color){
    ctx.strokeStyle = color;

    let cx = canvas.width/2;
    let cy = canvas.height/2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx+(v.elements[0]*20), cy-(v.elements[1]*20));
    ctx.stroke();
}

function handleDrawEvent(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let v1x = document.getElementById("v1x").value;
    let v1y = document.getElementById("v1y").value;
    let v2x = document.getElementById("v2x").value;
    let v2y = document.getElementById("v2y").value;

    let v1 = new Vector3([v1x, v1y, 0]);
    drawVector(v1, "red");
    let v2 = new Vector3([v2x, v2y, 0]);
    drawVector(v2, "blue");
}

function handleDrawOperationEvent(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let v1x = document.getElementById("v1x").value;
    let v1y = document.getElementById("v1y").value;
    let v2x = document.getElementById("v2x").value;
    let v2y = document.getElementById("v2y").value;

    let v1 = new Vector3([v1x, v1y, 0]);
    drawVector(v1, "red");
    let v2 = new Vector3([v2x, v2y, 0]);
    drawVector(v2, "blue");

    let s = document.getElementById("scalar").value;

    let op = document.getElementById("op-select").value;

    switch (op){
        case "select":
            break;
        case "add":
            v1.add(v2);
            drawVector(v1, "green");
            break;
        case "sub":
            v1.sub(v2);
            drawVector(v1, "green");
            break;
        case "mult":
            v1.mul(s);
            drawVector(v1, "green");
            v2.mul(s);
            drawVector(v2, "green");
            break;
        case "div":
            v1.div(s);
            drawVector(v1, "green");
            v2.div(s);
            drawVector(v2, "green");
            break;
        case "mag":
            console.log("V1 Magnitude: " + v1.magnitude());
            console.log("V2 Magnitude: " + v2.magnitude());
            break;
        case "norm":
            v1.normalize();
            v2.normalize();
            drawVector(v1, "green");
            drawVector(v2, "green");
            break;
        case "dot":
            let d = Vector3.dot(v1, v2);
            let theta = Math.acos(d / (v1.magnitude() * v2.magnitude()));
            console.log(d);
            console.log("Angle between V1 and V2: " + theta );
            break;
        case "area":
            let p = Vector3.cross(v1, v2);
            let v3 = new Vector3([p[0], p[1], p[2]]);
            console.log("Area of the triangle: " + (v3.magnitude() / 2));
            break;
    }
}