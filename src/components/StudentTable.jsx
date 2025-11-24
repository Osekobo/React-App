function Button(props) {
  
  let num = -1;
  const great = () => {
    num++;               
    console.log(num);
  };
  return (
    <>
      <button onClick={great}>{props.title}</button>
    </>
  );
}

export default Button;


// const student_details=[{"id":1, "firstname":"John", "lastname":"Doe", "age":30}, {"id":2, "firstname":"Ivy", "lastname":"Lily", "age":60}, {"id":3, "firstname":"Peter", "lastname":"Washington", "age":90}]