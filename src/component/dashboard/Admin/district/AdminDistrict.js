import React from "react";

import DashboardLayout from "../../Layout/DashboardLayout";
import AddDistrictForm from './AddDistrictForm';

export default function AdminDistrict() {
    return (
        <DashboardLayout>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                    <h4>District section</h4>
                </div>
                <AddDistrictForm />
            </main>
        </DashboardLayout>
    );
}
