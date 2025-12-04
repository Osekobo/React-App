function Profile(props) {
  return (
    <>
      <div className="container p-3">
        <h1 className="m-3">User Profile</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Profile Card</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card Info:</h6>
            <h3>Name: {props.name}</h3>
            <h3>Age: {props.age}</h3>
            <h3>Profession: {props.profession}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;