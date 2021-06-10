import React from 'react'
import './Section2.css'
import Fade from 'react-reveal/Fade';

function Section2() {
    return (
        <div className='section2'>
            <div className='section__main2'>
                <div className='section__content2'>
                    <Fade left>
                    <div className='section__infoImg2' />
                    </Fade>
                        <p>기능소개2</p>
                    <div className='section__info2'>
                        <p>기능소개설명2</p>
                    </div>
                </div>
                <div className='section__title2'>
                    <div className='section__img2'>
                        <img 
                        src='img/Alien2.png' 
                        alt=''
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2

