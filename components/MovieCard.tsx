


interface MovieCardInterface {
    title: string;
    poster: string;
    releaseYear: string;
    rating: number;
  }
const MovieCard = ({title,poster,releaseYear,rating}:MovieCardInterface) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
        <img src={poster} alt="title" className="w-full" />
        <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title} </div>

            <p className="text-gray-700 text-base mb-2">Release Year:{releaseYear.split('-')[0]} </p>
            <p className="text-purple-700 text-base">Rating:{rating}</p>
        </div>
    </div>
  )
}


export default MovieCard