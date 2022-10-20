// Created by: Allen
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area of triangle.
 */
function calculate() {
  // input
  const sidea = parseInt(document.getElementById("sidea-of-triangle").value)
  const sideb = parseInt(document.getElementById("sideb-of-triangle").value)
  const sidec = parseInt(document.getElementById("sidec-of-triangle").value)

  // process
  const perimeter = sidea + sideb + sidec

  // output
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: " + perimeter + "cm"
}
