import { createSlice, configureStore, applyMiddleware, PayloadAction } from "@reduxjs/toolkit";
import path from 'path'


export interface AppState {
    loading: boolean;
    error: string | null;
    music: MusicObject[];
    Played?: boolean,
    Currentsong: MusicObject,
    current: number,
    duration: number,
    currentchange:number
}
export interface MusicObject {
    id: number,
    url: string,
    img: string,
    title: string,
    desc?: string,

}

const initialState: AppState = {
    loading: false,
    error: null,
    Played: false,
    current: 0,
    duration: 0,
    currentchange:0,
    music: [
        { id: 0, title: 'Anas', desc: 'bla bla ', url: "http://localhost:3000/Audio/Audio1.mp3", img: 'https://i.scdn.co/image/ab67616d0000b273194aaa78f555a7ccac3e0abf' },
        { id: 1, title: 'Hamza', url: "http://localhost:3000/Audio/Audio2.mp3", img: 'https://i.scdn.co/image/ab67616d0000b273f73cc2e03a580f5440dbc18a' },
        { id: 2, title: 'Ali', url: "http://localhost:3000/Audio/Audio3.mp3", img: 'https://i.scdn.co/image/ab67616d0000b273fae69d19f1150b9dbb47117c' },
        { id: 3, title: 'Fati', url: "http://localhost:3000/Audio/Audio4.mp3", img: 'https://i.scdn.co/image/ab67616d0000b2733a0e62d74fa29b457bb0bfb4' },
    ],
    Currentsong: { id: 3, title: 'Fati', url: "http://localhost:3000/Audio/Audio4.mp3", img: 'https://i.scdn.co/image/ab67616d0000b2733a0e62d74fa29b457bb0bfb4' }
};

const MusicSlice = createSlice({
    name: 'Music',
    initialState,
    reducers: {
        setLoading(state: AppState, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        setCurrentsong: (state: AppState, action: PayloadAction<number>) => {
            state.Currentsong = state.music.find(el => el.id == action.payload) || state.Currentsong;
        },
        changeCurrentsong: (state: AppState, action: PayloadAction<string>) => {
            let ind: number = 0
            if (action.payload == "Backward") {
                ind = state.music.findIndex(el => el.id == state.Currentsong.id);
                state.Currentsong = state.music[ind - 1] || state.Currentsong;
            }
            if (action.payload == "Forward") {
                ind = state.music.findIndex(el => el.id == state.Currentsong.id);
                state.Currentsong = state.music[ind + 1] || state.Currentsong;
            }
        },
        setplay(state: AppState) {
            state.Played = !state.Played;
        },
        setduration(state: AppState, action: PayloadAction<number>) {
            state.duration = action.payload as unknown as number
        },
        handletimeaudio(state: AppState, action: PayloadAction<number>) {
            state.current = action.payload as unknown as number
           
        },
        handletime(state: AppState, action: PayloadAction<number>) {
            state.currentchange=action.payload as unknown as number
            state.current = action.payload as unknown as number
        }
    }
})

export default MusicSlice