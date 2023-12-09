import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/main/Main';
import Department from './components/sub/Department';
import Gallery from './components/sub/Gallery';
import Location from './components/sub/Location';
import Youtube from './components/sub/Youtube';
import './scss/style.scss';
export default function App() {
	return (
		<div className='wrap'>
			<Header />
			<Main />
			<Department />
			<Youtube />
			<Gallery />
			<Location />
			<Footer />
		</div>
	);
}
