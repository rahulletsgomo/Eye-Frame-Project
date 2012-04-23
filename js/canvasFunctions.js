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

function defaultImage() {
    sideBarContext.drawImage(sideBar, sideBarVariables.x, sideBarVariables.y, sideBarWidth, sideBarHeight);
}





