import React, { HTMLAttributes } from 'react'
import scss from './Projects.module.scss'
import { AllProjects } from '@helper/portfolio'
import Project from './project/Project'

interface PropsProjects extends HTMLAttributes<HTMLDivElement> {
	projects: AllProjects
}

const Projects: React.FC<PropsProjects> = ({ projects }) => {
	return (
		<div className={scss.projects}>
			{projects.map((project, i) => (
				<Project
					project={project}
					key={`project-main-${i}`}
					tabIndex={i + 1}
				/>
			))}
		</div>
	)
}

export default Projects
