const play= $('#play');
console.log(play);
const boardGame=$('#boardGame');
const instructions=$('#instructions');
play.on("mousedown",() => {
  console.log(play.text("Play"));
makeBoard();
if(play.text() === 'Play'){
  play.text('Restart');
    }else{
      play.text('Play');
}
startGame();
})
//This initizalies was happens when a player clicks on the play button, and mousedown means the user has their mouse over it and they click it.
const makeBoard = () => {
  boardGame.empty();
  let count = 1;
  for (let r=0;r<3;r++){
    let row = $('<div/>');
    //rows not exceeding 3
    for(let c=0;c<3;c++){
    let button= $('<button/>',{
id:count ,
class:'slot'
//ensures it doesn't exceed 3 columns
});
row.append($(button).clone().text('?'));
count++;
} 
$(boardGame).append(row);
}
}
const startGame = () =>{
  let player1={};
  let player2={};
//setting up players before giving them x or o.
  const X ="X";
  const O = "O";
  const firstMove = Math.random() < 0.5 ? X:O;
//it is a 50/50 random chance on which variable the player will get.
  currentplayer = firstMove;
//whoever ends up with first chance to play and their corresponding variable will go first.
let move=0;
let winner=false;
//at start of game their are no winners or moves made yet
instructions.prepend('first move goes to:' + firstMove);
//This gives our beginner heading on who goes first.
$('.slot').on("mouseup" , (e) => {
  console.log(e.target.id);
  playerMove(e.target.id);
//The 9 slots of tictactoe
})
const playerMove = (slot) => {
  move++;
  let click = $({slot});
click.text(currentplayer);
if (currentplayer === X){
  
  slot.text='X';
  currentplayer=O;
}else{
  slot.text='O';
  currentplayer=X;
}


// I followed along in Week 11 video this insures that when x it will go to and in any other case it goes to x from o.
//It should work however I am not sure if it works because I have tried many methods and I am not able to edit text.I believe the game is restarting, but I am not sure due to this.


instructions.text('Now, it is'+ currentplayer+'s turn!');
slot[slot-1] === currentplayer;


  

}
const checkForWinner = () => {
  let player = slot[0];
if(slot[1] === player && slot[2]=== player){
  console.log(player + 'won');
  
  //winning statement(this will encompass our x or o wins)
}
else{
  console.log('It is a draw');
  //this encompasses our tie situation
}
}
}
