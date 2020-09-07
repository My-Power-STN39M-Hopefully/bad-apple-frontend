import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import { Container } from 'react-bootstrap';

class OfficerDetail extends Component {
	render() {
		// will be doing a fetch below to retrieve individual officer, waiting for database to go live
		let result = {};
		for (let i = 0; i < this.props.officers.length; i++) {
			if (this.props.match.params.id === this.props.officers[i].id.toString()) {
				result = this.props.officers[i];
			}
		}

		return (
			<div>
				<main>
					<h3>
						Name: {result.first_name} {result.last_name}{' '}
					</h3>
					<p>DOB: {result.dob}</p>
					<p>Badge Number: {result.badge_number}</p>
					<p>Nationality: {result.nationality}</p>
					<p>Race: {result.race}</p>
					<p>Gender: {result.gender}</p>
					<p>Unit: {result.force}</p>
					<p>Active? {result.active}</p>
				</main>
				<container>
					<h3> Incidents: </h3>
					<ul></ul>
				</container>
			</div>
		);
	}
}

export default OfficerDetail;
