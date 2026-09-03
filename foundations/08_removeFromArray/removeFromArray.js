const removeFromArray = function() {
   let args = Array.from(arguments);
   let popped = args.slice(1);

   for (let i = 0; i < args[0].length; i++) {
      let current = args[0][i];

      if (popped.includes(current)) {
         args[0].splice(i, 1);
         i--
      }
    
   }
    return args[0];
};

// Do not edit below this line
module.exports = removeFromArray;
