function Profile(props) {
  return (
    <>
      <h1 className="m-3">User Profile</h1>
      <div className="container p-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Profile Card</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Card Info:</h6>
            <h3>Name: {props.name}</h3>
            <h4>Age: {props.age}</h4>
            <h4>Profession: {props.profession}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;