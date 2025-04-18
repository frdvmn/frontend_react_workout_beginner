import { FiArrowLeft } from 'react-icons/fi'
import { RxAvatar } from 'react-icons/rx'
import { useLocation, useNavigate } from 'react-router'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'

function Header({ backLink = '/' }) {
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { isAuth } = useAuth

	return (
		<header className={styles.header}>
			{pathname !== '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<FiArrowLeft />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<RxAvatar />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
