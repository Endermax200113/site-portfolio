import React from 'react'
import sass from './Projects.module.sass'
import { AllProjects, OneProject } from '@helper/portfolio'
import Project from '../project/Project'

interface PropsProjects {
	projects: AllProjects
}

const Projects: React.FC<PropsProjects> = ({ projects }) => {
	return (
		<div className={sass.projects}>
			{projects.map((project: OneProject, i: number) => (
				<Project project={project} key={i} />
			))}
		</div>
	)
}

export default Projects
