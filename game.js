var outerCircle = document.querySelector('.external');
var innerCircle = document.querySelector('.internal');
var timerBox = document.querySelector('.timer-container');
var startButton = document.querySelector('.startButton');
var bodyHTML = document.querySelector('.bodyContainer');

var outerCircleWidth = outerCircle.offsetWidth;
var outerCircleHeight = outerCircle.offsetHeight;
var timerHeight = timerBox.offsetHeight;

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


  <div class="external">
    <div class="internal">
    </div>
  </div>

  <script src="./timer.js"></script>
  <script src="./game.js"></script>

</div><!--end of body-container -->`;

//-----------------------------End of vars-----------------------------------
const onButtonClick = () => {
  console.log("in buttonClick")
  let XCoordinate = Math.floor(Math.random() * window.innerWidth);
  let YCoordinate = Math.floor(Math.random() * window.innerHeight);
  if(XCoordinate >= (window.innerWidth-outerCircleWidth)){
    XCoordinate = (window.innerWidth-outerCircleWidth);
  }
  if(YCoordinate >= (window.innerHeight-outerCircleHeight)){
    YCoordinate = (window.innerHeight-(outerCircleHeight+timerHeight));
  }
  outerCircle.style.marginTop = YCoordinate.toString()+"px";
  outerCircle.style.marginLeft = XCoordinate.toString()+"px";
}

const onStartClick = () => {
  bodyHTML.innerHTML = gameHTML;
  outerCircle = document.querySelector('.external');
  outerCircleWidth = outerCircle.offsetWidth;
  outerCircleHeight = outerCircle.offsetHeight;
  timerHeight = timerBox.offsetHeight;
  outerCircle.addEventListener('click', onButtonClick);
  const myTimer = new Timer();
  myTimer.startTimer();
}

outerCircle.addEventListener('click', onButtonClick);
startButton.addEventListener('click', onStartClick);

//------------------------------------Timer---------------------------------------
