import React from 'react'
import Link from '../components/Link'
import styles from '../styles/About.module.scss'
function about() {
    return (
        <div className={styles.aboutPage + " page"}>
            <Link link='Haqqımızda'/>
            <h1 className={styles.aboutTitle + " title-b-desk pageTitle"} >Haqqımızda</h1>
            <div className={styles.aboutPart1}>
                <p className={styles.text + ' text'}> 
                    "Creative Spark" Birləşmiş Krallığın dəstəyilə Mərkəzi Asiya 
                     ölkələrində, Cənubi Qafqaz ölkələrində və Ukraynada biznes 
                     bacarıqlarını və yaradıcı iqtisadiyyatı inkişaf etdirmək məqsədilə 
                     universitetlərarası və institusional əməkdaşlığı beynəlxalq 
                     səviyyədə dəstəkləmək üçün nəzərdə tutulan beş illik təşəbbüsdür.
                    <br/>
                    
                    Biz yuxarıda sadalanan yeddi ölkədə ali təhsil sahəsində aparılan 
                     islahatları dəstəkləmək və işsizlik səviyyəsinin aşağı salınmasına 
                     töhfə vermək məqsədilə biznes təhsilinin inkişafına yardımçı 
                     olmaq üçün Birləşmiş Krallığın təcrübəsindən istifadə edəcəyik. 
                     Bununla da, proqramın birinci ilində 10 000-dən çox tələbəyə və 
                     gənc sahibkara dəstək göstərəcəyik.  

                </p>
                <img src="/about.png" alt="" className={styles.img}/>
            </div>

            <div className={styles.aboutPar2}>
                <p className={styles.text + ' text'}>
                Proqram üç əsas elementdən ibarətdir: 
                <br/>
                <br/>
                1.	Biznes təhsilini dəstəkləmək və biznes mərkəzləri yaratmaq məqsədilə Birləşmiş Krallıqda və proqrama qoşulan yeddi ölkədə fəaliyyət göstərən universitetlər və yaradıcılıq müəssisələri arasında tərəfdaşlıq münasibətlərinin inkişaf etdirilməsi.
                <br/>
                <br/>
                2.	Tələbələrə və yaradıcı sahibkarlara biznes bacarıqlarının öyrədilməsi, ideyaların təqdim edilməsi, biznesin qurulması, əqli mülkiyyətin qorunması və kredit xətlərinin təmin edilməsi mövzusunda təlim paketlərinin təklif olunması.
                <br/>
                <br/>
                3.	İngilis dilini öyrənmə proqramının, rəqəmsal tədris materiallarının, o cümlədən, təlim platformalarının, onlayn kursların və geniş kütlə üçün açıq olan onlayn kursların (MOOC) sahibkarlar üçün ingilis dili səviyyəsində təklif edilməsi.
                </p>
            </div>

        </div>
    )
}

export default about
