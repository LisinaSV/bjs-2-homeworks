"use strict";

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if(arr[i] > max) {
			max = arr[i];
		}
		if(arr[i] < min) {
			min = arr[i];
		}
	}
	const avg = parseFloat((sum / arr.length).toFixed(2));
}

function summElementsWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if(arr[i] > max) {
			max = arr[i];
		}
		if(arr[i] < min) {
			min = arr[i];
			return;
			min;
			max;
			sum;
		}
	}

	function summElementsWorker(...arr) {
		let sum = 0;
		for(let num of arr) {
			sum += num;
		}
		return sum;
	}

	function differenceMaxMinWorker(...arr) {
		const max = Math.max(...arr);
		const min = Math.min(...arr);
		return max - min;
	}

	function differenceEvenOddWorker(...arr) {
		let sumEvenElement = 0;
		let sumOddElement = 0;
		for(let num of arr) {
			if(num % 2 === 0) {
				sumEvenElement += num;
			} else {
				sumOddElement += num;
			}
		}
		return sumEvenElement - sumOddElement;
	}

	function averageEvenElementsWorker(...arr) {
		let sumEvenElement = 0;
		let countEvenElement = 0;
		for(let num of arr) {
			if(num % 2 === 0) {
				sumEvenElement += num;
				countEvenElement++;
			}
		}
		if(countEvenElement === 0) return 0;
		return parseFloat((sumEvenElement / countEvenElement).toFixed(2));
	}
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	const currentResult = func(...arr);
	if(currentResult > maxWorkerResult) {
		maxWorkerResult = currentResult;
	}
}
return maxWorkerResult;