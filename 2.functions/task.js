function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
		if(arr[i] < min) {
			min = arr[i];
		}
		sum += arr[i];
	}
	const avg = parseFloat((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	for(let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	if(arr.length === 0) return 0;
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

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;
	const currentResult = func(...arr);
	if(currentResult > maxWorkerResult) {
		maxWorkerResult = currentResult;
	}
}
return maxWorkerResult;
