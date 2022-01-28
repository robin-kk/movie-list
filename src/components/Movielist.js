import React,{useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { removemovie } from "../action/movieaction";

const Movielist=()=>{
    const [search,setSearch]=useState('')
    const [drop,setDrop]=useState('')
    const dispatch=useDispatch()

    const movie=useSelector((state)=>{
        return state.movie
    })

    const handleSearch=(e)=>{
        e.preventDefault()
       setSearch(e.target.value)
       //console.log(e.target.value  )
    }
    const handleDrop=(e)=>{
        setDrop(e.target.value)
     }


     const result=movie.filter((ele)=>{
        if(search===''){
            return ele
        }else if( ele.moviename.toLowerCase().includes(search.toLowerCase())){
            return ele
        }
      })

      const handleRemove=(id)=>{
         dispatch(removemovie(id))
      }
    
      const display=()=>{
           switch(drop){
            //   case "":{
            //        return movie.map((ele)=>{
            //          return<div key={ele.id}>
            //         <h3>{ele.moviename}</h3>
            //         <b>{ `#${ele.rank}`}</b>
            //         <button onClick={()=>{handleRemove(ele.id)}}>remove</button>
            //        </div>
            //    })
            //     }
                case "ascending":{
                   const asc= movie.sort((a,b)=>{
                        return a.rank-b.rank
                    })
                    return asc.map((ele)=>{
                        return<div key={ele.id}>
                            <h3>{ele.moviename}</h3>
                            <b>{ `#${ele.rank}`}</b>
                            <button onClick={()=>{handleRemove(ele.id)}}>remove</button>
                        </div>
                    })
                }
                case "descending":{
                    const asc= movie.sort((a,b)=>{
                         return b.rank-a.rank
                     })
                     return asc.map((ele)=>{
                         return<div key={ele.id}>
                             <h3>{ele.moviename}</h3>
                             <b>{ `#${ele.rank}`}</b>
                             <button onClick={()=>{handleRemove(ele.id)}}>remove</button>
                         </div>
                     })
                    }
                     default:{
                        return movie.map((ele)=>{
                            return <div key={ele.id}>
                           <h3>{ele.moviename}</h3>
                           <b>{ `#${ele.rank}`}</b>
                           <button onClick={()=>{handleRemove(ele.id)}}>remove</button>
                          </div>
                         })
                     }
                 }
                }


    return <div class="align-self-center">
        <input type="text" value={search} placeholder="enter to search"  onChange={handleSearch}/>
        <select value={drop} onChange={handleDrop}>
            <option value=''></option>
            <option value="ascending">ascending</option>
            <option value="descending">descending</option>
        </select >
       
       
         {  
                
               (search==='')?  <div class="p-3 mb-2 bg-success text-white">{display()}</div> : result.map((ele)=>{
                     return <div key={ele.id}  class="p-3 mb-2 bg-success text-white">
                            <h3>{ele.moviename}</h3>
                            <b>{ `#${ele.rank}`}</b>
                            <button onClick={()=>{handleRemove(ele.id)}}>remove</button>
                          </div>
               })

          }
            </div>
}
export default Movielist