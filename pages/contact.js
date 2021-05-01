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
                            <a href='tel:+994124987148' data-aos="fade-right" ><img src="/Call.png" alt="whatsapp-logo"/> <span>+994 12 498 71 48</span></a>
                            <a href='mailto:international_dpt@musicacademy.edu.az' data-aos="fade-right" ><img src="/Location.png"  alt="instagram-logo"/>{langM === "AZ" && ` international_dpt@musicacademy.edu.az` || langM === "EN" && ` international_dpt@musicacademy.edu.az` || langM === "RU" && ` international_dpt@musicacademy.edu.az`}</a>
                            <a href='https://www.google.com/maps/place/98+%D1%83%D0%BB.+%D0%A8%D0%B0%D0%BC%D1%81%D0%B8+%D0%91%D0%B0%D0%B4%D0%B0%D0%BB%D0%B1%D0%B5%D0%B9%D0%BB%D0%B8,+Baku/data=!4m2!3m1!1s0x40307da7b536bd7b:0xf752205a661abf77?sa=X&ved=2ahUKEwjCl6my06jwAhXGg_0HHRqJDWoQ8gEwAHoECAYQAQ' data-aos="fade-right" ><img src="/Message.png" alt="instagram-logo"/>{langM === "AZ" && `Şəmsi Bədəlbəyli küçəsi, 98, Bakı, Azərbaycan` || langM === "EN" && `Shamsi Badalbeyli Street, 98, Baku, Azerbaijan` || langM === "RU" && `Shamsi Badalbeyli Street, 98, Баку, Азербайджан`}</a>
                            <a href='https://www.instagram.com/baki_musiqi_akademiyasi/' data-aos="fade-right" ><img src="/instagram.png" alt="instagram-logo"/> <span> creative,spark </span></a>
                            <a href='https://m.facebook.com/baku.music.academy/' data-aos="fade-right" ><img src="/facebook.png" alt="facebook-logo"/> <span>creative,spark</span></a>
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
