import React, {useState , useEffect} from 'react'
import styles from '../../styles/Students.module.scss'
import Link from '../../components/Link'
import Student from '../../components/Student'
import PaginationCont from '../../components/PaginationCont'
import axios from 'axios'

function index() {
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
        <div className={styles.studentsPage + " page "}>
            <Link link='Tələbələr'/>
            <h1 className={styles.aboutTitle + " title-b-desk  pageTitle"} >Tələbələr</h1>
            <div className={styles.studentsCont}>
                <PaginationCont student={1} handleChange={handleChange}  page={page}    Pagination={Pagination} />
            </div>
        </div>
    )
}

export default index
