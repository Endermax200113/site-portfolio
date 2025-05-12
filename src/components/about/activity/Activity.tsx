import React, { HTMLAttributes } from 'react'
import scss from './Activity.module.scss'
import ActivityBlock from './activityBlock/ActivityBlock'
import { dataActivity } from '@/data/activity'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsActivity extends HTMLAttributes<HTMLDivElement> {}

const Activity: React.FC<PropsActivity> = ({ className, ...props }) => {
	const classActivity: string = mergeAllClasses([scss.activity], className)

	return (
		<div
			className={classActivity}
			{...props}>
			{dataActivity.map(({ urlImage, title, description }, i) => {
				return (
					<ActivityBlock
						urlImage={urlImage}
						heading={title}
						key={`about-main-${i}`}>
						{description}
					</ActivityBlock>
				)
			})}
		</div>
	)
}

export default Activity
