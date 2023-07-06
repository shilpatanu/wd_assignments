function reverseString(str){
return str.split("").reverse().join("");
}
var inputString ="hello,world!";
var reversedString =reverseString(inputString);
console.log("Reversed string:"+reversedString);