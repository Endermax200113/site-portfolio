const trimClasses = (sass: sass, ...items: string[]): string => {
	let strClasses: string[] = []
	
	for (let i: number = 0; i < items.length; i++)
		strClasses.push(sass[items[i]]);
	
	return strClasses.join(' ').trimEnd();
}

interface sass {
	readonly [key: string]: string
}

export default trimClasses