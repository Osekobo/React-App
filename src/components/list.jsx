function Lists() {
  const fruits = ['Apples', 'Grapes', 'Banana', 'passion']
  return (
    <>
      <ul>
        {fruits.map((fruit) => <li>{fruit}</li>)}
      </ul>
    </>
  )
};

export default Lists;