import { createSlice, configureStore, applyMiddleware, PayloadAction } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";



// Music Reducer
import MusicSlice,{MusicObject} from'./Music'
export type { MusicObject as MusicObjectInterface} from './Music'
export const {setLoading} = MusicSlice.actions 

export type RootState = ReturnType<typeof store.getState>
export const MusicState = (state: RootState) => state.Music


// Sites Reducer
import SitesSlice from'./Sites'
export const {OpenLibrary} = SitesSlice.actions 
export const SitesState = (state: ReturnType<typeof store.getState>) => state.Sites


const store = configureStore({ reducer: { Music: MusicSlice.reducer,Sites:SitesSlice.reducer } });
export default store;
