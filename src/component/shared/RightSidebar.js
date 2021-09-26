import React from 'react';

export default function RightSidebar() {
    return (
        <div>
            <h4 className="text-center pt-3">MANAGEMENT</h4>
            <div className="py-2">
                <h5>Manage</h5>
                <p className="text-muted">Add, edit, delete user, groups and roles</p>
            </div>
            <div>
                <nav class='nav flex-column'>
                    <a className='nav-link active' href='/'>
                        Active
                    </a>
                    <a className='nav-link' href='/#'>
                        Link
                    </a>
                    <a className='nav-link' href='/#'>
                        Link
                    </a>
                </nav>
            </div>
        </div>
    );
}
