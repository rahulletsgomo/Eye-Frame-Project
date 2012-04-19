function initImages(){
 var canvas = document.getElementById("canvas");
 var context = canvas.getContext("2d");
 var frontBar = new Image();
 var sideBar = new Image();
 frontBar.src = "images/4_c.png";
 sideBar.src = "images/4_s.png";
 frontBar.onload = function(){
  context.drawImage(frontBar, 100, 50);
 };
 sideBar.onload = function(){
  context.drawImage(sideBar, 405, 49);
 }
}
