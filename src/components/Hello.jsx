import logo from '../logo.svg';

// function Hello() {
//   return (
//     <>
//       <h1>Hello world!</h1>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio est sequi esse veritatis laborum dignissimos, assumenda similique architecto, illum fugit expedita enim amet. Autem totam doloribus blanditiis sit incidunt illo.</p>
//     </>
//   );
// }

function Head(props) {
  const firstname = "Joe"
  return (
    <>
    <h1>Hello {firstname}</h1>
    <h1>i am {props.age}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header></>
  )
}

export default Head


// tsx and jsx
// Library => Tool that provides specific functionality
// Framework => Set of tools and guidelines for building apps