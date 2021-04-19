import React from 'react'
import styles from '../styles/Student.module.scss'
import Link from 'next/link'

function Student(props) {
    const studentImg = {
        backgroundImage: `url(/avatar1.png)`
    }
    return (
        <Link href={`/staff/${props.id}`}> 
            <div className={styles.studentCont}>
                <div style={studentImg} className={styles.studentImgStyle + ' img'}></div>
                <p className={styles.name + " text"}>{props.name}</p>
                <p className={styles.job + " text"}>{props?.type}</p>
            </div>
        </Link>
    )
}

export default Student
