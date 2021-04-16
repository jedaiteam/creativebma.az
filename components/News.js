import React from 'react'
import styles from '../styles/News.module.scss'
function News(props) {
    const newsImg = {
        backgroundImage: `url(/newsAvatar.png)`
    }
    return (
        <div className={styles.newsCont}>
            <div style={newsImg} className={styles.newsImgStyle + ' img'}></div>
            <p className={styles.name + " text"}>{props.name}</p>
        </div>
    )
}

export default News
