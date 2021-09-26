/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";


export default function AddDistrictForm({ division }) {
    const {
        handleSubmit,
        register,
        reset,
    } = useForm();

    const [divisionId, setDivisionId] = useState(0);

    const onSubmit = (data) => {
        // console.log(data);
        axios.post('http://localhost:8000/district', {
            div_id : data.div_id,
            dist_name: data.dist_name,
            dist_bn_name: data.dist_bn_name,
            dist_lat: data.dist_lat,
            dist_lon: data.dist_lon,
            dist_url: data.dist_url
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    useEffect(() => {
        reset();
    }, [reset]);

    return (
        <div>
            <h3>Add District Info</h3>
            <div className="col-md-12">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <select
                                    className="form-control"
                                    onChange={(e) =>
                                        setDivisionId(e.target.value)
                                    }
                                    {...register("div_id")}
                                >
                                    <option>Select Division....</option>
                                    {division.map((div) => (
                                        <option
                                            value={div.id}
                                            key={div.div_name}
                                        >
                                            {div.div_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="District Name"
                                    {...register("dist_name")}
                                />
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="District name in Bangla font"
                                    {...register("dist_bn_name")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>District Latitude</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("dist_lat")}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>District Longituted</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("dist_lon")}
                                />
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="form-group">
                                <label>District Website Link</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("dist_url")}
                                />
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-sm">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
