'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import styles from './menu-link.module.scss'

interface Props {
	title: string
	path: string
	imageUrl: string
}

export default function NavLink({ title, path, imageUrl }: Props) {
	const pathname = usePathname()
	return (
		<Link href={path} className={`${styles.link} ${pathname === path ? styles.active : ''}`}>
			<Image src={imageUrl} alt='' width={24} height={24} priority />
			<span>{title}</span>
		</Link>
	)
}
