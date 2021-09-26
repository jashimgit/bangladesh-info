import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'

export default function AddDivisionForm() {
    const {handleSubmit, register} = useForm();
    
    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:8000/division', {
            div_name: data.div_name,
            div_bn_name: data.div_bn_name,
            div_url: data.div_url
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
    };

    

    return (
        <div>
            <h3>Add Division</h3>
            <div className="col-md-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label>Division Name</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('div_name')}
                    />
                    
                </div>
                <div className="form-group">
                    <label>Division Bangla Name</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('div_bn_name')}
                    />
                </div>
                <div className="form-group">
                    <label>Division Website Link</label>
                    <input
                        type="text"
                        className="form-control"
                        {...register('div_url')}
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
