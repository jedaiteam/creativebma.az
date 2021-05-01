import React, { useState, useEffect} from 'react'
import styles from '../../styles/NewsPage.module.scss'
import Link from '../../components/Link'
import News from '../../components/News'
import PaginationCont from '../../components/PaginationCont'
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'


function news({news}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    const [Pagination, setPagination] = useState()
    const [page, setPage] = React.useState(1);
    const [url, seturl] = useState(langM === 'AZ' && `https://admin.creativebma.az/api/blog-api?page=${page}${page}` || langM === 'EN' && `https://admin.creativebma.az/api/en/blog-api?page=${page}`  || langM === 'RU' && `https://admin.creativebma.az/api/ru/blog-api?page=${page}`) 
    const handleChange = (event, value) => {
        setPage(value);
        seturl(langM === 'AZ' && `https://admin.creativebma.az/api/blog-api?page=${value}` || langM === 'EN' && `https://admin.creativebma.az/api/en/blog-api?page=${value}`  || langM === 'RU' && `https://admin.creativebma.az/api/ru/blog-api?page=${value}`)
        axios.get(langM === 'AZ' && `https://admin.creativebma.az/api/blog-api?page=${value}` || langM === 'EN' && `https://admin.creativebma.az/api/en/blog-api?page=${value}`  || langM === 'RU' && `https://admin.creativebma.az/api/ru/blog-api?page=${value}`)
            .then(res =>(setPagination(res.data)))    
    };

    const getDatas = async () => {
        if (langM === 'AZ') {
          let response1 = await axios.get('https://admin.creativebma.az/api/blog-api?page=1')
          setPagination(response1.data)
        }
        else if(langM === 'EN')
        {
          let response1 = await axios.get('https://admin.creativebma.az/api/en/blog-api?page=1')
          setPagination(response1.data)
        }
        else if(langM === 'RU') 
        {
          let response1 = await axios.get('https://admin.creativebma.az/api/ru/blog-api?page=1')
          setPagination(response1.data)
        }
        else{}
    }
    
    useEffect(() => {
        getDatas()
        AOS.init();
        AOS.refresh();
      }, [])



    return (
        <>
            <Head>
                <title> {langM === "AZ" && `Xəbərlər` || langM === "EN" && `News` || langM === "RU" && `Новости`} </title>    
            </Head>
            <div className={styles.newsPage + " page "}>
                <Link link={langM === "AZ" && `Xəbərlər` || langM === "EN" && `News` || langM === "RU" && `Новости`} href='/news'/>
                <h1 data-aos="fade-right" className={styles.aboutTitle + " title-b-desk  pageTitle"} >{langM === "AZ" && `Xəbərlər` || langM === "EN" && `News` || langM === "RU" && `Новости`}</h1>
                <div data-aos="fade-up"  className={styles.newsCont}>
                    <PaginationCont news={1} handleChange={handleChange}  page={page}  Pagination={Pagination} />
                </div>
            </div>
        </>
    )
}

export default news



// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://admin.creativebma.az/api/blog-api?page=1`)
//     const news = await res.json()
//     return {
//         props:{news}
//     }
// }