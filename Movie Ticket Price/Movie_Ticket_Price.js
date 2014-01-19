/**
 * Created by Corey Davenport on 1/15/14. "Movie Ticket Price"
 */
// Purpose of this program is to find out what a customer is going to pay to go to the movies, whether that be the
// standard price or the discounted price, depending on 2 factors: Senior citizenship, and time of day.

var ageOfCustomer= prompt("How old are you?");
var timeOfDay=prompt("What showing? 1:00PM, 3:00PM, 3:45PM, 4:00PM, 6:45PM, or 11:00PM? ");

//Note to Joe: For some reason GitHub isn't updating as I make changes, I promise I actually wrote this code. Will
// bring this up next class.

if(ageOfCustomer >= "55"|| ageOfCustomer <= "10"){
    alert("$7.00");
    console.log("$7.00");
}else if(timeOfDay ==="3:00PM"||timeOfDay==="3:45PM"||timeOfDay==="4:00PM"){
    alert("$7.00");
    console.log("$7.00");
}else{
    alert("$12.00");
    console.log("$12.00");
}


