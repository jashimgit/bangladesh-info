import React from "react";
import Navbar from "../shared/Navbar";

export default function Division({ division }) {

    const generateList = () => {
        return (
            division.map(div => (
                <tr key={div.div_name}>
                <th>{getId()} </th>
                <td>{div.div_name}</td>
                <td>{div.div_bn_name}</td>
                <td>{div.div_url}</td>
            </tr>
            ))
        )
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="text-center py-3">All divisions</h4>
                        <p className="text-secondary text-center lead">
                            All Divions are devired from API
                        </p>
                        <h4>Total : {division.length} Division available</h4>
                    </div>
                    <div className="col-md-12">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="text-secondary">
                                    There are 8 division in Bangladesh, All Division details are shown below with website. You can visit those to learn more about the Division.
                                </p>
                            </div>
                            <div className="col-md-12">
                            <div className="table-responsive">
                                    <table className="table table-striped table-sm">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Bangla Name</th>
                                                <th scope="col">Website</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {!division ? (
                                                "Loadding ..... "
                                            ) : (
                                                generateList()
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}



let serial = 0;
function getId() {
    return serial++;
}