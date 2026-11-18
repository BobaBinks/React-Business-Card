import React from 'react'

const Info = () => {
    return (
        <>
            <section className='info-section'>
                <img src='/bond.jpg' className='portrait' />

                <div className='info-text'>
                    <h1 className='name'>James Bond</h1>
                    <p className='role'>Secret Agent | MI6</p>
                    <p className='website-link'>jamesbond.mi6.gov.uk</p>
                </div>

                <div className='info-links'>
                    <a href=''>
                        <i class="fa-regular fa-envelope"></i>
                        Email
                    </a>
                    <a href=''>LinkedIn</a>
                </div>

            </section>
        </>
    )
}

export default Info
