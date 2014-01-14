//Created by Corey Davenport on 1/13/14. Slice of Pie Part 1
// The purpose of this is to accuratel calculate how many slices of pizza 
//  everyone will receive at a party.

var pizzasOrdered= 6;
var slicesPerPizza= 8;
var peopleAtParty= 12;
var totalSlices= pizzasOrdered*slicesPerPizza;
var slicesPerPerson= totalslices/peopleAtParty;

console.log("Each person ate" + " " + slicesPerPerson + " " + "slices of pizza at the party"
             );
