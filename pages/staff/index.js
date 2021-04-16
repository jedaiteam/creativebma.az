import React from 'react'
import styles from '../../styles/BmaPage.module.scss'
import Link from '../../components/Link'
import Student from '../../components/Student'
import News from '../../components/News'
function index() {
    return (
        <div className={styles.bmaPage + " page "}>
            <Link link='BMA sahibkarlıq mərkəzi'/>
            <h1 className={styles.bmaTitle + " title-b-desk  pageTitle"} >Haqqımızda</h1>
            <p className="text mt30">
                The Entrepreneurship Center of Baku Music Academy is a new program developed within the framework of Creative Spark: 
                Higher Education Enterprise Programme funded by the British Council aimed at increasing awareness of creative and music 
                entrepreneurship among students and graduates. The target is to turn ideas of young creative people into action providing 
                motivation and support towards new career opportunities. 
            </p>
            <div className={styles.staffCont + " mt50"}>
                <h2 className={styles.aboutTitle + " title-b-desk  pageTitle "}>Əməkdaşlar </h2>
                <div className={styles.staffs}>
                    <Student name="Ad Soyad" job="Musiqiçi"/>
                    <Student name="Ad Soyad" job="Musiqiçi"/>
                    <Student name="Ad Soyad" job="Musiqiçi"/>
                    <Student name="Ad Soyad" job="Musiqiçi"/>
                </div>
            </div>
            <div className={styles.staffCont + " mt100"}>
                <h2 className={styles.aboutTitle + " title-b-desk  pageTitle "}>Tədbirlər </h2>
                <div className={styles.staffs}>
                    <News name="Lorem ipsum Lorem Ipsum"/>
                    <News name="Lorem ipsum Lorem Ipsum"/>
                    <News name="Lorem ipsum Lorem Ipsum"/>
                    <News name="Lorem ipsum Lorem Ipsum"/>
                </div>
            </div>
        </div>
    )
}

export default index
