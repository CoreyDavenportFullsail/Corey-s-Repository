/**
 * Created by Corey Davenport on 2/2/14.
 */
//Personal
//"Where to eat" This program is just going to tell me based on the amount of money I have where I should go out to eat

alert("Where should you go out to eat?");

function decision(a,b){

    if(parseInt(a)>="10.00" && b==="Full"||b==="Half"){
        return alert("Go somewhere nice.");
    }
    else if(parseInt(a)>="5.00" && parseInt(a)<"10.00" && b==="Full"||b==="Half"||b==="Nearly empty"){
        return alert("Just go to Mcdonalds or something.");
    }
    else if(parseInt(money)<"5.00" && gas==="Full"||gas==="Half"||gas==="Nearly empty"){
        return alert("Save your money, idiot. Stop eating out so much.");
    }

}
decision(prompt("How much money do you have?"), prompt("How full is your gas tank? Full, Half, or Nearly empty? CASE SENSITIVE"));
//Industry
//"First and last name"

alert("First and last name");

var firstName=prompt("Enter your first name");
var lastName=prompt("Enter your last name");


function firstandlast(firstName,lastName){
    return(firstName+" "+lastName)
}

console.log(firstandlast());
//Wacky
//