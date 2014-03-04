/**
 * Created by Administrator on 2/27/14.
 */

(function(){
    function Student(){
        this.name ="";
        this.degree ="";
        this.id = "";
        this.grades = [];


    }

Student.prototype.average = function(){
    var total =0;
    this.grades.forEach(function(g){
        total += g;

    });
    return total/this.grades.length;
};

window.Student = Student;

}());