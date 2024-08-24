import Link from 'next/link'
import styles from './balance.module.scss'

export default function Balance() {
	return (
		<div className={styles.balance}>
			<div>
				<p>Balance</p>
				<span>$ 12 005</span>
			</div>
			<Link href='/recharge'>Recharge</Link>
		</div>
	)
}
