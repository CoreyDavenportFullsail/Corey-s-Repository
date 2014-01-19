/**
 * Created by Corey Davenport on 1/19/14. "Expressions Assignment"
 */

//Personal
//"Area and Perimeter of a Right Triangle Calculator"
//This program is intended for personal use to help find the area of a right triangle.

var b=prompt("What is the measurement of the base?");
var h=prompt("What is the measurement of the height?");
var area= 1/2*parseFloat(b)*parseFloat(h);
var areaAlert=alert("The area of the triangle is "+ area);
var nextValue=alert("Now to find the perimeter...");
var sideC=prompt("What is the third measurement of the triangle?");
var perimeter= parseFloat(b)+parseFloat(h)+parseFloat(sideC);
var perimeterAlert=alert("The perimeter of the triangle is "+perimeter);


//Industry
