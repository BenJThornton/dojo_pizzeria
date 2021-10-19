
function pizzaOven(crust, sauce, cheese, toppings){
    var pizza = {};
        pizza.crust = crust;
        pizza.sauce = sauce;
        pizza.cheese = cheese;
        pizza.toppings = toppings;
        return pizza;
}
var p1 = pizzaOven("deep dish", "traditional", "mozzarella", ["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives","onions"])
console.log(p2)

var p3 = pizzaOven("stuffed crust", "marinara", ["mozzarella", "feta"], ["pepperoni", "olives"])
console.log(p3)

var p4 = pizzaOven("thin crust", "traditional", "feta", ["pineapple", "canadian bacon"])
console.log(p4)