import { createSlice, configureStore, applyMiddleware, PayloadAction } from "@reduxjs/toolkit";

interface AppState {
    loading: boolean;
    error: string | null;
    showLibrary:boolean;
}

const initialState: AppState = {
    loading: false,
    error: null,
    showLibrary: false,
};


const SitesSlice = createSlice({
    name: 'Sites',
    initialState,
    reducers: {
        OpenLibrary(state: AppState) {
            state.showLibrary = !state.showLibrary ;
        },
    }
})

export  default SitesSlice