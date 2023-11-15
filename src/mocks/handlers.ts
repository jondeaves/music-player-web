import { rest } from 'msw'
import songs from './data/songs.json'

const handlers = [
	rest.get(
		'https://65544a2a63cafc694fe64c54.mockapi.io/songs',
		async (_, response, context) => response(context.json(songs))
	)
]

export default handlers
