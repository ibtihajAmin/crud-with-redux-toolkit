import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../reducer/StudentReducer";

export default function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [favSubject, setFavSubject] = useState("");

  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addStudent({
        id: students[students.length - 1].id + 1,
        name: name,
        email: email,
        roll: roll,
        fav_subject: favSubject,
      })
    );
    navigate("/");
  };
  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-dark text-white p-5">
        <h3>Add New Student</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="roll">Roll</label>
            <input
              type="text"
              name="roll"
              className="form-control"
              placeholder="Enter Roll Number"
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="favSubject">Favorite Subject</label>
            <input
              type="text"
              name="favSubject"
              className="form-control"
              placeholder="Enter Your Favorite Subject"
              onChange={(e) => setFavSubject(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
