import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { MusicState, MusicObjectInterface, SitesState, OpenLibrary,setCurrentsong } from './../Store'


function Library() {

    const Music = useSelector(MusicState)
    const Sites = useSelector(SitesState)

    const dispatch = useDispatch()

    const handleClose = () => dispatch(OpenLibrary());


    return (
        <>
            <Offcanvas show={Sites.showLibrary} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>List Audio</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className='listaudio'>

                        {Music.music.map((el: MusicObjectInterface, ind: number) => <div key={ind} className='my-3 Audioitem' onClick={()=>dispatch(setCurrentsong(el.id))}>
                            <img src={el.img} className='img-fluid w-25' />
                            <div>
                                <h1 >{el.title}</h1>

                            </div>
                        </div>)}
                    </div>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default Library