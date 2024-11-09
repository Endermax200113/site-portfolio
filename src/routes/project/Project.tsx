import React from 'react'
import sass from './Project.module.sass'

interface PropsProject {}

const Project: React.FC<PropsProject> = () => {
	return <main className={sass.project}>Какой-то проект</main>
}

export default Project
