import React from 'react'
import "../styles/Header.css"
import img1 from "../components/image/img1.jpg";

function Header() {
    return (
        <div className='HeaderRoot-Container'>
            <nav className="navbar  navbar-expand-lg navbar-light bg-success">
                <div className='website-logo'>
                    <img src = {img1} alt="website logo" />
                </div>
                <div className="container-fluid ">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse list-container " id="navbarNav">
                        <ul className="navbar-nav fs-5 font-sans  ">
                            <li className="nav-item">
                                <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link text-white " href="#">Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Cotegories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white " href="#">Content</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header