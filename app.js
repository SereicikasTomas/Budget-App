let budgetController = (function() {
  let x = 20;

  let add = function(a) {
    return x + a;
  };

  return {
    testFunction: function(b) {
      return add(b);
    }
  };
})();

let UIController = (function() {
  //some code
})();

let controller = (function(budgetCntrl, UICtrl) {
  let z = budgetCntrl.testFunction(5);
  return {
    anotherPublicFunction: function() {
      console.log(z);
    }
  };
})(budgetController, UIController);
