import React, { MouseEvent, ReactNode } from 'react'
import sass from './Pagination.module.sass'
import Button from '@ui/button/Button'
import Label from '@ui/text/label/Label'
import { trimSass } from '@utils/sassControl'

interface PropsPagination {
	pages: number
	page: number
	setPage: (page: number, event?: MouseEvent) => void
}

const Pagination: React.FC<PropsPagination> = ({ pages, page, setPage }) => {
	const onClickPrev = (e?: MouseEvent): void => setPage(page - 1, e)
	const onClickPage = (page: number, e?: MouseEvent): void => setPage(page, e)
	const onClickNext = (e?: MouseEvent): void => setPage(page + 1, e)

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
					<Button className={sass.page} key={1} onClick={e => onClickPage(1, e)}>
						1
					</Button>
				)

				if (startPage > 2) {
					pageNumbers.push(<Label key='start-dots'>...</Label>)
				}
			}

			let clazz: string

			if (i !== page) {
				clazz = trimSass(sass, ['page'])
			} else {
				clazz = trimSass(sass, ['page', 'here'])
			}

			pageNumbers.push(
				<Button className={clazz} key={i} onClick={e => onClickPage(i, e)}>
					{i}
				</Button>
			)

			if (i === endPage && endPage < pages) {
				if (endPage < pages - 1) {
					pageNumbers.push(<Label key='end-dots'>...</Label>)
				}

				pageNumbers.push(
					<Button className={sass.page} key={pages} onClick={e => onClickPage(pages, e)}>
						{pages}
					</Button>
				)
			}
		}

		return pageNumbers
	}

	return (
		<div className={sass.pages}>
			<Button className={sass.page} onClick={e => onClickPrev(e)} hidden={page === 1}>
				&lt;
			</Button>
			{renderPageNumbers()}
			<Button className={sass.page} onClick={e => onClickNext(e)} hidden={page === pages}>
				&gt;
			</Button>
		</div>
	)
}

export default Pagination
