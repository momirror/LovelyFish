/**
 * Created by moshanpi on 7/15/16.
 */

var bgCanvas,animationCanvas,bgContext,animationContext;

document.body.onload=function () {
  init();
};


function init() {
  bgCanvas = document.getElementById('bg-canvas');
  animationCanvas = document.getElementById('animation-canvas');
  bgContext = bgCanvas.getContext('2d');
  animationContext = animationCanvas.getContext('2d');
  
  initBgCanvas();
  initAnimationCanvas();
}

function initBgCanvas() {
  drawBackgroundImage();
}

function  initAnimationCanvas() {

}

function drawBackgroundImage() {
  var bgImg = new Image();
  bgImg.src = 'src/background.jpg';
  bgImg.onload = function () {
    bgContext.drawImage(bgImg,0,0);
  }
}
