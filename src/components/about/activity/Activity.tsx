import React from 'react'
import sass from './Activity.module.sass'
import ActivityBlock from './activityBlock/ActivityBlock'
import { useClass } from '@hooks/useClass'
import { useArray } from '@hooks/useArray'
import { dataActivity, DataActivity } from '@/data/activity'

interface PropsActivity {
	classes?: string
}

const Activity: React.FC<PropsActivity> = ({ classes }) => {
	const allClassesActivity: string = useClass(sass.activity, classes)
	const arrDescriptions: DataActivity[] = useArray<DataActivity>(() => dataActivity)

	return (
		<div className={allClassesActivity}>
			{arrDescriptions.map(({ urlImage, title, description }, i) => {
				return (
					<ActivityBlock urlImage={urlImage} title={title} key={i}>
						{description}
					</ActivityBlock>
				)
			})}
		</div>
	)
}

export default Activity
