import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
	const [blogs, setBlogs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:4000/')
		.then(res => res.json())
		.then(data => setBlogs(data));
	});

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>All blogs</h1>
				{blogs && blogs.map(blog => <div key={blog.id}>{blog.title}</div>)}
			</header>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
