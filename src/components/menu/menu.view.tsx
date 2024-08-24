import styles from './menu.module.scss'
import MenuLink from '../menu-link/menu-link.view'

export default function Menu() {
	return (
		<nav className={styles.menu}>
			<div>
				<MenuLink title='Main' path='/' imageUrl='/home.svg' />
				<MenuLink title='Recharge Balance' path='/recharge' imageUrl='/wallet.svg' />
				<MenuLink title='API' path='/api' imageUrl='/api.svg' />
				<MenuLink title='Support (Telegram)' path='/support' imageUrl='/telegram-line.svg' />
			</div>
		</nav>
	)
}
