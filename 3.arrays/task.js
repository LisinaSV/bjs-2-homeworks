function compareArrays(arr1, arr2) {
	if(arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, index) => {
		return element === arr2[index];
	});
}

function getUsersNamesInAgeRange(users, gender) {
	if(!users || users.length === 0) {
		return 0;
	}
	const filteredUsers = users.filter(user => user.gender === gender);
	if(filteredUsers.length === 0) {
		return 0;
	}
	const sumAge = filteredUsers.reduce((sum, user) => {
		return sum + user.age;
	}, 0);
	return parseFloat((sumAge / filteredUsers.length).toFixed(1));
}