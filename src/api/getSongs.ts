import type { ISong } from 'types'

export default async function getSongs(): Promise<ISong[]> {
	const response = await fetch(
		'https://65544a2a63cafc694fe64c54.mockapi.io/songs'
	)
	return response.json() as Promise<ISong[]>
}
