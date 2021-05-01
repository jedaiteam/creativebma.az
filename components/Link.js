import React, { useState } from 'react'
import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import styles from '../styles/Link.module.scss'
function Link1(props) {
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    const linkMQ = useMediaQuery('(min-width:750px)');
    
    return (
        <>
            {linkMQ && <div className={styles.link + " text"}><a href="/">{langM === "AZ" && `Əsas səhifə` || langM === "EN" && `Homepage` || langM === "RU" && `Главная страница`}</a> &#x2192;  <span className={styles.linkSelected}> <a href={`${props.href}`} >{props.link}</a> </span> { (props.link2 !== null && props.link2 !== undefined) && <> &#x2192;  <span className={styles.linkSelected}> {props.link2} </span></>}  </div>}
        </>
    )
}

export default Link1
