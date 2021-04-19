import React from 'react'
import Link from '../../../components/Link'
import styles from '../../../styles/SelectedStaff.module.scss'
function index() {
    const imgHandle = {
        backgroundImage: 'url(/staffAvatar.png)'
    }
    return (
        <div className={styles.selectedStaffPage + " page"}>
            <Link link='Əməkdaşlar'/>
            <div className={styles.imgAndAbout + " mt50"}>
                <div className={styles.imgHandle + " img"} style={imgHandle}></div>
                <div className={styles.textAbout + " text"}>
                    <h1 className={styles.title + " title-e-desk"}>Yegana Akhundova</h1>
                    <a href="mailto:yegana.axundova@musicacademy.edu.az" className={styles.email}>yegana.axundova@musicacademy.edu.az</a>
                    <p className="textAbout1">
                        Yegana Akhundova is one of the leading representatives of Azeri pianists’ school. Her performance style is noted with a bright emotionality, great temperament, expressiveness, aliveness, sincerity, brilliant technical abilities, precise skill of showing the stylistic specifics and the artistically dramatic idea of a musical piece.
                        She received her first music lessons at Secondary Special Music School named after Bul-Bul (1967-1978). Later in 1978, she was admitted to Azerbaijan State Conservatory. 
                    </p>
                </div>
            </div>

            <p className="textAbout2 text mt50">
                In 1985, she had gained also assistant-trainee degree at Moscow State Conservatory in the class of Professor L. Naumov.
                Y.Akhundova is a great interpreter of classical music as well as contemporary music. Her repertoire includes works of outstanding West-European (J.S.Bach, V.A.Mozart, F.Chopin, R.Schumann, F.Liszt, C.Debussy, F.Poulenc, S.Rachmaninoff, S.Prokofiev, D.Shostakovich, etc.), as well as local (Azerbaijani) composers (U.Hajibeyli, G.Garayev, F.Amirov, J.Gadjiyev, etc.)
                Her concert activity as a pianist plays an important role in her creative biography. She has performed concerts with symphonic orchestras under the direction of various conductors in France, Norway, the USA, Great Britain, Canada, Hungary, Turkey, Austria, Russia, Spain, Germany, Romania and in many other countries. In Canada, at the Niagara’s International Music Festival, she was awarded a “Golden Muse of Niagara” prize, in Greece – an international award “The most successful woman of the year” by EAWC (Euro-American Women’s Council), in Spain at the traditional XIV International Music Festival at Palma de Mallorca – an Honored Diploma and etc.
                In 2012, she was awarded a title of “The National Artist of Azerbaijan” and a National Award “Humay”. 
                Y.Akhundova is actively composing music and is an author of piano preludes, sonatinas, concert piece “Ashugsayagi” for two pianos. Two videos shot for her two pieces (“Mi parti” and “Mea memoria”) were awarded as The Best Music Video on TV Channel Space of Azerbaijan.
                Today Y.Akhundova works as a professor of the piano performance department and as a Vice-rector for International Relations, Public Relations and Social Affairs at Baku Music Academy. Additionally, she is a lector of Azerbaijani and World Culture at Khazar University. 
            </p>

        </div>
    )
}

export default index
