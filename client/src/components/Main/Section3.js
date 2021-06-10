import React from 'react'
import './Section3.css'
import Fade from 'react-reveal/Fade';

function Section3() {
    return (
        <div className='section'>
                <div className='section__main'>
                        <div className='section__img'>
                            <img 
                                src='img/Alien1.png' 
                                alt=''
                                />
                        </div>
                    <div className='section__title'>
                        <div className='section__content'>
                            <p>기능소개3</p>
                        <div className='section__info'>
                            <p>기능소개설명3</p>
                        </div>
                        <Fade right>
                        <div className='section__infoImg' />
                        </Fade>
                    </div>
                    </div>
            </div>
        </div>
    )
}

export default Section3