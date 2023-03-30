import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {  useNavigate } from 'react-router-dom'

const People = () => {
const [people,setPeople]= useState([])
const navigate= useNavigate()
  const getPeople = ()=>{
    fetch("https://reqres.in/api/users")
    .then((res)=> res.json())
    .then((data)=> setPeople(data.data))
    .catch((err)=>console.log(err))
  }

useEffect(() => {
  getPeople()
  
}, []);



  return (

     <div className='container text-center mt-4'>
        
        <div 
        className='row justify-content-center g-3'>
            {people?.map((p)=>{
              const {id,first_name,last_name,avatar,}=p
              return(
                <div 
                key={id} 
                className=" col-sm-12 col-md-6 col-lg-4">
                    <img  
                    type="button"
                    onClick={()=> navigate(`${id}` , {state: p})}
                    className='rounded' src={avatar} alt={first_name} />
                    <h5>
                      {first_name} {last_name}
                    </h5>
                   
                </div>
              )
            })}
        </div>
            
    </div>
  )
}

export default People