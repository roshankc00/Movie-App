import { MovieInterface } from '@/interface/global.interface';
import {createSlice} from '@reduxjs/toolkit'
const initialState:MovieInterface={
    movies:[],
    originalMovies:[],
};

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        setGlobalMovies:(state,action)=>{
            state.movies=action.payload
            state.originalMovies=action.payload
        },
        setFilterMovies:(state,action)=>{
            state.movies=action.payload
        }
    }
})
export const {setGlobalMovies,setFilterMovies}=movieSlice.actions
export default movieSlice.reducer;

 