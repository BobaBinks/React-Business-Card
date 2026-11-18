import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterComponent = () => {
  return (
    <>
      <footer className='container'>
        <ul className='footer-list'>
            <li><a href=''><FontAwesomeIcon icon="fa-brands fa-twitter" /></a></li>
            <li><a href=''><FontAwesomeIcon icon="fa-brands fa-facebook-f" /></a></li>
            <li><a href=''><FontAwesomeIcon icon="fa-brands fa-instagram" /></a></li>
            <li><a href=''><FontAwesomeIcon icon="fa-brands fa-github" /></a></li>
        </ul>
      </footer>
    </>
  )
}

export default FooterComponent
