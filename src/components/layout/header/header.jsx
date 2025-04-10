import { FiArrowLeft } from 'react-icons/fi'
import { useAuth } from '../../../hooks/useAuth'
import Hamburger from '../hamburger/Hamburger'
import styles from './Header.module.scss'
function Header({ backLink }) {
	const { isAuth } = useAuth
	return (
		<header className={styles.header}>
			<button onClick={() => {}}>
				<FiArrowLeft size={24} />
			</button>
			<Hamburger />
		</header>
	)
}

export default Header
