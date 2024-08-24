import Balance from '../balance/balance.view'
import Search from '../search/search.view'
import styles from './search-panel.module.scss'

export default function SearchPanel() {
	return (
		<div className={styles.searchPanel}>
			<Balance />
			<Search />
		</div>
	)
}
