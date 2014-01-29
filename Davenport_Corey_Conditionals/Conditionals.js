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