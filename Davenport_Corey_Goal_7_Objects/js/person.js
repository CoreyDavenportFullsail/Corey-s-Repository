/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function () {


    Person.nameList = ["Corey","Jon","Don","Kase","Vic"];
    Person.jobList = ["Fast Food","Student","CEO","Unemployed"];
    function Person(name){
        this.name = name;
        this.job = Person.jobList[~~(Math.random()*Person.jobList.length)];
        this.action = ["eating","sleeping","working"];

    }
    Person.prototype.whatAction = function(){
       return  this.action[~~(Math.random()*this.action.length)];
    };


    window.Person = Person;
})();