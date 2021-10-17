import React from 'react'
import '../components/css/home.css'
import NavBar from '../components/navbar'

const Home = () => {
    return (
        <div className="home">
            <NavBar/>
            <h1>LingoNimble</h1>
            <a href="/login"> <button className="btn btn-light rounded-pill home-btn">LOGIN</button></a>
            <a href="/register"> <button className="btn btn-light rounded-pill home-btn">REGISTER</button></a>
            
        </div>
    )
}

export default Home
