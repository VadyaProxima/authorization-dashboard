"use client";
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { login } from '../utils/api';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.token);
      router.push('/dashboard');
    } catch (err) {
      setError((err as Error).message);
    }
  };


	return (
		
		<div className={styles.wrapper}>
			<form onSubmit={handleLogin} className={styles.block} action="">
				<h1 className={styles.block__title}>Login</h1>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<input
					value={email}
					onChange={e => setEmail(e.target.value)}
					required
					className={styles.block__input}
					type="text"
					placeholder="mail"
				/>
				<div className={styles.block__password}>
					<input
					placeholder="password"
					value={password}
					onChange={e => setPassword(e.target.value)}
					required
					className={styles.block__input}
					type={visible ? 'text' : 'password'}
					
				/>
				<div className={styles.visible_btn} onClick={()=> setVisible(!visible)}>
					{visible ? <EyeOutlined/>: <EyeInvisibleOutlined/>}
				</div>
				</div>
				
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