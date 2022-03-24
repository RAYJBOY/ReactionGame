class Timer{
  constructor(){
    this.ms = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.setup();
  }

  setup() {
    document.querySelector('.ms').innerText = this.ms;
    document.querySelector('.second').innerText = this.seconds;
    document.querySelector('.minute').innerText = this.minutes;
    document.querySelector('.hour').innerText = this.hours;
    setInterval(this.startTimer.bind(this), 10);
  }

  startTimer() {
    this.ms = document.querySelector('.ms').innerText;
    this.ms = parseInt(this.ms) + 10;
    document.querySelector('.ms').innerText = String(this.ms);
    if (parseInt(this.ms) == 1000){
      this.incrementSeconds();
      document.querySelector('.ms').innerText = 0;
    }
  }

  incrementSeconds() {
    this.seconds = parseInt(document.querySelector('.second').innerText);
    this.seconds++;
    document.querySelector('.second').innerText = String(this.seconds);
    if(parseInt(this.seconds) == 60){
      this.incrementMinutes();
      document.querySelector('.second').innerText = 0;
    }
  }

  incrementMinutes() {
    this.minutes = parseInt(document.querySelector('.minute').innerText);
    this.minutes++;
    document.querySelector('.minute').innerText = String(this.minutes);
    if(parseInt(this.minutes) == 60){
      this.incrementHours();
      document.querySelector('.minute').innerText = 0;
    }
  }

  incrementHours() {
    this.hours = parseInt(document.querySelector('.hour').innerText);
    this.hours++;
    document.querySelector('.hour').innerText = String(this.hours);
  }
}
