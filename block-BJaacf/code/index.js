// 1. Create an array named numbers and store 5 number values in it
let number = [6,2,3,4,5];
// 2. Calculate the sum of array items and print it to the console using console.log()
let sum=0;
for(var i=0; i < number.length; i++){
    sum += number[i];
}
console.log(sum);
// 3. Calculate the average of array items and print it to the console using console.log()
let total = sum / number.length;
console.log(total);
// 4. Find the highest number in the array and print it to the console using console.log()
let a =0;
for(var i=0; i < number.length; i++){
   number[i] > a ? a = number[i] : a=a;
}
console.log(a);
// 5. Find the lowest number in the array and print it to the console using console.log()
let min = a[0];
for(var i=0; i < number.length; i++){
    min <= number[i] ? min =min : min= number[i];
}
console.log(min);
// 6. Find the even numbers in the array and print them to the console using console.log()
let even = [];
for(let num of number){
    num % 2 === 0 ? even.push(num) : num;
}
console.log(even);
// 7. Find the odd numbers in the array and print them to the console using console.log()
let odd = [];
for(let num of number){
    num % 2 !== 0 ? odd.push(num) : num;
}
console.log(odd);
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
let div = [];
for(let num of number){
    num % 5 === 0 ?  div.push(num) : num;
}
console.log(div);
// 9. Log all the element of the array one by one
for(let num of number){
    console.log(num);
}
// 10. Find all the number in the array that is divisible by 3
let div1 = [];
for(let num of number){
    num % 3 === 0 ?  div1.push(num) : num;
}
console.log(div1);