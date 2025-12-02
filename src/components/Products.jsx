import { useState, useEffect } from "react"

function Products() {
  const [products, setPosts] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")
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
      <h2>Products</h2>
      {products.map((prod) => (
        <div key={prod.id}>
          <h3>{prod.name}</h3>
          <h3>{prod.buying_price}</h3>
          <h3>{prod.selling_price}</h3>
          <hr />
        </div>
      ))}
    </div>
  )

}

export default Products;