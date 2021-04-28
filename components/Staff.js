import React from 'react'
import styles from '../styles/Student.module.scss'
import Link from 'next/link'

function Student(props) {
    const studentImg = {
        backgroundImage: `url(https://creativespark.testjed.me/${props.image})`
    }
    return (
        <Link href={`/staff/${props.id}`}> 
            <div key={props.id} className={styles.studentCont}>
                <Image src={`url(https://creativespark.testjed.me/${props.image})`} alt="Picture of the author" width={500} height={500} /><Image/>
                {/* <div style={studentImg} className={styles.studentImgStyle + ' img'}></div> */}
                <p className={styles.name + " text"}>{props.name}</p>
                <p className={styles.job + " text"}>{props?.type}</p>
            </div>
        </Link>
    )
}

export default Student
