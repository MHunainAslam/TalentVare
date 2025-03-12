import React from 'react'
import { Link } from 'react-router-dom'
import Button from './HeigherOrderComponents/Button'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-xl bg-white fixed-top">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <Link className="navbar-brand" to="#">
                        <img src="/assets/images/logo.png" alt="" className='profile' />
                    </Link>
                </div>
                    <div className="input-group w-auto nav-search d-xl-none">
                        <span className="input-group-text" id="basic-addon1">
                            <i className="bi bi-search"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Search" aria-label="search" aria-describedby="basic-addon1" />
                    </div>
                    <div className='d-flex'>
                        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='d-xl-none'>
                            <img src="/assets/images/Rectangle 1516.png" alt="" />
                        </div>
                    </div>
                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body align-items-center custom-nav ">
                        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 align-items-center">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="#">Find Jobs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Top Companies</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Job Tracker</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">My Calendar</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Documents</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Messages</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Notifications</Link>
                            </li>

                        </ul>
                        <div className="input-group w-auto nav-search d-xl-flex d-none">
                            <span className="input-group-text" id="basic-addon1">
                                <i className="bi bi-search"></i>
                            </span>
                            <input type="text" className="form-control shadow-none" placeholder="Search" aria-label="search" aria-describedby="basic-addon1" />
                        </div>
                        <div className='text-center'>

                            <Button className="mx-xl-3">Resume Builder</Button>
                        </div>
                        <img src="/assets/images/Rectangle 1516.png" alt="" className='d-xl-block d-none' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar