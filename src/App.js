import React from "react"
import { useSelector } from "react-redux"
import MovieContainer from "./components/MovieContainer"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
const App=(props)=>{
const movie=useSelector((state)=>{
  return state.movie
 })
  return <div>
    <div class="d-flex justify-content-center">
    <h1>My Big Movie List-{movie.length} </h1>
    </div>
    <div class="container-sm">
    <MovieContainer/>
    </div>
  </div>
}
export default App