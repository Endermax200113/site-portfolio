import SVGImage from 'SVGImage'

export type Skill = [url: string | SVGImage, name: string]
export type AllSkills = Skill[]
export type FourSkills = AllSkills[]
export type BlockSkills = [title: string, arrFourSkills: FourSkills]
