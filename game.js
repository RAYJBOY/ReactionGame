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
var myTimer = new Timer();

const gameHTML = `<div class="body-container">
  <div class="myheader">
    <div class="timer-container">
      <div class="time-body">
        <div class="hour">
        </div>

        <div class="colon">:
        </div>

        <div class="minute">
        </div>

        <div class="colon">:
        </div>

        <div class="second">
        </div>

        <div class="colon">:
        </div>

        <div class="ms">
        </div>
      </div><!--end of timer divs -->
    </div><!--end of timer container -->

    <div class="scoreContainer">
      <p>Score: </p>
      <div class="score">
        <p>0</p>
      </div>
    </div>
  </div>

  <div class="external">
    <div class="internal">
    </div>
  </div>

</div><!--end of body-container -->`;

const endGameHTML = `<div class="body-container">

  <div class="gameOver">
    <p>GAME OVER!</p>
    <div class="endOfGameScore">
      <p>Your total time: </p>
      <p class="finalScore"></p>
    </div>
  </div>

  <button class="BackToMainMenu">Back to main menu</button>

</div><!--end of body-container -->`;

//-----------------------------End of vars-----------------------------------

//-----------------------------Functions-------------------------------------
const onButtonClick = () => {
  if (scoreValue < 10){
    let XCoordinate = Math.floor(Math.random() * window.innerWidth);
    let YCoordinate = Math.floor(Math.random() * window.innerHeight);
    if(XCoordinate >= (window.innerWidth-outerCircleWidth)){
      XCoordinate = (window.innerWidth-outerCircleWidth);
    }
    if(YCoordinate >= (window.innerHeight-(outerCircleHeight+timerHeight+scoreHeight))){
      YCoordinate = (window.innerHeight-(outerCircleHeight+timerHeight+scoreHeight+5));
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
  myTimer.setup();
  outerCircle = document.querySelector('.external');
  timerBox = document.querySelector('.timer-container');
  score = document.querySelector('.score');
  score.innerHTML = `0`;
  scoreValue = 0;
  outerCircleWidth = outerCircle.offsetWidth;
  outerCircleHeight = outerCircle.offsetHeight;
  outerCircle.addEventListener('click', onButtonClick);
  myTimer.startTimer();
}

const endGame = () => {
  myTimer.endTimer();
  bodyHTML.innerHTML = endGameHTML;
  var finalScore = document.querySelector('.finalScore');
  var mainMenu = document.querySelector('.BackToMainMenu');
  scoreString = myTimer.totalMS + " ms";
  finalScore.innerHTML = scoreString;
  mainMenu.addEventListener('click', backToMenu);
  //add end of game html
  //add method in timer class to get total time in seconds
  //show user average time per shot
}

const backToMenu = () => {
  const mainMenuHTML = `<div class="startContainer">
    <button class="startButton">CLICK HERE TO START!</button>
  </div>`;
  bodyHTML.innerHTML = mainMenuHTML;
  const startButton = document.querySelector('.startButton');
  startButton.addEventListener('click', onStartClick);
}
//---------------------------End of functions----------------------------------

//---------------------------Event listeners-----------------------------------
outerCircle.addEventListener('click', onButtonClick);
startButton.addEventListener('click', onStartClick);
//-----------------------End of event listeners--------------------------------
