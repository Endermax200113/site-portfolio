import React, { useEffect, useState } from 'react'
import sass from './Skills.module.sass'
import Headline from '@ui/text/headline/Headline'
import Image from '@ui/image/Image'
import Label from '@ui/text/label/Label'
import SVGImage from 'SVGImage'

interface PropsSkills {}

type Skill = [url: string | SVGImage, name: string]
type AllSkills = Skill[]
type FourSkills = AllSkills[]
type BlockSkills = [title: string, arrFourSkills: FourSkills]

const Skills: React.FC<PropsSkills> = () => {
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
		<section id='skills' className={sass.skills}>
			<Headline text='Навыки' classes={sass.headline} />

			<div className={sass.blocks}>
				{arrBlocksSkills.map(([nameTitle, arrFourSkills], i) => {
					return (
						<div className={sass.block} key={i}>
							<div className={sass.title}>{nameTitle}</div>

							<div className={sass['skills-block']}>
								{arrFourSkills.map((fourSkills, i) => {
									return (
										<div className={sass['skills-row']} key={i}>
											{fourSkills.map(([url, name], i) => {
												return (
													<div className={sass.skill} key={i}>
														<Image url={url} classesWrap={sass.wrap} alt={name} />
														<Label classes={sass.name}>{name}</Label>
													</div>
												)
											})}
										</div>
									)
								})}
							</div>
						</div>
					)
				})}
			</div>
		</section>
	)
}

export default Skills
