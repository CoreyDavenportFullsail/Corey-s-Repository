/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */


(function () {
    var person1Name = document.querySelector('#r1c1');
    var person2Name = document.querySelector('#r2c1');
    var person3Name = document.querySelector('#r3c1');

    var person1Job = document.querySelector('#r1c2');
    var person2Job = document.querySelector('#r2c2');
    var person3Job = document.querySelector('#r3c2');

    var person1Action = document.querySelector('#r1c3');
    var person2Action = document.querySelector('#r2c3');
    var person3Action = document.querySelector('#r3c3');


    var int = setInterval(update,1000*3);
    var person = new Person(Person.nameList[~~(Math.random()*Person.nameList.length)]);
    var job = new Person(Person.jobList[~~(Math.random()*Person.jobList.length)]);


    function pickNameFunction(){
        for (var i=0;i<3;i++){
            var pickName = Person.nameList[~~(Math.random()*Person.nameList.length)];
            var indexName = Person.nameList.indexOf(pickName);
            var spliceName = Person.nameList.splice(indexName,1);

            console.log(Person.nameList);
            return pickName;


        }
    }
    function pickJobs(){
        person1Job.innerHTML = Person.jobList[~~(Math.random()*Person.jobList.length)];
        person2Job.innerHTML = Person.jobList[~~(Math.random()*Person.jobList.length)];
        person3Job.innerHTML = Person.jobList[~~(Math.random()*Person.jobList.length)];
    }
    function pickingNames(){
        person1Name.innerHTML = pickNameFunction();
        person2Name.innerHTML = pickNameFunction();
        person3Name.innerHTML = pickNameFunction();

    }

    pickJobs();
    pickingNames();


    function update(){
        person1Action.innerHTML = person.whatAction();
        person2Action.innerHTML = person.whatAction();
        person3Action.innerHTML = person.whatAction();

    }

})();