import React, {useState} from 'react'
import Pagination from '@material-ui/core/Pagination';
import styles from '../styles/PaginationCont.module.scss'
import Student from '../components/Student'
import News from '../components/News'
function PaginationCont(props) {
    
    const [numberOfVacancy] = useState(12)
    
    if(props.student === 1){
        var elements = [props?.Pagination?.data?.map((student ,index) => <Student id={student.id} image={student.image} name={student.name_surname}/>)] 
    }
    else if(props.news === 1)
    {
        var elements = [props?.Pagination?.data?.map((news ,index) => <News id={news.id} image={news.img} title={news.title} content={news.content} />)] 
    }
    
    var count = Math.ceil(props?.Pagination?.total / numberOfVacancy)
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
