import SearchPanel from '@/components/search-panel/search-panel.view'
import Pagination from '@/components/pagination/pagination.view'
import Table from '@/components/table/table.view'
import Image from 'next/image'
import GetUserAccounts from '@/requests/userAccount'

type UserAccount = {
	id: string
	date: string
	vinCode: string
	status: string
}

const columns = [
	{ title: 'Date', field: 'date' },
	{ title: 'VIN-code', field: 'vinCode' },
	{ title: 'Status', field: 'status' }
]

interface Props {
	query?: string
	page?: string
}

export default async function UserAccount({ query, page }: Props) {
	const data = await GetUserAccounts(query, page)

	const renderRow = (item: UserAccount) => (
		<tr key={item.id}>
			<td>{item.date}</td>
			<td>{item.vinCode}</td>
			<td>
				<span>{item.status}</span>
				<Image
					src={`${item.status === 'Success' ? '/check-fill.svg' : '/warning-solid.svg'}`}
					alt=''
					width={24}
					height={24}
					priority
				/>
			</td>
		</tr>
	)

	return (
		<>
			<SearchPanel />
			<Table columns={columns} renderRow={renderRow} data={data.data} />
			<Pagination totalRows={data.totalRows} page={page} />
		</>
	)
}
