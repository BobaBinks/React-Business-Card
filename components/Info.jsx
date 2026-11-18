import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Info = () => {
    return (
        <>
            <section className='info-section'>
                <img src='/bond.jpg' className='portrait' />

            <div className='container'>
                <div className='info-text'>
                    <h1 className='name'>James Bond</h1>
                    <p className='role'>Secret Agent | MI6</p>
                    <p className='website-link'>jamesbond.mi6.gov.uk</p>
                </div>

                <div className='info-links'>

                    <a href='' id='email'>
                        <FontAwesomeIcon className='link-icons' icon="fa-regular fa-envelope" />
                        Email
                    </a>
                    <a href='' id='linkedin'>
                        <FontAwesomeIcon className='link-icons' icon="fa-brands fa-linkedin" />
                        LinkedIn
                    </a>

                </div>
            </div>
            </section>
        </>
    )
}

export default Info
