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
//This program could save you a lot of embarrassment, friend.
var theirAttractiveness=prompt("Score the subject on a scale of 1-10 on their attractiveness.");
var yourAttractiveness=prompt("Score yourself on a scale of 1-10 on your attractiveness...BE HONEST.");
var theirRelationshipStatus=prompt("What is their relationship status? Answer Single, Taken, or Unsure. CASE SENSITIVE);
var yourRelationshipStatus=prompt("What is your relationship status? Answer Single, Taken, or Unsure. CASE SENSITIVE");
var terribleness=prompt("Are you a terrible person who would cheat? Answer y for Yes, or n for No");
var embarrassingPossessions=prompt("Do you, or have you, ever owned a fedora, samurai sword, or wall scroll? Answer y" +
    " for Yes, or n for No");

if(parseInt(theirAttractiveness)<=parseInt(yourAttractiveness) && theirRelationshipStatus==="Single" ||
    theirRelationshipStatus==="Unsure" && yourRelationshipStatus==="Single" && terribleness==="n" &&
        embarrassingPossessions==="n"){
    alert("Sure go for it. It probably won't hurt.)
}else if(parseInt(theirAttractiveness)>parseInt(yourAttractiveness)){
    alert("I would advise against it.");
}else if(parseInt(theirAttractiveness)<=parseInt(yourAttractiveness) && theirRelationshipStatus==="Taken"
            && yourRelationshipStatus==="Single" || yourRelationshipStatus==="Unsure" && terribleness==="y"
            || terribleness==="n" && embarrassingPossessions==="y" || embarrassingPossessions==="n"){
    alert("You really shouldn't. It's going to annoy them.");
}else if(parseInt(theirAttractiveness)<=parseInt(yourAttractiveness) && theirRelationshipStatus==="Single"
    && yourRelationshipStatus==="Taken" || yourRelationshipStatus==="Unsure" && terribleness==="y"
    && embarrassingPossessions==="y" || embarrassingPossessions==="n"){
    alert("Don't do it. I know you admitted to being shitty, but come on.");
}else if(embarrassingPossessions==="y"){
    alert("No. Just...No.");
}else if(terribleness==="y"){
    alert("No.");
}

