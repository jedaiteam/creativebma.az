import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
function Footer() {
    return (
        <footer className={styles.footer + ' back'}>
            <div className={styles.links}>
                <Link href="/"><a  className={'footer-text'}>Əsas səhifə</a></Link>
                <Link href="/about"><a  className={'footer-text'}>Haqqımızda</a></Link>
                <Link href="/partners"><a  className={'footer-text'}>Partnyorlar</a></Link>
                <Link href="/students"><a  className={'footer-text'}>Tələbələr</a></Link>
                <Link href="/news"><a  className={'footer-text'}>Xəbərlər</a></Link>
                <Link href="/staff"><a  className={'footer-text'}>BMA sahibkarlıq mərkəzi</a></Link>
                <Link href="/contact"><a  className={'footer-text'}>Əlaqə</a></Link>
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
