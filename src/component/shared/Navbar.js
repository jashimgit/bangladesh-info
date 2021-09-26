import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <a className='navbar-brand' href='/'>
                BrandLogo
            </a>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'
            >
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav ml-auto'>
                    <li className='nav-item active'>
                        <Link className='nav-link' to='/'>
                            Home <span className='sr-only'>(current)</span>
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/divisions'>
                            Division
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link className='nav-link' to='/districts'>
                            District
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-link' to='/dashboard'>
                            Dashboard
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
