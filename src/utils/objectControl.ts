export const copyObject = (obj: Object) => {
	return JSON.parse(JSON.stringify(obj))
}
