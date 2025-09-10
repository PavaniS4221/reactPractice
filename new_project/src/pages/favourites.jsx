import "../css/Favourite.css"
import { useMovieContext } from "../context/MovieContext";  
import MovieCard from "../components/moviecard";
function Favourite(){
    const {favourites}=useMovieContext();
   
    if(favourites){
        return (
            <div className="favourites">
                <h2>Your Favourites</h2>
        <div className="movies-grid">
        {favourites.map(
          (movie) =>
            
              <MovieCard movie={movie} key={movie.id} />
            
        )}
      </div>
    
    </div>
    )
}
}
export default Favourite;