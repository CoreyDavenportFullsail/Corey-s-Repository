/**
 * Created by Corey Davenport on 1/14/14. "Slice of Pie Part 2"
 */
// The purpose of this program will be to print out the number of slices left over for Sparky to eat after all
//the pizza slices have been divided up, using the same numbers from "Slice of Pie Part 1"

//First we need to sort out how many pieces each person gets

var pizzasOrdered= 6;
var slicesPerPizza= 8;
var peopleAtParty= 12;
var slicesTotal= pizzasOrdered*slicesPerPizza;
var slicesPerPerson= slicesTotal/peopleAtParty;
var slicesSparkyGets= slicesTotal % peopleAtParty;

console.log("Sparky got" + " " + slicesSparkyGets + " " + "slices of pizza.");