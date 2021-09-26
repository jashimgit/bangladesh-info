import React from 'react';
// import Layout from '../../Layout/Layout'
import { RiUserSettingsLine } from 'react-icons/ri';
import { HiUsers } from 'react-icons/hi';
// RiUserSettingsLine
//HiUsers
export default function Home() {
    return (
        <div className='row'>
            <div className='col-md-12 d-flex justify-content-between py-3'>
                <div>
                    <h6 className='text-primary '>Dashboard // Admin</h6>
                    <p className='text-muted m-0'>Add, Edit, Delete Users</p>
                </div>
                <div>
                    <h4 className='text-white bgGreen borderRounded p-2 border-3'>
                        Dashboard
                    </h4>
                </div>
            </div>
            <div className='col-md-12'>
                <h5>Summary</h5>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className='card cardBorder'>
                            <div className='card-body d-flex justify-content-around align-items-center'>
                                <div className='icon'>
                                    <RiUserSettingsLine />
                                </div>
                                <div className='info'>
                                    <h6>Admins</h6>
                                    <p className='text-muted'>5 users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card cardBorder'>
                            <div className='card-body d-flex justify-content-around align-items-center'>
                                <div className='icon'>
                                    <HiUsers />
                                </div>
                                <div className='info'>
                                    <h6>Users</h6>
                                    <p className='text-muted'>541 users</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card cardBorder'>
                            <div className='card-body d-flex justify-content-around align-items-center'>
                                <div className='icon'>icon</div>
                                <div className='info'>
                                    <h6>Groups</h6>
                                    <p className='text-muted'>55 groups</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className='card cardBorder'>
                            <div className='card-body d-flex justify-content-around align-items-center'>
                                <div className='icon'>icon</div>
                                <div className='info'>
                                    <h5>Role</h5>
                                    <p className='text-muted'>25 role</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-md-12 d-flex justify-content-between'>
                <div className='downloadBtn'>
                    <button className='btn btn-outline-success  btn-lg bgGreenHover mr-2'>
                        Download CSV
                    </button>
                    <button className='btn btn-outline-success btn-lg bgGreenHover'>
                        Download PDF
                    </button>
                </div>
                <div className='adduserBtn'>
                    <button className='btn btn-outline-success btn-lg bgGreenHover'>
                        Add User
                    </button>
                </div>
            </div>
            <div className='col-md-12 searchbox py-3'>
                <form class='form-inline my-2 my-lg-0 float-right'>
                    <input
                        class='form-control mr-sm-2'
                        type='search'
                        placeholder='Search'
                        aria-label='Search'
                    />
                </form>
            </div>
            <div className='col-md-12'>
                <table class='table table-borderless'>
                    <thead className="bgGreen">
                        <tr>
                            <th scope='col'>User ID</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>User Name</th>
                            <th scope='col'>Email</th>
                            <th scope='col'>Creation Date</th>
                            <th scope='col'>User Details</th>
                            <th scope='col'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Ifaz Ahmed</td>
                            <td>ifaz.ahmed</td>
                            <td>testmail@gmail.com</td>
                            <td>4:44AM 17 August, 2021</td>
                            <td>View Details</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Ifaz Ahmed</td>
                            <td>ifaz.ahmed</td>
                            <td>testmail@gmail.com</td>
                            <td>4:44AM 17 August, 2021</td>
                            <td>View Details</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Ifaz Ahmed</td>
                            <td>ifaz.ahmed</td>
                            <td>testmail@gmail.com</td>
                            <td>4:44AM 17 August, 2021</td>
                            <td>View Details</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Ifaz Ahmed</td>
                            <td>ifaz.ahmed</td>
                            <td>testmail@gmail.com</td>
                            <td>4:44AM 17 August, 2021</td>
                            <td>View Details</td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}
