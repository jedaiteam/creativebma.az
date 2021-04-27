import React from 'react'
import Link from '../../../components/Link'
import styles from '../../../styles/SelectedStaff.module.scss'
function index({staff}) {
    const imgHandle = {
        backgroundImage: `url('http://creativespark.testjed.me${staff.image}')`
    }
    return (
        <div className={styles.selectedStaffPage + " page"}>
            <Link link='Əməkdaşlar'/>
            <div className={styles.imgAndAbout + " mt50"}>
                <div className={styles.imgHandle + " img"} style={imgHandle}></div>
                <div className={styles.textAbout + " text"}>
                    <h1 className={styles.title + " title-e-desk"}>{staff.name_surname}</h1>
                    <a href="mailto:yegana.axundova@musicacademy.edu.az" className={styles.email}>{staff.email}</a>
                    <p className="textAbout1">
                        {staff.content.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                </div>
            </div>

            <p className="textAbout2 text mt50">
                {staff.content2.replace(/(<([^>]+)>)/gi, "")}
            </p>

        </div>
    )
}

export default index

export async function getStaticPaths() {
    const res = await fetch('http://creativespark.testjed.me/public/api/team-api/')
    const users = await res.json()
    console.log(users)
    const paths = users.map((user) => ({
      params: { id: user.id.toString() },
    }))
  
    return { paths, fallback: false }
  }


export const getStaticProps = async (context) => {
    const res = await fetch(`http://creativespark.testjed.me/public/api/team-api/${context.params.id}`)
    console.log(res)
    const staff = await res.json()
    return {
        props:{staff}
    }
}