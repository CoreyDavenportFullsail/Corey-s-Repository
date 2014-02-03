/**
 * Created by Corey Davenport on 2/2/14.
 */
//Personal
//"Where to eat" This program is just going to tell me based on the amount of money I have where I should go out to eat

alert("Where should you go out to eat?");

function decision(a,b){

    if(parseInt(a)>="10.00" && b==="Full"||b==="Half"){
        alert("Go somewhere nice.");
    }
    else if(parseInt(a)>="5.00" && parseInt(a)<"10.00" && b==="Full"||b==="Half"||b==="Nearly empty"){
        alert("Just go to Mcdonalds or something.");
    }
    else if(parseInt(a)<"5.00" && b==="Full"||b==="Half"||b==="Nearly empty"){
        alert("Save your money, idiot. Stop eating out so much.");
    }

}
decision(prompt("How much money do you have?"), prompt("How full is your gas tank? Full, Half, or Nearly empty? CASE SENSITIVE"));
//Industry
//"First and last name" This program will simply take in two separate strings and put them together in an alert.

alert("First and last name");


function firstAndLast(firstName,lastName){
   return alert(firstName+ " "+lastName);
}
firstAndLast(prompt("What is your first name?"), prompt("What is your last name?"));

//Wacky
//"Basic Calculator" Basically, depending on a user input, this will perform a mathematical operation on 2 numbers

alert("Basic Calculator");

var one=prompt("Enter 1st number");
var two=prompt("Enter 2nd number");

function calculator(a){
    if(a==="1"){
        return alert(one + two);
    }else if(a==="2"){
        return alert(one - two);
    }else if(a==="3"){
        return alert(one * two);
    }else if(a==="4"){
        return alert(one / two);
    }
}
calculator(prompt("Which operation would you like to perform? Enter 1 for addition, 2 for subtraction, 3 for " +
    "multiplication, or 4 for division"));