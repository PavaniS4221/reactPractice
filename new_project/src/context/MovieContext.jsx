import { createContext,useState,useEffect,useContext } from "react"; 

const MovieContext=createContext();
export const useMovieContext=()=>useContext(MovieContext);
export const MovieProvider=({children})=>{
    const [favourites,setFavourites]=useState([]);
    useEffect(()=>{
        const storedFavs=localStorage.getItem("favourites");
        if(storedFavs) setFavourites(JSON.parse(storedFavs));
    },[])
    useEffect(()=>{
        localStorage.setItem("favourites",JSON.stringify(favourites));
    },[favourites])
    const addToFavourites=(movie)=>{
       
            setFavourites(prev=>[...prev,movie]);
        
    }
    const removeFromFavourites=(movieId)=>{
        setFavourites(prev=>prev.filter(movie=>movie.id!==movieId));
    }
    const isInFavourites=(movieId)=>{
        return favourites.some(movie=>movie.id===movieId);
    }

    const value={
        favourites,
        addToFavourites,
        removeFromFavourites,
        isInFavourites
    }
    return (
    <MovieContext.Provider value={value}>
        {children}
        </MovieContext.Provider>
    );
    
}