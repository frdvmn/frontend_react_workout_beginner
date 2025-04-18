import { BrowserRouter, Route, Routes } from 'react-router'
import NotFound from '../components/screens/not-found/NotFound'
import { useAuth } from '../hooks/useAuth'
import { routes } from './routes.data'
function Router() {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						></Route>
					)
				})}
				<Route path="*" element={<NotFound />}></Route>
			</Routes>
		</BrowserRouter>
	)
}

export default Router
