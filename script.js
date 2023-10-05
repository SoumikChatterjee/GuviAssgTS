//title container
var titlecontainer = document.createElement("div");
titlecontainer.setAttribute("id", "title");
titlecontainer.setAttribute("class", "text-center mt-5");
document.body.appendChild(titlecontainer);
//title
var title = document.createElement("h3");
title.innerHTML = "Guvi Cricket 10";
document.getElementById("title").appendChild(title);
//colum container
var row = document.createElement("div");
row.setAttribute("class", "row mt-5");
row.setAttribute("id", "row");
document.body.appendChild(row);
//three column
var column1 = document.createElement("div");
column1.setAttribute("class", "col-sm-4 text-center");
column1.setAttribute("id", "column1");
document.getElementById("row").appendChild(column1);
var column2 = document.createElement("div");
column2.setAttribute("class", "col-sm-4 text-center");
column2.setAttribute("id", "column2");
document.getElementById("row").appendChild(column2);
var column3 = document.createElement("div");
column3.setAttribute("class", "col-sm-4 text-center");
column3.setAttribute("id", "column3");
document.getElementById("row").append(column3);
//column1 items
var titlescrore1 = document.createElement("h5");
titlescrore1.innerHTML = "Team 1 Score";
document.getElementById("column1").appendChild(titlescrore1);
var scrore1 = document.createElement("h2");
scrore1.innerHTML = "0";
scrore1.setAttribute("id", "score1");
document.getElementById("column1").appendChild(scrore1);
var button1 = document.createElement("button");
button1.setAttribute("class", "btn btn-primary");
button1.setAttribute("id", "hit1");
// button1.setAttribute("onclick", game.displayRuns);
button1.innerHTML = "HIT 1";
document.getElementById("column1").appendChild(button1);
//column2 items
var timerTitle = document.createElement("h5");
timerTitle.innerHTML = "TIMER";
document.getElementById("column2").appendChild(timerTitle);
//clock
var timer = document.createElement("h2");
timer.innerHTML = "0";
timer.setAttribute("id", "timer");
document.getElementById("column2").appendChild(timer);
//column3 items
var titlescrore2 = document.createElement("h5");
titlescrore2.innerHTML = "Team Score 2";
document.getElementById("column3").appendChild(titlescrore2);
var scrore2 = document.createElement("h2");
scrore2.innerHTML = "0";
scrore2.setAttribute("id", "score2");
document.getElementById("column3").appendChild(scrore2);
var button2 = document.createElement("button");
button2.setAttribute("class", "btn btn-primary disabled");
button2.setAttribute("id", "hit2");
button2.innerHTML = "HIT 2";
document.getElementById("column3").appendChild(button2);
//table column container
var row_table = document.createElement("div");
row_table.setAttribute("class", "row mt-5");
row_table.setAttribute("id", "row_table");
document.body.appendChild(row_table);
//three column
var table_column1 = document.createElement("div");
table_column1.setAttribute("class", "col-sm-5 text-center");
table_column1.setAttribute("id", "table_column1");
document.getElementById("row_table").appendChild(table_column1);
var table_column2 = document.createElement("div");
table_column2.setAttribute("class", "col-sm-2 text-center");
table_column2.setAttribute("id", "table_column2");
document.getElementById("row_table").appendChild(table_column2);
var table_column3 = document.createElement("div");
table_column3.setAttribute("class", "col-sm-5 text-center");
table_column3.setAttribute("id", "table_column3");
document.getElementById("row_table").append(table_column3);
//table 1
var table1 = document.createElement("table");
table1.style.border = "1px solid black";
table1.setAttribute("class", "table");
table1.setAttribute("id", "table1");
document.getElementById("table_column1").appendChild(table1);
// thead 1
var thead1 = document.createElement("thead");
thead1.style.border = "1px solid black";
thead1.innerHTML =
    "<tr><th>Team 1</th><th>B1</th><th>B2</th><th>B3</th><th>B4</th><th>B5</th><th>B6</th><th>Total</th></tr>";
