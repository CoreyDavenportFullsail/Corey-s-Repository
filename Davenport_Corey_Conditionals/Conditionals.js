/**
 * Created by Corey Davenport on 1/28/14. "Conditionals Assignment"
 */

//Personal
// "Are you going to need a sweater?"
// This program is intended to tell me, based on a couple weather conditions, whether or not I am going to need
// a sweater.
alert("Are you going to need a sweater when you go out?");


var userTemperature=prompt("What is the temperature?");

if(parseInt(userTemperature)>=70){
    alert("Have fun! You're not going to need a sweater!");
}else{
    alert("Go get a sweater.");
}

//Industry
//"Should you take this commissioned, non-hourly based job?"
//This program is intended to let one know whether or not it is a smart idea to take on a certain job, depending on
//whether or not the amount offered is above or below minimum wage.

alert("Should you take this freelance work?");

var statesMinWage=prompt("What is the minimum wage (per hour) in your state?");
var jobOffer=prompt("How much money is being offered for the job?");
var projectedHoursOfWork=prompt("Give a rough estimate of the amount of time this project will take.");

if(parseInt(jobOffer)<=parseInt(statesMinWage)*parseInt(projectedHoursOfWork)){
    alert("For the love of god, DON'T DO IT!");
}else{
    alert("You're good. Take the job.");
}

//Wacky
//"Should you hit on them?"
//This program is intended to help the user find out if he should hit on someone.
alert("Should you hit on them?");