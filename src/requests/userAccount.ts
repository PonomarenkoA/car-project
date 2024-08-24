import { userAccountsData } from '@/lib/data'

export default async function GetUserAccounts(query?: string, page?: string) {
	const currentPage = Number(page) || 1

	let result = [...userAccountsData]
	if (query) {
		result = userAccountsData.filter((item) =>
			item.vinCode.toLowerCase().startsWith(query.toLowerCase())
		)
	}

	const totalRows = result.length

	if (currentPage) {
		result = [...result.slice((currentPage - 1) * 5, currentPage * 5)]
	}

	return { data: result, totalRows }
}
