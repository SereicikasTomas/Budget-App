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
  //some code
  document.querySelector(".add__btn").addEventListener("click", function() {
    console.log("Button was clicked.");
  });
})(budgetController, UIController);
