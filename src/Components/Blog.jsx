import React, { useEffect, useState } from 'react';

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    // Replace 'YOUR_DENO_BLOG_API_ENDPOINT' with the actual endpoint of your Deno blog API
    fetch('YOUR_DENO_BLOG_API_ENDPOINT')
      .then((response) => response.json())
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error('Error fetching blog posts:', error));
  }, []);

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
