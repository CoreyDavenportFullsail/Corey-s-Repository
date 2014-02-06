/**
 * Created by Corey Davenport on 2/4/14. "Duel 1 Assignment"
 */

//Player Arrays
var playerOne=["Link",100,40];
var playerTwo=["Wario",100,40];

//Player names
var playerOneName="Link";
var playerTwoName="Wario";

//Player health
var playerOneHealth=100;
var playerTwoHealth=100;

//Player damage
var playerOneDamage=40;
var playerTwoDamage=40;

var round=1;


//fight function
function fight(){

    alert(playerOne[0]+":"+playerOne[1]+" ~*~*~*~ROUND 1~*~*~*~ "+playerTwo[0]+":"+playerTwo[1]);

    for(var i = 0;i < 10;i++){
        var minDamagePlayerOne=playerOne[2]*.5;
        var minDamagePlayerTwo=playerTwo[2]*.5;
        var dam1=Math.floor(Math.random()*(playerOne[2]-minDamagePlayerOne)+minDamagePlayerOne);
        var dam2=Math.floor(Math.random()*(playerTwo[2]-minDamagePlayerTwo)+minDamagePlayerTwo);

        //player takes damage
        playerOne[1]-=dam1;
        playerTwo[1]-=dam2;

        console.log(playerOne[0]+":"+playerOne[1]+" "+playerTwo[0]+":"+playerTwo[1]);

        var winner = checkWinner();
        console.log(winner);

        if (winner === "No winner!"){
            round++;
            alert(playerOne[0]+":"+playerOne[1]+" ROUND "+round+" OVER "+playerTwo[0]+":"+playerTwo[1]);
        }else{
            alert(winner);
            break;
        }
    }
}

//Winner check function
function checkWinner(){
    var result= "No winner!";
    if(playerOne[1] < 1 && playerTwo[1] < 1){
        result="They're both dead.";
    }else if(playerOne[1] < 1){
     result = playerTwo[0] + " WINS!";
    }else if(playerTwo[1] < 1){
      result = playerOne[0] + " WINS!";
    }
    return result;
}



fight();