import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import stylesBtn from '../styles/Button.module.scss'
import Student from '../components/Student'
import News from '../components/News'
import Link from 'next/link'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '../components/Button'
import AOS from "aos";
import "aos/dist/aos.css";
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Home({students , news}) {
  const mobileImg = useMediaQuery('(max-width:750px)');
  const desktopImg = useMediaQuery('(min-width:750px)');
  const getStudents3 = async () => {
    try {
        const resp = await axios.get('http://creativespark.testjed.me/');
    } catch (err) {
        // Handle Error Here
        console.error(err);
    }
  }

  useEffect(() => {
    getStudents3()
    AOS.init();
    AOS.refresh();
  }, [])
  

  if (typeof window !== "undefined") {
    var lang = sessionStorage.getItem('lang')
  }
  var lang = ["AZ" , "EN" , "RU"]
  const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
  
  const [students3, setstudents3] = useState([students])
  const [news3, setnews3] = useState([news])
  const getDatas = async () => {
    const response1 = await axios.get('https://creativespark.testjed.me/api/musicians-api-take-3')
    const response2 = await axios.get('https://creativespark.testjed.me/api/blog-xeberler-take-3-api')
    setstudents3(response1.data)
    setnews3(response2.data)
  }
  useEffect(() => {
    getDatas()
  }, [])



  return (
    <>
      <Head>
        <title>{langM === "AZ" && `Əsas səhifə` || langM === "EN" && `Homepage` || langM === "RU" && `Главная страница`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div  className={styles.homepage} >


        <div className={styles.enterance} >
            <div className={styles.enteranceText} data-aos="fade-left">
                <h1 className={styles.titleTop + " title-big-desk mt50"}>{langM === "AZ" && `Creative Spark` || langM === "EN" && `Creative Spark` || langM === "RU" && `Creative Spark`}</h1>
                <h2 className={styles.enteranceSubTitle + " top-title-w"}>{langM === "AZ" && `Tələbələrə və yaradıcı sahibkarlara biznes bacarıqlarının  öyrədilməsi` || langM === 'EN' && `Teaching business skills to students and creative entrepreneurs` || langM === "RU" && `Обучение бизнес-навыкам студентов и творческих предпринимателей`}</h2>
                <Link href="/about"><a className={stylesBtn.buttonEffect + " button-b-design"}><KeyboardArrowRightIcon/> {langM === "AZ" && `Haqqımızda` || langM === "EN" && `About Us` || langM === "RU" && `О нас`}</a></Link>
                
            </div>
            {desktopImg && <img  data-aos="fade-right" className={styles.enteranceImg} src="/notes.svg" alt="notes"/>}
            {mobileImg   && <img  data-aos="fade-left"  className={styles.enteranceImg} src="/mobileNotes.svg" alt="notes-mobile-version"/>}
        </div>


          <div className={styles.aboutPart} data-aos="fade-up">
            <div className={styles.aboutImg}><img src="/about.png" alt="" data-aos="fade-right"/></div>
            <div className={styles.aboutText} data-aos="fade-left">
              <h2 className='title-b-desk'>{langM === "AZ" && `Haqqımızda` || langM === "EN" && `About Us` || langM === "RU" && `О нас`}</h2>
              <p className='text'>
                {langM === "AZ" && `"Creative Spark" Birləşmiş Krallığın dəstəyilə Mərkəzi Asiya ölkələrində,  Cənubi Qafqaz ölkələrində  və Ukraynada biznes bacarıqlarını və yaradıcı iqtisadiyyatı inkişaf etdirmək məqsədilə  universitetlərarası və institusional əməkdaşlığı beynəlxalq səviyyədə dəstəkləmək üçün nəzərdə tutulan beş illik təşəbbüsdür.         ` 
                || langM === "EN" && `Creative Spark is a five year initiative to support international university and institutional partnerships to develop enterprise skills and creative economy across seven countries in Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan), South Caucasus (Azerbaijan, Armenia, Georgia) and Ukraine through UK support.  ` 
                || langM === "RU" && `Creative Spark - это пятилетняя инициатива по поддержке международных университетов и созданию международных партнерств с целью развить предпринимательские навыки и креативную экономику в семи странах, включая Центральную Азию (Казахстан, Узбекистан, Кыргызстан), Южный Кавказ (Азербайджан, Армению, Грузию) и Украину при поддержке Соединенного Королевства. `}
                
              </p>
              <Link href="/about"><button data-aos="fade-up" className={stylesBtn.buttonEffect + " button-text"}><KeyboardArrowRightIcon/> {langM === "AZ" && `Hamısına Bax` || langM === "EN" && `All` || langM === "RU" && `Читать далее`}</button></Link>
            </div>
          </div>


        <div className={styles.partnersPart} data-aos="fade-up">
          <h2 className='title-b-desk'>{langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `Партнеры`}</h2>
          <div className={styles.partnersElements}>
              <img data-aos="fade-up" src="/eastLondon.svg" alt="east-london-logo"/>
              <img data-aos="fade-up" src="/bakimusicacademy.svg" alt="baki-music-academy"/>
              <img data-aos="fade-up" height='162' width='auto' src="/unec.svg" alt="azerbaijan-economy-university"/>
              <img data-aos="fade-up" src="/britishCouncil.png" alt="british-council"/>
          </div>
          <Link href="/partners"><button data-aos="fade-up" className={stylesBtn.buttonEffect + " button-text"}><KeyboardArrowRightIcon/> {langM === "AZ" && `Hamısına Bax` || langM === "EN" && `All` || langM === "RU" && `Читать далее`}</button></Link>
        </div>

        <div className={styles.studentsPart + " mt50" }  data-aos="fade-up">
          <h2 className='title-b-desk'>{langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`}</h2>
          <div className={styles.studentsElements}  data-aos="fade-up">
            {students3.map(student => <Student id={student.id} image={student.image} name={student.name_surname}/>)}
          </div>
          <Link href="/students"><button data-aos="fade-up" className={stylesBtn.buttonEffect + " button-text"}><KeyboardArrowRightIcon/> {langM === "AZ" && `Hamısına Bax` || langM === "EN" && `All` || langM === "RU" && `Читать далее`}</button></Link>
        </div>

        <div className={styles.bmaPart}  data-aos="fade-up">
          <div className={styles.bmaText}  data-aos="fade-right">
            <h2 className='title-b-desk'>{langM === "AZ" && `BMA sahibkarlıq mərkəzi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `Центр предпринимательства BMA`}</h2>
            <p className={styles.bmaSubText + ' text'}>
              {langM === "AZ" && `Bakı Musiqi Akademiyasının Sahibkarlıq Mərkəzi, British Council tərəfindən maliyyələşdirilən Creative Spark: Ali Təhsil Müəssisə Proqramı çərçivəsində tələbə və məzunlar arasında yaradıcılıq və musiqi sahibkarlığının artırılması məqsədi ilə hazırlanmış yeni bir proqramdır. Hədəf gənc yaradıcı insanların fikirlərini yeni karyera imkanlarına doğru motivasiya və dəstək verən fəaliyyətə çevirməkdir. ` 
                || langM === "EN" && `The Entrepreneurship Center of Baku Music Academy is a new program developed within the framework of Creative Spark: Higher Education Enterprise Programme funded by the British Council aimed at increasing awareness of creative and music entrepreneurship among students and graduates. The target is to turn ideas of young creative people into action providing motivation and support towards new career opportunities. ` 
                || langM === "RU" && `Центр предпринимательства Бакинской музыкальной академии - это новая программа, разработанная в рамках программы Creative Spark: Higher Education Enterprise, финансируемой Британским Советом, направленная на повышение осведомленности о творческом и музыкальном предпринимательстве среди студентов и выпускников. Цель - превратить идеи молодых творческих людей в действия, обеспечивающие мотивацию и поддержку для открытия новых карьерных возможностей. `}
            </p>
            <Link href="/staff"><button data-aos="fade-up" className={stylesBtn.buttonEffect + " button-text"}><KeyboardArrowRightIcon/> {langM === "AZ" && `Hamısına Bax` || langM === "EN" && `All` || langM === "RU" && `Читать далее`}</button></Link>
          </div>
          <div data-aos="fade-left" className={styles.bmaImg}><img src="/bma.svg" alt=""/></div>
        </div>


        <div className={styles.newsPart} data-aos="fade-up">
        <h2 className='title-b-desk'>{langM === "AZ" && `Xəbərlər` || langM === "EN" && `News` || langM === "RU" && `Новости`}</h2>
          <div className={styles.newsElements} data-aos="fade-up">
            {news3.map(news => <News id={news.id} title={news.title} content={news.content} image={news.img}/>)}
          </div>
          <Link href="/news" ><button data-aos="fade-up" className={stylesBtn.buttonEffect + " button-text"}><KeyboardArrowRightIcon/> {langM === "AZ" && `Hamısına Bax` || langM === "EN" && `All` || langM === "RU" && `Читать далее`}</button></Link>
        </div>

    </div>
    </>
  )
}



export const getStaticProps = async (context) => {
  const res1 = await fetch('https://creativespark.testjed.me/api/musicians-api-take-3')
  const res2 = await fetch('https://creativespark.testjed.me/api/blog-xeberler-take-3-api')
  const students = await res1.json()
  const news = await res2.json()  
  return {
      props:{students , news}
  }
}

