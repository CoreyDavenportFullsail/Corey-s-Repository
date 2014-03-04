/**
 * Created by Administrator on 2/28/14.
 */
(function(){
var names = ["bob","joe","dave","mike","jan"];
var people = [];
var message = document.querySelector("#txt");
var interval = setInterval(update,1000/3);

    createPeople();

    function createPeople(){
   //next lines guarantee no repeat names

    for (var i = 0; i < 3;i++){
        var p = names[~~(Math.random()*names.length)];
        names.splice(names.indexOf(p),1);  //splice needs to use the index number of the array, so use indexOf in place of the string
        var newPerson = new Person(p); //This creates a new person
        people.push(newPerson); //This pushes new person into the people array
    }
   }

    function update (){
        people.forEach(function(e){
            e.update();
            message.innerHTML = people[0].action;
        })
    }





}());