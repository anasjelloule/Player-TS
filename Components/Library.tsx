import React,{useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { MusicState, MusicObjectInterface,SitesState,OpenLibrary  } from './../Store'


function Library() {

    const Music = useSelector(MusicState)
    const Sites = useSelector(SitesState)

    const dispatch = useDispatch()
    
    const handleClose = () => dispatch(OpenLibrary());
 
 
    return (
        <>
            <Offcanvas show={Sites.showLibrary} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {Music.music.map((el:MusicObjectInterface, ind: number) => <h1 key={ind}>{el.id}</h1>)}
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default Library