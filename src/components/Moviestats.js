
import React from "react"
import { useSelector } from "react-redux"

const Moviestats=()=>{
  const movie=useSelector((state)=>{
      return state.movie
  })
  console.log(movie)
  
 const toprank=()=>{
    const top=movie.sort((a,b)=>{
      return a.rank-b.rank
    })
    return top[0].moviename
    //console.log(top[0].moviename)
 }
  return<div class="p-3 mb-2 bg-warning text-dark">.
        <h2>Movie Stats</h2>
        <h3>no of movies-{movie.length}</h3>
        <h4>{`#1 rank movie`}</h4>
        <b>{toprank()}</b>

        </div>
}
export default Moviestats