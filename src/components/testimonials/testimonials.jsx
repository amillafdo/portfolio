import React from 'react'
import "./testimonials.scss"


export default function testimonials() {
    const data = [
        {
          id: 1,
          name: "Chinthaka Fernando",
          title: "Bachelor Of Medicine & Surgery",
          img:
            "assets/bro.jpg",
          icon: "assets/fb.png",
          link:'https://www.facebook.com/chinthaka.fernando.92',
          desc:
            "Dr. Chinthaka Fernando is currently based on singapore and he's working as a medical officer in there since 2016.",
        },
        {
          id: 2,
          name: "Chathuranga Weerasinghe",
          title: "Service Engineer",
          img:
          "assets/asoka.jpg",
          icon: "assets/hinsta.png",
          link:'https://www.instagram.com/cjsw1987/',
          desc:
            "Mr. Chathuranga Weerasinghe is an analytical service engineer at a reputed company in sri lanka.",
          featured: true,
        },
        {
          id: 3,
          name: "Pasan Kottearachchi",
          title: "Full-Stack Developer",
          img:
          "assets/pasa.jpg",
          icon: "assets/linkedin.png",
          link:'https://www.linkedin.com/in/pasan-kottearachchi-63970a198/',
          desc:
            "Mr. Pasan Kottearachchi is a third year software engineering undergraduate at university of westminster, london.",
        },
      ];
    return (
        <div className='testimonials' id='testimonials'>
            <h1>Mentors</h1>
            <div className='container'>
                {data.map(d =>(



                
                <div className={d.featured ? 'card featured' : 'card'}>
                    <div className='top'>
                        <img src='assets/right-arrow.png' className='left' alt=''/>
                        
                        <img src={d.img}
                        className='user' 
                        alt=''/>
                        <a href={d.link}>

                        <img src={d.icon} className='right' alt=''/>

                        </a>
                        
                    </div>
                    <div className='center'>
                    {d.desc}
                    </div>
                    <div className='bottom'>
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    )
}
