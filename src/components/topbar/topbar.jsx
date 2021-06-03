import React from 'react'
import "./topbar.scss"
import pdf from '../../portfolioAssets/CV - Amila Chathuranga Fernando.pdf'
import {Person, Mail} from  '@material-ui/icons'
import HomeIcon from '@material-ui/icons/Home';
import Button from "react-bootstrap/Button";


export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && 'active')}>
            <div className='wrapper'>
                <div className='left'>
                    <a href="#intro" className='logo'>Amila Fernando</a>
                    <div className='itemContainer'>
                        <Person className='icon'/>
                        <span>(+94)-712348653</span>                
                    </div>

                    <div className='itemContainer'>
                        <Mail className='icon'/>
                        <span>amila.2018420@iit.ac.lk</span>                
                    </div>

                    <div className='itemContainer'>
                        <HomeIcon className='icon'/>
                        <span>No.442: Old Kottawa Road, Udahamulla, Nugegoda.</span>                
                    </div>

                    {/* <div className='itemContainer'>
                    <GetApp  className='icon2'/>
                        <a href={pdf}>
                        <span className='download'>Download CV</span> 
                        </a>               
                    </div> */}

                    
                    
                    
                    
                    
                </div>
                <div className='right'>
                    <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                        <span className='line1'></span>
                        <span className='line2'></span>
                        <span className='line3'></span>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
