import React, { useState } from 'react'
import styles from '../../styles/BmaPage.module.scss'
import Link from '../../components/Link'
import Staff from '../../components/Staff'
import News from '../../components/News'
function index({teams , events}) {
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    return (
        <div className={styles.bmaPage + " page "}>
            <Link link='BMA sahibkarlıq mərkəzi'/>
            <h1 className={styles.bmaTitle + " title-b-desk  pageTitle"} >{langM === "AZ" && `Haqqımızda` || langM === "EN" && `About Us` || langM === "RU" && `О нас`}</h1>
            <p className="text mt30">
                {langM === "AZ" && `Bakı Musiqi Akademiyasının Sahibkarlıq Mərkəzi, British Council tərəfindən maliyyələşdirilən Creative Spark: Ali Təhsil Müəssisə Proqramı çərçivəsində tələbə və məzunlar arasında yaradıcılıq və musiqi sahibkarlığının artırılması məqsədi ilə hazırlanmış yeni bir proqramdır. Hədəf gənc yaradıcı insanların fikirlərini yeni karyera imkanlarına doğru motivasiya və dəstək verən fəaliyyətə çevirməkdir. ` 
                || langM === "EN" && `The Entrepreneurship Center of Baku Music Academy is a new program developed within the framework of Creative Spark: Higher Education Enterprise Programme funded by the British Council aimed at increasing awareness of creative and music entrepreneurship among students and graduates. The target is to turn ideas of young creative people into action providing motivation and support towards new career opportunities. ` 
                || langM === "RU" && `Центр предпринимательства Бакинской музыкальной академии - это новая программа, разработанная в рамках программы Creative Spark: Higher Education Enterprise, финансируемой Британским Советом, направленная на повышение осведомленности о творческом и музыкальном предпринимательстве среди студентов и выпускников. Цель - превратить идеи молодых творческих людей в действия, обеспечивающие мотивацию и поддержку для открытия новых карьерных возможностей. `}
            </p>
            <div className={styles.staffCont + " mt50"}>
                <h2 className={styles.aboutTitle + " title-b-desk  pageTitle "}>{langM === "AZ" && `Əməkdaşlar` || langM === "EN" && `Staff` || langM === "RU" && `Персонал`} </h2>
                <div className={styles.staffs}>
                    {teams.map(student => <Staff id={student.id} image={student.image} name={student.name_surname}/>)}
                </div>
            </div>
            <div className={styles.staffCont + " mt100"}>
                <h2 className={styles.aboutTitle + " title-b-desk  pageTitle "}>{langM === "AZ" && `Tədbirlər` || langM === "EN" && `Events` || langM === "RU" && `События`} </h2>
                <div className={styles.staffs}>
                    {events.map(news => <News id={news.id} image={news.img} title={news.title} content={news.content} />)}
                </div>
            </div>
        </div>
    )
}

export default index



export const getServerSideProps = async (context) => {
    const res = await fetch(`http://creativespark.testjed.me/api/team-api`)
    const teams = await res.json()
    const res1 = await fetch(`http://creativespark.testjed.me/api/blog-tedbirler-take-3-api`)
    const events = await res1.json()
    return {
        props:{teams , events}
    }
}