/*
	* Mid Terms for PWA-1 1304
	* Corey Davenport 02/15/2014
*/
(function(){
    //logging "Connected" to insure that main.js is properly attached to .html file
    console.log(".js to .html is connected");

    var buttonClick = document.querySelector(".buttonred");
    buttonClick.addEventListener("click", onClick);


    console.log("***** This is an array of students before another student is added *****");
    var studentNumber = 0;
    var studentInfo = [];




    function newStudent(){


        for (var i = 0; i < 3; i++){
            switch (i){
                case 0:
                    var nPerson = new Student("Hal Jordan","22 Sea View", "Coast City", "Florida", [80,90,100]);
                    nPerson.GPA = nPerson.getAverage();
                    studentInfo.push(nPerson);
                    break;
                case 1:
                    nPerson = new Student("Guy Gardner", "666 Random Street", "Baltimore", "Maryland", [60,70,45]);
                    nPerson.GPA = nPerson.getAverage();
                    studentInfo.push(nPerson);
                    break;
                case 2:
                    nPerson = new Student("Kyle Rayner", "999 Random Address", "Coast City", "Florida", [80,90,90]);
                    nPerson.GPA = nPerson.getAverage();
                    studentInfo.push(nPerson);
                    break;
            }
        }





    }
    infoPrint(studentInfo);





        //Below is a function that will print the student info to the console
    function infoPrint(arr){
        for (var i = 0; i < arr.length; i++){
            console.log("Name : "+arr[i].name + "\n",
                                     "Street : "+arr[i].address.Street + "\n",
                                     "City : "+arr[i].address.City + "\n",
                                     "State : "+arr[i].address.state + "\n",
                                     "GPA : "+arr[i].grades + "\n",
                                     "Average : "+arr[i].getAverage());

        }

    }

    var i = 0;
    function onClick(){

            var name1 = document.querySelector("#name");
            var address = document.querySelector("#address");
            var GPA = document.querySelector("#gpa");
            var average = document.querySelector("#gpaavg");

            name1.innerHTML = "name: " + studentInfo[i].name;
            address.innerHTML = "address: " + studentInfo[i].address.Street + " " + studentInfo[i].address.City + " " + studentInfo[i].address.State;
            GPA.innerHTML = "GPA: " + studentInfo[i].grades;
            average.innerHTML = "average: " + studentInfo[i].getAverage();

            if (i == 2) {
                buttonClick.removeEventListener("click", onClick);
            }


            i++

    }












newStudent();








})();