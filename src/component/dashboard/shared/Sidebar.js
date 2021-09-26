import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
    return (
        <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
        >
            <div className="sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/dashboard">
                            <span data-feather="home"></span>
                            Dashboard <span className="sr-only">(current)</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/division">
                            <span data-feather="file"></span>
                            Division
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/district">
                            <span data-feather="shopping-cart"></span>
                            District
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/upazila">
                            <span data-feather="users"></span>
                            Upazila
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/dashboard/union">
                            <span data-feather="bar-chart-2"></span>
                            Unions
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/#">
                            <span data-feather="layers"></span>
                            Integrations
                        </Link>
                    </li>
                </ul>

                {/* <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <Link
                        className="d-flex align-items-center text-muted"
                        to="/#"
                        aria-label="Add a new report"
                    >
                        <span data-feather="plus-circle"></span>
                    </Link>
                </h6>
                <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            <span data-feather="file-text"></span>
                            Current month
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            <span data-feather="file-text"></span>
                            Last quarter
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            <span data-feather="file-text"></span>
                            Social engagement
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">
                            <span data-feather="file-text"></span>
                            Year-end sale
                        </a>
                    </li>
                </ul> */}
            </div>
        </nav>
    );
}
