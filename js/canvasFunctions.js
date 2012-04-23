function sideBarMoveDown(angle) {
    context.save();
    clearCanvas();
    context.translate(sideBarVariables.x, sideBarVariables.y);
    context.rotate(angle);
    context.drawImage(sideBar, sideBarVariables.origin, sideBarVariables.origin, sideBarWidth, sideBarHeight);
    isMovedDown = true;
}

function sideBarMoveUp() {
    if (isMovedDown) {
        console.log("Inside the move up function ...");
        context.restore();
        clearCanvas();
        defaultImage();
        isMovedDown = false;
    }
}

function sideBarMoveIn(reduceWidth, reduceHeight) {
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

function getClickEvents() {

    $("#sideBarMoveDown").click(function () {
        var angle = 0.5;
        sideBarMoveDown(angle);
    })
    $("#sideBarMoveUp").click(function () {
        sideBarMoveUp();
    })
    $("#sideBarMoveIn").click(function () {
        var reduceWidth = 230;
        var reduceHeight = 2;
        sideBarMoveIn(reduceWidth, reduceHeight);
    })
    $("#sideBarMoveOut").click(function () {
        moveOut();
    })

    $("#frontBarMoveDown").click(function () {
        log("front bar move down !")
//                var angle = 0.5;
//                moveDown(angle);
    })
    $("#frontBarMoveUp").click(function () {
//                moveUp();
        log("front bar move up !")

    })
    $("#frontBarMoveIn").click(function () {
//                var reduceWidth = 230;
//                var reduceHeight = 2;
//                moveIn(reduceWidth, reduceHeight);
        log("front bar move in !")

    })
    $("#frontBarMoveOut").click(function () {
        log("front bar move out !")
//                moveOut();
    })

}

function getSliderDraggable() {
    $("#specs").draggable();

    $("#slider").slider({
        value:70,
        min:20,
        max:70,
        step:10,
        slide:function (event, ui) {
            $("#heightBox").val(ui.value);
            var getHeight = parseInt($("#heightBox").val());
            $("#frontBar").attr("height", getHeight);
        }
    });
    $("#heightBox").val($("#slider").slider("value"));

}


function log(message) {
    console.log(message);
}
