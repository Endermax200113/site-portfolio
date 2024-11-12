import { AllSkills } from './skills'

type Resource = [text: string, url: string]

export type PreviewProject = {
	urlImage: string
	name: string
	briefDescription: string
	site?: string
}

export type DetailsProject = {
	id: number
	stack: AllSkills
	description: string
	resources?: Resource[]
}

export type AllProjects = PreviewProject[]
