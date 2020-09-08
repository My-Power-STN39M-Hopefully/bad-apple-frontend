import React from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import SideBar from './Sidebar/SideBar';
import './HeaderNav.css';

let handleSignIn = () => {
	alert('Sign-In page coming soon');
};

function HeaderNav() {
	return (
		<div className='header'>
			<main className='header-nav'>
				<h1 className='title'>GoodEgg</h1>
				<div className='nav-buttons'>
					<Link to='/sign-in'>
						<button type='submit' className='sign-in' onClick={handleSignIn}>
							Sign-In
						</button>
					</Link>
				</div>
			</main>
			<SideBar className='side-bar' />
		</div>
	);
}

export default HeaderNav;
