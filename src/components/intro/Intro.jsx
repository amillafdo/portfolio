import React, { useEffect, useRef } from 'react'
import "./intro.scss"
import { init } from 'ityped'
import pdf from '../../portfolioAssets/CV - Amila Chathuranga Fernando.pdf'
import {GetApp} from '@material-ui/icons'


export default function Intro() {

    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, 
            { showCursor: true,
                backDelay: 1500,
                backSpeed: 60,
                 strings: ['Intern Software Engineer', 'Machine Learning Enthusiast', 'Electronic Music Producer' ],
     });

    }, []);
    return (
        <div className="intro" id='intro'>
            <div className='left'>
                <div className='imgContainer'>
                    <img src='assets/man4.png' alt=''></img>

                </div>

            </div>
            <div className='right'>
                <div className='wrapper'>
                    <h2>Hi There, I'm </h2>
                    <h1>Amila Fernando</h1>
                    <h3><span ref={textRef} ></span></h3>

                </div>

                

                {/* <GetApp style={{marginBottom:"100px",overflow:"hidden"}}/> */}
                <a href={pdf} style={{marginLeft:"-50px",marginBottom:"60px"}}>
                <i className="fa fa-download" aria-hidden="true" style={{overflow:"hidden"}}>
                <span className='download' style={{textDecoration:"none",marginLeft:"15px"}} >Download CV</span> </i>
                </a>

                

                

                <a href='#portfolio'>
                <img src='assets/down.png' alt=''></img>
                </a>
                {/* <GetApp className='icon'/>
                <a href={pdf}>
                    <span className='download'>Download CV</span>
                </a> */}
                

            </div>
            {/* <div className='sample'> */}

                {/* <GetApp className='icon'/> */}


            {/* </div> */}

        
        </div>
    )
}
