// let num = 5;
// console.log (num);

// num = 10;
// console.log (num);


// //Получить от пользователя два числа и вывести в диалоговое окно сумму значений,
// //вывод должен выглядеть так:
// //Результат сложения чисел 5 и 2 равен 7
// const num1 = Number.parseFloat(prompt ("Введите первое число","от 0 до 100"));
// const num2 = Number.parseFloat(prompt ("Введите первое число","от 0 до 100"));
// //alert (`Результат сложения двух чисел ${num1} и ${num2} равен ${num1+num2}`);



// //Создать функцию, которая будет возыращать сумму двух чисел

// function sum (arg1,arg2) {
//     return arg1+arg2;
// }
// alert(sum(num1, num2));



//Вывести на экран в диалоговом окне текст с сообщением "Вам хорошо живется?" и кнопками "ОК", "Отмена",
//для чего необходимо использовать confirm.
//-При нажатии на кнопку "ОК" вывести в диалоговом окне текст "Тогда мы идем к вам!"
//-При нажатии на кнопку "Отмена" выести текст "Ну, вы держитесь там!"

// const ans = confirm("Вам хорошо живется?");
// if (ans == true) {// можно записать if (ans) {
//     alert("Тогда мы идем к вам!");
// } else {
//     alert("Ну, вы держитесь там!");
// }


//Перепишите код, ипользуя конструкцию switch-case, запрашивая продукт через окно.
//<script>
//let product = "Бананы";

//if (product == "Мандарины") {
    //alert("Мандарины стоят 100 руб.");
//} else if (product == "Бананы") {
    //alert("Бананы и груши стоят 70 руб.");
//} else if (product == "Груши") {
    //alert("Бананы и груши стоят 70 руб.");
//} else {
    //alert ("Такого продукта нет");
//}

const product = prompt("Введите продукт").toLowerCase();
switch (product) {
    case "Мандарины":
        alert("Мандарины стоят 100 руб.");
        break;
    case "Бананы":
        //alert("Бананы и груши стоят 70 руб.");
        //break;
    case "Груши":
        alert("Бананы и груши стоят 70 руб.");
        break;
    default:
        alert("Такого продукта нет");
}