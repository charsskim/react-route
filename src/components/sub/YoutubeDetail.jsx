import { useParams } from 'react-router-dom';
import Layout from '../common/Layout';

export default function YoutubeDetail() {
	const params = useParams();
	console.log(params);
	return (
		<Layout title={'Detail'}>
			<p>유투브 상세페이지</p>
			<p>{params.id}</p>
		</Layout>
	);
}
