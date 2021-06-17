import React, { useState, useEffect} from 'react'
import styles from '../../styles/NewsPage.module.scss'
import Link from '../../components/Link'
import News from '../../components/News'
import PaginationCont from '../../components/PaginationCont'
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'
import PresentationCard from '../../components/PresentationCard'


function Presentations({news}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])

    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    
    

    const presentations = [
        { id: 1 , name:"by Osman Mustafazadə" , title:"Guess the classical music" , link:'https://admin.creativebma.az/public/uploads/ppt1.pptx'},
        { id: 2 , name:"by Nazrin Babayeva" , title:"The Pianist who played his own rules" , link:'https://admin.creativebma.az/public/uploads/ppt2.pptx'},
        { id: 3 , name:"by Müjgan Məmmədli" , title:"The Photos in history" , link:'https://admin.creativebma.az/public/uploads/ppt3.pptx'},
        { id: 4 , name:"by Gular Babayeva" , title:"Education system in Finland" , link:'https://admin.creativebma.az/public/uploads/ppt4.pptx'},
        { id: 5 , name:"by Gunel Ismayilova" , title:"Sign Language" , link:'https://admin.creativebma.az/public/uploads/ppt5.pptx'},
        { id: 6 , name:"by Elnura Sadigova" , title:"The Butterfly Effect" , link:'https://admin.creativebma.az/public/uploads/ppt6.pptx'},
        { id: 7 , name:"by Subhan Rustamov & Kamran Talibli" , title:"The Most important innvations of the last 50 years" , link:'https://admin.creativebma.az/public/uploads/ppt7.pptx'}
    ]

    return (
        <>
            <Head>
                <title> {langM === "AZ" && `Təqdimatlar` || langM === "EN" && `Presentations` || langM === "RU" && `Презентаций`} </title>    
            </Head>
            <div className={styles.newsPage + " page "}>
                <Link link={langM === "AZ" && `BMA sahibkarlıq mərkəzi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `Центр предпринимательства BMA`} link2={langM === "AZ" && `Təqdimatlar` || langM === "EN" && `Presentations` || langM === "RU" && `Презентаций`} href='/staff'/>
                <h1 data-aos="fade-right" className={styles.aboutTitle + " title-b-desk  pageTitle"} >{langM === "AZ" && `Təqdimatlar` || langM === "EN" && `Presentations` || langM === "RU" && `Презентаций`}</h1>
                <div data-aos="fade-up"  className={styles.newsCont}>
                    {presentations.map(value => <PresentationCard number={value.id}  name={value.name} title={value.title} link={value.link}/>)}
                </div>
            </div>
        </>
    )
}

export default Presentations


