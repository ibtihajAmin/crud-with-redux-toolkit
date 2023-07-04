import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateStudent } from "../reducer/StudentReducer";

export default function Update() {
  const { id } = useParams();
  const students = useSelector((state) => state.students);
  const existingStudent = students.filter((s) => s.id == id);
  const { name, email, roll, fav_subject } = existingStudent[0];
  const [updateName, setUpdateName] = useState(name);
  const [updateEmail, setUpdateEmail] = useState(email);
  const [updateRoll, setUpdateRoll] = useState(roll);
  const [updateFavSubject, setUpdateFavSubject] = useState(fav_subject);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateStudent({
        id: id,
        name: updateName,
        email: updateEmail,
        roll: updateRoll,
        fav_subject: updateFavSubject,
      })
    );
    navigate("/");
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="w-50 border bg-dark text-white p-5">
        <h3>Update Student Information</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Enter Name"
              value={updateName}
              onChange={(e) => setUpdateName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Enter Email"
              value={updateEmail}
              onChange={(e) => setUpdateEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="roll">Roll</label>
            <input
              type="text"
              name="roll"
              className="form-control"
              placeholder="Enter Roll Number"
              value={updateRoll}
              onChange={(e) => setUpdateRoll(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="favSubject">Favorite Subject</label>
            <input
              type="text"
              name="favSubject"
              className="form-control"
              placeholder="Enter Your Favorite Subject"
              value={updateFavSubject}
              onChange={(e) => setUpdateFavSubject(e.target.value)}
            />
          </div>
          <br />
          <button className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
}
