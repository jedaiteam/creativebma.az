import React from 'react'
import styles from '../../styles/NewsPage.module.scss'
import Link from '../../components/Link'
import News from '../../components/News'
function news() {
    return (
        <div className={styles.newsPage + " page "}>
            <Link link='Xəbərlər'/>
            <h1 className={styles.aboutTitle + " title-b-desk  pageTitle"} >Xəbərlər</h1>
            <div className={styles.newsCont}>
                <News name='Ad Soyad' type='musiqiçi'/>
                <News name='Ad Soyad' type='musiqiçi'/>
                <News name='Ad Soyad' type='musiqiçi'/>
                <News name='Ad Soyad' type='musiqiçi'/>
                <News name='Ad Soyad' type='musiqiçi'/>
                <News name='Ad Soyad' type='musiqiçi'/>
                <News name='Ad Soyad' type='musiqiçi'/>
                <News name='Ad Soyad' type='musiqiçi'/>
                <News name='Ad Soyad' type='musiqiçi'/>
            </div>
        </div>
    )
}

export default news
