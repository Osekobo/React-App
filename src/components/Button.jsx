function Button(props) {
  const greet = () => {
    console.log("Hello World!")
  }
  return (
    <>
      <div className="container">
        <button className="btn btn-outline-warning m-3" onClick={greet("Good Evening")}>{props.title}</button>
      </div>
    </>
  );
}

export default Button;