import React from 'react'
import styles from '../../styles/NewsPage.module.scss'
import Link1 from '../../components/Link'
import News from '../../components/News'
function news() {
    return (
        <div className={styles.newsPage + " page "}>
            <Link1 link='Xəbərlər'/>
            <h1 className={styles.aboutTitle + " title-b-desk  pageTitle"} >Xəbərlər</h1>
            <div className={styles.newsCont}>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
                <News id='1' name='Ad Soyad' type='musiqiçi'/>
            </div>
        </div>
    )
}

export default news
