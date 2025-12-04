function Butto(props) {
  let num = -1;
  const great = () => {
    num++;
    console.log(num);
  };
  return (
    <>
      <div className="container m-5">
        <button onClick={great}>{props.title}</button>
      </div>
    </>
  );
}

export default Butto;

