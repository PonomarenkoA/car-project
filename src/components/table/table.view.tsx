import styles from './table.module.scss'

type Column = {
	title: string
	field: string
}

interface Props {
	columns: Column[]
	renderRow: (item: any) => React.ReactNode
	data: any[]
}

export default function Table({ columns, renderRow, data }: Props) {
	return (
		<table className={styles.table}>
			<thead>
				<tr>
					{columns.map((col) => (
						<td key={col.field}>{col.title}</td>
					))}
				</tr>
			</thead>
			<tbody>{data.map((item) => renderRow(item))}</tbody>
		</table>
	)
}
