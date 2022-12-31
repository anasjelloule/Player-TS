import React, { useState, useRef, useEffect } from 'react'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import styled from "styled-components";
import { AiFillPlayCircle, AiFillPauseCircle, AiFillStepForward, AiFillStepBackward } from "react-icons/ai";



import { RootState,  changeCurrentsong,setplay,handletime } from './../Store'
import Audioslider from '../Components/Player/audioslider';







function index({ PlayProps }: any): JSX.Element {

 
  const Music = useSelector((state: RootState) => state.Music)
  const Played = useSelector((state: RootState) => state.Music.Played)
  const Currentsong = useSelector((state: RootState) => state.Music.Currentsong)
  const dispatch = useDispatch()
 
  // const [current, setcurrent] = useState<number>(0)
  // const [duration, setduration] = useState<number>(0)
  const playaudio = (): void => {
    dispatch(setplay())
  }

  const handleTimex = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // setcurrent(e.currentTarget.value as unknown as number)
    dispatch(handletime(e.currentTarget.value as unknown as number || 0))
    // audioplayer.current!.currentTime = e.currentTarget.value as unknown as number
  }

  // useEffect(() => {

  //   setduration(audioplayer.current?.duration || 0)
  //   if (Played)
  //     audioplayer.current?.play()
  //   else
  //     audioplayer.current?.pause()
  // }, [Played]);
  // useEffect(() => {
  //   dispatch(handletime(current))
 
  // }, [current]);

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
              <div className='my-4 align-items-center d-flex justify-content-center my-2'>
                <button className='btnplayer d-flex backward' disabled={Currentsong.id <= 0 ? true : false}
                  onClick={() => dispatch(changeCurrentsong("Backward"))}
                >
                  <AiFillStepBackward />
                </button>
                <button className='btnplayer d-flex' onClick={playaudio}>
                  {Played ? <AiFillPauseCircle /> : <AiFillPlayCircle />}
                </button>
                <button className='btnplayer d-flex' disabled={Currentsong.id >= Music.music.slice(-1)[0].id ? true : false}

                  onClick={() => dispatch(changeCurrentsong("Forward"))}
                >
                  <AiFillStepForward />
                </button>
              </div>
               
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