import { useState } from "react";


function MyForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")

  return (
    <>
      <div className="container mt-3">
        <form>
          <div>
            <label>Name</label>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
          </div>
          <h1>{name}</h1>
          <div>
            <label>Phone</label>
            <input type="number" onChange={(e) => setPhone(e.target.value)} value={phone}></input>
          </div>
          <h1>{phone}</h1>
          <div>
            <label>Email</label>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email}></input>
          </div>
          <h1>{email}</h1>
          <div>
            
          </div>
        </form>
      </div>
    </>
  )
}
export default MyForm;