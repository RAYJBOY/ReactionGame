var outerCircle = document.querySelector('.external');
var innerCircle = document.querySelector('.internal');
var outerCircleWidth = outerCircle.offsetWidth;
var outerCircleHeight = outerCircle.offsetHeight;


const onButtonClick = () => {
  let XCoordinate = Math.floor(Math.random() * window.innerWidth);
  let YCoordinate = Math.floor(Math.random() * window.innerHeight);
  if(XCoordinate >= (window.innerWidth-outerCircleWidth)){
    XCoordinate = (window.innerWidth-outerCircleWidth);
  }
  if(YCoordinate >= (window.innerHeight-outerCircleHeight)){
    YCoordinate = (window.innerHeight-outerCircleHeight);
  }
  outerCircle.style.marginTop = YCoordinate.toString()+"px";
  outerCircle.style.marginLeft = XCoordinate.toString()+"px";
}

outerCircle.addEventListener('click', onButtonClick);
