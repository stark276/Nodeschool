let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function evenNumbers(number) {
 return number % 2 === 0
}
function oddNumbers(number) {
 return number % 2 === 1
}
let filtered = numbers.filter(evenNumbers);
let filtered1 = numbers.filter(oddNumbers);


console.log("even numbers: " + filtered);
console.log("odd numbers: " + filtered1);