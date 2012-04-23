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
        sideBarMoveOut();
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