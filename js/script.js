// var i=10;

// while(i<10){
//     i++;
//     console.log(i);

// }

// do{
//     i++;
//     console.log(i);

// }while(i<10)

// for (var i = 0; i <= 5; i++) {

//     for (var j = 0; j < 5; j++) {
//         document.write("Salam</br>");
//     }
//     document.write("<hr>");
// }


//Kredit meselesi

// var credit = Number(prompt("Meblegi daxil edin:"));
// var month = Number(prompt("Ay daxil edin:"));

// if (!isNaN(credit) && !isNaN(month)) {
//     var partOfSum = 0;
//     for (var i = 1; i <= month; i++) {
//         var monthly_payment = parseInt(credit / month);
//         if (i == month) {
//             console.log(i + " sonuncu ayin odenishi - " + (credit - partOfSum));
//         } else {
//             console.log(i + "-ci ayin odenishi - " + monthly_payment);
//             partOfSum += monthly_payment;
//         }
//     }
// } else {
//     alert("Zehmet olmasa reqem daxil edin!!!");
// }


// for (var i = 0; i <= 10; i++) {
//     if(i%2==1){
//         console.log(i);
//     }
// }

// function hello(){
//     console.log("salam");
//     document.write("Sagol")
// }
// function kv(x){
//     return x*x;
// }

var number1 = Number(prompt("1-ci ededi daxil edin:"));
var number2 = Number(prompt("2-ci ededi daxil edin:"));
var count=2;
function hasil(x,y){
    count=3;
    console.log(count);
    return x*y*count;
}

document.write(hasil(number1,number2));
console.log(count);


// console.log(hasil(number1,number2));
// hello();






