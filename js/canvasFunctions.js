function sideBarMoveDown(angle) {
    sideBarContext.save();
    clearCanvas();
    sideBarContext.translate(sideBarVariables.x, sideBarVariables.y);
    sideBarContext.rotate(angle);
    sideBarContext.drawImage(sideBar, sideBarVariables.origin, sideBarVariables.origin, sideBarWidth, sideBarHeight);
    isMovedDown = true;
}

function sideBarMoveUp() {
    if (isMovedDown) {
        sideBarContext.restore();
        clearCanvas();
        defaultImage();
        isMovedDown = false;
    }
}

function sideBarMoveIn(reduceWidth, reduceHeight) {
    clearCanvas();
    sideBarContext.drawImage(sideBar, sideBarVariables.x, sideBarVariables.y + 2, (sideBarWidth - reduceWidth), (sideBarHeight) - reduceHeight);
    isMovedIn = true;
}

function sideBarMoveOut() {
    if (isMovedIn) {
        try {
            clearCanvas();
            defaultImage();
            isMovedIn = false;
        }
        catch (exception) {
            console.log("The following exception occured : " + exception)
        }
    }
}

function clearCanvas() {
    sideBarContext.clearRect(sideBarVariables.x, sideBarVariables.y, sideBarHeight + 100, sideBarWidth);
}

function defaultImage(getImageType) {
    if (getImageType == "sideBar") {
        sideBarContext.drawImage(sideBar, sideBarVariables.x, sideBarVariables.y, sideBarWidth, sideBarHeight);
    }
    else {
        frontBarContext.drawImage(frontBar, frontBarVariables.x, frontBarVariables.y, frontBarWidth, frontBarHeight);
    }
}

function initCanvas() {
    sideBarCanvas = document.getElementById("sideBarCanvas");
    sideBarContext = sideBarCanvas.getContext("2d");
    frontBarCanvas = document.getElementById("sideBarCanvas");
    frontBarContext = sideBarCanvas.getContext("2d");
}

function initImages() {
    sideBar = new Image();
    sideBar.src = "images/4_s.png";
    sideBar.onload = function () {
        sideBarWidth = (sideBar.width - sideBarVariables.width);
        sideBarHeight = (sideBar.height - sideBarVariables.height)
        defaultImage("sideBar");
    }
    frontBar = new Image();
    frontBar.src = "images/4_c.png";
    frontBar.onload = function () {
        frontBarWidth = (frontBar.width - frontBarVariables.width);
        frontBarHeight = (frontBar.height - frontBarVariables.height)
        defaultImage("frontBar");
    }
}




