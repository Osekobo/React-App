import { useState } from "react";


function MyForm() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [isAdult, setisAdult] = useState("false")

  function handleSubmit(e) {
    e.preventDefault();

    // VALIDATION — runs ONLY on submit

    if (name.trim().length < 3 || name.trim().length > 50) {
      alert("Name must be between 3 and 50 characters.");
      return;
    }

    const phoneRegex = /^\+254\d{9}$/; // Correct regex
    if (!phoneRegex.test(phone)) {
      alert("Phone must be in the format +254XXXXXXXXX (9 digits after +254).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!name || !phone || !email) {
      alert("All input fields except the checkbox must be filled.");
      return;
    }

    alert("Form submitted successfully!");
    console.log("Form data:", { name, phone, email, isAdult });
  }

  return (
    <>
      <div className="container mt-3">
        <form onSubmit={handleSubmit}>
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
            <div>
              <label>Are you an adult?</label>
              <input type="checkbox" checked={isAdult} onChange={(e) => setisAdult(e.target.checked)} />
            </div>
            <h1>Adult status: {isAdult ? "I ama na adult" : "I am not an adult"}</h1>
            <input type="submit" />
          </div>
        </form>
      </div>
    </>
  )
}
export default MyForm;




// Ensure that the name has min of 3 and a max of 50 characters, ensure phone input field contains the right phone number structure, ensure all the input fields expect the check box are not empty 