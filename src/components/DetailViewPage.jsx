import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/DetailViewPage.css';

function DetailViewPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div className="detail-view-container">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {/* Back to List View Button */}
      <Link to="/list" className="back-to-list-btn">Back to List View</Link>
    </div>
  );
}

export default DetailViewPage;
