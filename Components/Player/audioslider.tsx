import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { RootState,  changeCurrentsong,setplay,handletime } from './../../Store'

import { AiFillPlayCircle, AiFillPauseCircle, AiFillStepForward, AiFillStepBackward } from "react-icons/ai";




function Audioslider() {
    const Music = useSelector((state: RootState) => state.Music)
    const Played = useSelector((state: RootState) => state.Music.Played)
    const current = useSelector((state: RootState) => state.Music.current)
    const duration = useSelector((state: RootState) => state.Music.duration)
    const Currentsong = useSelector((state: RootState) => state.Music.Currentsong)
    const dispatch = useDispatch()



    const handleTimex = (e: React.ChangeEvent<HTMLInputElement>): void => {
        // setcurrent(e.currentTarget.value as unknown as number)
        dispatch(handletime(e.currentTarget.value as unknown as number || 0))
        // audioplayer.current!.currentTime = e.currentTarget.value as unknown as number
      }






  return (
    <div className='align-items-center d-flex justify-content-center'>

 
    <span className='spantime'>  {fancyTimeFormat(current)}</span>
    <input type="range"
      min={0}
      max={duration}
      value={current}
      onChange={handleTimex}
      className='w-50 slidermusic'
    />
    <span className='spantime'>     {fancyTimeFormat(duration)}</span>
  </div>
  )
}

export default Audioslider


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