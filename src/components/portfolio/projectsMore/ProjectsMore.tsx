import React, { HTMLAttributes } from 'react'
import sass from './ProjectsMore.module.sass'
import LinkPortfolio from '@ui/link/linkPortfolio/LinkPortfolio'

interface PropsProjectsMore extends HTMLAttributes<HTMLDivElement> {}

const ProjectsMore: React.FC<PropsProjectsMore> = ({ ...props }) => {
	return (
		<div className={sass.more} {...props}>
			<LinkPortfolio to='/projects' />
		</div>
	)
}

export default ProjectsMore
