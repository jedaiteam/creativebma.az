import React from 'react'
import styles from '../../styles/Students.module.scss'
import Link from '../../components/Link'
import Student from '../../components/Student'

function index() {
    return (
        <div className={styles.studentsPage + " page "}>
            <Link link='Tələbələr'/>
            <h1 className={styles.aboutTitle + " title-b-desk  pageTitle"} >Tələbələr</h1>
            <div className={styles.studentsCont}>
                <Student name='Ad Soyad' type='musiqiçi'/>
                <Student name='Ad Soyad' type='musiqiçi'/>
                <Student name='Ad Soyad' type='musiqiçi'/>
                <Student name='Ad Soyad' type='musiqiçi'/>
                <Student name='Ad Soyad' type='musiqiçi'/>
                <Student name='Ad Soyad' type='musiqiçi'/>
                <Student name='Ad Soyad' type='musiqiçi'/>
                <Student name='Ad Soyad' type='musiqiçi'/>
                <Student name='Ad Soyad' type='musiqiçi'/>
            </div>
        </div>
    )
}

export default index
