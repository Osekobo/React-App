function Lists() {
  const fruits = ['Apples', 'Grapes', 'Banana', 'passion']
  return (
    <>
      <div className="container mt-5">
        <ul>
          {fruits.map((fruit) => <li>{fruit}</li>)}
        </ul>
      </div>
    </>
  )
};

export default Lists;