import { AllSkills } from '@helper/skills'

export type DataSkillsBlock = {
	title: string
	skills: AllSkills
}[]

export const dataSkillsBlock: DataSkillsBlock = [
	{
		title: 'Использую:',
		skills: [
			[(await import('@svg/skills/html.svg')).default, 'HTML5'],
			[(await import('@svg/skills/pug.svg')).default, 'Pug'],
			[(await import('@svg/skills/css.svg')).default, 'CSS3'],
			[(await import('@svg/skills/sass.svg')).default, 'SASS'],

			[(await import('@svg/skills/js.svg')).default, 'JavaScript'],
			[(await import('@svg/skills/ts.svg')).default, 'TypeScript'],
			[(await import('@svg/skills/gulp.svg')).default, 'Gulp'],
			[(await import('@svg/skills/react.svg')).default, 'React'],

			[(await import('@svg/skills/git.svg')).default, 'Git'],
			[(await import('@svg/skills/figma.svg')).default, 'Figma'],
			[(await import('@svg/skills/photoshop.svg')).default, 'Photoshop'],
			[(await import('@svg/skills/illustrator.svg')).default, 'Illustrator'],
		],
	},
	{
		title: 'Изучаю:',
		skills: [
			[(await import('@svg/skills/vue.svg')).default, 'Vue'],
			[(await import('@svg/skills/redux.svg')).default, 'Redux'],
			[(await import('@svg/skills/webpack.svg')).default, 'Webpack'],
			[(await import('@svg/skills/english.svg')).default, 'Английский язык A1'],
		],
	},
	{
		title: 'Другие навыки:',
		skills: [
			[(await import('@svg/skills/java.svg')).default, 'Java'],
			[(await import('@svg/skills/android.svg')).default, 'Android'],
			[(await import('@svg/skills/csharp.svg')).default, 'C#'],
			[(await import('@svg/skills/mysql.svg')).default, 'MySQL'],
		],
	},
]
