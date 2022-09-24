function receivesAFunction(wokeUpFresh){
    console.log(wokeUpFresh());
}
receivesAFunction(function(){return "I did it"});

function returnsANamedFunction() {
    return function namedFunction(){
        console.log("I think I finally get it")
    }
}
returnsANamedFunction();

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am anonymous not invisible")
    }
}
returnsAnAnonymousFunction()();