import React from"react"
import Movieform from "./Movieform"
import Moviestats from "./Moviestats"
import { useSelector } from "react-redux"
import Movielist from "./Movielist"
const MovieContainer=()=>{

    const movie=useSelector((state)=>{
        return state.movie
    })

    return<div>
        
        <div class="position-absolute top-0 start-0">
        <Movieform/>
        </div>
        
        {
          (movie.length>0)&&<div>
              <div class="d-flex justify-content-center">
                  <Movielist/>
              </div>
          <div class="position-absolute bottom-0 end-0">
          <Moviestats/>
          </div>
          </div>
        }
    </div>
}
export default MovieContainer