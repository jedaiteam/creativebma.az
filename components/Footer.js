import React, { useState } from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
import Router, { useRouter } from 'next/router'
import { useEffect } from 'react'

function Footer() {
    const router = useRouter()
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    const colorStyle = {
        color: '#FA7167'
    }
    const colorStyle1 = {
        color: "white"
    }
    const [url, seturl] = useState()
    useEffect(() => {
       seturl(router.pathname)
    }, [router])

    return (
        <footer className={styles.footer + ' back'}>
            <div className={styles.links}>
                <Link href="/"><a  style={ url === '/' ? colorStyle : colorStyle1}  className={'footer-text'}>{langM === "AZ" && `Əsas səhifə` || langM === "EN" && `Homepage` || langM === "RU" && `Главная страница`}</a></Link>
                <Link href="/about"><a  style={ url === '/about' ? colorStyle : colorStyle1}  className={'footer-text'}>{langM === "AZ" && `Haqqımızda` || langM === "EN" && `About Us` || langM === "RU" && `О нас`}</a></Link>
                <Link href="/partners"><a  style={ url === '/partners' ? colorStyle : colorStyle1}  className={'footer-text'}>{langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `Партнеры`}</a></Link>
                <Link href="/students"><a  style={(url === '/students' || url === '/students/[id]') ? colorStyle : colorStyle1 }  className={'footer-text'}>{langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`}</a></Link>
                <Link href="/news"><a  style={ (url === '/news' || url === '/news/[id]') ? colorStyle : colorStyle1 }  className={'footer-text'}>{langM === "AZ" && `Xəbərlər` || langM === "EN" && `News` || langM === "RU" && `Новости`}</a></Link>
                <Link href="/staff"><a  style={ (url === '/staff' || url === '/staff/[id]') ? colorStyle : colorStyle1}  className={'footer-text'}>{langM === "AZ" && `BMA sahibkarlıq mərkəzi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `Центр предпринимательства BMA`}</a></Link>
                <Link href="/contact"><a  style={ url === '/contact' ? colorStyle : colorStyle1}  className={'footer-text'}>{langM === "AZ" && `Əlaqə` || langM === "EN" && `Contact` || langM === "RU" && `Контакт`}</a></Link>
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
