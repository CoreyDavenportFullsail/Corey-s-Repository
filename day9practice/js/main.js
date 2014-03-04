/**
 * Created by Administrator on 2/25/14.
 */
// constructor objects

(function (){

    function Student (){
        this.name = "";
       this.studentID = "";
        this.degree = "";
        this.grades = [];
    }
    Student.prototype.average = function (){
        var total = 0;
        for (var i = 0; i<this.grades.length; i++){
          total+=this.grades[i];
      }
        return total/this.grades.length;
    };

   document.querySelector("#button").addEventListener("click", onClick);

    var studentList =[];
    function onClick (e) {
        var student = new Student();
        student.name = document.querySelector("#nameInput").value;
        student.grades.push(parseInt(document.querySelector("#gradeInput1").value));
        student.grades.push(parseInt(document.querySelector("#gradeInput2").value));
        studentList.push(student);
        console.log(student.average());
    }
//    console.log(studentList[0].average());

    function display(e){
        studentList.forEach(function (ele){
            console.log(ele.name, ele.average());
        })
    }

})();