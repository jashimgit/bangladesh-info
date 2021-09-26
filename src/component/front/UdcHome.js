import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';

export default function UdcHome({ division, district }) {
    // console.log('All division list :', division)
    // console.log('All district list :', district)

    return (
        <>
            <Navbar />
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <section>
                            <h4 className='text-center py-3'>
                                Bangladesh Information
                            </h4>
                            <p className='lead text-center text-secondary'>
                                Welcome to Bangladesh info blog, Here You will
                                find all division associated with district to
                                Union
                            </p>
                        </section>
                    </div>
                    <div className='col-md-12'>
                        <section className='row'>
                            <div className='col-md-3'>
                                <Link to='/divisions'>
                                    <div className='card bg-info'>
                                        <div className='card-body'>
                                            <div className='card-title text-white'>
                                                Number of Divisions
                                            </div>
                                            <p className='text-white'>
                                                {!division.length
                                                    ? 'loading....'
                                                    : `${division.length} Divisions`}
                                            </p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className='col-md-3'>
                                <div className='card bg-success'>
                                    <div className='card-body'>
                                        <div className='card-title text-white'>
                                            Number of Districts
                                        </div>
                                        <p className='text-white'>
                                            {!district.length
                                                ? 'loading....'
                                                : `${district.length} Districts`}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card bg-danger'>
                                    <div className='card-body'>
                                        <div className='card-title'>
                                            Number of Upazila's
                                        </div>
                                        <p className='text-white'>8 Upazila</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-3'>
                                <div className='card bg-info'>
                                    <div className='card-body'>
                                        <div className='card-title'>
                                            Number of Union
                                        </div>
                                        <p className='text-white'>8 union</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className='col-md-12'>
                        <div className='row'>
                            <main className='col-md-12'>
                                <div className='row pt-3'>
                                    <div className='col-md-6'>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Commodi laboriosam maiores debitis
                                            eum officia delectus iusto, eveniet
                                            est dolorem ducimus.
                                        </p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit.
                                            Commodi laboriosam maiores debitis
                                            eum officia delectus iusto, eveniet
                                            est dolorem ducimus.
                                        </p>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
