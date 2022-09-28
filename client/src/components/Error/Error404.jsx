import React from 'react'
import { Link } from 'react-router-dom';
import styles from './Error.module.css';

const Error404 = () => {
  return (
    <div className={styles.error}>
        <Link to={'/home'}>
        <button className={styles.button}>Redirect Home</button>
        </Link>
    </div>
  )
}

export default Error404