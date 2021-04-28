import React from 'react'
import styles from '../styles/Student.module.scss'
import Link from 'next/link'

function Student(props) {
    const studentImg = {
        backgroundImage: `url(https://creativespark.testjed.me/${props.image})`
    }
    return (
        <Link href={`/students/${props.id}`}> 
            <div key={props.id} className={styles.studentCont}>
                <div style={studentImg} className={styles.studentImgStyle + ' img'}></div>
                <p className={styles.name + " text"}>{props.name}</p>
                <p className={styles.job + " text"}>{props?.type}</p>
            </div>
        </Link>
    )
}

export default Student
