/**
 * Created by Administrator on 2/27/14.
 */
(function(){
var stud = new Student ();
    stud.grades = [60,60,60];
    stud.name = "Butt";
    stud.id = "12345";
    stud.degree = "WDD";

    var students = [];

        var names = ["Ortiz","Victor","Justin", "Pathat", "Pat", "Steve", "Don", "Kase","Dan", "Marie", "Corey"];
    for (var i = 0; i < names.length; i++){
        var student = new Student();
        student.name = names[~~(Math.random()*names.length)];
        students.push(students);
    }


    winner();

    function winner(){
        students.forEach(function(e){
            console.log(e.name);
        })
    }

    document.querySelector("#output").innerHTML = stud.name+ ":"+ stud.average();





}());