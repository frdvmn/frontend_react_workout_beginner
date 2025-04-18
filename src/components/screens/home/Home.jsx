import { useNavigate } from 'react-router'
import { useAuth } from '../../../hooks/useAuth'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
function Home() {
	const { isAuth } = useAuth()
	const navigate = useNavigate()
	return (
		<>
			<Layout bgImage={'/public/images/bg-home.png'}>
				<Button
					clickHandler={() => {
						isAuth ? navigate('/new-workout') : navigate('/auth')
					}}
				>
					{isAuth ? 'New' : 'Sign in'}
				</Button>
				<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			</Layout>
		</>
	)
}

export default Home
