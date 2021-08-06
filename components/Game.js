AFRAME.registerComponent("game-play", {
  schema: {
    elementId: { type: "string", default: "#ring1" },
  },

  update: function () {
    this.isCollided(this.data.elementId);
  },

  isCollided: function (elementId) {
    const element = document.querySelector(elementId);
    element.addEventListener("collide", (e)=> {
      if (elementId.includes("#ring")) {
        console.log(elementId + " collision");
      } else if (elementId.includes("#hurdle")) {
        console.log("bird collision");
      }
    });
  },

  init: function(){
    var dur = 120;
    const timerel = document.querySelector('#timer');
    this.startTimer(dur, timerel)

  },
  startTimer: function(dur, timerel){
    var min;
    var sec;
    setInterval(()=>{
      if(dur>=0){
        min = parseInt(dur/60);
        sec = parseInt(dur%60);
        if(min<10){
          min = '0'+min
        }
        if(sec<10){
          sec = '0'+sec;
        }
        timerel.setAttribute('text', {
          value: min+':'+sec
        });
        dur-=1
      }
    },1000)
console.log('Hello')
  }
});
