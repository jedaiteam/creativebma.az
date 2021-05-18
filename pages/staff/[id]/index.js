import React, { useEffect, useState } from 'react'
import Link from '../../../components/Link'
import styles from '../../../styles/SelectedStaff.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import parse from 'html-react-parser';
import Head from 'next/head'

function index({staff}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])

    const imgHandle = {
        backgroundImage: `url('https://admin.creativebma.az/${staff.image}')`
    }

    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    return (
        <>
            <Head>
                <title>{langM === "AZ" && `BMA sahibkarlıq mərkəzi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `Центр предпринимательства BMA`}</title>
            </Head>
            <div className={styles.selectedStaffPage + " page"}>
                <Link link={langM === "AZ" && `BMA sahibkarlıq mərkəzi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `Центр предпринимательства BMA`} href="/staff" link2={staff.name_surname}/>
                <div className={styles.imgAndAbout + " mt50"}>
                    <div  data-aos="fade-right"   className={styles.imgHandle + " img"} style={imgHandle}></div>
                    <div  data-aos="fade-right"   className={styles.textAbout + " text"}>
                        <h1 data-aos="fade-right" className={styles.title + " title-e-desk"}>{staff.name_surname}</h1>
                        <a  data-aos="fade-right" href={`mailto:${staff.email}`} className={styles.email}>{staff.email}</a>
                        <p data-aos="fade-right" className="textAbout1">
                            {parse(`<div>${staff.content}</div>`)}
                        </p>
                    </div>
                </div>

                <p data-aos="fade-up" className="textAbout2 text mt50">
                    {parse(`${staff.content2}`)}
                </p>

            </div>
        </>
    )
}

export default index

// export async function getStaticPaths() {
//     const res = await fetch('http://creativespark.testjed.me/public/api/team-api/')
//     const users = await res.json()
//     console.log(users)
//     const paths = users.map((user) => ({
//       params: { id: user.id.toString() },
//     }))
  
//     return { paths, fallback: false }
//   }


export const getServerSideProps  = async (context) => {
    const res = await fetch(`https://admin.creativebma.az/api/team-api/${context.params.id}`)
    console.log(res)
    const staff = await res.json()
    return {
        props:{staff}
    }
}