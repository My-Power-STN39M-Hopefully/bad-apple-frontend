import React, { useState, useEffect } from 'react';
import data from '../../data.json';
import { Link } from 'react-router-dom';
import './Profile.css';

function Profile(props) {
	useEffect(() => {
		props.incidentsHandler(data);
	});
	//need logic for finding incidents for particular user

	const handleEditClick = (event) => {
		props.editIncidentHandler(event.target.id);
	};

	return (
		<div className='profile'>
			<header className='user-info'>
				<div>
					<h3>Name</h3>
					<ul>
						<li>Nationality</li>
						<li>Gender</li>
						<li>City, State</li>
					</ul>
					<Link to='/profile/edit'>
						<button>Edit Profile</button>
					</Link>
				</div>
			</header>
			<main className='incidentList'>
				{/* placeholder until we get signUp-form and signIn-form operating with api */}
				{props.incidents.map((incident) => {
					return (
						<div>
							<div className='incidentSmall'>
								{incident.bad_apple === true ? (
									<div className='badApple'>Bad Apple</div>
								) : (
									<div className='goodEgg'>Good Egg</div>
								)}
								<h3>
									{incident.category} : {incident.date}
								</h3>
								<p>{incident.description}</p>
								<p>Officer/s Involved: {incident.officers}</p>
								<Link to={'incidents/' + incident.id + '/edit'}>
									<button
										className='edit-button'
										id={incident.id}
										onClick={handleEditClick}>
										Edit
									</button>
								</Link>
							</div>
						</div>
					);
				})}
			</main>
		</div>
	);
}

export default Profile;
