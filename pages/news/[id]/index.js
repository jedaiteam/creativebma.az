import React, { useEffect , useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/SelectedNews.module.scss'
import Link from '../../../components/Link'
import AOS from "aos";
import "aos/dist/aos.css";

function selectednews({news}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])

    const imgHandle = {
        backgroundImage:`url(https://creativespark.testjed.me/${news.img})`
    }
    const imgHandle2 = {
        backgroundImage:`url(https://creativespark.testjed.me/${news.image_1})`
    }
    const imgHandle3 = {
        backgroundImage:`url(https://creativespark.testjed.me/${news.image_2})`
    }
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    return (
        <div className={styles.selectedNewsPage + " page"}>
            <Link link={langM === "AZ" && `Xəbərlər` || langM === "EN" && `News` || langM === "RU" && `Новости`}/>
            <div className={styles.imgAndTitle + " mt30"}>
                <div data-aos="fade-right"  style={imgHandle} className={styles.imgHandle + " img"}></div>
                <div data-aos="fade-right" className={styles.titleAndDate}>
                    <h1 className={styles.title + " title-e-desk"}> {news.title.replace(/(<([^>]+)>)/gi, "")}</h1>
                    <p className={styles.date + " text"}> <img src="/calendar.svg" alt=""/> <span>{news.created_at.slice(0,10)}</span> </p>
                </div>
            </div>

            <div data-aos="fade-up" className="text mt50">
                <p className="text">
                    {news.content.replace(/(<([^>]+)>)/gi, "")}
                </p>
            </div>

            <div className={styles.imgs + " mt50 img"} >
                <div data-aos="fade-up"  className={styles.imgBottom + " img"} style={imgHandle2}></div>
                <div data-aos="fade-up"  className={styles.imgBottom + " img"} style={imgHandle3}></div>
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