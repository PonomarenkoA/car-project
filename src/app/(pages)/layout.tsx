import Menu from '@/components/menu/menu.view'

export default function PageLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<div className='page'>
			<Menu />
			<div className='content'>{children}</div>
		</div>
	)
}
