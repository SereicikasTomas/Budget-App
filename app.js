let budgetController = (function() {
  let x = 20;

  let add = function(a) {
    return x + a;
  };

  return {
    testFunction: function(b) {
      console.log(add(b));
    }
  };
})();

let UIController = (function() {
  //some code
})();
