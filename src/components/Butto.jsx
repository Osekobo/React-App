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

