/**
 * Created by Corey Davenport on 1/15/14. "Celsius To Farhenheit"
 */
//Purpose is to convert a temperature to degrees Celsius or degrees Farhenheit

var temp=prompt("What is the temperature?");
var unit=prompt("Type 'C' if Celsius, or 'F' for Farhenheit.THIS IS CASE SENSITIVE.");

if(unit === "F"){
    alert((temp-32)/1.8 + " degrees Celsius")
}else if (unit === "C"){
    alert((temp * 1.8)+32 + " degrees Farhenheit")
}
