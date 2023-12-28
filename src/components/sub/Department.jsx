import Layout from '../common/Layout';
import { useState, useEffect } from 'react';

export default function Department() {
	const [Data, setData] = useState([]);

	useEffect(() => {
		fetch('DB/department.json')
			.then((data) => data.json())
			.then((json) => {
				console.log(json.members);
				setData(json.members);
			});
	}, []);

	return (
		<Layout title={'Department'}>
			{Data.map((el, idx) => {
				return (
					<article key={idx}>
						<div className='pic'>
							<img src={`img/${el.pic}`} alt=''></img>
						</div>
						<h3>{el.name}</h3>
						<p>{el.position}</p>
					</article>
				);
			})}
		</Layout>
	);
}

/*
useState :화면의 출력을 담당하는 중요한 데이터를 담는 그릇
useState:화면이 출력될떄의 특정 시점마다 특정 구문을 호출할 수 있게 해주는 함수


멤버소개 화면 만드는 작업순서
1.컴포넌트안쪽에 데이터를 담을 빈 State를 생성(useState)
2.컴포넌트가 처음 랜더링되는 시점에 외부데이터를 가져옴 (useEffect,fetch)
3외부데이터가 성공적으로 호출되면 그때 미리 만들어둔 빈 State에 데이터 담기
4.State에 데이터가 담긴 순간 그 데이터를 활용해서 반복돌면 원하는 JSX요소 출력
*/
