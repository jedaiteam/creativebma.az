import React from 'react'
import { useRouter } from 'next/router'
import styles from '../../../styles/SelectedNews.module.scss'
import Link from '../../../components/Link'

function selectednews() {
    const router = useRouter()
    const { id } = router.query
    const imgHandle = {
        backgroundImage:'url(/singleNewsAvatar.png)'
    }
    const imgHandle2 = {
        backgroundImage:'url(/singleNewsAvatar2.png)'
    }
    const imgHandle3 = {
        backgroundImage:'url(/singleNewsAvatar2.png)'
    }
    return (
        <div className={styles.selectedNewsPage + " page"}>
            <Link link='Seçilmiş Xəbər'/>
            <div className={styles.imgAndTitle + " mt30"}>
                <div  style={imgHandle} className={styles.imgHandle + " img"}></div>
                <div className={styles.titleAndDate}>
                    <h1 className={styles.title + " title-e-desk"}> 10-13 fevral  2020-ci il Creative Spark layihəsi çərçivəsində BMA tələbələri üçün keçirilən təlimlər. </h1>
                    <p className={styles.date + " text"}> <img src="/calendar.svg" alt=""/> <span>10.02.2020</span> </p>
                </div>
            </div>

            <div className="text mt50">
                <p className="text">
                    Britaniya Şurasının (British Council) maliyyələşdirdiyi və Bakı Musiqi Akademiyasının (BMA) Böyük Britaniyanın East London Universiteti (UEL) və Azərbaycan Dövlət İqtisad Universiteti (UNEC) ilə birlikdə qalib gəldiyi Creative Spark layihəsi çərçivəsində təlimlər 10 - 13 fevral tarixində UNEC-də keçirilib.
                    Təlimçilər qismində UEL-in Yaradıcı sənayelər üzrə professoru Suzanne Dixon və Mix Consulting-in direktoru, biznes məsləhətçisi Nicky Curtis çıxış ediblər. 4 gün davam edən intensiv təlimlərdə Bakı Musiqi Akademiyasının və Azərbaycan Dövlət İqtisad Universitetinin 60-a yaxın tələbəsi iştirak edib.
                    Təlimlərin 1 və 2-ci günündə biznes consulting fəaliyyəti ilə məşğul olan Nicky Curtis tələbələrə biznes modelləri haqqında ətraflı məlumat verib. Bu məlumatlara istinad edərək musiqi və marketing ixtisasları üzrə təhsil alan tələbələr 7 fərqli qrupda yaradıcı ideyalarını inkişaf etdiriblər.
                    11 fevral tarixində təlimçilər professor Suzanne Dixon və Nicky Curtis Bakı Musiqi Akademiyasının Beynəlxalq əlaqələr və tərbiyə işləri üzrə prorektoru, professor Yeganə Axundova ilə görüşüblər. Görüş zamanı BMA-nın tələbələrinin biznes bacarıqlarının inkişaf etdirilməsi imkanları və bu məsələdə İngiltərənin təcrübəsinin öyrənilməsi məsələləri müzakirə edilib, universitetlər arasında əməkdaşlığın möhkəmləndirilməsi haqqında diskussiya aparılıb. Həmçinin, BMA tələbələri qonaqlar üçün kiçik konsert proqramı ilə çıxış ediblər.
                    12 fevral tarixində BMA-nın təşkilatçılığı ilə qonaqların və tələbələrin YARAT Müasir İncəsənət Məkanı ilə tanışlığı keçirilib. Həmçinin, səs mühəndisi, uzun illər freelancing fəaliyyəti ilə məşğul olan Hafiz İbrahimli və BMA-nın məzunu, səs mütəxəssisi, bəstəkar Azər Əsgərov tərəfindən freelancing mövzusunda tələbələrlə və qonaqlarla fikir mübadiləsi aparılıb.
                    Təlimlərin son günündə isə 7 qrupda birləşən tələbələr layihə ideyalarını təqdim ediblər, yaradıcılığı ilə fərqlənən BMA-nın 8 tələbəsi isə Böyük Britaniyada keçiriləcək təlimlərdə iştirak haqqı qazanıblar. Təlimin sonunda bütün tələbələrə uğurlu iştirak etdiklərinə görə sertifikat təqdim olunub.
                </p>
            </div>

            <div className={styles.imgs + " mt50 img"} >
                <div className={styles.imgBottom} style={imgHandle2}></div>
                <div className={styles.imgBottom} style={imgHandle3}></div>
            </div>
        </div>
    )
}

export default selectednews


