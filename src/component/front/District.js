import React from 'react';
import Navbar from '../shared/Navbar';



export default function District({ district }) {
    return (
        <>
        <Navbar />
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-12'>
                    <h4 className='text-center py-3'>All Districts</h4>
                    <p className='text-secondary text-center lead'>
                        All Divions are devired from API
                    </p>
                    <h4>Total : {district.length} districts available now</h4>
                </div>
                <div className='col-md-12'>
                    <div className='row'>
                        <div className="col-md-12">
                        <p className="text-secondary">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi magni at iure officia totam! Ipsa ad unde perspiciatis sunt sapiente nobis fugiat qui maxime a illum id laudantium, veritatis hic, accusamus necessitatibus porro quia recusandae rerum iusto delectus iste aspernatur quasi! Soluta quaerat ad pariatur quae mollitia amet numquam, ab natus in corrupti, earum quis dignissimos odio facere voluptate iure! Id perspiciatis nihil in adipisci recusandae eos sint at alias ullam asperiores laboriosam, doloribus excepturi minima facilis natus fugit! Repellat ratione minus ab sapiente necessitatibus reprehenderit enim ea voluptatibus rerum. Facere exercitationem suscipit, quam et repellat ex optio? Sunt, magnam?
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
