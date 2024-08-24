import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useDebouncedCallback } from 'use-debounce'

export default function useSerach() {
	const serachParams = useSearchParams()

	const pathname = usePathname()
	const { replace } = useRouter()

	const handleSearch = useDebouncedCallback((term: string) => {
		const params = new URLSearchParams(serachParams)

		params.delete('page')

		if (term) {
			params.set('query', term)
		} else {
			params.delete('query')
		}

		replace(`${pathname}?${params}`)
	}, 300)

	return { query: serachParams.get('query')?.toString(), handleSearch }
}
