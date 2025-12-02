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
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <hr />
        </div>
      ))}
    </div>
  )

}

export default Posts;

 




// import { useState, useEffect} from 'react';

// function Posts() {
//     const [posts, setPosts] = useState([]);
//     const [loading, setLoading] = useState(true);
    
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(response => response.json())
//         .then(data =>{console.log(data); 
//               setPosts(data)
//               setLoading(false);})
//         .catch(error => console.error('Error fetching posts:', error));
//     }, []);
//     if (loading) {
//         return <div>Loading posts...</div>;
//     }

//     return (
//         <>
//         <div>
//             <h1>Posts</h1>
            
//                 {posts.map((post)=>(
//                     <div key={post.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
//                         <h2>{post.title}</h2>
//                         <p>{post.body}</p>
                        
//                     </div>  
                    
                    
//                 ))}
            
//         </div>
//         </>
//     );
// }
// export default Posts;