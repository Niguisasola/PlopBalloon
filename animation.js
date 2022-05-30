//<img src='https://cdn.dribbble.com/users/234969/screenshots/5404808/medallion_burst_animation.gif'/>

var numberOfCLicks = 0

function addCounter() {
    numberOfCLicks = numberOfCLicks+1
    if (numberOfCLicks == 1) {
    document.getElementById("counter").textContent="Haz hecho click "+numberOfCLicks+" vez";
}
    else {
    document.getElementById("counter").textContent="Haz hecho click "+numberOfCLicks+" veces";
}
}

function changeSize() {
    switch (numberOfCLicks) {
        case 1: 
        document.getElementById("balloon").style.width="220px";
        document.getElementById("balloon").style.height="200px";
        break;
        case 2: 
        document.getElementById("balloon").style.width="240px";
        document.getElementById("balloon").style.height="220px";
        break;
        case 3: 
        document.getElementById("balloon").style.width="260px";
        document.getElementById("balloon").style.height="240px";
        break;
        case 4: 
        document.getElementById("balloon").style.width="270px";
        document.getElementById("balloon").style.height="260px";
        break;
        case 5: 
        document.getElementById("main").style.display="none";
        document.querySelector(".congrats").style.display="block";
    }
}

function increaseSize() {
    addCounter();
    changeSize();
}