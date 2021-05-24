import React, { useEffect, useState } from 'react'
import Link from '../components/Link'
import styles from '../styles/About.module.scss'
import AOS from "aos";
import "aos/dist/aos.css";
import Head from 'next/head'
function about() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    
    return (
        <>
            <Head>
                <title>{langM === "AZ" && `Haqqımızda` || langM === "EN" && `About Us` || langM === "RU" && `О нас`}</title>
            </Head>
                
            <div className={styles.aboutPage + " page"}>
                <Link link={langM === "AZ" && `Haqqımızda` || langM === "EN" && `About Us` || langM === "RU" && `О нас`} href="/about"/>
                <h1 className={styles.aboutTitle + " title-b-desk pageTitle"} data-aos="fade-up">{langM === "AZ" && `Haqqımızda` || langM === "EN" && `About Us` || langM === "RU" && `О нас`}</h1>
                <div className={styles.aboutPart1}  data-aos="fade-up">
                    <p className={styles.text + ' text'}> 
                        {langM === "AZ" && `"Creative Spark" Birləşmiş Krallığın dəstəyilə Mərkəzi Asiya ölkələrində (Qazaxıstan, Özbəkistan, Qırğızıstan), Cənubi Qafqaz ölkələrində (Azərbaycan, Gürcüstan, Ermənistan) və Ukraynada (ümumilikdə yeddi ölkədə) biznes bacarıqlarını və yaradıcı iqtisadiyyatı inkişaf etdirmək məqsədilə universitetlərarası və institusional əməkdaşlığı beynəlxalq səviyyədə dəstəkləmək üçün nəzərdə tutulan beş illik təşəbbüsdür.` 
                            || langM === "EN" && `Creative Spark is a five year initiative to support international university and institutional partnerships to develop enterprise skills and creative economy across seven countries in Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan), South Caucasus (Azerbaijan, Armenia, Georgia) and Ukraine through UK support.  ` 
                            || langM === "RU" && `Creative Spark – это пятилетняя программа по развитию международного образовательными учреждениями Великобритании и странами- участниками проекта в области развития навыков креативного предпринимательства в целях развития креативной экономики. В проекте участвуют: страны Средней Азии (Казахстан, Узбекистан, Кыргызстан), Южного Кавказа (Азербайджан, Армения, Грузия) и Украина. `}
                        <br/>
                        <br/>
                        {langM === "AZ" && `Bu yeddi ölkədə ali təhsil sahəsində aparılan islahatları dəstəkləmək və işsizlik səviyyəsinin aşağı salınması üçün Birləşmiş Krallığın təcrübəsindən istifadə edəcəyik.` 
                            || langM === "EN" && `In order to support higher education reform and respond to unemployment rates in these seven countries, the UK’s experience will be used to help develop enterprise education. This way over 10,000 students and young entrepreneurs were supported in the first year of the programme.   ` 
                            || langM === "RU" && `В целях поддержки реформ в высшем образовании и развития навыков успешного трудоустройства, программа внесет вклад в развитие навыков креативного предпринимательства в рамках образовательного процесса, используя опыт Великобритании.`}

                    </p>
                    <img   src="/about.png" alt="" className={styles.img}/>
                </div>

                <div className={styles.aboutPar2}>
                    <p className={styles.text + ' text'}  data-aos="fade-right">
                        {langM === "AZ" && `Proqram üç əsas elementdən ibarətdir: ` 
                            || langM === "EN" && `The programme has three key elements: ` 
                            || langM === "RU" && `Программа состоит из трех ключевых элементов:`}
                    <br/>
                    <br/>
                        {langM === "AZ" && `1 Biznes təhsilini dəstəkləmək və biznes mərkəzləri yaratmaq məqsədilə İngiltərədəki universitetlər və yaradıcı müəssisələr arasında ortaqlığın inkişaf etdirilməsi.` 
                            || langM === "EN" && `1. Development of partnerships between universities and creative institutions in the UK and those in programme countries in order to support enterprise education and establish enterprise centres. ` 
                            || langM === "RU" && `1. Развитие партнерства между университетами и креативными учреждениями в Великобритании и в странах, участвующих в программе, а также поддержка развития навыков креативного предпринимательства в рамках образовательного процесса и создание центров предпринимательства`}
                    <br/>
                    <br/>
                        {langM === "AZ" && `2 Tələbələrə və yaradıcı sahibkarlara biznes bacarıqlarının öyrədilməsi, ideyaların təqdim edilməsi, biznesin qurulması, əqli mülkiyyətin qorunması və kredit xətlərinin qorunması mövzusunda təlim paketlərinin təklif olunması.` 
                            || langM === "EN" && `2. Delivering enterprise skills training packages to students and creative entrepreneurs, ranging from pitching ideas and starting a business, to protecting intellectual property and securing credit lines. ` 
                            || langM === "RU" && `2.  Проведение серий тренингов по навыкам предпринимательства  для студентов и креативных предпринимателей, начиная с  презентации идеи и открытия бизнеса, заканчивая защитой  интеллектуальной собственности и получением финансирования  на реализацию проекта.`}
                    <br/>
                    <br/>
                        {langM === "AZ" && `3 İngilis dilini öyrənmə proqramının, rəqəmsal tədris materiallarının, o cümlədən, təlim platformalarının, onlayn kursların və geniş kütlə üçün açıq olan onlayn kursların (MOOC) sahibkarlar üçün ingilis dili səviyyəsində təklif edilməsi.` 
                            || langM === "EN" && `3. Delivering an English learning programme with a range of digital learning content including learning platforms, online courses and Massive Open Online Courses (MOOCs) focused on English for entrepreneurship. ` 
                            || langM === "RU" && `3.  Изучение английского языка с помощью различных онлайн  ресурсов, включая образовательные платформы, онлайн курсы с  фокусом на креативное предпринимательство.`}
                    </p>
                </div>

            </div>
        </>
    )
}

export default about
