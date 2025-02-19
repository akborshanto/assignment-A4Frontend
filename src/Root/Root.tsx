import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { Loading } from '../components/ui/loading'

export const Root = () => {
  const navigate=useNavigate()
  
  return (
    <div>
       {navigate.state === "loading" && <Loading />}
<Navbar></Navbar>
<Outlet></Outlet>
<Footer></Footer>


    </div>
  )
}
