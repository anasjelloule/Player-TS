import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState, MusicObjectInterface, setplay, handletimeaudio, setduration } from '../../Store'

function Player() {

  const audioplayer = useRef<HTMLVideoElement>(null);
  // const Music = useSelector((state: RootState) => state.Music)
  const Played = useSelector((state: RootState) => state.Music.Played)
  const current = useSelector((state: RootState) => state.Music.current)
  const currentchange = useSelector((state: RootState) => state.Music.currentchange)
  const Currentsong = useSelector((state: RootState) => state.Music.Currentsong)
  const dispatch = useDispatch()





  useEffect(() => {

    setduration(audioplayer.current?.duration || 0)
    if (Played)
      audioplayer.current?.play()
    else
      audioplayer.current?.pause()
  }, [Played]);
  useEffect(() => {

    audioplayer.current!.src = Currentsong.url || '';
    if (Played)
      audioplayer.current?.play()
    else
      audioplayer.current?.pause()

  }, [Currentsong]);
  useEffect(() => {
    audioplayer.current!.currentTime = current
  }, [currentchange]);

  const handleTime = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // setcurrent(e.currentTarget.value as unknown as number)
    dispatch(handletimeaudio(audioplayer.current?.currentTime || 0))
    audioplayer.current!.currentTime = e.currentTarget.value as unknown as number
  }
  const handletimeaudiox = (): void => {
    dispatch(handletimeaudio(audioplayer.current?.currentTime || 0))
    // setcurrent(audioplayer.current?.currentTime || 0)
    dispatch(setduration(audioplayer.current?.duration || 0))
    // setduration(audioplayer.current?.duration || 0)
  }







  return (
    <>
      <audio
        controls={false}
        ref={audioplayer}
        onTimeUpdate={handletimeaudiox}
      ><source src={`${Currentsong.url}`} type="audio/mpeg" /></audio>
      {/* <video width="320" height="240" ref={audioplayer} controls={true} onTimeUpdate={handletimeaudiox}>
    
        <source src={`${Currentsong.url}`} type="video/mp3" />

        Your browser does not support the video tag.
      </video> */}
    </>
  )
}

export default Player