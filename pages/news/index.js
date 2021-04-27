import React, { useState, useEffect} from 'react'
import styles from '../../styles/NewsPage.module.scss'
import Link1 from '../../components/Link'
import News from '../../components/News'
import PaginationCont from '../../components/PaginationCont'
import axios from 'axios'
function news({news}) {
    const [Pagination, setPagination] = useState(news)
    const [page, setPage] = React.useState(1);
    const [url, seturl] = useState(`http://jobday.testjed.me/api/vacancies-api?page=${page}`) 
    
    const handleChange = (event, value) => {
        setPage(value);
        seturl(`http://jobday.testjed.me/api/vacancies-api?page=${value}`)
        axios.get(`http://jobday.testjed.me/api/vacancies-api?page=${value}`)
            .then(res =>(setPagination(res.data)))    
    };

    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    
    return (
        <div className={styles.newsPage + " page "}>
            <Link1 link='Xəbərlər' href='/news'/>
            <h1 className={styles.aboutTitle + " title-b-desk  pageTitle"} >{langM === "AZ" && `Xəbərlər` || langM === "EN" && `News` || langM === "RU" && `Новости`}</h1>
            <div className={styles.newsCont}>
                <PaginationCont news={1} handleChange={handleChange}  page={page}  Pagination={Pagination} />
            </div>
        </div>
    )
}

export default news



export const getStaticProps = async (context) => {
    const res = await fetch(`http://creativespark.testjed.me/api/blog-api?page=1`)
    const news = await res.json()
    return {
        props:{news}
    }
}