document.getElementById("table1").appendChild(thead1);
//column entities
thead1.innerHTML +=
    '<tr id="t11" style="border: 1px solid black;"><th>P1</th></tr><tr id="t12" style="border: 1px solid black;" ><th >P2</th></tr><tr  id="t13" style="border: 1px solid black;" ><th >P3</th></tr><tr  id="t14" style="border: 1px solid black;"><th >P4</th></tr><tr  id="t15" style="border: 1px solid black;"><th >P5</th></tr><tr id="t16" style="border: 1px solid black;"><th  >P6</th></tr><tr  id="t17" style="border: 1px solid black;"><th>P7</th></tr><tr  id="t18" style="border: 1px solid black;"><th>P8</th></tr><tr  id="t19" style="border: 1px solid black;"><th>P9</th></tr><tr id="t110" style="border: 1px solid black;"><th>P10</th></tr>';
//table 2
var table2 = document.createElement("table");
table2.setAttribute("class", "table");
table2.setAttribute("id", "table2");
document.getElementById("table_column3").appendChild(table2);
//thead 2
var thead2 = document.createElement("thead");
thead2.innerHTML =
    "<tr><th>Team 2</th><th>B1</th><th>B2</th><th>B3</th><th>B4</th><th>B5</th><th>B6</th><th>Total</th></tr>";
document.getElementById("table2").appendChild(thead2);
//column entities
thead2.innerHTML +=
    '<tr id="t21" style="border: 1px solid black;"><th>P1</th></tr><tr id="t22" style="border: 1px solid black;" ><th >P2</th></tr><tr  id="t23" style="border: 1px solid black;" ><th >P3</th></tr><tr  id="t24" style="border: 1px solid black;"><th >P4</th></tr><tr  id="t25" style="border: 1px solid black;"><th >P5</th></tr><tr id="t26" style="border: 1px solid black;"><th  >P6</th></tr><tr  id="t27" style="border: 1px solid black;"><th>P7</th></tr><tr  id="t28" style="border: 1px solid black;"><th>P8</th></tr><tr  id="t29" style="border: 1px solid black;"><th>P9</th></tr><tr id="t210" style="border: 1px solid black;"><th>P10</th></tr>';;
