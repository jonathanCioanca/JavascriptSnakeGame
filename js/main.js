var gameDog;
var gameTable;
var gameTableX = Math.floor(Math.random()*20);
var gameTableY = Math.floor(Math.random()*20);
var ballLocationX;
var ballLocationY;
document.onkeydown = checkKey;

function generate_table() {
  
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  tbl.id ="gameTable";
  var tblBody = document.createElement("tbody");
  
  // creating all cells
  for (var i = 0; i < 20; i++) {
    // creates a table row
    var row = document.createElement("tr");
    
    for (var j = 0; j < 20; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      cell.id
      cell.style.width = '40px';
      cell.style.height= '40px';
      // var cellText = document.createTextNode("");
      cell.bgColor="red";
      // cell.appendChild(cellText);
      row.appendChild(cell);
    }
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
  
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
};

var dog = function(first,second){
  
  return {
    
    body : [
      {
        x: first,
        y: second
      }
    ],

    up: function(){
      if(this.body[0].y >=1) {
        var newPosition = {
          x: this.body[0].x,
          y: this.body[0].y -1
          };
          this.body.unshift(newPosition);
          if(!isBallTouch()){
            this.body.pop();
            }
            else{
              generate_ball();
            }
        gameTable.rows[this.body[0].y].cells[this.body[0].x].bgColor="green";
        gameTable.rows[this.body[this.body.length-1].y].cells[this.body[this.body.length-1].x].bgColor="red";
        console.log(this.body);
        
       
      }
    },

    down: function(){
      if(this.body[0].y <=18) {
        var newPosition = {
          x: this.body[0].x,
          y: this.body[0].y + 1
          };
          this.body.unshift(newPosition);
          if(!isBallTouch()){
            this.body.pop();
            }
            else{
              generate_ball();
            }
        gameTable.rows[this.body[0].y].cells[this.body[0].x].bgColor="green"; 
        gameTable.rows[this.body[this.body.length-1].y].cells[this.body[this.body.length-1].x].bgColor="red";
      }
    },
    
    right: function(){
      if(this.body[0].x <=18) {
        var newPosition = {
          x: this.body[0].x + 1,
          y: this.body[0].y
          };
          this.body.unshift(newPosition);
          if(!isBallTouch()){
            this.body.pop();
            }
            else{
              generate_ball();
            }
        gameTable.rows[this.body[0].y].cells[this.body[0].x].bgColor="green";
        gameTable.rows[this.body[this.body.length-1].y].cells[this.body[this.body.length-1].x].bgColor="red";
      }
    },
    
    left: function(){
      if(this.body[0].x >=1) {
        var newPosition = {
          x: this.body[0].x -1,
          y: this.body[0].y
          };
        this.body.unshift(newPosition);
        if(!isBallTouch()){
          this.body.pop();
          }
          else{
            generate_ball();
          }
        gameTable.rows[this.body[0].y].cells[this.body[0].x].bgColor="green"; 
        gameTable.rows[this.body[this.body.length-1].y].cells[this.body[this.body.length-1].x].bgColor="red";
      }
    }
    
  }
  
};

function generate_dog(){
  
  gameTable = document.getElementById("gameTable");
  if(!isNaN(gameTableX) && !isNaN(gameTableY)){
    gameTable.rows[gameTableY].cells[gameTableX].bgColor="green";
    gameDog = dog(gameTableX,gameTableY);
    document.getElementById("makeDog").style.visibility = "hidden";
    generate_ball();
    var newPosition = {
      x: gameTableX,
      y: gameTableY
    };
    gameDog.body.push(newPosition);
  }
};

function checkKey(e) {
  
  e = e || window.event;
  
  if (e.keyCode == '38') {
    // up arrow
    gameDog.up();
  }
  else if (e.keyCode == '40') {
    // down arrow
    gameDog.down();
  }
  else if (e.keyCode == '37') {
    // left arrow
    gameDog.left();
  }
  else if (e.keyCode == '39') {
    // right arrow
    gameDog.right();
  }
  
};

function generate_ball(){
    gameTable = document.getElementById("gameTable");
    ballLocationX = Math.floor(Math.random()*20);
    ballLocationY = Math.floor(Math.random()*20);
    gameTable.rows[ballLocationY].cells[ballLocationX].bgColor="yellow";
  
};

function isBallTouch(){
    if(gameDog.body[0].x== ballLocationX && gameDog.body[0].y == ballLocationY){
     return true;
   }
   return false;
};




