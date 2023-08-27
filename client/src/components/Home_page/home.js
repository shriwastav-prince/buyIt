import React from 'react'
import '../Home_page/home_page.css'
import beautyCate from './beauty-product.png' 
import clotheCate from './clothes.png'
import photo1 from './electronics.png'
import lapCate from './laptops-category.png'
import photo2 from '../Home_page/iphone-14-pro-max.png'
import photo3 from '../Home_page/laptops.png'
import photo4 from '../Home_page/banner.png'
import photo5 from '../Home_page/deals-on-tv.png'
import photo6 from './zara.png'
import photo7 from './new-watch.png'
import photo8 from './shoes.png'
import photo9 from './skincare.png'
import photo10 from './buyit-banner.png'


export default function Home() {
 

  return (
    <>
    <div className='main'>
    <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
  </div>
  <div className="carousel-inner" >
  <div className="carousel-item active">
      <img src={photo10} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item" >
      <img src={photo4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={photo2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={photo3} className=" d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={photo5} className=" d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={photo6} className=" d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={photo7} className=" d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={photo8} className=" d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item ">
      <img src={photo9} className=" d-block w-100" alt="..."/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="container-fluid">
<div className='row'>
<div className="col card overlay" style={{width:'22rem'}}>
  <img src={photo1} className="card-img-top" alt="Electronics"s/>
  <div className="card-body text-center">
    <h5 className="card-title">Electronics</h5>
    <p className="card-text">Best Electronics devices at BuyIt store at best price.</p>
    <a href="#" className="btn btn-primary">See more</a>
  </div>
</div>
<div className="col card overlay text-center" style={{width:'22rem'}}>
  <img src={lapCate} className="card-img-top" alt="..." s/>
  <div className="card-body">
    <h5 className="card-title">Laptops</h5>
    <p className="card-text">A laptop, sometimes called a notebook computer by manufacturers, is a battery- or AC-powered personal computer (PC) smaller than a briefcase.</p>
    <a href="#" className="btn btn-primary">See more</a>
  </div>
</div>
<div className="col card overlay text-center" style={{width:'22rem'}}>
  <img src={beautyCate} className="card-img-top" alt="..." s/>
  <div className="card-body">
    <h5 className="card-title">Beauty Products</h5>
    <p className="card-text">Beauty Products are mainly used by womens to make them more beautifull day by day. Buy Beauty products at BuyIt store at best Prices.</p>
    <a href="#" className="btn btn-primary">See more</a>
  </div>
</div>

<div className="col card overlay text-center" style={{width:'22rem'}}>
  <img src={clotheCate} className="card-img-top" alt="..." s/>
  <div className="card-body">
    <h5 className="card-title">Clothes</h5>
    <p className="card-text">The best clothes avilable at BuyIt Store at Best prices</p>
    <a href="#" className="btn btn-primary">See more</a>
  </div>
</div>
</div>

</div>
</div>

    </>
  )
}
