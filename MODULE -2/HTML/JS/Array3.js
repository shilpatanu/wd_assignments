let nos =[1,2,3,4,5];
//shift method
console.log("The initial array is:",nos);
let fno =nos.shift()
console.log("Array after shift:",nos);
console.log("The no got shifted:",fno);
//unshift
nos.unshift(10);
console.log("Array after unshift:",nos);
let nums=[1,2,3,4,5];
nums.splice(3,2);
console.log("Array after unshift:",nums);
nums.splice(0,5,11,12,13,14,15);//indexno ,no of the elements to replace,element to be replace
console.log("after splice inseration:",nums);