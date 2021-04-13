import React from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import spices from '../styles/spices.module.scss'
function Navbar() {
    return (
        <header className={styles.navbar}>

            <img src="/creative-spark-logo.png" width="140px" height='65.75px' alt="Creative Spark Logo"/>

            <div className={styles.links}>
                <Link href="/"><a className={'nav-text'}>Əsas səhifə</a></Link>
                <Link href="/about"><a className={'nav-text'}>Haqqımızda</a></Link>
                <Link href="/partners"><a className={'nav-text'}>Partnyorlar</a></Link>
                <Link href="/students"><a className={'nav-text'}>Tələbələr</a></Link>
                <Link href="/news"><a className={'nav-text'}>Xəbərlər</a></Link>
                <Link href="/staff"><a className={'nav-text'}>BMA sahibkarlıq mərkəzi</a></Link>
                <Link href="/contact"><a className={'nav-text'}>Əlaqə</a></Link>
                <div> 
                    <a className={'nav-text'}>AZ</a>
                    <div></div>
                </div>
            </div>

        </header>
    )
}

export default Navbar
