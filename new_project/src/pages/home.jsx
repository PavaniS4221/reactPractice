import MovieCard from "../components/moviecard";
import { useState,useEffect } from "react";
import "../css/Home.css";
import { searchMovies,getPopularMovies } from "../services/API";
function Home() {
  const [searchquery, setSearchquery] = useState("");
  const[ movies,setMovies]=useState([]);
  const[error,setError]=useState(null);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    const loadPopularMovies=async()=>{
        try{
            const popularMovies=await getPopularMovies();
            setMovies(popularMovies);
        }catch(error){
            setError("Failed to fetch popular movies. Please try again later.");
        }
    finally{
        setLoading(false);
    }
}
    loadPopularMovies();

  },[])
 
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchquery.trim()) return
    if (loading) return

    setLoading(true)
    try {
        const searchResults = await searchMovies(searchQuery)
        setMovies(searchResults)
        setError(null)
    } catch (err) {
        console.log(err)
        setError("Failed to search movies...")
    } finally {
        setLoading(false)
    }
  };
  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search movies..."
          className="search-input"
          value={searchquery}
          onChange={(e) => setSearchquery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            movie.title.toLowerCase().startsWith(searchquery) && (
              <MovieCard movie={movie} key={movie.id} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
