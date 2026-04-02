function getArrayParams(...arr) {
	if(arr.length === 0) return null;
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
	if(arr.length === 0) return 0;
	let sum = 0;
	for(let num of arr) {
		sum += num;
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
	if(arr.length === 0) return 0;
	let sumEven = 0;
	let sumOdd = 0;
	for(let num of arr) {
		if(num % 2 === 0) {
			sumEven += num;
		} else {
			sumOdd += num;
		}
	}
	return sumEven - sumOdd;
}

function averageEvenElementsWorker(...arr) {
	if(arr.length === 0) return 0;
	let sumEven = 0;
	let countEven = 0;
	for(let num of arr) {
		if(num % 2 === 0) {
			sumEven += num;
			countEven++;
		}
	}
	if(countEven === 0) return 0;
	return parseFloat((sumEven / countEven).toFixed(2));
}

function makeWork(arrOfArr, func) {
	if(!arrOfArr.length) return null;
	let maxWorkerResult = -Infinity;
	for(let arr of arrOfArr) {
		const currentResult = func(...arr);
		if(currentResult > maxWorkerResult) {
			maxWorkerResult = currentResult;
		}
	}
	return maxWorkerResult;
}