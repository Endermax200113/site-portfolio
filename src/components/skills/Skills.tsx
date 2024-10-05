import React from 'react'
import sass from './Skills.module.sass'
import Headline from '@ui/text/headline/Headline'

interface PropsSkills {}

const Skills: React.FC<PropsSkills> = () => {
	return (
		<section id='skills' className={sass.skills}>
			<Headline text='Навыки' classes={sass.headline} />

			<div className={sass.blocks}>
				<div className='block'>
					<div className={sass.title}>Пользуюсь:</div>

					<div className='skills-block'>
						<div className='skill'>
							<div className='wrap'>
								{/* // TODO Вернуться к изображениям */}
								<img src='' alt='' className='icon' />
							</div>

							<div className='name'></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Skills
