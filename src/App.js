import { useEffect, useState } from "react";
import './App.css'
import SearchIcon from './Search.svg'
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=7a9f9d8b'
const App = () =>{

  const [movies, setMovies] = useState([])
  const movieSearch = async(title) => {
  const response = await fetch(`${API_URL}&s=${title}`)//used template string
  const data = await response.json()
    setMovies(data.Search)
  }
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() =>{
    movieSearch('superman')

  }, [])
    return(
        <div className="app">
          <h1>MovieWorld</h1>
          <div className="search">
            <input
            placeholder="search for movie"
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            />
            <img
            src={SearchIcon} alt="search" onClick={()=>movieSearch(searchTerm)}></img>
          </div>
          {
            movies?.length>0
            ?
            (<div className="container">
            {movies.map((movie)=>(
              <MovieCard movie ={movie}/>
            ))}
          </div>): (
            <div>No Movie Found</div>
          )
          };
          
        </div>
    )
}
export default App