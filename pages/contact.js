import React, { useEffect, useState } from 'react'
import styles from '../styles/ContactPage.module.scss'
import Link from '../components/Link'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'

function contact() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    
    const ImageBg1 = {
        backgroundImage: 'url(/contact1.png)'
    }
    
    return (
        <>
            <Head>
                <title>{langM === "AZ" && `Əlaqə` || langM === "EN" && `Contact` || langM === "RU" && `Контакт`}</title>
            </Head>

            <div className={styles.contactPage + " page "}>
                <Link link={langM === "AZ" && `Əlaqə` || langM === "EN" && `Contact` || langM === "RU" && `Контакт`} />
                <h1 className={styles.bmaTitle + " title-b-desk  pageTitle"} data-aos="fade-up">{langM === "AZ" && `Əlaqə` || langM === "EN" && `Contact` || langM === "RU" && `Контакт`}</h1>
                
                <div className={styles.linksAndImg}>
                    <div className={styles.links} data-aos="fade-right">
                        <div  className={styles.part1 + " mt30 text"}>
                            <a href='#' data-aos="fade-right" ><img src="/Call.png" alt="whatsapp-logo"/> <span>+994 55 555 55 55</span></a>
                            <a href='#' data-aos="fade-right" ><img src="/Location.png"  alt="instagram-logo"/>{langM === "AZ" && `creative.spark@gmail.com` || langM === "EN" && `creative.spark@gmail.com` || langM === "RU" && `kреативе.спарк@гмаил.kом`}</a>
                            <a href='#' data-aos="fade-right" ><img src="/Message.png" alt="instagram-logo"/>{langM === "AZ" && `Baku şəh., Cavadxan 14` || langM === "EN" && `Baku city., Cavadkhan 14` || langM === "RU" && `Город Баку., Джавадхан 14`}</a>
                            <a href='#' data-aos="fade-right" ><img src="/instagram.png" alt="instagram-logo"/> <span> creative,spark </span></a>
                            <a href='#' data-aos="fade-right" ><img src="/facebook.png" alt="facebook-logo"/> <span>creative,spark</span></a>
                        </div>
                    </div>

                    <div className={styles.contactImg + " mt50"}>
                        <div style={ImageBg1} className="img" data-aos="fade-left"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default contact
