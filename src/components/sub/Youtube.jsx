import Layout from '../common/Layout';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Youtube() {
	const [Vids, setVids] = useState([]);

	useEffect(() => {
		const api_key = 'AIzaSyBHrNcXVUS67-4VQTGMXW4dD4dWMc5hfvM';
		const pid = 'PLwfBV_eoaVxQ209RvdSkkogRLWZwHOg45';
		const num = 3;
		const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pid}&maxResults=${num}&key=${api_key}`;

		fetch(url)
			.then((data) => data.json())
			.then((json) => {
				console.log(json.items);
				setVids(json.items);
			});
	}, []);

	return (
		<Layout title={'Youtube'}>
			<div className='con'>
				<section className='youtubeFrame'>
					{Vids.map((el, idx) => {
						return (
							<article key={idx}>
								<div className='pic'>
									<img src={el.snippet.thumbnails.default.url} alt={el.snippet.title} />
								</div>
								<h2>
									<Link to={`/youtube-detail/${el.id}`}> {el.snippet.title}</Link>
								</h2>
							</article>
						);
					})}
				</section>
			</div>
		</Layout>
	);
}
