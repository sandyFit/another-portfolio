import React from 'react'
import Navbar from './layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './layouts/Footer'
import Sidebar from './layouts/Sidebar'

const App = () => {
    return (
        <section>
            <Navbar />
            <Sidebar/>
            <Outlet />
            <Footer/>
        </section>
    )
}

export default App