import React from 'react'
import Link from 'next/link'
import styles from '../styles/Link.module.scss'
function Link1(props) {
    return (
        <div className={styles.link + " text"}><a href="/">Əsas Səhifə</a> &#x2192;  <span className={styles.linkSelected}> <Link href="/" >{props.link}</Link> </span>  </div>
    )
}

export default Link1
