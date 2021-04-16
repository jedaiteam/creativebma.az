import React from 'react'
import styles from '../styles/Error.module.scss'
function NotFound() {
    return (
        <div className={styles.errorPage +  " page mt50"}>
            <img src="/404.png" alt="error-404"/>
        </div>
    )
}

export default NotFound
