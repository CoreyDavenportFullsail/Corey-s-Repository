/**
 * Created by Administrator on 3/1/14.
 */
(function(){
function Student(n,street,city,state,grades){

      this.name = n;
      this.address ={Street: street, City: city, State: state}
      this.grades = grades;
      this.GPA = 0;

    Student.prototype.getAverage = function(){
        var total = 0;
        for (var i = 0; i < this.grades.length; i++){
            total += this.grades[i];
        }
        var avg = total / this.grades.length;
       return avg.toFixed(2);

    }
}


window.Student = Student;
})();