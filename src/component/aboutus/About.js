import React from 'react';
import user from '../user.jpg'
import style from './aboutus.module.css';


const About = () => (
  <>
  {/* // <div className={Style.abt1}>
  //   <h3>About us</h3>
  //   <div className={Style.secDiv}>
  //     <div>
        
  //     </div>
  //   </div>
  // </div> */}
   <div className={style.outer}>
                <div><h1>About Us</h1></div>
                <div className={style.para}>
                
                    <img className={style.im} src={user} alt='About'/>
                  
                {/* <span><p>First of all
                    <p>Thankyou!</p>
                    </p></span> */}
                    </div>
              
                <div className={style.box}>
                    <div className={style.dv}></div>
                    <div className={style.dv}></div>
                    <div className={style.dv}></div>
                </div>
            </div>
  </>
);

export default About;