import React from 'react'
import Header from '../components/Main/Header'
import Post from '../components/StudySearch/Post'
import './StudySearch.css'
import Footer from '../components/Main/Footer'


function StudySearch() {
    return (
            <>
            <Header />
            <div className='studySearch'>
            <Post />
            </div>
            <Footer />
            </>
        
    )
}

export default StudySearch
