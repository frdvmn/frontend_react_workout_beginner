import Header from './header/header'
function Layout({ children }) {
	return (
		<>
			<Header backLink="/dfs" />
			{children}
		</>
	)
}

export default Layout
