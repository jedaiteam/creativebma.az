import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
function Footer() {
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    return (
        <footer className={styles.footer + ' back'}>
            <div className={styles.links}>
                <Link href="/"><a  className={'footer-text'}>{langM === "AZ" && `Əsas səhifə` || langM === "EN" && `Homepage` || langM === "RU" && `Главная страница`}</a></Link>
                <Link href="/about"><a  className={'footer-text'}>{langM === "AZ" && `Haqqımızda` || langM === "EN" && `About Us` || langM === "RU" && `О нас`}</a></Link>
                <Link href="/partners"><a  className={'footer-text'}>{langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `Партнеры`}</a></Link>
                <Link href="/students"><a  className={'footer-text'}>{langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`}</a></Link>
                <Link href="/news"><a  className={'footer-text'}>{langM === "AZ" && `Xəbərlər` || langM === "EN" && `News` || langM === "RU" && `Новости`}</a></Link>
                <Link href="/staff"><a  className={'footer-text'}>{langM === "AZ" && `BMA sahibkarlıq mərkəzi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `Центр предпринимательства BMA`}</a></Link>
                <Link href="/contact"><a  className={'footer-text'}>{langM === "AZ" && `Əlaqə` || langM === "EN" && `Contact` || langM === "RU" && `Контакт`}</a></Link>
            </div>

            <hr className={styles.footerHr}/>

            <div className={styles.social}> 
                <a href="#"><img src="/instagram.png" alt=""/></a>
                <a href="#"><img src="/whatsapp.png" alt=""/></a>
                <a href="#"><img src="/facebook.png" alt=""/></a>
            </div>

        </footer>
    )
}

export default Footer
