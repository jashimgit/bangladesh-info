import React from 'react'
import Sidebar from '../shared/Sidebar'
import TopNavbar from '../shared/TopNavbar'

export default function DashboardLayout({children}) {
    return (
        <div>
            <TopNavbar />
            <div className="container-fluid">
                <div className="row">
                    <Sidebar />
                    { children }
                </div>
            </div>
        </div>
    )
}
