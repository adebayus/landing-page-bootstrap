import React from 'react'
import { FaBeer } from 'react-icons/fa';
function Card() {
    return (
		<div className="col-lg-4 col-md-6 col-sm-12 mt-3 mt-lg-0 ">
			<div className="card-section p-3 mt-md-2 mt-sm-2 mr-2 ml-2 border border-dark  rounded">
				<div className="card-title d-flex justify-content-between">
					<h3> Consult </h3>
					<h3>
						<FaBeer />
					</h3>
				</div>
				<p>
					Co-create, design thinking; strengthen infrastructure resist
					granular. Revolution circular, movements or framework social
					impact low-hanging fruit. Save the world compelling
					revolutionary progress.
				</p>
			</div>
		</div>
	);
}

export default Card
