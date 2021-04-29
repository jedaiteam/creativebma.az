import React, {useState , useEffect} from 'react'
import styles from '../../styles/Students.module.scss'
import Link from '../../components/Link'
import Student from '../../components/Student'
import PaginationCont from '../../components/PaginationCont'
import axios from 'axios'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'


function index({student}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])

    const [Pagination, setPagination] = useState(student)
    const [page, setPage] = React.useState(1);
    const [url, seturl] = useState(`https://creativespark.testjed.me/api/musicians-api?page=${page}`) 
    
    const handleChange = (event, value) => {
        setPage(value);
        seturl(`https://creativespark.testjed.me/api/musicians-api?page=${value}`)
        axios.get(`https://creativespark.testjed.me/api/musicians-api?page=${value}`)
            .then(res =>(setPagination(res.data)))    
    };

    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    return (
        <>
            <Head>
                <title>{langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`}</title>
            </Head>
            <div className={styles.studentsPage + " page "}>
                <Link link={langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`}/>
                <h1 data-aos="fade-up" className={styles.aboutTitle + " title-b-desk  pageTitle"} >{langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`}</h1>
                <div data-aos="fade-up"  className={styles.studentsCont}>
                    <PaginationCont student={1} handleChange={handleChange}  page={page}    Pagination={Pagination} />
                </div>
            </div>
        </>
    )
}

export default index



export const getStaticProps = async (context) => {
    const res = await fetch(`https://creativespark.testjed.me/api/musicians-api?page=1`)
    const student = await res.json()
    return {
        props:{student}
    }
}