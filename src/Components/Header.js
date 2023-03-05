import React, { useEffect } from 'react'
import "./HeaderSt.css";
import $ from "jquery"
import Button from './Button';
function Header() {
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            if(window.innerWidth>1200){
                $(".centeral-links").removeClass("togglecollapsedlinks");
                $(".bar").removeClass("hoveredbar")
            }
        })
    },[window])
    const openCollapsedLinks = () => {
        $(".bar").toggleClass("hoveredbar")
        $(".centeral-links").toggleClass("togglecollapsedlinks")
    }
  return (
    <header>
        <div className='header-container'>
            <div className='nav-navbar'>
                {/*Site-Logo*/}
                <div className='navbar-logo'>
                    <a className="brand" href="#">
                        <div className='svg-Bosta-Logo'>
                            <img src="https://www.biteloop.in/assets/images/logo-2.svg" alt=""/>
                        </div>
                    </a>
                </div>
                {/*collapsed-links*/}
                <div className='collapsed-links'>
                    <ul className="navbar-list">
                        <li className="">
                            <span className="nav-link active" id="">
                                <a href=''>Home</a>
                            </span>
                        </li>
                        <li className="">
                            <span className="nav-link">
                                <a href=''>About</a>
                            </span>
                        </li>
                        <li className="">
                            <span className="nav-link">
                                <a href=''>Donation</a>
                            </span>
                        </li> 
                        <li className="">
                            <Button>
                                <a href=''>Contact</a>
                            </Button>
                        </li>
                    </ul>
                </div>
                {/* */}
                <div className='right-links'>
                    {/*right-collapsed-links*/}
                    <div className='right-collapsed-links'>
                        <ul className="navbar-list">
                            <li className="tracking-shipment">
                                <span className="nav-btn">
                                    <a href='' className='btn '>Contact</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/*toggle button*/}
                    <button onClick={openCollapsedLinks} className="navbar-togglebtn">
                        <span className="toggle-icon">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        </span>
                    </button>
                </div>
                {/* */}
                <div className='centeral-links'>
                    <ul className='navbar-list'>
                        <li className="">
                            <span className="nav-link active">
                                <a href=''>Home</a>
                            </span>
                        </li>
                        <li className="">
                            <span className="nav-link">
                                <a href=''>About</a>
                            </span>
                        </li>
                        <li className="">
                            <span className="nav-link">
                                <a href=''>Donation</a>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}
export default Header