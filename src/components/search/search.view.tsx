'use client'
import styles from './search.module.scss'
import Image from 'next/image'
import useSerach from './search.hook'

export default function Search() {
	const { query, handleSearch } = useSerach()

	return (
		<div className={styles.search}>
			<input
				placeholder='Find VIN code in purchases'
				defaultValue={query}
				onChange={(e) => handleSearch(e.target.value)}
			/>
			<Image src='/search-fill.svg' alt='' width={24} height={24} priority />
		</div>
	)
}
