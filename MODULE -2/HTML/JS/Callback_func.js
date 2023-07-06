function greet(name){
    console.log("hello,"+name+"!");
}
function 
sayHellowithDelay(callback){
    setTimeout(function(){
        callback("Tanya");
    }, 2000);
}
sayHellowithDelay(greet);