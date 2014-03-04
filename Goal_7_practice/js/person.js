/**
 * Created by Administrator on 2/28/14.
 */
(function (){


    Person.jobList = ["Student","Web Developer","CEO","Unemployed","Stripper"];
    Person.actions = ["eating","sleeping","working"];
    function Person (name){
        this.name = name;
        this.jobs = Person.jobList[~~(Math.random()*Person.jobList.length)];
        this.action = Person.action[~~(Math.random()*Person.action.length)];
    }
    Person.prototype.update = function(){
        if (Math.random()<.01){
            this.action = Person.action[~~(Math.random()*Person.action.length)];
        }
        };


    window.Person = Person;

}());