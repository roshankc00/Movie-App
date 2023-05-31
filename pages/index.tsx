import MovieCard from "@/components/MovieCard";
import { Movie } from "@/interface/global.interface";
import { setGlobalMovies } from "@/slice/MovieSlice";
import axios from "axios";
import { useState, useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux'

export default function Home() {
  const movies=useSelector((state:any)=>(state.MovieReducer.movies))
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

  return (
    <>
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
