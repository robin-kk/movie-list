
export const ADD_MOVIE="ADD_MOVIE"

export const SEARCH="SEARCH"

export const REMOVE="REMOVE"

export const createmovie=(moviedata)=>{
    return{
      type:ADD_MOVIE,
      payload:moviedata
    }
}

export const searchmovie=(data)=>{
  return{
    type:SEARCH,
    payload:data
  }
}

export const removemovie=(id)=>{
  return{
    type:REMOVE,
    payload:id
  }
}