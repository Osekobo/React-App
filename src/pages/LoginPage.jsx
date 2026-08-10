import { useState } from "react";

export default function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(email);
    setName("");
    setEmail("");
  }
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>Name: </label>
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Email: </label>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </div>
  );
}
