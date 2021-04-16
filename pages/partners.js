import React from 'react'
import styles from '../styles/Partners.module.scss'
import Link from '../components/Link'

function partners() { 
    return (
        <div className={styles.partnersPage + " page "} >
            <Link link='Partnyorlar'/>
            <h1 className={styles.aboutTitle + " title-b-desk  pageTitle"} >Partnyorlar</h1>

            <div className={styles.partners}>
                <div className={styles.partner}>
                    <div className={styles.imgTitle}><img src="/eastLondon.svg" alt="East-London-Logo"/> <h2 className={'title-e-desk'}>University of East London (UEL)</h2></div>
                    <p className={styles.text + " text"}>
                        The University of East London was founded and remains rooted in east London. We began life in 1898 as the West Ham Technical Institute and have understood the needs of business since the outset. Today we have 17,000 students from over 135 countries studying 160 different courses, ranging from accounting, education and fashion to policing, architecture and tourism.
                    </p>
                    <button className='button-text'>Daha çox göstər  &#x2193;</button>
                </div>

                <div className={styles.partner}>
                    <div className={styles.imgTitle}><img src="/bakimusicacademy.svg" alt="East-London-Logo"/> <h2 className={'title-e-desk'}>Baku Music Academy named after Uzeyir Hajibeyli </h2></div>
                    <p className={styles.text + " text"}>
                        Baku Music Academy named after Uzeyir Hajibeyli, previously called Azerbaijan State Conservatory was established on August 21, 1921. The great founder of Azerbaijani classical music and professional composition school Uzeyir Hajibeyli who played a great role in the establishment of Baku Music Academy was an outstanding personality having a priceless place in the development of Azerbaijani music culture and music education. `
                    </p>
                    <button className='button-text'>Daha çox göstər  &#x2193;</button>
                </div>
                
                <div className={styles.partner}>
                    <div className={styles.imgTitle}><img src="/unec.svg" width='118' height='auto' alt="East-London-Logo"/> <h2 className={'title-e-desk'}>Azerbaijan State University of Economics (UNEC)  </h2></div>
                    <p className={styles.text + " text"}>
                        Azerbaijan State University of Economics (UNEC) is a state university with more than 18,000 students. QS World University ranks UNEC 4th among universities with an economics focus in the Emerging Europe and Central Asia region. UNEC’s strength in international economics, finance, banking, management, marketing and advertising, business administration, and accounting make global cooperation and partnerships critical. In effect, UNEC is one of the first institutions to implement double and joint diplomas, in collaboration with international higher education institutions (HEIs) such as the London School of Economics (LSE), Lincoln University (USA), Montpellier University (France) and UBIS (Switzerland). 
                    </p>
                    <button className='button-text'>Daha çox göstər  &#x2193;</button>
                </div>

                <div className={styles.partner}>
                    <div className={styles.imgTitle}><img src="/britishcouncil.svg" alt="East-London-Logo"/> <h2 className={'title-e-desk'}>British Council </h2></div>
                    <p className={styles.text + " text"}>
                        The British Council is the UK’s international organization for cultural relations and educational opportunities. We are on the ground in six continents and over 100 countries, bringing international opportunity to life, every day. Find out more about us. 
                        <br/> <a  href="https://www.britishcouncil.az/en/about">https://www.britishcouncil.az/en/about</a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default partners
