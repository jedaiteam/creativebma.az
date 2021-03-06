import React , {useEffect, useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'
import { Sling as Hamburger } from 'hamburger-react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Router from 'next/router'
import { useRouter } from 'next/router'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import axios from 'axios';

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
    const zindex = useMediaQuery('(min-width:1100px)');
    const router = useRouter()
    const { pathname } = router.query
    //LangThings
    const [drop2, setdrop2] = useState(false)
    const [drop1, setdrop1] = useState(false)
    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    const languageChanger = (lang) => {
        setlangM(lang)
        // axios.get(`http://creativespark.testjed.me/locale/${lang.trasformLowerCase}`)
        if (typeof window !== "undefined") {
            sessionStorage.setItem('lang' , lang)
        }
        // axios.post('https://creativespark.testjed.me/api/multilang' , { name: 'lang' , value:'ru'})
        //     .then(res => console.log(res))
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
        <div className="swiperCont" onClick={toggleDrawer(anchor, false)}>
            <div className="lang"> 
                <button  onClick={() => languageChanger(lang[0])}>AZ</button>
                <button  onClick={() => languageChanger(lang[1])}>EN</button>
                <button onClick={() => languageChanger(lang[2])}>RU</button>
            </div>
            <div className="links">
                <Link href="/" id="vacancies">{langM === "AZ" && `??sas s??hif??` || langM === "EN" && `Homepage` || langM === "RU" && `?????????????? ????????????????`}</Link>
                <Link href="/about"  id="cv">{langM === "AZ" && `Haqq??m??zda` || langM === "EN" && `About Us` || langM === "RU" && `?? ??????`}</Link>
                <Link href="/partners" id="about">{langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `????????????????`}</Link>
                <Link href="/students" id="contact">{langM === "AZ" && `T??l??b??l??r` || langM === "EN" && `Students` || langM === "RU" && `????????????????`}</Link>
                <Link href="/news"  id="blog">{langM === "AZ" && `X??b??rl??r` || langM === "EN" && `News` || langM === "RU" && `??????????????`}</Link>
                <Link href="/staff"  id="blog">{langM === "AZ" && `BMA sahibkarl??q m??rk??zi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `?????????? ?????????????????????????????????????? BMA`}</Link>
                <Link href="/contact" id="blog">{langM === "AZ" && `??laq??` || langM === "EN" && `Contact` || langM === "RU" && `??????????????`}</Link>
            </div>
        </div>
    );
    //SwiperThings

    const borderStyle = {
        borderBottom: "2px solid #FA7167"
    }
    const borderStyle1 = {
        borderBottom: "0px solid #FA7167"
    }
    const [url, seturl] = useState()
    useEffect(() => {
       seturl(router.pathname)
    }, [router])

    const zindexNavbar = {
        zIndex: zindex ? 100 : 1400
    }
    return (
        <header style={zindexNavbar} className={styles.navbar}>
            
                <Link href="/"><img className={styles.logo} src="/creative-spark-logo.png" width="140px" height='65.75px' alt="Creative Spark Logo"/></Link>
                {
                    DesktopNavbar &&
                    <div className={styles.links}>
                        <Link href="/"><a id='home' style={ url === '/' ? borderStyle : borderStyle1} className={'nav-text'}>{langM === "AZ" && `??sas s??hif??` || langM === "EN" && `Homepage` || langM === "RU" && `?????????????? ????????????????`}</a></Link>
                        <Link href="/about"><a id='about' style={ url === '/about' ? borderStyle : borderStyle1} className={'nav-text'}>{langM === "AZ" && `Haqq??m??zda` || langM === "EN" && `About Us` || langM === "RU" && `?? ??????`}</a></Link>
                        <Link href="/partners"><a id='partners' style={ url === '/partners' ? borderStyle : borderStyle1} className={'nav-text'}>{langM === "AZ" && `Partnyorlar` || langM === "EN" && `Partners` || langM === "RU" && `????????????????`}</a></Link>
                        <Link href="/students"><a id='students' style={ (url === '/students' || url === '/students/[id]') ? borderStyle : borderStyle1} className={'nav-text'}>{langM === "AZ" && `T??l??b??l??r` || langM === "EN" && `Students` || langM === "RU" && `????????????????`}</a></Link>
                        <Link href="/news"><a id='news' style={ (url === '/news' || url === '/news/[id]') ? borderStyle : borderStyle1} className={'nav-text'}>{langM === "AZ" && `X??b??rl??r` || langM === "EN" && `News` || langM === "RU" && `??????????????`}</a></Link>
                        <Link href="/staff"><a id='staff' style={ (url === '/staff' || url === '/staff/[id]') ? borderStyle : borderStyle1} className={'nav-text'}>{langM === "AZ" && `BMA sahibkarl??q m??rk??zi` || langM === "EN" && `BMA Entrepreneurship Center` || langM === "RU" && `?????????? ?????????????????????????????????????? BMA`}</a></Link>
                        <Link href="/contact"><a id='contact' style={ url === '/contact' ? borderStyle : borderStyle1} className={'nav-text'}>{langM === "AZ" && `??laq??` || langM === "EN" && `Contact` || langM === "RU" && `??????????????`}</a></Link>
                        <div className={styles.dropdown} onMouseLeave={() => langChangerMouseLeave2()}>
                            <button onClick={() => myFunction2(drop2)}  className={styles.mainBtn}>{langM} <ArrowLeftIcon/></button>
                            {drop2 && <div id="drop-inside" className={styles.dropdownContent }>
                                {langM == "AZ" ? "" : <button  onClick={() => languageChanger(lang[0])}>{lang[0]}</button>}
                                {langM == "EN" ? "" : <button  onClick={() => languageChanger(lang[1])}>{lang[1]}</button>}
                                {langM == "RU" ? "" : <button  onClick={() => languageChanger(lang[2])}> {lang[2]}</button>}
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
            <nav>
                <div></div>
            </nav>
        </header>
    )
}

export default Navbar
