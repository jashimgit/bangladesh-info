import React from "react";
import { useForm } from "react-hook-form";

export default function AddDistrictForm() {
    const { handleSubmit, register } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div>
            <h3>Add District Info</h3>
            <div className="col-md-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <select
                            className="form-control"
                            {...register("div_id")}
                        >
                            <option>Select Division....</option>
                            <option value="1">chittagong</option>
                        </select>
                    </div>
                    <div className="form-row">
                        <div className="col-6">
                            <div className="form-group">
                                <label>District Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("dist_name")}
                                />
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="form-group">
                                <label>District Bangla Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    {...register("dist_bn_name")}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>District Latitude</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("dist_lat")}
                        />
                    </div>
                    <div className="form-group">
                        <label>District Longituted</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("dist_lon")}
                        />
                    </div>
                    <div className="form-group">
                        <label>District Website Link</label>
                        <input
                            type="text"
                            className="form-control"
                            {...register("dist_url")}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary btn-sm">
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
}
