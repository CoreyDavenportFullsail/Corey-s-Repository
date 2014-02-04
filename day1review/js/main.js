//Corey Davenport

function areaOfTriangle(base,height){
    return (base/2)*height;
}
console.log("The area of my triangle is "+areaOfTriangle(6,9));

function getAverage(arr){
    var total = 0;
    var average = total/arr.length;
    for(var i = 0;i<arr.length;i++){
        total+=arr[i];
    }
    return average;
}
var avg= getAverage([10,20,30]);
console.log(avg);