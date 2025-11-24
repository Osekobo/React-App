function Button(props){
   const greet = ()=>{
      console.log("Hello World!")}
  return(
    <>
    <button className="btn btn-outline-warning m-3" onClick={greet("Good Evening")}>{props.title}</button>
    </>
  );
}

export default Button;