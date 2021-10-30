function orderingPizza(str, numberpizza) {
    var pizza = [
        "фирменная пицца",
        "пицца с ананасом",
        "пицца с яйцом",
        "пицца с курицей",
        "пицца с рыбой"
];
document.write("Ваш заказ: " + pizza[str] + " - " + numberpizza + "шт.");
}
let p = prompt("Выберите пиццу");
let z = prompt("Укажите кол-во пиц");
orderingPizza(p,z);