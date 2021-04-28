import React, { useEffect, useState } from 'react'
import Link from '../../../components/Link'
import styles from '../../../styles/SelectedStaff.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";

function index({staff}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, [])

    const imgHandle = {
        backgroundImage: `url('http://creativespark.testjed.me${staff.image}')`
    }

    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    return (
        <div className={styles.selectedStaffPage + " page"}>
            <Link link={langM === "AZ" && `BMA sahibkarlıq mərkəzi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `Центр предпринимательства BMA`}/>
            <div className={styles.imgAndAbout + " mt50"}>
                <div  data-aos="fade-right"   className={styles.imgHandle + " img"} style={imgHandle}></div>
                <div  data-aos="fade-right"   className={styles.textAbout + " text"}>
                    <h1 data-aos="fade-right" className={styles.title + " title-e-desk"}>{staff.name_surname}</h1>
                    <a  data-aos="fade-right" href={`mailto:${staff.email}`} className={styles.email}>{staff.email}</a>
                    <p data-aos="fade-right" className="textAbout1">
                        {staff.content.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                </div>
            </div>

            <p data-aos="fade-up" className="textAbout2 text mt50">
                {staff.content2.replace(/(<([^>]+)>)/gi, "")}
            </p>

        </div>
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
    const res = await fetch(`https://creativespark.testjed.me/public/api/team-api/${context.params.id}`)
    console.log(res)
    const staff = await res.json()
    return {
        props:{staff}
    }
}