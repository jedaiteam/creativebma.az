import React from 'react'
import styles from '../styles/Student.module.scss'
function Student(props) {
    const studentImg = {
        backgroundImage: `url(/avatar1.png)`
    }
    return (
        <div className={styles.studentCont}>
            <div style={studentImg} className={styles.studentImgStyle + ' img'}></div>
            <p className={styles.name + " text"}>{props.name}</p>
            <p className={styles.job + " text"}>{props?.type}</p>
        </div>
    )
}

export default Student
