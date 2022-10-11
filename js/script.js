/* Created by:Allen
* This file contains the Js for index.html
*/
function perimeter() {
    var sideA = document.getElementById("sideA").value
    var base = document.getElementById("base").value
    var sideB = document.getElementById("sideB").value
    var perimeter = parseFloat(sideA) + parseFloat(base) + parseFloat(sideB)
    var result = document.getElementById("result")
    .innerHTML = "Perimeter is " + perimeter
}
