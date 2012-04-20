function moveDown(angle) {
    context.save();
    clearCanvas();
    context.translate(sideBarVariables.x, sideBarVariables.y);
    context.rotate(angle);
    context.drawImage(sideBar, sideBarVariables.origin, sideBarVariables.origin, sideBarWidth, sideBarHeight);
    isMovedDown = true;
}

function moveUp() {
    if (isMovedDown) {
        console.log("Inside the move up function ...");
        context.restore();
        clearCanvas();
        defaultImage();
        isMovedDown = false;
    }
}

function moveIn(reduceWidth, reduceHeight) {
    clearCanvas();
    context.drawImage(sideBar, sideBarVariables.x, sideBarVariables.y + 2, (sideBarWidth - reduceWidth), (sideBarHeight) - reduceHeight);
    isMovedIn = true;
}

function moveOut() {
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
    context.clearRect(sideBarVariables.x, sideBarVariables.y, sideBarHeight + 100, sideBarWidth);
}

function defaultImage() {
    context.drawImage(sideBar, sideBarVariables.x, sideBarVariables.y, sideBarWidth, sideBarHeight);
}
