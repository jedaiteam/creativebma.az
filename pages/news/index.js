import React, { useState, useEffect} from 'react'
import styles from '../../styles/NewsPage.module.scss'
import Link1 from '../../components/Link'
import News from '../../components/News'
import PaginationCont from '../../components/PaginationCont'
import axios from 'axios'
function news() {
    const [Pagination, setPagination] = useState()
    const [page, setPage] = React.useState(1);
    const [url, seturl] = useState(`http://jobday.testjed.me/api/vacancies-api?page=${page}`) 
    
    const handleChange = (event, value) => {
        setPage(value);
        seturl(`http://jobday.testjed.me/api/vacancies-api?page=${value}`)
        axios.get(`http://jobday.testjed.me/api/vacancies-api?page=${value}`)
            .then(res =>(setPagination(res.data)))    
    };

    useEffect(() => {
        axios.get(url)
            .then(res =>(setPagination(res.data)))    
    }, [])
    
    return (
        <div className={styles.newsPage + " page "}>
            <Link1 link='Xəbərlər'/>
            <h1 className={styles.aboutTitle + " title-b-desk  pageTitle"} >Xəbərlər</h1>
            <div className={styles.newsCont}>
                <PaginationCont news={1} handleChange={handleChange}  page={page}  Pagination={Pagination} />
            </div>
        </div>
    )
}

export default news
