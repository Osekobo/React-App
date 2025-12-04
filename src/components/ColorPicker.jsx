import { useState } from "react";
function Color() {
  const [found, setFound] = useState('Red');
  return (
    <>
      <div className="container my-4">
        <h1>Your favourite color is:<span style={{ color: found }}>{found}</span></h1>
        <select className="form-select" value={found} onChange={(e) => setFound(e.target.value)}>
          <option selected>Pick Color:</option>
          <option value="Red">Red</option>
          <option value="Blue">Blue</option>
          <option value="Green">Green</option>
          <option value="Yellow">Yellow</option>
        </select>
      </div >
    </>
  )
};
export default Color;