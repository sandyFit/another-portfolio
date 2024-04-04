import React from 'react'
import Navbar from './layouts/Navbar'
import { Outlet } from 'react-router-dom'
import Sidebar from './layouts/Sidebar'

const App = () => {
    return (
        <section>
            <Navbar />
            {/* <Sidebar/> */}
            <Outlet />

        </section>
    )
}

export default App