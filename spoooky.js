let count = [];
let direction = [];
let leftPos = [];

let myContent = document.getElementById("container");
document.addEventListener("click", onPress);

gameLoop();

function onPress(){
    let dropNumber = 1;
    for(let i = 0; i < dropNumber; i++){
        leftPos.push(Math.floor(Math.random() * 700));
        let color =  Math.floor((Math.random() * 1000) + 1);
        //let snowflake = "<div class='drop' style='background-color: " + getRandomColor() + " left:" + leftPos[i] + "px'></div>";
        //let snowflake = "<div class='drop' style='left:" + leftPos[i] + "px'></div>";
        let snowflake = "<div class='drop' style='left:" + leftPos[i] + "px; background-color: " + getRandomColor() + ";'></div>";
        myContent.innerHTML += snowflake;
    }
}

function gameLoop() {
    window.requestAnimationFrame(gameLoop);
    onPress();
    fall();
}

function fall() {
    dropArray = document.getElementsByClassName("drop");
    speedArray = dropArray.length;
    let randDir;
    for(let i = 0; i < speedArray; i++){
        count.push(Math.floor(Math.random() * 5));
        randDir = Math.floor((Math.random() * 2));
        if(randDir === 0){
            randDir = -1;
        }
        direction.push(randDir);
    }
    for (let i = 0; i < dropArray.length; i++) {
        let topSpot = Number(dropArray[i].style.top.replace('px', ''));
        let sideSpot = Number(dropArray[i].style.left.replace('px', ''));

        if (topSpot <= 490){
            if(count[i] <= 10 && count[i] >= -10){
                count[i] += direction[i];
            }
            else{
                direction[i] *= -1;
                count[i] += direction[i];
            }

            let dropSpeed = Math.ceil(Math.random() * 3);
            topSpot += dropSpeed;
            sideSpot = count[i] + leftPos[i];
            dropArray[i].style.top = topSpot + 'px';
            dropArray[i].style.left = sideSpot + 'px';
        }
    }
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}