import React, { useEffect, useState } from 'react'
import sass from './BlocksSkills.module.sass'
import { BlockSkills, AllSkills, FourSkills, Skill } from '@helper/skills'
import BlockOfSkills from './../blockOfSkills/BlockOfSkills'

interface PropsBlocksSkills {}

const BlocksSkills: React.FC<PropsBlocksSkills> = () => {
	const [arrBlocksSkills, setArrBlocksSkills] = useState<BlockSkills[]>([])

	useEffect(() => {
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

		arrSkills.push([require('@svg/skills/html.svg'), 'HTML5'])
		arrSkills.push([require('@svg/skills/pug.svg'), 'Pug'])
		arrSkills.push([require('@svg/skills/css.svg'), 'CSS3'])
		arrSkills.push([require('@svg/skills/sass.svg'), 'SASS'])

		arrSkills.push([require('@svg/skills/js.svg'), 'JavaScript'])
		arrSkills.push([require('@svg/skills/ts.svg'), 'TypeScript'])
		arrSkills.push([require('@svg/skills/gulp.svg'), 'Gulp'])
		arrSkills.push([require('@svg/skills/react.svg'), 'React'])

		arrSkills.push([require('@svg/skills/git.svg'), 'Git'])
		arrSkills.push([require('@svg/skills/figma.svg'), 'Figma'])
		arrSkills.push([require('@svg/skills/photoshop.svg'), 'Photoshop'])
		arrSkills.push([require('@svg/skills/illustrator.svg'), 'Illustrator'])

		distributeSkills('Использую:')

		arrSkills.push([require('@svg/skills/vue.svg'), 'Vue'])
		arrSkills.push([require('@svg/skills/redux.svg'), 'Redux'])
		arrSkills.push([require('@svg/skills/webpack.svg'), 'Webpack'])
		arrSkills.push([require('@svg/skills/english.svg'), 'Английский язык A1'])

		distributeSkills('Изучаю:')

		arrSkills.push([require('@svg/skills/java.svg'), 'Java'])
		arrSkills.push([require('@svg/skills/android.svg'), 'Android'])
		arrSkills.push([require('@svg/skills/csharp.svg'), 'C#'])
		arrSkills.push([require('@svg/skills/mysql.svg'), 'MySQL'])

		distributeSkills('Другие навыки:')

		setArrBlocksSkills(arrBlocks)
	}, [setArrBlocksSkills])

	return (
		<div className={sass.blocks}>
			{arrBlocksSkills.map(([name, arrFourSkills], i) => {
				return <BlockOfSkills name={name} arrFourSkills={arrFourSkills} key={i} />
			})}
		</div>
	)
}

export default BlocksSkills
