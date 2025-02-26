import React from 'react'
import Navbar from '../components/navbar'
import Contact from '../components/contact'

function contact_page() {
    return (
        <>
        <Navbar />
            <div className='min-h-screen'>
                <Contact />
            </div>
        </>
    )
}

export default contact_page