import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AiFillPlayCircle, AiFillPauseCircle, AiFillStepForward, AiFillStepBackward } from "react-icons/ai";


import { RootState, changeCurrentsong, setplay, handletime } from './../../Store'
function AudioBtn() {
    const Music = useSelector((state: RootState) => state.Music)
    const Played = useSelector((state: RootState) => state.Music.Played)
    const Currentsong = useSelector((state: RootState) => state.Music.Currentsong)
    const dispatch = useDispatch()

    const playaudio = (): void => {
        dispatch(setplay())
      }
    
    return (
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
    )
}

export default AudioBtn