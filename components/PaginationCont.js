import React, {useState} from 'react'
import Pagination from '@material-ui/core/Pagination';
import styles from '../styles/PaginationCont.module.scss'
import Student from '../components/Student'
import News from '../components/News'
function PaginationCont(props) {
    
    const [numberOfVacancy] = useState(16)
    
    if(props.student === 1){
        var elements = [props?.Pagination?.data?.map((element ,index) => <Student name='Ad Soyad' type='musiqiçi'/>)] 
    }
    else if(props.news === 1)
    {
        var elements = [props?.Pagination?.data?.map((element ,index) => <News id='1' name='Ad Soyad' type='musiqiçi'/>)] 
    }
    
    var count = Math.ceil(props?.Pagination?.meta?.total / numberOfVacancy)
    var indexOfLastPost = (props.page) * numberOfVacancy
    var indexOfFirstPost = indexOfLastPost - numberOfVacancy
    var currentPosts = elements

    return (
        <div className={styles.paginationConts}>
                <div className={styles.elementsCont}>
                        {currentPosts}
                </div>
                {count >= 2 && <div className={styles.pagination} ><Pagination count={count} onChange={props.handleChange} page={props.page}  variant="outlined" shape="rounded" /></div>}
                
        </div>
    )
}

export default PaginationCont
