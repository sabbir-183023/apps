import React from 'react'
import logo from '../assets/banners/Blue Modern Professiona Handshake Partner Business Consulting Logo Design_20240924_225521_0000.png'
import fblogo from '../assets/banners/fblogo.png'
import iglogo from '../assets/banners/iglogo.png'
import { Link } from 'react-router-dom'
import '../css/footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="mainbox">
        <div className="flogobox">
        <Link to={'/'}><img src={logo} alt="logo" /></Link>
        </div>
        <div className="linkbox">
          <ul>
            <li><Link to={'/payment'}>Apply Now</Link></li>
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'/contact'}>Contact Us</Link></li>
          </ul>
        </div>
        </div>
        <div className="socialbox">
          <Link to={'#'}><img className='img1' src={fblogo} alt="fblogo" /></Link>
          <Link to={'#'}><img className='img2' src={iglogo} alt="iglogo" /></Link>
        </div>
        <div className="copyright">
            <p>All rights are reserved by CPA & AFFILIATE TEAM © 2024</p>
        </div>
    </div>
  )
}

export default Footer