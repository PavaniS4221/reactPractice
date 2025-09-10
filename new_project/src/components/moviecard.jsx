import "../css/MovieCard.css"
import { useMovieContext } from "../context/MovieContext";
function MovieCard({ movie }) {
    const {addToFavourites,removeFromFavourites,isInFavourites}=useMovieContext();
    const favourite=isInFavourites(movie.id);
    function onFavourtieClick(e) {
        e.preventDefault();
        if(favourite){
            removeFromFavourites(movie.id);
        }       
        else{   
            addToFavourites(movie);
        }
        
    }

    return  <div className="movie-card">
        <div className="movie-poster">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}  />
        
        <div className="movie-overlay">
            <button  className={`favorite-btn ${favourite?"active":""}`} onClick={onFavourtieClick}>
                ❤
            </button>

        </div>
        </div>

    <div className="movie-info">
        <h3>{movie.title}</h3>
        <h3>{movie.release_date?.split("-")[0]}</h3>
    </div>
    </div>
        
}
export default MovieCard;