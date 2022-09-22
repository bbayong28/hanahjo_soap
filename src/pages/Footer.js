import React from 'react'


const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <i className="xi-instagram"></i>
        <div className="top">
          <ul>
            <li><a href="/">COMPANY </a></li>
            <li><a href="/">AGREEMENT</a></li>
            <li><a href="/">GUIDE</a></li>
            <li><a href="/">PRIVACY POLICY</a></li>
          </ul>
        </div>
        <div className="middle">
            <span>COMPANY 한아조 주식회사</span>
            <span>OWNER 김상만, 조한아</span>
            <span> TEL 070-7727-7117</span>
            <span>LUNCH BREAK 12:00~13:00</span>
            <span>E-MAIL hanah@hanahzo.com</span>
        </div>
        <div className="copy">
          <p>Copyright © 한아조. All rights reserved.</p>
        </div>
      </div>      
    </div>
  )
}

export default Footer