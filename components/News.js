import React from 'react'
import styles from '../styles/News.module.scss'
import Link from 'next/link'

function News(props) {
    const newsImg = {
        backgroundImage: `url(http://creativespark.testjed.me/${props.image})`
    }
    return (
        <Link href={`/news/${props.id}`}> 
            <div className={styles.newsCont}>
                <div style={newsImg} className={styles.newsImgStyle + ' img'}></div>
                <p className={styles.name + " text"}>{props?.content?.replace(/(<([^>]+)>)/gi, "")}</p>
            </div>
        </Link>
    )
}

export default News
