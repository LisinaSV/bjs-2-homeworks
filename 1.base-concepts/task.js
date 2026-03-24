"use strict"

function solveEquation(a, b, c) {
	const d = b ** 2 - 4 * a * c;
	if(d < 0) {
		return [];
	} else if(d === 0) {
		const root = -b / (2 * a);
		return [root];
	} else {
		const root1 = (-b + Math.sqrt(d)) / (2 * a);
		const root2 = (-b - Math.sqrt(d)) / (2 * a);
		return [root1, root2];
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const annualRate = percent / 100;
	const monthlyRate = annualRate / 12;
	const creditBody = amount - contribution;
	if(creditBody === 0) {
		return 0;
	}
	const S = creditBody;
	const P = monthlyRate;
	const n = countMonths;
	const payment = S * (P + (P / (Math.pow(1 + P, n) - 1)));
	const totalAmount = payment * countMonths;
	return parseFloat(totalAmount.toFixed(2));
}
console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 0, 20000, 24));
console.log(calculateTotalMortgage(10, 1000, 20000, 24));
console.log(calculateTotalMortgage(10, 20000, 20000, 24));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));