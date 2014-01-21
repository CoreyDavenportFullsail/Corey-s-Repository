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
var two=prompt("Enter 2nd grade or press f to finish");
