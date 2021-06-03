import React, { useEffect, useState } from 'react'
import PortfolioList from '../portfolioList/PortfolioList';
import "./portfolio.scss"
import {
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
    contentPortfolio,
} from '../../data';

export default function Portfolio() {

    const [selected, setSelected] = useState('projects')
    const [data, setData] = useState([])

    const list = [
        {
            id: 'projects',
            title: 'Projects',
        },
        {
            id: 'skills',
            title: 'Skills',
        },
        {
            id: 'tools',
            title: 'Tools',
        },
        {
            id: 'design',
            title: 'Designs',
        }
    ];

    useEffect(() => {

        switch(selected){
            case "projects":
                setData(webPortfolio)
                break;
                case "skills":
                setData(featuredPortfolio)
                break;
                case "tools":
                setData(designPortfolio)
                break;
                case "design":
                setData(mobilePortfolio)
                break;
                default:
                    setData(webPortfolio);
        }

    },[selected])



    return (
        <div className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
            {list.map(item=>(
                <PortfolioList title={item.title} active={selected === item.id} 
                setSelected={setSelected}
                id = {item.id}
                />
            ))}
        {/* <li className='active'>Projects</li>
            <li>Individual Work</li>
            <li>Designs</li>
            <li>Music Composition</li> */}
        </ul>
        <div className='container'>
            {data.map((d) => (
                <div className='item'>
                <img src={d.img} alt=''/>
                <h3>{d.title}</h3>
            </div>
            ))}
            
            {/* <div className='item'>
                <img src='assets/pp.jpg' alt=''/>
                <h3>Gardener</h3>
            </div>
            <div className='item'>
                <img src='assets/pp.jpg' alt=''/>
                <h3>Gardener</h3>
            </div> */}
        </div>
            
        </div>
    );
}
