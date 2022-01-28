import { ADD_MOVIE ,SEARCH, REMOVE } from "../action/movieaction"

const initialstate=[]

const movieReducer=(state=initialstate,action)=>{
   switch(action.type){

     case  ADD_MOVIE:{
         return [...state,{...action.payload}]
     }

     case SEARCH:{
       const result= state.filter((ele)=>{
              return ele.moviename===action.payload
        })
        return result
     }
     case REMOVE:{
        return state.filter((ele)=>{
           return ele.id!==action.payload
        })
     }

       default:{
          return [...state]
       }
   }
}
export default movieReducer