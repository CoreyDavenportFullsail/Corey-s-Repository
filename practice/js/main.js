/**
 * Created by Administrator on 2/11/14.
 */
//DATA STRUCTURES:
//Array = []
//Object Literal = {}
(function () {
    var dog ={breed:"",
              name:"Max",
              bark: function(){
                  console.log("woof");
              }
    };
        dog.breed = "Corgi";
        dog["name"] = "Fido";
        dog.bark();

            console.log(dog.breed);
            console.log(dog["name"]);


})();