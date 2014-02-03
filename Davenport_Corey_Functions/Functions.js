/**
 * Created by Corey Davenport on 2/2/14.
 */
//Personal
//"Where to eat" This program is just going to tell me based on the amount of money I have where I should go out to eat

alert("Where should you go out to eat?");

var money=prompt("How much money do you have?");
var gas=prompt("How much gas do you have? Full, Half, Nearly empty. CASE SENSITIVE!");

function decision(money,gas){
    if(parseInt(money)>="10.00" && gas==="Full"||gas==="Half"){
        alert("Go somewhere nice.");
    }
    else if(parseInt(money)>="5.00" && gas==="Full"||gas==="Half"||gas==="Nearly empty"){
        alert("Just go to Mcdonalds or something.");
    }
    else if(parseInt(money)<"5.00" && gas==="Full"||gas==="Half"||gas==="Nearly empty"){
        alert("Save your money, idiot. Stop eating out so much.");
    }

    decision();
}
//Industry
//"First and last name"

alert("First and last name");

var firstName=prompt("Enter your first name");
var lastName=prompt("Enter your last name");

firstandlast();
function firstandlast(firstName,lastName){
    return(firstName+""+lastName)
}
//Wacky
