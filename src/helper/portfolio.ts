import { AllSkills } from './skills'

type Resource = [text: string, url: string]

export type PreviewProject = {
	id: number
	urlImage: string
	name: string
	briefDescription: string
	site?: string
}

export type DetailsProject = {
	stack: AllSkills
	description: string
	resources?: Resource[]
}

export type AllProjects = PreviewProject[]
