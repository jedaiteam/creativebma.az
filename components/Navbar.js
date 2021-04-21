import React , {useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { Sling as Hamburger } from 'hamburger-react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const stylesForSwiper = makeStyles({
    list: {
      width: "100%",
    },
    fullList: {
      width: "100%",
    },
}); 

function Navbar() {
    const DesktopNavbar = useMediaQuery('(min-width:1178px)');


    //LangThings
    const [drop2, setdrop2] = useState(false)
    const [drop1, setdrop1] = useState(false)
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (localStorage.getItem('lang') === null ? lang[0] : localStorage.getItem('lang')))
    const languageChanger = (lang) => {
        setlangM(lang)
        if (typeof window !== "undefined") {
            localStorage.setItem('lang' , lang)
        }
        window.location.reload()
    }
    const langChangerMouseLeave2 = () => {
        setdrop2(false)
    }  
    function myFunction2(num) {
        if (num === false) {
            setdrop2(true)
        }
        else{
            setdrop2(false)
        }
    }
    //LangThings

    //SwiperThings
    const classes = stylesForSwiper();
    const [state, setState] = React.useState({
    top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
    }

    setState({ ...state, [anchor]: open });
    };
    const list = (anchor) => (
        <div className="swiperCont">
            <div className="lang"> 
                <button onClick={() => languageChanger(lang[0])}>AZ</button>
                <button onClick={() => languageChanger(lang[1])}>EN</button>
                <button onClick={() => languageChanger(lang[2])}>RU</button>
            </div>

            <div className="links">
                <Link href="/" id="vacancies">Əsas səhifə</Link>
                <Link href="/about"  id="cv">Haqqımızda</Link>
                <Link href="/partners" id="about">Partnyorlar</Link>
                <Link href="/students" id="contact">Tələbələr</Link>
                <Link href="/staff" id="blog">BMA sahibkarlıq mərkəzi</Link>
                <Link href="/contact" id="blog">Əlaqə</Link>
            </div>
        </div>
    );
    //SwiperThings


    return (
        <header className={styles.navbar}>
            <nav>
                <img className={styles.logo} src="/creative-spark-logo.png" width="140px" height='65.75px' alt="Creative Spark Logo"/>
                {
                    DesktopNavbar &&
                    <div className={styles.links}>
                        <Link href="/"><a className={'nav-text'}>Əsas səhifə</a></Link>
                        <Link href="/about"><a className={'nav-text'}>Haqqımızda</a></Link>
                        <Link href="/partners"><a className={'nav-text'}>Partnyorlar</a></Link>
                        <Link href="/students"><a className={'nav-text'}>Tələbələr</a></Link>
                        <Link href="/news"><a className={'nav-text'}>Xəbərlər</a></Link>
                        <Link href="/staff"><a className={'nav-text'}>BMA sahibkarlıq mərkəzi</a></Link>
                        <Link href="/contact"><a className={'nav-text'}>Əlaqə</a></Link>
                        <div className={styles.dropdown} onMouseLeave={() => langChangerMouseLeave2()}>
                            <button onClick={() => myFunction2(drop2)} onBlur={() => myFunctionBlur2(drop1)} className={styles.mainBtn}>{langM}</button>
                            {drop2 && <div id="drop-inside" className={styles.dropdownContent}>
                                {langM == "AZ" ? "" : <button onClick={() => languageChanger(lang[0])}>{lang[0]}</button>}
                                {langM == "EN" ? "" : <button onClick={() => languageChanger(lang[1])}>{lang[1]}</button>}
                                {langM == "RU" ? "" : <button onClick={() => languageChanger(lang[2])}> {lang[2]}</button>}
                            </div>}
                        </div>
                    </div>
                }
                { 
                    !DesktopNavbar && 
                    <div className={styles.hamburgerMenu}>
                        {
                            <React.Fragment key={'left'}>
                                <Hamburger color="#FFFFFF" toggled={state['left']} toggle={state['left'] ? toggleDrawer('left', false) : toggleDrawer('left', true)} />
                                <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                                    {list('left')}
                                </Drawer> 
                            </React.Fragment>
                        }
                    </div>
                }
            </nav>
        </header>
    )
}

export default Navbar
