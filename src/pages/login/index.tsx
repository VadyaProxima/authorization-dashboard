import styles from './Login.module.css'
const Login = () => {
	return (
		<div className={styles.wrapper}>
			<form className={styles.block} action="">
				<h1 className={styles.block__title}>Login</h1>
				<input className={styles.block__input} type="text" />
				<input className={styles.block__input} type="password" />
				<div className={styles.block__RemmeberForgot}>
					<label htmlFor="">
						<input type="checkbox" />
						Remember me
					</label>
					<a href="">Forgot password?</a>
				</div>
				<button className={styles.block__btn}>Login</button>
				<div className={styles.block__register}>
					<p>
						Dont have any account? <a href="">Register</a>
					</p>
				</div>
			</form>
		</div>
	)
}

export default Login
