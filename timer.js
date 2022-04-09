class Timer{
  constructor(){
    this.ms = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.hours = 0;
    this.endTime = false;
    this.achievedMS = 0;
    this.achievedSec = 0;
    this.achievedMin = 0;
    this.achievedHour = 0;
    this.totalMS = 0;
    this.setup();
  }

  setup() {
    this.endTime = false;
    console.log("inside setup");
    document.querySelector('.ms').innerText = 0;
    document.querySelector('.second').innerText = 0;
    document.querySelector('.minute').innerText = 0;
    document.querySelector('.hour').innerText = 0;
    setInterval(this.startTimer.bind(this), 10);
  }

  startTimer() {
    if(this.endTime == false)
    {
      this.ms = document.querySelector('.ms').innerText;
      this.ms = parseInt(this.ms) + 10;
      document.querySelector('.ms').innerText = String(this.ms);
      if (parseInt(this.ms) == 1000){
        this.incrementSeconds();
        document.querySelector('.ms').innerText = 0;
      }
    }
  }

  endTimer() {
    this.endTime = true;
    this.achievedMS = parseInt(document.querySelector('.ms').innerText);
    this.achievedSec = parseInt(document.querySelector('.second').innerText);
    this.achievedMin = parseInt(document.querySelector('.minute').innerText);
    this.achievedHour = parseInt(document.querySelector('.hour').innerText);
    this.totalMS = (this.achievedMS + ((this.achievedSec)*1000) + (((this.achievedMin)*60)*1000) + (((this.achievedHour)*3600)*1000));
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
