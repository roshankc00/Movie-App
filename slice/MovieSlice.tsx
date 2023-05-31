import { MovieInterface } from '@/interface/global.interface';
import {createSlice} from '@reduxjs/toolkit'
const initialState:MovieInterface={
    movies:[]
};

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
        setGlobalMovies:(state,action)=>{
            state.movies=action.payload
        }
    }
})
export const {setGlobalMovies}=movieSlice.actions
export default movieSlice.reducer;

