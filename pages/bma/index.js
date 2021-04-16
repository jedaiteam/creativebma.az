import React from 'react'
import styles from '../../styles/BmaPagePage.module.scss'
import Link from '../../components/Link'
import Student from '../../components/Student'
function index() {
    return (
        <div className={styles.newsPage + " page "}>
            <Link link='Xəbərlər'/>
            <h1 className={styles.aboutTitle + " title-b-desk  pageTitle"} >Xəbərlər</h1>
            <div className={styles.newsCont}>
            </div>
        </div>
    )
}

export default index
