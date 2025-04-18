import clsx from 'clsx'
import styles from './Button.module.scss'
const Button = ({ children, clickHandler, size = 'xl' }) => {
	return (
		<div className={styles.wrapper} onClick={clickHandler}>
			<button className={clsx(styles.button, styles[size])}>{children}</button>
		</div>
	)
}

export default Button
