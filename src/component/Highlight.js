import React from 'react'
import Card from './Card'

function Highlight() {
    const arrayI = [1,2,3,4,5,6];
    return (
		<div className="section-highlight container-fluid bg-light-gray pl-5 pr-5 ">
			<div className="title-highlight text-center mb-5">
				<h1 className="mb-3">How Can I Help You?</h1>
				<p>
					Our work then targeted, best practices outcomes social
					innovation synergy. Venture philanthropy, revolutionary
					inclusive policymaker relief. User-centered program areas
					scale.
				</p>
			</div>

			<div className="row card-wrapper">
                {arrayI.map(element => {
                    return <Card/>
                })
                }

                
				{/* <div className="col-lg-4 col-md-6 col-sm-12 mt-3 mt-lg-0 ">
					<div className="card-section p-3 mt-md-2 mt-sm-2 mr-2 ml-2 border border-dark  rounded">
						<div className="card-title d-flex justify-content-between">
							<h3> Consult </h3>
							<h3>
								<FaBeer />
							</h3>
						</div>
						<p>
							Co-create, design thinking; strengthen
							infrastructure resist granular. Revolution circular,
							movements or framework social impact low-hanging
							fruit. Save the world compelling revolutionary
							progress.
						</p>
					</div>
				</div>
			 */}
            
            </div>
            
		</div>
	);
}

export default Highlight
