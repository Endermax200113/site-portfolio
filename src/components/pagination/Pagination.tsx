import React, { MouseEvent, ReactNode } from 'react'
import scss from './Pagination.module.scss'
import Button from '@ui/button/Button'
import Label from '@ui/text/label/Label'
import { trimSass } from '@utils/sassControl'

interface PropsPagination {
	pages: number
	page: number
	setPage: (page: number, event?: MouseEvent) => void
}

const Pagination: React.FC<PropsPagination> = ({ pages, page, setPage }) => {
	const handleToPrevClick = (e?: MouseEvent): void => setPage(page - 1, e)
	const handleToPageClick = (page: number, e?: MouseEvent): void => setPage(page, e)
	const handleToNextClick = (e?: MouseEvent): void => setPage(page + 1, e)

	const renderPageNumbers = (): ReactNode[] => {
		const pageNumbers: ReactNode[] = []
		const maxVisiblePages: number = 5
		let startPage: number, endPage: number

		if (pages <= maxVisiblePages) {
			startPage = 1
			endPage = pages
		} else {
			const halfMaxVisible = Math.floor(maxVisiblePages / 2)

			if (page <= halfMaxVisible) {
				startPage = 1
				endPage = maxVisiblePages
			} else if (page + halfMaxVisible >= pages) {
				startPage = pages - maxVisiblePages + 1
				endPage = pages
			} else {
				startPage = page - halfMaxVisible
				endPage = page + halfMaxVisible
			}
		}

		for (let i = startPage; i <= endPage; i++) {
			if (i === startPage && startPage > 1) {
				pageNumbers.push(
					<Button
						className={scss.page}
						key={1}
						onClick={e => handleToPageClick(1, e)}>
						1
					</Button>
				)

				if (startPage > 2) {
					pageNumbers.push(<Label key='start-dots'>...</Label>)
				}
			}

			let clazz: string

			if (i !== page) {
				clazz = trimSass(scss, ['page'])
			} else {
				clazz = trimSass(scss, ['page', 'here'])
			}

			pageNumbers.push(
				<Button
					className={clazz}
					key={i}
					onClick={e => handleToPageClick(i, e)}>
					{i}
				</Button>
			)

			if (i === endPage && endPage < pages) {
				if (endPage < pages - 1) {
					pageNumbers.push(<Label key='end-dots'>...</Label>)
				}

				pageNumbers.push(
					<Button
						className={scss.page}
						key={pages}
						onClick={e => handleToPageClick(pages, e)}>
						{pages}
					</Button>
				)
			}
		}

		return pageNumbers
	}

	return (
		<div className={scss.pages}>
			<Button
				className={scss.page}
				onClick={e => handleToPrevClick(e)}
				hidden={page === 1}>
				&lt;
			</Button>
			{renderPageNumbers()}
			<Button
				className={scss.page}
				onClick={e => handleToNextClick(e)}
				hidden={page === pages}>
				&gt;
			</Button>
		</div>
	)
}

export default Pagination
