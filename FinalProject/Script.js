function calculationAdd() {
    // getting the number from html
    const number = Number(document.getElementById("num").value);
    const brea = `<br>`;
    document.getElementById("add").innerHTML = `Addition` + brea;
    // const addit = document.getElementById("add");
    // const addition = [];
    // Addition
    for (let i = 1; i< 11; i++) {
        var answ = i + number;
        var answer = answ.toFixed(2);
        console.log(answer);
        // addition.push(i " + " number " = " answer);
        // console.log(addition);
        //text += answer + "<br>";
        //var newText = document.createTextNode(text);
        // var additions = document.createTextNode(` ` i ` + ` number ` = ` answer );
        // addit.appendChild(additions);
        // document.body.appendChild(addit);
        const plus = ` + `;
        const equ = ` = `;
        document.getElementById("add").innerHTML += brea + i + plus + number + equ + answer; 
       // document.getElementById("add").innerHTML = answer;
    }
}
function calculationSub(){
    // getting the number from html
    const number = Number(document.getElementById("num").value);
    const brea = `<br>`;
    document.getElementById("sub").innerHTML = `Subtraction` + brea;
    // Subtraction
    var j = 1;
    while ( j<11) {
        var answ = j - number;
        var answer = answ.toFixed(2);
        console.log(answer);
        const subtr = ` - `;
        const equ = ` = `;
        document.getElementById("sub").innerHTML += brea + j + subtr + number + equ + answer; 
        j++;
    }
}
function calculationMult(){
    // getting the number from html
    const number = Number(document.getElementById("num").value);
    const brea = `<br>`;
    document.getElementById("mult").innerHTML = `Multiplication` + brea;
    // Multiplication
    var h = 1;
    do {
        var answ = h * number;
        var answer = answ.toFixed(2);
        console.log(answer);
        const multip = ` * `;
        const equ = ` = `;

        document.getElementById("mult").innerHTML += brea + h + multip + number + equ + answer;
        h++;
    }
    while (h < 11);
}
function calculationDiv() {
    // getting the number from html
    const number = Number(document.getElementById("num").value);
    const brea = `<br>`;
    document.getElementById("divi").innerHTML = `Division` + brea;
    // Division
    for (let g = 1; g<11; g++) {
        var answ = g / number;
        var answer = answ.toFixed(2);
        console.log(answer);
        const divi = ` / `;
        const equ = ` = `;

        document.getElementById("divi").innerHTML += brea + g + divi + number + equ + answer;
    }
}
// button code

// var elCal = document.getElementById(calc);
// var calc = document.getElementById("calc");
// calc.addEventListener('onclick',calculation(),true);
// docment.getElementById('calc').onclick = calculation();
document.getElementById("calc").addEventListener("click",calculation);

function calculation(){
    // getting the number from html
    const number = Number(document.getElementById("num").value);
    calculationAdd();
    calculationSub()
    calculationMult()
    calculationDiv()
    console.log("hello");
}
// elCal.addEventListener('onCl');