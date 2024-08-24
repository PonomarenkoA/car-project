import UserAccount from '@/domains/user-account/user-account.view'

interface Props {
	searchParams?: { query?: string; page?: string }
}

export default async function UserAccountPage({ searchParams }: Props) {
	return <UserAccount query={searchParams?.query} page={searchParams?.page} />
}
