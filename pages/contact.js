import React, { useState } from 'react'
import styles from '../styles/ContactPage.module.scss'
import Link from '../components/Link'

function contact() {
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    return (
        <div className={styles.contactPage + " page "}>
            <Link link='Əlaqə' />
            <h1 className={styles.bmaTitle + " title-b-desk  pageTitle"} >{langM === "AZ" && `Əlaqə` || langM === "EN" && `Contact` || langM === "RU" && `Контакт`}</h1>
            <div className={styles.links}>
                <div className={styles.part1 + " mt30 text"}>
                    <a href='#'>+994 55 555 55 55</a>
                    <a href='#'>{langM === "AZ" && `creative.spark@gmail.com` || langM === "EN" && `creative.spark@gmail.com` || langM === "RU" && `kреативе.спарк@гмаил.kом`}</a>
                    <a href='#'>{langM === "AZ" && `Baku şəh., Cavadxan 14` || langM === "EN" && `Baku city., Cavadkhan 14` || langM === "RU" && `Город Баку., Джавадхан 14`}</a>
                </div>
                <div className={styles.part2 + " mt30 text"}>
                    <a href='#'><img src="/instagram.png" alt="instagram-logo"/> <span> creative,spark </span></a>
                    <a href='#'><img src="/whatsapp.png" alt="whatsapp-logo"/> <span>+994 55 555 55 55</span></a>
                    <a href='#'><img src="/facebook.png" alt="facebook-logo"/> <span>creative,spark</span></a>
                </div>
            </div>

            <div className={styles.contactImg + " mt50"}>
                <div className="img"></div>
                <div className="img"></div>
                <div className="img"></div>
            </div>
        </div>
    )
}

export default contact