//result
var result = document.createElement("h3");
result.setAttribute("id", "result");
document.getElementById("table_column2").appendChild(result);
// GETTING ALL THE QUERIES NEEDED
var timerDisplay = document.getElementById("timer");
var hitOne = document.getElementById("hit1");
var hitTwo = document.getElementById("hit2");
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        //VARIABLES DECALRED FOR DISPLAYING RUNS AND FOR SUM OF THEM
        this.players = 1;
        this.balls = 1;
        this.total = 0;
        this.teamTotal = 0;
        this.team = 1;
        //VARIABLE DECALRED TO TOGGLE BETWEEN TWO CONDITIONS
        this.toggle = 1;
        this.running = 0;
        this.seconds = 0;
        //METHOD TO GENERATE RUNS BETWEEN 0-6
        this.randomRunGenerator = function () {
            var run = Math.floor(Math.random() * 7);
            return run;
        };
        // METHOD TO DISPLAY RUNS IN THE TABLE INITITES WITH CLICK EVENT
        var countdown = 60;
        var timerInterval;
        function updateCountdown() {
            timerDisplay.textContent = countdown + "s";
          
            if (countdown <= 0) {
              clearInterval(timerInterval);
              timerDisplay.textContent = "Time's up!";
              // Handle logic when the timer reaches 0 (e.g., switch teams)
              if (game) {
                game.resetTimer();
              }
            } else {
              countdown--;
            }
          }
          updateCountdown();
          
          function startCountdown() {
            if (!timerInterval) {
              timerInterval = setInterval(updateCountdown, 1000); // Update timer every second
            }
          }
          
          // Function to stop the countdown timer
          function stopCountdown() {
            clearInterval(timerInterval);
            timerInterval = null;
          }

        this.displayRuns = function () {
            //IF CONDITION FOR 1P PLAYERS
            if (_this.players < 11) {
                //INITIALISATION OF A TEAM'S PLAY
                if (_this.players === 1) {
                    _this.startTimer();
                }
                // ELEMENT CREATED FOR TOTAL OF EACH PLAYER
                var totalPara = document.createElement("td");
                totalPara.style.border = "1px solid black";
                //IF CONDITION FOR 6 BALLS
                if (_this.balls < 7) {
                    var run = _this.randomRunGenerator();
                    var run_data = document.createElement("td");
                    run_data.style.border = "1px solid black";
                    run_data.innerHTML = "" + run;
                    //IF THE BATSMAN IS OUT I.E IF HE SCORES ZERO
                    if (run === 0) {
                        document
                            .getElementById("t" + _this.team + _this.players)
                            .appendChild(run_data);
                        totalPara.innerHTML = "<b style=\"color:dodgerblue\">" + _this.total + "</b>";
                        document
                            .getElementById("t" + _this.team + _this.players)
                            .appendChild(totalPara);
                        //INCREEMENTS AS NEXT PLAYER WILL BE PLAYING
                        _this.players++;
                        _this.balls = 1;
                        _this.total = 0;
                    }
                    else {
                        document
                            .getElementById("t" + _this.team + _this.players)
                            .appendChild(run_data);
                        _this.balls++;
                        _this.total += run;
                        _this.teamTotal += run;
                        document.getElementById("score" + _this.team).innerHTML = _this.teamTotal;
                    }
                }
                else {
                    //AFTER A PLAYER'S CHANCE IS OVER I.E AFTER HE PLAYS 6 BALLS
                    totalPara.innerHTML = "<b style=\"color:dodgerblue\">" + _this.total + "</b>";
                    document
                        .getElementById("t" + _this.team + _this.players)
                        .appendChild(totalPara);
                    _this.players++;
                    _this.balls = 1;
                    _this.total = 0;
                }
            }
            else {
                //WHEN ALL PLAYERS HAVE COMPLETED
                document.getElementById("score" + _this.team).innerHTML = _this.teamTotal;
                _this.resetTimer();
            }
        };
        //METHOD TO START/INITIALISE TIMER FOR BOTH TEAMS(ON FIRST CLICK EVENT)
        this.startTimer = function () {
    if (!_this.running) {
      startCountdown();
      _this.running = 1;
    }
  };
        //METHOD TO DISPLAYTIMER FOR BOTH TEAMS
        this.displayTime = function () {
            // No need to calculate the timer display here
          };
        //METHOD USED TO RESET TIMER FOR THE SECOND TEAM
        this.resetTimer = function () {
            _this.difference = 0;
            _this.running = 0;
            _this.seconds = "0";
            timerDisplay.innerHTML = "60s";
            clearInterval(_this.tInterval);
            //AFTER FIRST TEAM COMPLETES IT'S TURN
            if (_this.toggle === 1) {
                hitOne.setAttribute("class", "btn btn-primary disabled");
                hitOne.removeEventListener("click", game.displayRuns, false);
                hitTwo.setAttribute("class", "btn btn-primary");
                hitTwo.addEventListener("click", game.displayRuns);
                _this.team = 2;
                _this.players = 1;
                _this.balls = 1;
                _this.total = 0;
                _this.teamTotal = 0;
                _this.toggle = 0;
                stopCountdown();
                countdown=60;
            }
            //AFTER SECOND TEAM COMPLETES IT'S TURN
            else {
                timerDisplay.innerHTML = "0s";
                hitTwo.setAttribute("class", "btn btn-primary disabled");
                hitTwo.removeEventListener("click", game.displayRuns, false);
                _this.handleWinner();
            }
        };
        //COMPARES THE RUNS SCORED AND DISPLAY APPROPRIATE RESULTS
        this.handleWinner = function () {
            stopCountdown();
            var team1 = parseInt(document.getElementById("score1").innerHTML);
            var team2 = parseInt(document.getElementById("score2").innerHTML);
            if (team1 > team2) {
                document.getElementById("result").innerHTML = "team 1 is the winner by "+(team1-team2);
            }
            else if (team1 < team2) {
                document.getElementById("result").innerHTML = "team 2 is the winner by "+(team2-team1);
            }
            else {
                document.getElementById("result").innerHTML = "Match Tied";
            }
        };
    }
    return Game;
}());
//INSTANTIATIONING THE CLASS
var game = new Game();
document.getElementById("hit1").addEventListener("click", game.displayRuns);
