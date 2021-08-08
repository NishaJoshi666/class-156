AFRAME.registerComponent("game-play", {

  schema: {
    elementId: { type: "string", default: "#ring1" },

  },

  init: function () {
  
    var dur = 120;
    var timerEl = document.querySelector("#timer");
    this.startTimer(dur, timerEl);
  
  },

  update: function () {
  
    this.isCollided(this.data.elementId);
  
  },

  startTimer: function (dur, timerEl) {
  
    var mins;
    var secs;

    setInterval(()=> {
      if (dur >=0) {
        mins = parseInt(dur / 60);
        secs = parseInt(dur % 60);

        if (mins < 10) {
          mins = "0" + mins;
        }

        if (secs < 10) {
          secs = "0" + secs;
        }

        timerEl.setAttribute("text", {
          value: mins + ":" + secs,
        });

        dur -= 1;
      } 

      else {
        this.gameOver();        
      }

    },1000)
  
  },
  
  isCollided: function (elemntId) {
  
    var element = document.querySelector(elemntId);
    element.addEventListener("collide", (e) => {
  
      if (elemntId.includes("#ring")) {
        element.setAttribute("visible", false);
        this.updateScore();
        this.updateTargets();
      } 
  
      else {
        this.gameOver();
      }
  
    });
  
  },
  
  updateTargets: function () {
  
    var element = document.querySelector("#targets");
    var count = element.getAttribute("text").value;
    var currentTargets = parseInt(count);
    currentTargets -= 1;
    element.setAttribute("text", {
      value: currentTargets,
    });
  
  },
  
  updateScore: function () {

    var element = document.querySelector("#score");
    var count = element.getAttribute("text").value;
    var currentScore = parseInt(count);
    currentScore += 50;
    element.setAttribute("text", {
      value: currentScore,
    });

  },

  gameOver: function () {

    var planeEl = document.querySelector("#plane_model");
    var element = document.querySelector("#game_over_text");
    element.setAttribute("visible", true);
    planeEl.setAttribute("dynamic-body", {
      mass: 1
    });

  },

});
