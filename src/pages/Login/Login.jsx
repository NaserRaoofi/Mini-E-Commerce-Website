import React, { useState } from 'react';
import StyledButton from "../../components/Button/StyledButton";
import { fetchUsers } from "../../services/usersDetail/fetchUsers";
import styles from './Login.module.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const user = await fetchUsers(email, password);
      if (user) {
        alert('Congratulations, you are a valid user.');
      } else {
        alert('Invalid email or password.');
      }
    } catch (error) {
      alert('An error occurred while logging in. Please try again.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>Sign in</h2>
        <p>Stay updated on your professional world</p>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email or Phone</label>
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password">Password</label>
            <input
             
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
       
          </div>
          <div className={styles.forgotPassword}></div>
          <div className={styles.btnsc}>
            
            <StyledButton type="submit" className={styles.styledButton}>Sign in</StyledButton>
            
            <Link to="/register">
            <StyledButton type="button" style={{backgroundColor:'red'}}>register</StyledButton>
            </Link>
          </div>
        </form>
        <div className={styles.socialLogin}>
          <div className={styles.divider}></div>
          <span>or</span>
          <div className={styles.divider}></div>
        </div>
        <div className={styles.btnsc}>
          <div className={styles.socialLoginButton}>
            <img src="apple-logo.png" alt="Apple" />
            Sign in with Apple
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
