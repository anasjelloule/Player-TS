import React, { useState, createElement } from 'react'
import { BsCollectionPlayFill } from "react-icons/bs";
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import { OpenLibrary } from './../Store'
import Dropdown from './Dropdown';

function Menu(): JSX.Element {


    const dispatch = useDispatch()

    const handleClose = () => dispatch(OpenLibrary());

    return (
        <>
            <div className="collapse navbar-collapse" id="ftco-nav">
                <ul className="navbar-nav ml-auto mr-md-3">
                    <li className="nav-item active"><Link href="/" className="nav-link">Home</Link></li>

                    {/* <Dropdown texthref={<>Accessories</>} href='#' classhref="dropdown-toggle nav-link d-flex align-items-center justify-content-center  p-0">
                        <Link href="#" className="dropdown-item">Action</Link>
                        <Link href="#" className="dropdown-item">Another action</Link>
                        <Link href="#" className="dropdown-item">Something else here</Link>
                        <div className="dropdown-divider"></div>
                        <Link href="#" className="dropdown-item">Separated link</Link>
                        <div className="dropdown-divider"></div>
                        <Link href="#" className="dropdown-item">One more separated link</Link>
                    </Dropdown> */}

                    <li className="nav-item"><Link href="/#" className="nav-link">Musics</Link></li>
                    <li className="nav-item"><Link href="/About" className="nav-link">About</Link></li>
                    <li className="nav-item d-md-flex align-items-center"><Link href="#" 
                    onClick={handleClose}
                    className="nav-link icon-cart d-flex align-items-center justify-content-center icon-cart p-0"
                    ><BsCollectionPlayFill /></Link></li>
                    {/* <Dropdown texthref={<><BsCollectionPlayFill /><b className="caret"></b></>} href='#' classhref="dropdown-toggle nav-link d-flex align-items-center justify-content-center icon-cart p-0 withicon">
                        <Link href="#" className="dropdown-item">ANAS</Link>
                        <Link href="#" className="dropdown-item">Another action</Link>

                        <div className="dropdown-divider"></div>
                        <Link href="#" className="dropdown-item">One more separated link</Link>
                    </Dropdown> */}

                </ul>
            </div>
        </>
    )
}

export default Menu