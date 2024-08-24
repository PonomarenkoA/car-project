import { usePathname, useSearchParams } from 'next/navigation'

interface Props {
	totalRows: number
	page?: string
}

export default function usePagination({ totalRows, page }: Props) {
	const totalPages = Math.floor(totalRows / 5) || 1
	const currentPage = Number(page) || 1

	const pathname = usePathname()
	const searchParams = useSearchParams()

	function createPageURL(pageNumber: number | string) {
		const params = new URLSearchParams(searchParams)
		if (pageNumber === 1) {
			params.delete('page')
		} else {
			params.set('page', pageNumber.toString())
		}

		return `${pathname}?${params}`
	}

	return { totalPages, currentPage, createPageURL }
}
