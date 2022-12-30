import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { RootState, MusicObjectInterface } from './../Store'

function index(): JSX.Element {

  const Music = useSelector((state: RootState) => state.Music)
  const dispatch = useDispatch()


  return (
    <>
      <div className='container my-5'>
        <div className="row">
          <div className="col-12">
            <div className="text-center">

              <IMGPlay src={Music.music[0].img} />
              <h1>{Music.music[0].title}</h1>
              <h6>{Music.music[0].desc}</h6>
            </div>
            <div>
              <audio
                controls={true}
              >
                <source src={`${Music.music[2].url}`} type="audio/mpeg" />
                {/* <source src={`${Music.music[0].url}`} type="audio/mp3" /> */}
              </audio>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}


const IMGPlay = styled.img`
height: 250px;
border-radius: 50%;
`;
export default index