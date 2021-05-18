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
                        {langM === "AZ" && `"Creative Spark" Birləşmiş Krallığın dəstəyilə Mərkəzi Asiya ölkələrində,  Cənubi Qafqaz ölkələrində  və Ukraynada biznes bacarıqlarını və yaradıcı iqtisadiyyatı inkişaf etdirmək məqsədilə  universitetlərarası və institusional əməkdaşlığı beynəlxalq səviyyədə dəstəkləmək üçün nəzərdə tutulan beş illik təşəbbüsdür.         ` 
                            || langM === "EN" && `Creative Spark is a five year initiative to support international university and institutional partnerships to develop enterprise skills and creative economy across seven countries in Central Asia (Kazakhstan, Uzbekistan, Kyrgyzstan), South Caucasus (Azerbaijan, Armenia, Georgia) and Ukraine through UK support.  ` 
                            || langM === "RU" && `Creative Spark - это пятилетняя инициатива по поддержке международных университетов и созданию международных партнерств с целью развить предпринимательские навыки и креативную экономику в семи странах, включая Центральную Азию (Казахстан, Узбекистан, Кыргызстан), Южный Кавказ (Азербайджан, Армению, Грузию) и Украину при поддержке Соединенного Королевства. `}
                        <br/>
                        <br/>
                        {langM === "AZ" && `Bu yeddi ölkədə ali təhsil sahəsində aparılan islahatları dəstəkləmək və işsizlik səviyyəsinin aşağı salınması üçün Birləşmiş Krallığın təcrübəsindən istifadə edəcəyik. Bununla da, proqramın birinci ilində 10 000-dən çox tələbəyə və gənc sahibkara dəstək göstərəcəyik.   ` 
                            || langM === "EN" && `In order to support higher education reform and respond to unemployment rates in these seven countries, the UK’s experience will be used to help develop enterprise education. This way over 10,000 students and young entrepreneurs were supported in the first year of the programme.   ` 
                            || langM === "RU" && `Чтобы поддержать реформы в сфере высшего образования и содействовать в решении проблемы трудоустройства в этих семи странах, мы будем использовать опыт Соединенного Королевства для развития образования в области предпринимательства. Таким образом мы окажем поддержку 10 000 студентам и молодым предпринимателям в течение первого года программы. `}

                    </p>
                    <img   src="/about.png" alt="" className={styles.img}/>
                </div>

                <div className={styles.aboutPar2}>
                    <p className={styles.text + ' text'}  data-aos="fade-right">
                        {langM === "AZ" && `Proqram üç əsas elementdən ibarətdir: ` 
                            || langM === "EN" && `The programme has three key elements: ` 
                            || langM === "RU" && `Программа состоит из трех основных элементов: `}
                    <br/>
                    <br/>
                    {langM === "AZ" && `1. Biznes təhsilini dəstəkləmək və biznes mərkəzləri yaratmaq məqsədilə İngiltərədəki universitetlər və yaradıcı müəssisələr arasında ortaqlığın inkişaf etdirilməsi. ` 
                            || langM === "EN" && `1. Development of partnerships between universities and creative institutions in the UK and those in programme countries in order to support enterprise education and establish enterprise centres. ` 
                            || langM === "RU" && `1. Развитие партнерских отношений между университетами и творческими институтами в Великобритании и странах, в которых осуществляются программы, с целью поддержки предпринимательского образования и создания центров предпринимательства. `}
                    <br/>
                    <br/>
                    {langM === "AZ" && `2. Tələbələrə və yaradıcı sahibkarlara biznes bacarıqlarının öyrədilməsi, ideyaların təqdim edilməsi, biznesin qurulması, əqlimülkiyyətin qorunması və kredit xətlərinin təmin edilməsi mövzusunda təlim paketlərinin təklif olunması. ` 
                            || langM === "EN" && `2. Delivering enterprise skills training packages to students and creative entrepreneurs, ranging from pitching ideas and starting a business, to protecting intellectual property and securing credit lines. ` 
                            || langM === "RU" && `2. Предоставление студентам и творческим предпринимателям программы обучения предпринимательским навыкам, начиная от подачи идей и открытия бизнеса до защиты интеллектуальной собственности и обеспечения кредитных линий. `}
                    <br/>
                    <br/>
                    {langM === "AZ" && `3. İngilis dilini öyrənmə proqramının, rəqəmsal tədris materiallarının, o cümlədən, təlim platformalarının, onlayn kursların və geniş kütlə üçün açıq olan onlayn kursların (MOOC) sahibkarlar üçün ingilis dili səviyyəsində təklif edilməsi. ` 
                            || langM === "EN" && `3. Delivering an English learning programme with a range of digital learning content including learning platforms, online courses and Massive Open Online Courses (MOOCs) focused on English for entrepreneurship. ` 
                            || langM === "RU" && `3. Предоставление программы изучения английского языка с разнообразным цифровым учебным контентом, включая учебные платформы, онлайн-курсы и массовые открытые онлайн-курсы (МООК), ориентированные на английский для предпринимательства. `}
                    </p>
                </div>

            </div>
        </>
    )
}

export default about
