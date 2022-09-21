import React from 'react'
const TOP = [
    { id:1, img: "/assets/images/product01.png", tit: "굿나잇 필로우 미스트", content: "Good Night Pillow Mist", price: "28,000원", link:"/"},
    { id:2, img: "/assets/images/product02.png",  tit: "롤 온 테라피 오일", content: "Roll on Therapy Oil", price: "14,000원", link:"/" },
    { id:3, img: "/assets/images/product03.png",  tit: "산노루 에이 투 지 리퀴드솝", content: "Sannolu A To Liquid Soap", price: "13,000원",link:"/" },
]


const BOTTOM = [
    { id:4, img: "/assets/images/product04.png",  tit: "산노루 바디 오인트먼트", content: "Sannolu Body Ointment", price: "29,000원",link:"/" },
    { id:5, img: "/assets/images/product05.png",  tit: "칩스 솝 - 아프리콧", content: "Chips Saop - Apricot", price: "13,000원",link:"/" },
]


const Best = () => {
  return (
    <div className="Best">
        <h2>BEST SELLERS</h2>
        <div className="container">
              <div className="top">
                  {
                      TOP.map(pro => {
                        return (
                            <figure key={pro.id} className="product">
                                <a href={pro.link}>
                                        <img src={process.env.PUBLIC_URL + "/assets/images/product0" + pro.id + ".png"} alt={pro.tit} />
                                </a>
                                <div className='name'>
                                    <p>{pro.tit}</p>
                                    <span>{pro.content}</span>
                                    <em>{pro.price}</em>
                                </div>
                                
                            </figure>
                        )
                    })
                  }
              </div>      
              <div className="bottom">
                  {
                      BOTTOM.map(pro => {
                        return (
                            <figure key={pro.id} className="product">
                                <a href={pro.link}>
                                        <img src={process.env.PUBLIC_URL + "/assets/images/product0" + pro.id + ".png"} alt={pro.tit} />
                                </a>
                                 <div className='name'>
                                    <p>{pro.tit}</p>
                                    <span>{pro.content}</span>
                                    <em>{pro.price}</em>
                                </div>
                            </figure>
                        )
                    })
                  }
              </div>      
        </div>
    </div>
  )
}

export default Best;
