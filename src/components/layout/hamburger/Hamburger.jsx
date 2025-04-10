import { useState } from 'react'
import { CgMenuRight } from 'react-icons/cg'
import { IoClose } from 'react-icons/io5'
import styles from './Hamburger.module.scss'
import Menu from './Menu'
function Hamburger() {
	const [isShow, setIsShow] = useState(false)

	return (
		<div className={styles.wrapper}>
			<button onClick={() => setIsShow(!isShow)}>
				{isShow ? (
					<IoClose size={24} color="white" />
				) : (
					<CgMenuRight size={24} color="white" />
				)}
			</button>
			<Menu isShow={isShow} />
		</div>
	)
}

export default Hamburger
