/**
 * Created by Corey Davenport on 1/15/14. "Check The Login"
 */
// Purpose of this program is to check the login information of a user.
//I will be using preset data for the Username and Password

var enteredUserName=prompt("Enter Username.");
var enteredPassword=prompt("Enter Password.");
var correctUserName= "Corey";
var correctPassword= "12345";

if(enteredUserName === correctUserName && enteredPassword === correctPassword){
    alert("Welcome, Corey!");
    console.log("Welcome, Corey!");
}else if(enteredUserName != correctUserName && enteredPassword === correctPassword){
    alert("User not found. Try again.");
    console.log("User not found. Try again.");
}else if(enteredUserName === correctUserName && enteredPassword != correctPassword){
    alert("Password does not match our records.");
    console.log("Password does not match out records.");
}