import React, { HTMLAttributes } from 'react'
import sass from './Projects.module.sass'
import { AllProjects } from '@helper/portfolio'
import Project from './project/Project'

interface PropsProjects extends HTMLAttributes<HTMLDivElement> {
	projects: AllProjects
}

const Projects: React.FC<PropsProjects> = ({ projects }) => {
	return (
		<div className={sass.projects}>
			{projects.map((project, i) => (
				<Project project={project} key={`project-main-${i}`} />
			))}
		</div>
	)
}

export default Projects
