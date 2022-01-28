import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { createmovie } from "../action/movieaction";
import {Form,Button} from "react-bootstrap"
const Movieform=()=>{

     const dispatch=useDispatch()
     const [name,setName]=useState('')
     const [rank,setRank]=useState("")
      

     const handleMovie=(e)=>{
           setName(e.target.value)
     }
     const handleRank=(e)=>{
        setRank(e.target.value)
     }

     const handleSubmit=(e)=>{
          e.preventDefault()
          const formdata={
              id:Number(new Date()),
              moviename:name,
              rank:Number(rank)
          }
          //console.log(formdata)
          dispatch(createmovie(formdata))
          setName('')
          setRank('')
     }

    return<div class="container">
        <div class="p-3 mb-2 bg-info text-dark">
        <h1>Add Movie</h1>
        <Form class="row g-3" onSubmit={handleSubmit} >
    <div class="col-md-6">
    <Form.Group className="mb-3" controlId="formBasicText">
    <Form.Control type="text" class="form-control" id="floatingInput" placeholder="IDMB rank" value={name} onChange={handleMovie} />

    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicNumber">
    <Form.Control type="text"class="form-control" id="floatingInput" placeholder="IDMB rank" value={rank} onChange={handleRank} />
      </Form.Group>
     </div><br/>
  <div class="col-12">
  <Button variant="primary" type="submit"  className="btn btn-primary">
    save
  </Button>
  </div>
</Form>
</div>
  </div>
}
export default Movieform