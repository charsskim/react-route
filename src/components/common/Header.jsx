import { Link, NavLink } from 'react-router-dom';
export default function Header() {
	return (
		<div className='Header'>
			<h1>
				<Link to='/'>DCODELAB</Link>
			</h1>
			<ul>
				<li>
					<NavLink to='/department' activeClassName={'on'}>
						Department
					</NavLink>
				</li>
				<li>
					<NavLink to='/youtube' activeClassName={'on'}>
						Youtube
					</NavLink>
				</li>
				<li>
					<NavLink to='/gallery' activeClassName={'on'}>
						Gallery
					</NavLink>
				</li>
				<li>
					<NavLink to='/location' activeClassName={'on'}>
						Location
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
