import React, { useEffect, useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Users from './Users'
import CreateUser from './CreateUser'
import UpdateUser from './UpdateUser'
import './App.css'

function App() {
  const [count,setCount]=useState(0)
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Users/>}></Route>
        <Route path='/create' element={<CreateUser/>}></Route>
        <Route path='/update/:id' element={<UpdateUser/>}></Route>       
         </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
