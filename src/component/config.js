export const getObject = (num) => {
	let obj = [];
	for (let i = 0; i < num; i++) {
		obj.push({})
	}
	return obj;
}