import { AllSkills, BlockSkills, FourSkills, Skill } from '@helper/skills'

type Skills = {
	title: string
	skills: AllSkills
}[]

export const distributeSkills = (skills: Skills): BlockSkills[] => {
	const arrBlocks: BlockSkills[] = []
	let arrSkills: AllSkills = []
	let arrFourSkills: FourSkills = []

	const distribute = (title: string): void => {
		let fourSkills: AllSkills = []

		arrSkills.forEach(([url, name], i, arr) => {
			const skill: Skill = [url, name]

			fourSkills.push(skill)

			if (i % 4 === 3 || arr.length === i + 1) {
				arrFourSkills.push(fourSkills)
				fourSkills = []
			}
		})

		arrBlocks.push([title, arrFourSkills])
		arrSkills = []
		arrFourSkills = []
	}

	for (let i = 0; i < skills.length; i++) {
		for (let j = 0; j < skills[i].skills.length; j++) {
			arrSkills.push(skills[i].skills[j])
		}

		distribute(skills[i].title)
	}

	return arrBlocks
}
