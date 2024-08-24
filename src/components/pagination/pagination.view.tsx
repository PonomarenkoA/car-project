'use client'
import Link from 'next/link'
import styles from './pagination.module.scss'
import Image from 'next/image'
import usePagination from './pagination.hook'

interface Props {
	totalRows: number
	page?: string
}

export default function Pagination(props: Props) {
	const { totalPages, currentPage, createPageURL } = usePagination(props)

	return (
		<div className={styles.pagination}>
			<Link href={`${currentPage === 1 ? '' : createPageURL(currentPage - 1)}`}>
				<Image
					src='/play-arrow-outline.svg'
					style={{ transform: 'rotate(180deg)' }}
					alt=''
					width={24}
					height={24}
					priority
				/>
			</Link>
			<div>
				{[...Array(totalPages)].map((_, i) => (
					<Link
						key={i}
						href={createPageURL(i + 1)}
						className={`${i + 1 === currentPage ? styles.active : ''} `}>
						{i + 1}
					</Link>
				))}
			</div>
			<Link href={`${currentPage === totalPages ? '' : createPageURL(currentPage + 1)}`}>
				<Image src='/play-arrow-outline.svg' alt='' width={24} height={24} priority />
			</Link>
		</div>
	)
}
