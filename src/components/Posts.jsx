import { useState, useEffect } from "react"

function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPosts(data)
        setLoading(false);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);
  if (loading) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="container mt-5">
      <h2>Posts</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr>
              <th scope="row">{post.id}</th>
              <th>{post.title}</th>
              <th>{post.body}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Posts;