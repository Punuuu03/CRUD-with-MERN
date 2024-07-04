import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function CreateUser() {

    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [age,setAge]=useState()
    const navigate=useNavigate()

    const Submit= (e)=>{
        e.preventDefault();
        axios.post("https://crud-with-mern-server.vercel.app/createUser",{name,email,age})
        .then(result=>{
            console.log(result)
        navigate('/')
    })
        .catch(err=>console.log(err))
    }
  return (
    <div className=" Ccontainer">
            <form onSubmit={Submit} className="Cform">
                <h2>Add Student</h2>
                <div className="Cform-group">
                    <label htmlFor="">Name</label>
                    <input type="text" placeholder="Enter Name" required
                        onChange={(e) => setName(e.target.value )} />
                </div>
                <div className="Cform-group">
                    <label htmlFor="">Email</label>
                    <input type="email" placeholder="Enter Email" required
                    onChange={(e) => setEmail(e.target.value )} />
                </div>
                <div className="Cform-group">
                    <label htmlFor="">Age</label>
                    <input type="text" placeholder="Enter Age" required
                    onChange={(e) => setAge(e.target.value )}/>
                </div>
                <button className="Cbtn">Submit</button>
            </form>
        </div>
  )
}

export default CreateUser