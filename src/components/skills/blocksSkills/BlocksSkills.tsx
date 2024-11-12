import React from 'react'
import sass from './BlocksSkills.module.sass'
import { BlockSkills } from '@helper/skills'
import BlockOfSkills from './../blockOfSkills/BlockOfSkills'
import { dataSkillsBlock } from '@/data/skillsBlock'
import { useArray } from '@hooks/useArray'
import { distributeSkills } from '@utils/arrayControl'

interface PropsBlocksSkills {}

const BlocksSkills: React.FC<PropsBlocksSkills> = () => {
	const arrBlocksSkills = useArray<BlockSkills>(() => distributeSkills(dataSkillsBlock))

	return (
		<div className={sass.blocks}>
			{arrBlocksSkills.map(([name, arrFourSkills], i) => {
				return <BlockOfSkills name={name} arrFourSkills={arrFourSkills} key={i} />
			})}
		</div>
	)
}

export default BlocksSkills
