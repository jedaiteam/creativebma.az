import React, { useEffect, useState } from 'react'
import styles from '../../../styles/SelectedStudent.module.scss'
import stylesBtn from '../../../styles/Button.module.scss'

import Link from '../../../components/Link'
import { useRouter } from 'next/router'

//Formik
import {Formik , Form , Field, ErrorMessage} from "formik"
import * as yup from 'yup';
//Formik

//Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//Toast

//Select 
import Select from 'react-select'
//Select

//Material UI 
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import DatePicker from '@material-ui/lab/DatePicker';
import axios from 'axios';
import AOS from "aos";
import "aos/dist/aos.css";

const useStyles = makeStyles((theme) => ({
    

    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow:'auto',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  
//Material UI 

function index({student}) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, [])

    const buttonsMQ = useMediaQuery('(min-width:1067px)');
    const titleMQ = useMediaQuery('(min-width:557px)');
    
    
    const router = useRouter()
    const { id } = router.query
    const [studentData, setstudentData] = useState(student)
    const studentImg = {
        backgroundImage:`url(http://creativespark.testjed.me${studentData?.image})`
    }



//ModalsModals
    //Modal1
        const classes = useStyles();
        const [open, setOpen] = useState(false);

        const handleOpen = () => {
            setOpen(true);
        };

        const handleClose = () => {
            setOpen(false);
        };
    //Modal1
    //Modal2
        const classes2 = useStyles();
        const [open2, setOpen2] = useState(false);

        const handleOpen2 = () => {
            setOpen2(true);
        };

        const handleClose2 = () => {
            setOpen2(false);
        };
    //Modal2
//ModalsModals


    //Notify
        const notifySend = () => toast.info("Sorğunuz müvəffəqiyyətlə göndərildi!");
    //Notify





    //Formik1
    //Onchange
        const optionsTypeOfEvent = [
            { value: 'wedding', label: 'Wedding' },
            { value: 'birthday', label: 'Birthday' },
            { value: 'proposal', label: 'Proposal' },
            { value: 'party', label: 'Party' },
            { value: 'recital', label: 'Recital' },
            { value: 'other', label: 'Other' },
        ]
        const [eventType, seteventType] = useState(optionsTypeOfEvent[0].value)
        const eventTypeChange = (value) => {
            seteventType(value.value)
        }
    //Onchange
        const optionsTypeOfMusic = [
            { value: 'classical', label: 'Classical' },
            { value: 'Jazz', label: 'Jazz' },
            { value: 'pop', label: 'Pop' },
            { value: 'other', label: 'Other' },
        ]
        const [musicType, setMusicType] = useState(optionsTypeOfMusic[0].value)
        const musicTypeChange = (value) => {
            setMusicType(value.value)
        }
    //Onchange
        const optionsTypeOfMusician = [
            { value: 'wedding', label: 'Piano' },
            { value: 'birthday', label: 'Classical string quartet' },
            { value: 'proposal', label: 'Voice and piano' },
        ]
        const [musicianType, setMusicianType] = useState(optionsTypeOfEvent[0].value)
        const musicianTypeChange = (value) => {
            setMusicianType(value.value)
        }
        const [eventDate, seteventDate] = useState('04/19/2021')
        const [eventTime, seteventTime] = useState('04/19/2021')
    //Onchange

        const phoneRegExp = /([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/
        const onSubmit =  (values) => {
            setloader(true)
            const dt = new FormData()
            dt.append('name' , values.name)
            dt.append('email' , values.email)
            dt.append('phone' , values.phone.slice(1,14))
            dt.append('password' , values.password)
            dt.append('birthdate' , selectedDate)
            if (profilePhoto !== null) {
                dt.append('profilePhoto' , profilePhoto)
            }
            dt.append('auth_type' , authT)
            axios.post('https://nehra.az/public/api/login', dt , headers)
            .then(res => (setloader(false) , console.log(res.data) ,  res.status === 200 && (localStorage.setItem("LoginUserData" , JSON.stringify(res.data)) ,  notify() ,  handleOpen() ) ) ) 
            .catch(err => (setloader(false) , setError(true)) )
        }
        
        const initialValues = {
            name:'',
            email:'',
            phone:'',
            address:'',
            company:'',
        }

        const validationSchema = yup.object({
            name: yup.string().required('Ad, Soyad daxil edin'),
            phone:  yup.string().matches(phoneRegExp, 'Telefon nömrəsini düzgün daxil edin').required('Telefon nömrənizi daxil edin'),
            email: yup.string().email('Elektron poçtunuzu düzgün daxil edin').required('Elektron poçtunuzu daxil edin'),
            address: yup.string().required('Ünvanınızı daxil edin'),
            address: yup.string().required('Ünvanınızı daxil edin'),
        })
    //Formik1

    //Formik2
        const onSubmit2 =  (values) => {
            setloader(true)
            const dt = new FormData()
            dt.append('name' , values.name)
            dt.append('email' , values.email)
            dt.append('phone' , values.phone.slice(1,14))
            axios.post('https://nehra.az/public/api/login', dt , headers)
            .then(res => (setloader(false) , console.log(res.data) ,  res.status === 200 && (localStorage.setItem("LoginUserData" , JSON.stringify(res.data)) ,  notify() ,  handleOpen() ) ) ) 
            .catch(err => (setloader(false) , setError(true)) )
        }
        
        const initialValues2 = {
            name:'',
            email:'',
            phone:'',
            work:'',
        }

        const validationSchema2 = yup.object({
            name: yup.string().required('Ad, Soyad daxil edin'),
            phone:  yup.string().matches(phoneRegExp, 'Telefon nömrəsini düzgün daxil edin').required('Telefon nömrənizi daxil edin'),
            email: yup.string().email('Elektron poçtunuzu düzgün daxil edin').required('Elektron poçtunuzu daxil edin'),
            work: yup.string().required('Dərsin növünü daxil edin'),
        })
    //Formik2

    var lang = ["AZ" , "EN" , "RU"]
    const [langM, setlangM] = useState(typeof window !== "undefined" && (sessionStorage.getItem('lang') === null ? lang[0] : sessionStorage.getItem('lang')))
    return (
        <div className={styles.singleStudentPage + " page"}>
            <Link link={langM === "AZ" && `Tələbələr` || langM === "EN" && `Students` || langM === "RU" && `Студенты`} href='/students'/>
            {
                buttonsMQ  &&
                <div data-aos="fade-right" className={styles.buttonsCont}>
                    <button className={stylesBtn.buttonEffect + " button-text"} onClick={handleOpen}>İfaçı işə götür</button>
                    <button className={stylesBtn.buttonEffect2 + "  button-blue-text mt20"} onClick={handleOpen2}>Şəxsi müəllim işə götür</button>
                </div>
            }
            <div className={styles.imgAndAbout + " mt20"}>
                <div data-aos="fade-right" className={styles.studentAvatar + " img"} style={studentImg}></div>
                {
                        !titleMQ && 
                        <div data-aos="fade-right" className={styles.titles}>
                            <h1 className={styles.titleStudent + " title title-e-desk mt20"}>{studentData?.name_surname} </h1>
                            <h2 className={styles.subtitleStudent + " title top-title-b mt10"}>{studentData?.position}</h2>
                        </div>
                }
                {
                    !buttonsMQ  &&
                    <div data-aos="fade-down" className={styles.buttonsCont}>
                        <button className={stylesBtn.buttonEffect + " button-text"} onClick={handleOpen}>İfaçı işə götür</button>
                        <button className={stylesBtn.buttonEffect2 + "  button-blue-text mt20"} onClick={handleOpen2}>Şəxsi müəllim işə götür</button>
                    </div>
                }
                <div className={styles.textAbout}>
                    {
                        titleMQ && 
                        <>
                            <h1  data-aos="fade-right"   className={styles.titleStudent + " title title-e-desk mt20"}>{studentData?.name_surname}  </h1>
                            <h2  data-aos="fade-right"   className={styles.subtitleStudent + " title top-title-b mt10"}>{studentData?.position}</h2>
                        </>
                    }
                    <p  data-aos="fade-right"   className={styles.studentText + " text mt20"}>
                        {studentData?.content?.replace(/(<([^>]+)>)/gi, "")}
                    </p>
                </div>
            </div>
            <div   className={styles.studentText2 + " text mt30"}>
                <p className="text" data-aos="fade-up">
                    {studentData?.content2?.replace(/(<([^>]+)>)/gi, "")}
                </p>
            </div>
            
            



{/* Modal and Forms */}{/* Modal and Forms */}{/* Modal and Forms */}

        {/* Modal1 */}
            <Modal aria-labelledby="transition-modal-title"  aria-describedby="transition-modal-description" className={classes.modal} open={open} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500,}}>
                <Fade in={open} >
                    <div className={styles.modalHireWorker}>
                        <button className={styles.closeButton} onClick={handleClose}>&#10006;</button>
                        <h2 className={styles.titleModal + " title-e-desk "}>Hire a performer for a one-time event</h2>
                        <h3 className={styles.subTitleModal + " top-title-b"}>If you want to hire a musician for a special event, please complete this form.</h3>
                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnChange={true} validateOnBlur={false}>
                            <Form  className={styles.formCont + ' mt20'} method="post" action="">
                                <div className={styles.inputCont}>
                                    <label htmlFor="name" className={styles.label + " text"}>Ad, Soyad*</label>
                                    <Field className={styles.input + " text"} name='name' placeholder="Ad, Soyad" type="text"/>
                                    <p className={styles.error + " text"}><ErrorMessage name='name'/></p>
                                </div>
                                
                                <div className={styles.inputCont}>
                                    <label  htmlFor="phone" className={styles.label + " text"}>Telefon*</label>
                                    <Field className={styles.input + " text"} name='phone' placeholder="+99455-999-99-99" type="text"/>
                                    <p className={styles.error + " text"}><ErrorMessage name='phone'/></p>
                                </div>
                                
                                <div className={styles.inputCont}>
                                    <label  htmlFor="email" className={styles.label + " text"}>Email*</label>
                                    <Field className={styles.input + " text"} name='email' placeholder="creativespark@info.az" type="text"/>
                                    <p className={styles.error + " text"}><ErrorMessage name='email'/></p>
                                </div>
                                
                                <div className={styles.inputCont}>
                                    <label  htmlFor="eventDate" className={styles.label + " text"}>Tədbir tarixi*</label>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            label="Tədbir tarixi seçin"
                                            value={eventDate}
                                            onChange={(newValue) => {
                                                seteventDate(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                    <p className={styles.error + " text"}></p>
                                </div>
                                <div className={styles.inputCont}>
                                    <label  htmlFor="eventTime" className={styles.label + " text"}>Tədbir saatı*</label>
                                    <Field className={styles.input + " text"} name='eventTime' placeholder="Tədbir Saatı" type="text"/>
                                    <p className={styles.error + " text"}></p>
                                </div>
                                <div className={styles.inputCont}>
                                    <label  htmlFor="eventType" className={styles.label + " text"}>Tədbirin növü*</label>
                                    <Select options={optionsTypeOfEvent} defaultValue={eventType} onChange={eventTypeChange} placeholder='Tədbirin növü seçin'/> 
                                    {/* <Field className={styles.input + " text"} placeholder="Ad, Soyad" type="text"/> */}
                                    <p className={styles.error + " text"}></p>
                                </div>
                                <div className={styles.inputCont}>
                                    <label  htmlFor="eventLocation" className={styles.label + " text"}>Tədbiri ünvanı*</label>
                                    <Field className={styles.input + " text"}  name='address' placeholder="Tədbir Ünvanı" type="text"/>
                                    <p className={styles.error + " text"}><ErrorMessage name='address'/></p>
                                </div>
                                <div className={styles.inputCont}>
                                    <label  htmlFor="musicType" className={styles.label + " text"}>Musiqi janrı*</label>
                                    <Select options={optionsTypeOfMusic} defaultValue={musicType} onChange={musicTypeChange} placeholder='Musiqi növü seçin'/>
                                    <p className={styles.error + " text"}></p>
                                </div>
                                <div className={styles.inputCont}>
                                    <label  htmlFor="musicianType" className={styles.label + " text"}>Musiqiçilərin növləri*</label>
                                    <Select options={optionsTypeOfMusician} defaultValue={musicianType} onChange={musicianTypeChange} placeholder='Musiqiçi növü seçin'/>
                                    <p className={styles.error + " text"}></p>
                                </div>
                                <div className={styles.inputCont}>
                                    <label  htmlFor="eventDate" className={styles.label + " text"}>Təşkilat <span className='text16'>(Bir təşkilatla əlaqəli olsanız)</span></label>
                                    <Field className={styles.input + " text"} name='company' placeholder="Təşkilatın adı" type="text"/>
                                    <p className={styles.error + " text"}></p>
                                </div>

                                <div className={styles.inputCont + " " + styles.inputNotesCont}>
                                    <label  htmlFor="notes" className={styles.label + " text"}>Qeydlər</label>
                                    <textarea className={styles.inputNotes  + " text"} placeholder="Ad, Soyad" type="text"/>
                                    <p className={styles.error + " text"}></p>
                                </div>
                                <button className={styles.buttonSubmit + " button-text mt30"}>Göndər</button>
                            </Form>
                        </Formik>
                    </div>
                </Fade>
            </Modal>

        {/* Modal1 */}



        {/* Modal2 */}
            <Modal aria-labelledby="transition-modal-title"  aria-describedby="transition-modal-description" className={classes2.modal} open={open2} closeAfterTransition BackdropComponent={Backdrop} BackdropProps={{timeout: 500,}}>
                <Fade in={open2} >
                    <div className={styles.modalHireWorker}>
                        <button className={styles.closeButton} onClick={handleClose2}>&#10006;</button>
                        <h2 className={styles.titleModal + " title-e-desk "}>Hire a private teacher </h2>
                        <h3 className={styles.subTitleModal + " top-title-b"}>If you want to hire a private teacher, please complete this form.</h3>
                        <Formik initialValues={initialValues2} validationSchema={validationSchema2} onSubmit={onSubmit2} validateOnChange={true} validateOnBlur={false}>
                            <Form  className={styles.formCont + ' mt20'} method="post" action="">
                                <div className={styles.inputCont}>
                                    <label htmlFor="name" className={styles.label + " text"}>Ad, Soyad*</label>
                                    <Field className={styles.input + " text"} name='name' placeholder="Ad, Soyad" type="text"/>
                                    <p className={styles.error + " text"}><ErrorMessage name='name'/></p>
                                </div>
                                
                                <div className={styles.inputCont}>
                                    <label  htmlFor="phone" className={styles.label + " text"}>Telefon*</label>
                                    <Field className={styles.input + " text"} name='phone' placeholder="+99455-999-99-99" type="text"/>
                                    <p className={styles.error + " text"}><ErrorMessage name='phone'/></p>
                                </div>
                                
                                <div className={styles.inputCont}>
                                    <label  htmlFor="email" className={styles.label + " text"}>Email*</label>
                                    <Field className={styles.input + " text"} name='email' placeholder="creativespark@info.az" type="text"/>
                                    <p className={styles.error + " text"}><ErrorMessage name='email'/></p>
                                </div>
                                
                                <div className={styles.inputCont}>
                                    <label  htmlFor="eventLocation" className={styles.label + " text"}>Tədbiri ünvanı*</label>
                                    <Field className={styles.input + " text"}  name='address' placeholder="Dərsin növü" type="text"/>
                                    <p className={styles.error + " text"}><ErrorMessage name='address'/></p>
                                </div>
                               
                                <button className={styles.buttonSubmit + " button-text mt30"}>Göndər</button>
                                <p className="text-bottom"> If you are a BMA student or alumni and you want to be in the list of teachers, please email zulfiyya.shafiyeva@musicacademy.edu.az to get more information</p>
                            </Form>
                        </Formik>
                    </div>
                </Fade>
            </Modal>
{/* Modal and Forms */}{/* Modal and Forms */}{/* Modal and Forms */}
        </div>
    )
}

export default index

// export async function getStaticPaths() {
//     const res = await fetch('http://creativespark.testjed.me/api/musicians-api/')
//     const users = await res.json()
//     console.log(users)
//     const paths = users.data.map((user) => ({
//       params: { id: user.id.toString() },
//     }))
  
//     return { paths, fallback: false }
//   }


export const getServerSideProps = async (context) => {
    const res = await fetch(`http://creativespark.testjed.me/api/musicians-api/${context.params.id}`)
    const student = await res.json()
    return {
        props:{student}
    }
}