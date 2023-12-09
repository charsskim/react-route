import Footer from './components/common/Footer';
import Header from './components/common/Header';
import Main from './components/main/Main';
import './scss/style.scss';
export default function App() {
	return (
		<div className='wrap'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}
