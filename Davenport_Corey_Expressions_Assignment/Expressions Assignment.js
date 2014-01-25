/**
 * Created by Corey Davenport on 1/19/14. "Expressions Assignment"
 */

//Personal
//"Area and Perimeter of a Right Triangle Calculator"
    //This program is intended for personal use to help find the area of a right triangle, because I'm in a math.
    //class at the moment.

var b=prompt("What is the measurement of the base?");
var h=prompt("What is the measurement of the height?");
var area= 1/2*parseFloat(b)*parseFloat(h);
alert("The area of the triangle is "+ area);
alert("Now to find the perimeter...");
var sideC=prompt("What is the third measurement of the triangle?");
var perimeter= parseFloat(b)+parseFloat(h)+parseFloat(sideC);
alert("The perimeter of the triangle is "+perimeter);


//Industry
//"Average Grade of Class""
    //This program is intended for use by teachers. Often teachers are interested in knowing the average grade a
    //particular class made on a test or quiz, and this calculator will allow them to enter in figures and output the
    //class average.


alert("Class Average Calculator");
var one=prompt("Enter 1st grade");
var two=prompt("Enter 2nd grade");
var three=prompt("Enter 3rd grade");
var four=prompt("Enter 4th grade");
var five=prompt("Enter 5th grade");
var six=prompt("Enter 6th grade");
var seven=prompt("Enter 7th grade");
var eight=prompt("Enter 8th grade");
var nine=prompt("Enter 9th grade");
var ten=prompt("Enter 10th grade");
var average=((parseFloat(one)+parseFloat(two)+parseFloat(three)+parseFloat(four)+parseFloat(five)+
    parseFloat(six)+parseFloat(seven)+parseFloat(eight)+parseFloat(nine)+parseFloat(ten))/10);
alert("Finished?");
alert("Average is "+average);

//Wacky
//"How To Divide Up a Cake For A Party To Which Corey Is Invited"
    //This program is intended to inform the user how many slices of cake should be distributed amongst people at a
    //party in which Corey is in attendance.
alert("Cake Division At Event Corey is Attending");
var peopleAtParty=prompt("How many people are going to be in attendance?");
var cakesOrdered=prompt("How many cakes?");
var slicesOfCake= parseInt(cakesOrdered)*8;
var slicesPerPerson= parseFloat(slicesOfCake)/parseFloat(peopleAtParty);
var slicesForCorey=parseInt(slicesOfCake);
alert("You ordered "+ cakesOrdered+", so there will be"+slicesOfCake+", which should be "+slicesPerPerson+" per person. However, with corey present, you will need" +
    "give him "+slicesForCorey+" slices.");