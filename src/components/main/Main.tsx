import React from 'react'
import { transformTestClass } from '../../utils/sassControl'
import sass from './Main.module.sass'

type PropsMain = {
	test?: boolean
}

const Main: React.FC<PropsMain> = ({ test }): React.JSX.Element => {
	const classMain: string = transformTestClass(sass, ['main'], test)

	return <main className={classMain}></main>
}

export default Main
