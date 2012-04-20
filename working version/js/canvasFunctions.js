function moveDown(angle){
    clearCanvas();
    context.translate(sideBarVariables.x, sideBarVariables.y);
    context.rotate(angle);
    context.drawImage(sideBar, sideBarVariables.origin, sideBarVariables.origin, sideBar.width, sideBar.height);
    moveDown = true;
}

function moveUp(){
    if(moveDown){
        clearCanvas();
        context.drawImage(sideBar, sideBar.x, sideBar.y, sideBar.width, sideBar.height);
    }
}	

function moveIn(reduceWidth, reduceHeight){
    clearCanvas();
    context.drawImage(sideBar, sideBarVariables.x, sideBarVariables.y, (sideBar.width-reduceWidth), (sideBar.height)-reduceHeight);
    movedIn = true;
}

function moveOut(){
    if(movedIn){
        try{
            clearCanvas();
            context.drawImage(sideBar, sideBarVariables.x, sideBarVariables.y, sideBar.width, sideBar.height);
        }
        catch(exception){
            console.log("The following exception occured : "+exception)
        }
    }
}

function clearCanvas(){
    context.clearRect(sideBarVariables.x, sideBarVariables.y, sideBar.height, sideBar.width);
}
