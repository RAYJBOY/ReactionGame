//-----------------------------variables---------------------------------------
var outerCircle = document.querySelector('.external');
var innerCircle = document.querySelector('.internal');
var timerBox = document.querySelector('.timer-container');
var startButton = document.querySelector('.startButton');
var bodyHTML = document.querySelector('.bodyContainer');
var score = document.querySelector('.score');

var outerCircleWidth = outerCircle.offsetWidth;
var outerCircleHeight = outerCircle.offsetHeight;
var timerHeight = timerBox.offsetHeight;
var scoreHeight = score.offsetHeight;

var scoreValue = 0;

const gameHTML = `<div class="body-container">

  <div class="timer-container">
    <div class="time-body">
      <div class="hour">
        <p>HOUR</p>
        <p>hour</p>
      </div>

      <div class="colon">
        <p>:</p>
      </div>

      <div class="minute">
        <p>MINUTE</p>
        <p>minute</p>
      </div>

      <div class="colon">
        <p>:</p>
      </div>

      <div class="second">
        <p>SECOND</p>
        <p>second</p>
      </div>

      <div class="colon">
        <p>:</p>
      </div>

      <div class="ms">
        <p>MS</p>
        <p>ms</p>
      </div>
    </div><!--end of timer divs -->
  </div><!--end of timer container -->

  <div class="score">
    <p>score</p>
  </div>

  <div class="external">
    <div class="internal">
    </div>
  </div>

</div><!--end of body-container -->`;

//-----------------------------End of vars-----------------------------------

//-----------------------------Functions-------------------------------------
const onButtonClick = () => {
  if (scoreValue < 20){
    let XCoordinate = Math.floor(Math.random() * window.innerWidth);
    let YCoordinate = Math.floor(Math.random() * window.innerHeight);
    if(XCoordinate >= (window.innerWidth-outerCircleWidth)){
      XCoordinate = (window.innerWidth-outerCircleWidth);
    }
    if(YCoordinate >= (window.innerHeight-outerCircleHeight)){
      YCoordinate = (window.innerHeight-(outerCircleHeight+timerHeight+scoreHeight));
    }
    outerCircle.style.marginTop = YCoordinate.toString()+"px";
    outerCircle.style.marginLeft = XCoordinate.toString()+"px";
    scoreValue++;
    score.innerHTML = scoreValue;
  }

  else{
    endGame();
  }

}

const onStartClick = () => {
  bodyHTML.innerHTML = gameHTML;
  outerCircle = document.querySelector('.external');
  timerBox = document.querySelector('.timer-container');
  score = document.querySelector('.score');
  score.innerHTML = `0`;
  outerCircleWidth = outerCircle.offsetWidth;
  outerCircleHeight = outerCircle.offsetHeight;
  outerCircle.addEventListener('click', onButtonClick);
  const myTimer = new Timer();
  myTimer.startTimer();
}

function endGame(){
  console.log("End of game function");
}
//---------------------------End of functions----------------------------------

//---------------------------Event listeners-----------------------------------
outerCircle.addEventListener('click', onButtonClick);
startButton.addEventListener('click', onStartClick);
//-----------------------End of event listeners--------------------------------
