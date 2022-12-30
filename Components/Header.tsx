import React, { useState } from 'react'
import Menu from './Menu';

function Header(): JSX.Element {


    return (
        <>
            <header>
                <section className="ftco-section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg ftco_navbar ftco-navbar-light" id="ftco-navbar">
                            <div className="container">
                                <a className="navbar-brand" href="index.html">Logo</a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="fa fa-bars"></span> Menu
                                </button>
                                <Menu />
                            </div>
                        </nav>

                    </div>
                </section>
            </header>
        </>
    )
}

export default Header