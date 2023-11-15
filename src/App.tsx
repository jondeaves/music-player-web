import LoadingOrError from 'components/LoadingOrError'
import type { ReactElement } from 'react'
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Player = lazy(async () => import('pages/Player'))
// const Artist = lazy(async () => import('pages/Artist'))

export default function App(): ReactElement {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path='/' element={<Player />} />
					{/* <Route path=':artist' element={<Artist />} /> */}
				</Routes>
			</Suspense>
		</BrowserRouter>
	)
}
