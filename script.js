// Write your code here and print the output using alert function

let input1 = prompt("Enter the first number");
 let input2 = prompt("Enter the second number");
function sumTwo(){
	let num1= parseFloat(input1);
		let num2 = parseFloat(input2);
	if(isNan(num1) || isNan(num2)){
	  window.alert("Invalid input! Please enter valid numbers.");
   return;
	}
	let sum = num1 + num2
	console.log(`The sum of ${input1} and ${input2} is ${sum}`);
    window.alert(`The sum of ${num1} and ${num2} is ${sum}`);

} 
sumTwo()