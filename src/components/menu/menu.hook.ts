/*
import { useCallback, useEffect, useState } from 'react'

interface MenuItem {
	name: string
}

export default function useFetchMenu(fetchOnLoad = true) {
	const [data, setData] = useState<MenuItem[]>([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState<string | null>(null)

	const fetchData = useCallback(async () => {
		setIsLoading(true)
		setError(null)

		try {
			const response = await fetch('')
			const data = await response.json()
			setData(data)
		} catch {
			setError('Soething went wrong')
		} finally {
			setIsLoading(false)
		}
	}, [])

	useEffect(() => {
		fetchOnLoad && fetchData()
	}, [fetchOnLoad])

	return { data, isLoading, error, fetchData }
}
*/
