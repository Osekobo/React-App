function Table(props) {
  const student_details = [{ "id": 1, "firstname": "John", "lastname": "Doe", "age": 30 }, { "id": 2, "firstname": "Ivy", "lastname": "Lily", "age": 60 }, { "id": 3, "firstname": "Peter", "lastname": "Washington", "age": 90 }];
  return (
    <>
      <div className="container mt-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">FirstName</th>
              <th scope="col">LastName</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {student_details.map((student) => (
              <tr>
                <th scope="row">{student.id}</th>
                <td>{student.firstname}</td>
                <td>{student.lastname}</td>
                <td>{student.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;

