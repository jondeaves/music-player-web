import { useQuery } from '@tanstack/react-query'
import getSongs from 'api/getSongs'
import Head from 'components/Head'
import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'

export default function PlayerPage(): ReactElement {
	const { isLoading, isError, error, data } = useQuery(['songs'], getSongs)
	if (isLoading || isError) {
		return <LoadingOrError error={error as Error} />
	}

	console.log(data)

	return (
		<>
			<Head title='Music player' />
			<div>Hello, World</div>
			{/* <div className='m-2 grid min-h-screen grid-cols-[minmax(0,384px)] place-content-center gap-2 md:m-0 md:grid-cols-[repeat(2,minmax(0,384px))] xl:grid-cols-[repeat(3,384px)]'>
				{data.map((fruit, index) => (
					<Fruit key={`FruitCard-${fruit.name}`} fruit={fruit} index={index} />
				))}
			</div> */}
		</>
	)
}
