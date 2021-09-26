import React from "react";
import DashboardLayout from "../Layout/DashboardLayout";
import DashboardHome from "./DashboardHome";

export default function Dashboard() {
    return (
        <DashboardLayout>
            <DashboardHome />
        </DashboardLayout>
    );
}
