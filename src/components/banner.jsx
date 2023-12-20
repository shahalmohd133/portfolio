import React from 'react';
import '../App.css';
import img1 from '../images/img2.jpg'


function Banner(){
    return (
        <div className="banner">
            <div className="banner_title">
                Hi, I'm Mohammed Shahal
                <br/>
                <a style={{color:"green" , fontSize:"x-large",fontWeight:"bold"}}> Full Stack Developer</a>
                
                <p style={{paddingTop:"20px", fontSize:"medium", fontFamily:"sans-serif"}}>Dedicated technology enthusiast with an instiable curiousity for <br/>
                unraveling the complexities of our digital world</p>
                <div >
            <button className="btn">
                    Projects
                </button>
                <button className="btn">
                    About Me
                </button>
                <button className="btn">
                    Contact Me
                </button>
            </div>
            </div>
            <div className="image">
                <img src={img1}/>

            </div>
        
        </div>
        )
    }
    
export default Banner;