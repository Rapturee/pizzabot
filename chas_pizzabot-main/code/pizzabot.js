const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";

const pizzaPrice = 80;

//Put your Javscript code here:

// Task 1.2
alert(`Hey! On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}.`);

// Task 2.3
const orderName = prompt("What pizza do you want to order?");
const orderQuantity = prompt(`How many of ${orderName} do you want?`);

// Task 3.1
if (!checkOrderName(orderName)) {
  alert("Sorry, we don't have that pizza on our menu.");
} else {
  // Task 2.4
  const orderTotal = totalCost(orderQuantity);
  const cookingTimeMsg = cookingTime(orderQuantity);
  alert(
    `Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. ${cookingTimeMsg}`
  );
}

// Task 4
function checkOrderName(orderName) {
  return (
    orderName === "vegetarian" ||
    orderName === "hawaiian" ||
    orderName === "pepperoni"
  );
}

function totalCost(orderQuantity) {
  return orderQuantity * pizzaPrice;
}

function cookingTime(orderQuantity) {
  if (orderQuantity <= 2) {
    return "The pizzas will take 10 minutes.";
  } else if (orderQuantity <= 5) {
    return "The pizzas will take 15 minutes.";
  } else {
    return "The pizzas will take 20 minutes.";
  }
}

// Task 5
function submitOrder() {
  const pizzaTypeInput = document.getElementById("pizzaType");
  const quantityInput = document.getElementById("quantity");
  const outputDiv = document.getElementById("output");

  const orderName = pizzaTypeInput.value;
  const orderQuantity = quantityInput.value;

  if (!checkOrderName(orderName)) {
    outputDiv.innerHTML = "Sorry, we don't have that pizza on our menu.";
  } else {
    const orderTotal = totalCost(orderQuantity);
    const cookingTimeMsg = cookingTime(orderQuantity);
    outputDiv.innerHTML = `Great, I'll get started on your ${orderName} right away. It will cost ${orderTotal} kr. ${cookingTimeMsg}`;
  }
}

// om man använder "!" så betyder det att det inte ska vara, som tex "if (!kevinflintis)" detta betyder " om kevin inte är flintis"
