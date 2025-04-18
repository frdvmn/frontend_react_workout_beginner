import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Layout from '../../layout/Layout'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/Loader'
import styles from './Auth.module.scss'
const isLoading = false
const isLoadingAuth = false
function Auth() {
	const [type, setType] = useState('auth')
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm({
		mode: 'onChange'
	})

	const onSubmit = data => {
		// console.log(data)
	}

	return (
		<>
			<Layout heading="Sign in" bgImage={'/public/images/bg-auth.jpg'}></Layout>
			<div className="wrapper-inner-page">
				{(isLoading || isLoadingAuth) && <Loader />}
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						type="text"
						placeholder="enter email"
						register={register}
						name="email"
						options={{ required: 'email is required' }}
					/>
					<Field
						error={errors?.password?.message}
						type="password"
						placeholder="enter password"
						register={register}
						name="password"
						options={{ required: 'password is required' }}
					/>

					<div className={styles.wrapperButtons}>
						<Button
							clickHandler={() => {
								setType('auth')
							}}
						>
							Sign in
						</Button>
						<Button
							clickHandler={() => {
								setType('register')
							}}
						>
							Sign up
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
