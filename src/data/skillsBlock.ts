import { AllSkills } from '@helper/skills'

export type DataSkillsBlock = {
	title: string
	skills: AllSkills
}[]

export const dataSkillsBlock: DataSkillsBlock = [
	{
		title: 'Использую:',
		skills: [
			[require('@svg/skills/html.svg'), 'HTML5'],
			[require('@svg/skills/pug.svg'), 'Pug'],
			[require('@svg/skills/css.svg'), 'CSS3'],
			[require('@svg/skills/sass.svg'), 'SASS'],

			[require('@svg/skills/js.svg'), 'JavaScript'],
			[require('@svg/skills/ts.svg'), 'TypeScript'],
			[require('@svg/skills/gulp.svg'), 'Gulp'],
			[require('@svg/skills/react.svg'), 'React'],

			[require('@svg/skills/git.svg'), 'Git'],
			[require('@svg/skills/figma.svg'), 'Figma'],
			[require('@svg/skills/photoshop.svg'), 'Photoshop'],
			[require('@svg/skills/illustrator.svg'), 'Illustrator'],
		],
	},
	{
		title: 'Изучаю:',
		skills: [
			[require('@svg/skills/vue.svg'), 'Vue'],
			[require('@svg/skills/redux.svg'), 'Redux'],
			[require('@svg/skills/webpack.svg'), 'Webpack'],
			[require('@svg/skills/english.svg'), 'Английский язык A1'],
		],
	},
	{
		title: 'Другие навыки:',
		skills: [
			[require('@svg/skills/java.svg'), 'Java'],
			[require('@svg/skills/android.svg'), 'Android'],
			[require('@svg/skills/csharp.svg'), 'C#'],
			[require('@svg/skills/mysql.svg'), 'MySQL'],
		],
	},
]
