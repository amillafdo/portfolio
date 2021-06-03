import React, { useState } from 'react'
import "./works.scss"

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/globe.png",
            title: "Web Design",
            desc:
              "I have a personal interest in developing fully responsive web applications by combining latest technologies like React JS.",
            img:
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
          },
          {
            id: "2",
            icon: "./assets/cod.png",
            title: "Machine Learning",
            desc:
              "Exploring the dimensions in machine learning such as prediction models, recognition models are also another area i'm interested.",
            img:
            "./assets/ai.jpg",
          },
          {
            id: "3",
            icon: "./assets/writing.png",
            title: "Music Composing",
            desc:
              "Music composing and exploring new trends in the modern music technology is a hobby i'm having since childhood.",
            img:
              "./assets/me.jpeg",
          },
    ];

    const handleClick = (way) => {
        way === 'left' ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : 2 ) :
        setCurrentSlide(currentSlide < data.length -1 ? currentSlide+1 : 0)
    }

    return (
        <div className="works" id='work'>
            <div className='slider' style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
                {data.map(d => (

                    <div className='container'>
                    <div className='item'>
                        <div className='left'>
                            <div className='leftcontainer'>
                                <div className='imgContainer'>
                                    <img src={d.icon} alt=''/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc} 
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className='right'>
                            <img src={d.img} 
                            alt=''/>
                        </div>
                    </div>
                </div>

                ))
                }
                {/* <div className='container'>
                    <div className='item'>
                        <div className='left'>
                            <div className='leftcontainer'>
                                <div className='imgContainer'>
                                    <img src='assets/mobile.png' alt=''/>
                                </div>
                                <h2>Coding</h2>
                                <p>Have started developing applications since the first
                                    academic year the university. Now working on developing the full-stack
                                    applications using modern technologies. 
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className='right'>
                            <img src='https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930' 
                            alt=''/>
                        </div>
                    </div>
                </div> */}
            </div>
            <img src='assets/arrow.png' className='arrow left' alt='' onClick={() => handleClick('left')}/>
            <img src='assets/arrow.png' className='arrow right' alt='' onClick={() => handleClick()}/>
            
        </div>
    )
}
