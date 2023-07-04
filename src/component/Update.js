export default function Update() {
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-dark text-white p-5">
        <h3>Update Student Information</h3>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
            />
          </div>
          <div>
            <label htmlFor="roll">Roll</label>
            <input
              type="text"
              name="roll"
              className="form-control"
              placeholder="Enter Roll Number"
            />
          </div>
          <div>
            <label htmlFor="favSubject">Favorite Subject</label>
            <input
              type="text"
              name="favSubject"
              className="form-control"
              placeholder="Enter Your Favorite Subject"
            />
          </div>
          <br />
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
