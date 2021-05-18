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
                <a href="https://www.instagram.com/baki_musiqi_akademiyasi/"><img src="/instagram.png" alt=""/></a>
                <a href="https://www.google.com/maps/place/98+%D1%83%D0%BB.+%D0%A8%D0%B0%D0%BC%D1%81%D0%B8+%D0%91%D0%B0%D0%B4%D0%B0%D0%BB%D0%B1%D0%B5%D0%B9%D0%BB%D0%B8,+Baku/@40.3784901,49.8449671,17z/data=!3m1!4b1!4m5!3m4!1s0x40307da7b536bd7b:0xf752205a661abf77!8m2!3d40.3784901!4d49.8471558"><img width='30px' src="/Location.png" alt=""/></a>
                <a href="https://m.facebook.com/baku.music.academy/"><img src="/facebook.png" alt=""/></a>
            </div>

            <a className={styles.developedBy} href="https://jedai.az/az"><p className='text'>Site by</p>  <img width='107.22px' height='20px' src="/jedai-logo.png" alt="" /></a>
        </footer>
    )
}

export default Footer
