import React from 'react'
import './Home.css'
import Product from './Product';
const Home = (props) => {
  return (
    <div className="home">
    <div className="home_container">
      <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Tomorrow-war/Launch/1500x600_Hero-Tall_JPN._CB664225462_.jpg" className="home_img" alt="go prime"/>
    <div className="home_row">
      <Product
          id="12312421"
         title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback – 6 October 2011"
         price={29.99}
         image="https://images-eu.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
         ratings="***"
      />
      <Product
        id="14355332"
        title="Write Me A Love Story Paperback – 24 May 2021
        by Ravinder Singh.The blue-eyed boy of Indian publishing, Abhimanyu Razdan is known for his bestselling romances, which move his readers to tears."
        price={40.99}
        image="https://images-eu.ssl-images-amazon.com/images/I/51S3Dg2WCBL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        ratings="****"
       />
    </div>
    <div className="home_row">
      <Product
        id="3947503"
        title="GOQii Vital 4.0 Oximeter built-in continuous SpO2, Heart rate & body temperature monitoring with 3 months personal coaching"
        price={100.99}
        image="https://images-eu.ssl-images-amazon.com/images/I/41m%2B56M0HUL._SX300_SY300_QL70_FMwebp_.jpg"
        ratings="**"
      />
      <Product
        id="09347203"
        title="Artis Mini 2.0 USB Multimedia Speakers (Red)"
        price={120.99}
        image="https://images-eu.ssl-images-amazon.com/images/I/41TAu1zbg9L._SX300_SY300_QL70_FMwebp_.jpg"
        ratings="*****"/>
        <Product
          id="109284091"
          title="OPPO A74 5G (Fantastic Purple, 6GB RAM, 128GB Storage)| 5000 mAh | 18W Fast Charge | 90Hz Super"
          price={1900.99}
          image="https://m.media-amazon.com/images/I/71geVdy6-OS._AC_UY218_.jpg"
          ratings="******"/>
    </div>
    <div className="home_row">
      <Product
        id="20938502935"
        title="OnePlus 125.7 cm (50 inches) U Series 4K LED Smart Android TV 50U1S (Black) (2021 Model)"
        price={19900.99}
        image="https://m.media-amazon.com/images/I/71Sdj04A8dS._AC_SX180_SY120_QL70_.jpg"
        ratings="****"/>
    </div>
  </div>
  </div>
)}

export default Home
