import Navbar from './Navbar'
import Footer from './Footer'
import Router from 'next/router'
import NProgress from 'nprogress'
import LinearProgress from '@material-ui/core/LinearProgress';
import { useEffect, useState } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const  Layout = ({children}) => {
    const [loader, setloader] = useState(false)
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((oldProgress) => {
          if (oldProgress === 500) {
            return 0;
          }
          const diff = Math.random() * 10;
          return Math.min(oldProgress + diff, 100);
        });
      }, 500);
  
      return () => {
        clearInterval(timer);
      };
    }, []);
    Router.onRouteChangeStart = url => {
        setloader(true)
        NProgress.start()
    }
    
    Router.onRouteChangeComplete = url => {
        setloader(false)
        NProgress.done()
    }
    
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
    
    return (
        <div id='root'>
            {loader && <div className='pageProgress'><LinearProgress value={progress}/></div>}
            <Navbar/>
              <div>
                  {children}
              </div>
              <button id='scrollTop' onClick={topFunction} className='scrollToTop'><ArrowDropUpIcon/></button>
            <Footer/>
        </div>
    );
}

export default Layout
