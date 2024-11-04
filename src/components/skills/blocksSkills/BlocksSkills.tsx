import React from 'react'
import sass from './BlocksSkills.module.sass'
import { BlockSkills, AllSkills, FourSkills, Skill } from '@helper/skills'
import BlockOfSkills from './../blockOfSkills/BlockOfSkills'
import { dataSkillsBlock } from '@/data/skillsBlock'
import { useArray } from '@hooks/useArray'

interface PropsBlocksSkills {}

const BlocksSkills: React.FC<PropsBlocksSkills> = () => {
	const arrBlocksSkills: BlockSkills[] = useArray<BlockSkills>(() => {
		const arrBlocks: BlockSkills[] = []
		let arrSkills: AllSkills = []
		let arrFourSkills: FourSkills = []

		const distributeSkills = (title: string): void => {
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

		dataSkillsBlock.use.forEach(arr => arrSkills.push(arr))
		distributeSkills('Использую:')

		dataSkillsBlock.study.forEach(arr => arrSkills.push(arr))
		distributeSkills('Изучаю:')

		dataSkillsBlock.other.forEach(arr => arrSkills.push(arr))
		distributeSkills('Другие навыки:')

		return arrBlocks
	})

	return (
		<div className={sass.blocks}>
			{arrBlocksSkills.map(([name, arrFourSkills], i) => {
				return <BlockOfSkills name={name} arrFourSkills={arrFourSkills} key={i} />
			})}
		</div>
	)
}

export default BlocksSkills
