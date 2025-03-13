/* Patrick Follis 3/10/2025 */
var myName = "Patrick Follis";
var para1 = document.getElementById("p1");
para1.textContent = myName;

var n1 = 23;
var n2 = 2024;
numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

myNameAddNum = myName + n1;
document.getElementById("p4").textContent = myNameAddNum;

myNameMultNum = myName * n2;
document.getElementById("p5").textContent = myNameMultNum;

ageCompare = 24 <= numberMult;
document.getElementById("p6").textContent = ageCompare;