import React from 'react'
import styles from '../styles/Presentation.module.scss'
import PlayForWorkRoundedIcon from '@material-ui/icons/PlayForWorkRounded';
function PresentationCard(props) {

    const presentationCardImg = {
        backgroundImage: `url(/main-ppt-img${props.number}.jpg)`
    }

    return (
        <div key={props.id} className={styles.presentationCard}>
            <div style={presentationCardImg} className={styles.pptImgStyle + ' img'}>
                <div className={styles.pptOverlay + ' img'}> <a className={styles.downloadPpt} downlaod href={props.link}><PlayForWorkRoundedIcon/></a> </div>
            </div>
            <p className={styles.text + " text"}>"{props?.title}"</p>
            <p className={styles.name + " text"}>{props?.name}</p>
        </div>
    )
}

export default PresentationCard
