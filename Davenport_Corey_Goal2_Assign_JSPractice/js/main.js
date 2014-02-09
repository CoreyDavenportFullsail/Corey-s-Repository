// self-executing function
(function () {

    /*******************************************

     STUDENTS ASSIGNMENT

     1.  create a function named 'avgNumbers'
     - accept 1 parameter into the function that will be an array of unlimited numbers
     - find the average of all the numbers
     - return the average from the function
     - console.log the answer outside of the function

     2.  create a function named 'fullName'
     - accept 2 parameters into the function that are strings (firstname and lastname)
     - return the name after it has been concatenated
     - console.log the answer outside of the function

     3.  create a function named 'wordCount'
     - accept 1 parameter into the function that is a long string of text words
     - create a function that counts all the words and return the answer
     - console.log the answer outside of the function

     4.  create a function named 'charCount'
     - accept 1 parameter into the function that is a long string of text
     - return length of the array of string characters
     - console.log the answer outside of the function

     5.  create a function named 'vowelsInWord'
     - accept 1 parameter into the function that is a a one word string
     - return the number of vowels in the word
     - console.log the answer outside of the function

     6.  create a function named 'findNum'
     - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
     - if the second parameter being passed is "false" or null then
     - create an array with all of the odd numbers from
     the array
     - else - create an array with all of the even numbers
     from the array
     - return the array
     - console.log the answer outside of the function
     ********************************************/

    console.log('------ Goal2: Assignment: JavaScript Practice ----------');

    console.log("1. avg of an array of numbers");


    function avgNumbers(arr) {
        var total = 0;
        for (var i = 0; i < arr.length; i++) {
            total += arr[i];
        }
        return total / arr.length;

    }

    var average = avgNumbers([1, 2, 3, 4, 5]);

    console.log('avg number = ', average);

    //--------------------------------------------------------
    console.log("2. concat first and last name");
    function fullName(first, last) {
        return first + " " + last;
    }


    console.log(fullName('James', 'Bond'));

    //--------------------------------------------------------
    console.log("3. word count");
    var ipsum = "this is test text that is being used as input to a function";

    function wordCount(longString) {
        var splitString = longString.split(" ");
        return splitString.length;


    }

    console.log(wordCount(ipsum));

    //--------------------------------------------------------
    console.log("4. sentence char count");

    function charCount(moreText) {
        return moreText.length;
    }

    console.log(charCount(ipsum));

    //--------------------------------------------------------
    console.log("5. how many vowels in a word");

    function vowelsInWord(word) {
        vowelTotal = 0;
        var brokenWord = word.split("");
        for (i = 0; i < brokenWord.length; i++) {
            if (brokenWord[i] === "a" || brokenWord[i] === "e" || brokenWord[i] === "i" || brokenWord[i] === "o"
                || brokenWord[i] === "u") {
                vowelTotal += 1
            }
        }
        return vowelTotal;
    }

    console.log(vowelsInWord('JavaScript'));

    //--------------------------------------------------------
    console.log("6. find number and create an array of even or odd numbers");
    function findNum(array, boolean){
        var evenNum = [];
        var oddNum = [];

        for (i = 0; i < array.length; i++){
        if(array[i] % 2 === 1 && boolean === false){

                oddNum.push(array[i]);
            }
        else if (array[i] % 2 === 0 && boolean != false){

            evenNum.push(array[i]);
        }
        }

        if(boolean == false){
            return oddNum;
        }else{
            return evenNum;
        }
    }



    console.log(findNum([31, 22, 4, 67, 83, 6, 5, 4]));
    console.log(findNum([31, 22, 4, 67, 83, 6, 5, 4], false));

})();