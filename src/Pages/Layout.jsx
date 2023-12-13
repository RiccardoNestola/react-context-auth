import { Outlet } from "react-router-dom";
import React from 'react'

import Footer from '../Components/Footer/Footer'

const Layout = () => {

    return (
        <>


            <main>
                <Outlet />
            </main>

            <Footer />
        </>
    )
}

export default Layout
