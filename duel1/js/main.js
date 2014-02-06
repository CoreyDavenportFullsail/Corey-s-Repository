/**
 * Created by Corey Davenport on 2/4/14. "Duel 1 Assignment"
 */
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

    alert(playerOneName+":"+playerOneHealth+" ~*~*~*~ROUND 1~*~*~*~ "+playerTwoName+":"+playerTwoHealth);

    for(var i = 0;i < 10;i++){
        var minDamagePlayerOne=playerOneDamage*.5;
        var minDamagePlayerTwo=playerTwoDamage*.5;
        var dam1=Math.floor(Math.random()*(playerOneDamage-minDamagePlayerOne)+minDamagePlayerOne);
        var dam2=Math.floor(Math.random()*(playerTwoDamage-minDamagePlayerTwo)+minDamagePlayerTwo);

        //player takes damage
        playerOneHealth-=dam1;
        playerTwoHealth-=dam2;

        console.log(playerOneName+":"+playerOneHealth+" "+playerTwoName+":"+playerTwoHealth);

        var winner = checkWinner();
        console.log(winner);

        if (winner === "No winner!"){
            round++;
            alert(playerOneName+":"+playerOneHealth+" ROUND "+round+" OVER "+playerTwoName+":"+playerTwoHealth);
        }else{
            alert(winner);
            break;
        }
    }
}

//Winner check function
function checkWinner(){
    var result= "No winner!";
    if(playerOneHealth < 1 && playerTwoHealth < 1){
        result="They're both dead.";
    }else if(playerOneHealth < 1){
     result = playerTwoName + " WINS!";
    }else if(playerTwoHealth < 1){
      result = playerOneName + " WINS!";
    }
    return result;
}



fight();