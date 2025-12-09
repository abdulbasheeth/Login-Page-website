import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes,Route} from "react-router-dom"
import "./index.css"
import App from './App';
import Fail from './Fail';
import Success from './Success';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}></Route>
       <Route path='/Success' element={<Success/>}></Route>
        <Route path='/Fail' element={<Fail/>}></Route>
    </Routes>
    </BrowserRouter>
    

);

