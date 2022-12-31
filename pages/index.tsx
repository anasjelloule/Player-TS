import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { AiFillPlayCircle, AiFillPauseCircle, AiFillStepForward, AiFillStepBackward } from "react-icons/ai";



import { RootState, changeCurrentsong, setplay, handletime } from './../Store'
import Audioslider from '../Components/Player/audioslider';
import AudioBtn from '../Components/Player/AudioBtn';







function index({ PlayProps }: any): JSX.Element {
 
  const Currentsong = useSelector((state: RootState) => state.Music.Currentsong)
 
 

  return (
    <>
      <div className='container my-5'>
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <IMGPlay src={Currentsong.img} />
              <h1>{Currentsong.title}</h1>
              <h6>{Currentsong.desc}</h6>
            </div>
            <div className='text-center'>
            <AudioBtn />

              <Audioslider />
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


function fancyTimeFormat(duration: number) {
  // Hours, minutes and seconds
  var hrs = ~~(duration / 3600);
  var mins = ~~((duration % 3600) / 60);
  var secs = ~~duration % 60;

  // Output like "1:01" or "4:03:59" or "123:03:59"
  var ret = "";

  if (hrs > 0) {
    ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
  }

  ret += "" + mins + ":" + (secs < 10 ? "0" : "");
  ret += "" + secs;
  return ret;
}