import React from "react";
import { Link } from 'react-router-dom';

import DashboardLayout from "../../Layout/DashboardLayout";
import AddDivisionForm from './AddDivisionForm';

export default function AdminDivision() {
    return (
        <DashboardLayout>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4>Division Area</h4>
                    <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic example"
                    >
                        <Link to="/add-division">Add Division</Link>
                    </div>
                </div>

                <AddDivisionForm />
            </main>
        </DashboardLayout>
    );
}
