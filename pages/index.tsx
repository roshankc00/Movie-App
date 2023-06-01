import MovieCard from "@/components/MovieCard";
import { Movie } from "@/interface/global.interface";
import { setFilterMovies, setGlobalMovies } from "@/slice/MovieSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'

export default function Home() {
  const [query, setquery] = useState("")
  const {movies,originalMovies}=useSelector((state:any)=>{
    console.log(state.MovieReducer)
    return state.MovieReducer})
  console.log(movies)
  console.log(originalMovies)
  const dispatch=useDispatch()
  const fetchMovies = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=5345d591dce999dd3dde52a8fd7e0f56"
      );
      dispatch(setGlobalMovies(response.data.results))
    } catch (error) {
      console.log(error);
    }
  };



  useEffect(() => { 
    fetchMovies();
  },[]);


  const searchResult = (searchQuery: string) => {
    //local state way
    const lowercaseResult = searchQuery.trim().toLowerCase();
    console.log(originalMovies)
    const filteredResult = originalMovies.filter((movie: any) => {
      return movie.title.toLowerCase().includes(lowercaseResult);
    });
    dispatch(setFilterMovies(filteredResult));
  };

  return (
    <>
       <div className="relative my-4">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" onChange={(e:any)=>{searchResult(e.target.value)}} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for a Movie" />
     
    </div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold my-8">Popular movies</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {movies.map((movie: any) => {
            return (
              <MovieCard
                key={movie.id}
                poster={"https://image.tmdb.org/t/p/w500"+movie.poster_path}
                title={movie.title}
                releaseYear={movie.release_date}
                rating={movie.vote_average}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}






