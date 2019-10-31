//BUDGET CONTROLLER
let budgetController = (function() {
  //some code
})();

//UI CONTROLLER
let UIController = (function() {
  //some code
})();

//GLOBAL APP CONTROLLER
let controller = (function(budgetCntrl, UICtrl) {
  document.querySelector(".add__btn").addEventListener("click", function() {
    // 1. Get the filed input data
    // 2. Add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Calculate the budget
    // 5. Display the budget on the UI
  });
})(budgetController, UIController);
