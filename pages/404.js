import React, { useEffect } from 'react'
import styles from '../styles/Error.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
function NotFound() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    return (
        <div  data-aos="zoom-in" className={styles.errorPage +  " page mt100"}>
            <img src="/404.png" alt="error-404"/>
        </div>
    )
}

export default NotFound
