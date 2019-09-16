function  sum(...args) {
  let arr = Array.from(args); 
  let total = 0; 

  arr.forEach (el => { total += el});
  return total; 
};

Function.prototype.myBind = function (ctx, ...otherArgs) {
  let that = this;
  // let otherArgs = Array.prototype.slice.call(arguments, 1); 
  return function (...callArgs) {
    const allArgs = otherArgs.concat(callArgs)
    // debugger
    return that.call(ctx, ...allArgs); 
  }
}



// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");


// markov.says.myBind(pavlov, "meow", "Kush")();

// markov.says.myBind(pavlov)("meow", "a tree");

// markov.says.myBind(pavlov, "meow")("Markov");

// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");


function curriedSum(numArgs) {
  const numbers = [];
  return function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === numArgs) {
      console.log(numbers.reduce((a, b) => a + b));
    } else {
      return _curriedSum;
    }
  }
}

// const totalSum = curriedSum(4);
// totalSum(5)(30)(20); // => 56

// apply version;

Function.prototype.curry = function (numArgs) {
  const args = [];

  return _curriedFunc = arg => {
    args.push(arg); 
    if (args.length === numArgs) {
      return this.apply(null, args); 
    }  
    return _curriedFunc;  
  }
}

// ... version 

Function.prototype.curry = function (numArgs) {
  const args = [];
  const that = this;

  return function _curriedFunc(arg) {
    args.push(arg); 
    if (args.length === numArgs) {
      return that(...args); 
    }  
    return _curriedFunc;  
  }
}

function sumThree (num1, num2, num3){
  return num1 + num2 + num3; 
}

const test = sumThree.curry(3);
console.log(test(1)(2)(3)); 