import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ListViewPage.css';
import axios from 'axios';

function ListViewPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="list-view-container">
      <h1>Posts List</h1>
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/detail/${post.id}`} className="view-more-btn">View More</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListViewPage;
