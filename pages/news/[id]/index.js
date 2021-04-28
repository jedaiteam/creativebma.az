import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/SelectedNews.module.scss'
import Link from '../../../components/Link'

function selectednews({news}) {

    const imgHandle = {
        backgroundImage:`url(http://creativespark.testjed.me/${news.img})`
    }
    const imgHandle2 = {
        backgroundImage:'url(/singleNewsAvatar2.png)'
    }
    const imgHandle3 = {
        backgroundImage:'url(/singleNewsAvatar2.png)'
    }
    return (
        <div className={styles.selectedNewsPage + " page"}>
            <Link link='Seçilmiş Xəbər'/>
            <div className={styles.imgAndTitle + " mt30"}>
                <div  style={imgHandle} className={styles.imgHandle + " img"}></div>
                <div className={styles.titleAndDate}>
                    <h1 className={styles.title + " title-e-desk"}> {news.title.replace(/(<([^>]+)>)/gi, "")}</h1>
                    <p className={styles.date + " text"}> <img src="/calendar.svg" alt=""/> <span>{news.created_at.slice(0,10)}</span> </p>
                </div>
            </div>

            <div className="text mt50">
                <p className="text">
                    {news.content.replace(/(<([^>]+)>)/gi, "")}
                </p>
            </div>

            <div className={styles.imgs + " mt50 img"} >
                <div className={styles.imgBottom} style={imgHandle2}></div>
                <div className={styles.imgBottom} style={imgHandle3}></div>
            </div>
        </div>
    )
}

export default selectednews

// export async function getStaticPaths() {
//     const res = await fetch('http://creativespark.testjed.me/api/blog-api/')
//     const users = await res.json()
//     console.log(users)
//     const paths = users.data.map((user) => ({
//       params: { id: user.id.toString() },
//     }))
  
//     return { paths, fallback: false }
//   }

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://creativespark.testjed.me/api/blog-api/${context.params.id}`)
    const news = await res.json()
    return {
        props:{news}
    }
}