//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
var inner = outer();
//Once you do that, invoke inner.

  //Code Here
inner();


//#2  ==  Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here
var outer = callFriend();
outer("435-215-9248");


//#3  ===  Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
 var makeCounter = function() {
     var x = 0;
     return function (){
         x++;
         return console.log(x)
     }
 } 
  
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4



//#4  ===  Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second arguments that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

//first part.....
var callBack = function(){
    console.log("this only works once");
}
var outerFunction = function(cb){
    return function(){
        cb();
    }
};

var innerFunction = outerFunction(callBack);

//second part....
var callBack = function(y){
    console.log(y);
}
var outerFunction = function(cb){
    var x = 0;
    return function(n){
        if(x < n) {
            x++;
            cb(x);
        } else {
            console.log('STAHHP')
        }
    }
};

var innerFunction = outerFunction(callBack);

//2nd part 2nd try....
var callBack = function(y){
    console.log(y);
}
var outerFunction = function(cb){
    var x = 0;
    return function(n){
        if(x < n){
            for (x = 0; x < n; x++) {
                cb(x);
            }
            console.log('STAHHP')
        }
    }
};

var innerFunction = outerFunction(callBack);


//3rd attempt after clarification...
/*var inner = outer(cb, 3);
inner(); //works
inner(); //works
inner(); //works
inner(); //returns undefined*/
//first part...
var callBack = function() {
    console.log("this only works once");
};
var outerFunction = function(cb) {
    var x = 0;
    return function(){
        if (x === 0) {
            x++;
            cb();
        } else {
            return undefined;
        };
    };
};
var innerFunction = outerFunction(callBack);


//second part...
var callBack = function() {
    console.log("this will now display every time it is called until you see \"STAHHP\" by it\'s lonesome");
};
var outerFunction = function(cb, n) {
    var x = 0;
    return function(){
        if (x < n) {
            x++;
            cb();
        }else if (x === n) {
            x++;
            console.log('STAHHP')
        } else {
            return undefined;
        };
    };
};
var innerFunction = outerFunction(callBack, 6);