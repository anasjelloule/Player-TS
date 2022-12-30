import { createSlice, configureStore, applyMiddleware, PayloadAction } from "@reduxjs/toolkit";
import path from 'path'


interface AppState {
    loading: boolean;
    error: string | null;
    music: MusicObject[];
}
export interface MusicObject {
    id: number,
    url: string,
    img: string,
    title: string,
    desc?: string
}

const initialState: AppState = {
    loading: false,
    error: null,
    music: [
        { id: 0, title: 'Anas', desc: 'bla bla ', url: "http://localhost:3000/Audio/Audio1.mp3", img: 'https://i.scdn.co/image/ab67616d0000b273194aaa78f555a7ccac3e0abf' },
        { id: 1, title: 'Hamza', url: "http://localhost:3000/Audio/Audio2.mp3", img: 'https://i.scdn.co/image/ab67616d0000b273f73cc2e03a580f5440dbc18a' },
        { id: 2, title: 'Ali', url: "http://localhost:3000/Audio/Audio3.mp3", img: 'https://i.scdn.co/image/ab67616d0000b273fae69d19f1150b9dbb47117c' },
        { id: 3, title: 'Fati', url: "http://localhost:3000/Audio/Audio4.mp3", img: 'https://i.scdn.co/image/ab67616d0000b2733a0e62d74fa29b457bb0bfb4' },
    ]
};

const MusicSlice = createSlice({
    name: 'Music',
    initialState,
    reducers: {
        setLoading(state: AppState, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
    }
})

export default MusicSlice