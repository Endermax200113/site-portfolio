import React, { HTMLAttributes } from 'react'
import sass from './Activity.module.sass'
import ActivityBlock from './activityBlock/ActivityBlock'
import { dataActivity } from '@/data/activity'
import { mergeAllClasses } from '@utils/sassControl'

interface PropsActivity extends HTMLAttributes<HTMLDivElement> {}

const Activity: React.FC<PropsActivity> = ({ className, ...props }) => {
	const classActivity: string = mergeAllClasses([sass.activity], className)

	return (
		<div className={classActivity} {...props}>
			{dataActivity.map(({ urlImage, title, description }, i) => {
				return (
					<ActivityBlock urlImage={urlImage} heading={title} key={i}>
						{description}
					</ActivityBlock>
				)
			})}
		</div>
	)
}

export default Activity
