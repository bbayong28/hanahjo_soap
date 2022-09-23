import React from 'react'


const Footer = () => {
  return (
    <div className='Footer'>
      <div className="container">
        <div className='logo'>
          <img src={process.env.PUBLIC_URL+ '/assets/images/logo_w.png'} alt="" />
        </div>
        <div className="top">
          <ul>
            <li><a href="/">COMPANY </a></li>
            <li><a href="/">AGREEMENT</a></li>
            <li><a href="/">GUIDE</a></li>
            <li><a href="/">PRIVACY POLICY</a></li>
          </ul>
        </div>
        <div className="middle">
          <div className="top">
            <span>COMPANY 한아조 주식회사</span>
            <span>OWNER 김상만, 조한아</span>
            <span> TEL 070-7727-7117</span>
            <span>LUNCH BREAK 12:00~13:00</span>
          <span>E-MAIL hanah@hanahzo.com</span>
          </div>            
          <div className="middle">
            <span>BUSINESSNUMBER 527-86-02282</span>             
            <span>MAIL-ORDER LICENSE 제 2021-서울노원-1980 호 [사업자정보확인]</span>
          </div>
          <div className="bottom">
            <span>ADDERES 01684 서울특별시 노원구 상계로9가길 22 (상계동) 1층</span>
          </div>
        </div>
        <div className="copy">
          <p>Copyright © 한아조. All rights reserved.</p>
        </div>
      </div>      
    </div>
  )
}

export default Footer