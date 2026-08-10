import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(phone);
    console.log(email);
    setName("");
    setPhone("");
    setEmail("");
    setPassword("");
  }
  return (
    <div>
      <h1>Register Page</h1>
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
        <label>Phone: </label>
        <input
          type="text"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        <label>Password: </label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Register</button>
      </form>
    </div>
  );
}
