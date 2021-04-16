import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Student from '../components/Student'
import News from '../components/News'
export default function Home() {
  return (
    <div  className={styles.homepage} >

        <div className={styles.enterance}>
            <div className={styles.enteranceText}>
                <h1 className="title-big-desk">Creative Spark</h1>
                <h2 className={styles.enteranceSubTitle + " top-title-w"}>Tələbələrə və yaradıcı sahibkarlara biznes bacarıqlarının <br/> öyrədilməsi</h2>
                <button className="button-b-design">Haqqımızda</button>
            </div>
            <div className={styles.enteranceImg}> <img src="/notes.svg" alt=""/> </div>
        </div>

        <div className={styles.aboutPart}>
          <div className={styles.aboutImg}><img src="/about.png" alt=""/></div>
          <div className={styles.aboutText}>
            <h2 className='title-b-desk'>Haqqımızda</h2>
            <p className='text'>
              "Creative Spark" Birləşmiş Krallığın dəstəyilə Mərkəzi Asiya ölkələrində, <br/>
              Cənubi Qafqaz ölkələrində  və Ukraynada biznes                            <br/>
              bacarıqlarını və yaradıcı iqtisadiyyatı inkişaf etdirmək məqsədilə        <br/>
              universitetlərarası və institusional əməkdaşlığı beynəlxalq               <br/>
              səviyyədə dəstəkləmək üçün nəzərdə tutulan beş illik təşəbbüsdür.         <br/>
            </p>
            <button className='button-text'>Daha ətraflı</button>
          </div>
        </div>
        
        <div className={styles.partnersPart}>
          <h2 className='title-b-desk'>Partnyorlar</h2>
          <div className={styles.partnersElements}>
              <img src="/eastLondon.svg" alt="east-london-logo"/>
              <img src="/bakimusicacademy.svg" alt="baki-music-academy"/>
              <img height='162' width='auto' src="/unec.svg" alt="azerbaijan-economy-university"/>
              <img src="/britishCouncil.svg" alt="british-council"/>
          </div>
          <button className='button-text'>Daha ətraflı</button>
        </div>

        <div className={styles.studentsPart}>
          <h2 className='title-b-desk'>Tələbələr</h2>
          <div className={styles.studentsElements}>
            <Student name='Ad Soyad'/>
            <Student name='Ad Soyad'/>
            <Student name='Ad Soyad'/>
          </div>
          <button className='button-text'>Daha ətraflı</button>
        </div>

        <div className={styles.bmaPart}>
          <div className={styles.bmaText}>
            <h2 className='title-b-desk'>BMA sahibkarlıq mərkəzi</h2>
            <p className='text'>
                The Entrepreneurship Center of Baku Music Academy is a new            <br/>
                program developed within the framework of Creative Spark: Higher      <br/>
                Education Enterprise Programme funded by the British Council          <br/>
                aimed at increasing awareness of creative and music                   <br/>
                entrepreneurship among students and graduates. The target is to       <br/>
                turn ideas of young creative people into action providing             <br/>
                motivation and support towards new career opportunities.              <br/>
            </p>
            <button className='button-text'>Daha ətraflı</button>
          </div>
          <div className={styles.bmaImg}><img src="/bma.svg" alt=""/></div>
        </div>


        <div className={styles.newsPart}>
        <h2 className='title-b-desk'>Xəbərlər</h2>
          <div className={styles.newsElements}>
            <News name='Lorem  Ipsun Lorem  Ipsun '/>
            <News name='Lorem  Ipsun Lorem  Ipsun '/>
            <News name='Lorem  Ipsun Lorem  Ipsun Lorem  Ipsun Lorem  Ipsun Lorem  Ipsun Lorem  Ipsun '/>
          </div>
          <button className='button-text'>Daha ətraflı</button>
        </div>

    </div>
  )
}
