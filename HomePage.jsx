import React from 'react'
import './HomePage.css'
import deakin from './images/deakin uni.jpg'
import Footer from './Footer'

export default function HomePage() {
    return (
        <div>
            <div className="containerText">
                <img className='mainImage' src={deakin} alt="deakin uni" />
                <div className="name">
                    <h3 style={{ textAlign: "center" }}>Abhinav Sharma</h3>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
