import React from 'react'
import './Section.css'
import Fade from 'react-reveal/Fade';

function Section() {
    return (
        <div className='section'>
                <div className='section__main'>

                        <div className='section__img'>
                            <img 
                                src='img/Alien3.png' 
                                alt=''
                                />
                        </div>
                    <div className='section__title'>
                        <div className='section__content'>
                            <p>기능소개</p>
                        <div className='section__info'>
                            <p>기능소개설명</p>
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

export default Section
