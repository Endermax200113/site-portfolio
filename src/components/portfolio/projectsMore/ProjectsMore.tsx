import React, { HTMLAttributes } from 'react'
import scss from './ProjectsMore.module.scss'
import LinkPortfolio from '@ui/link/linkPortfolio/LinkPortfolio'

interface PropsProjectsMore extends HTMLAttributes<HTMLDivElement> {}

const ProjectsMore: React.FC<PropsProjectsMore> = ({ ...props }) => {
	return (
		<div
			className={scss.more}
			{...props}>
			<LinkPortfolio to='/projects' />
		</div>
	)
}

export default ProjectsMore
