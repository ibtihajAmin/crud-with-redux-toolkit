import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../reducer/StudentReducer";

export default function Home() {
  const students = useSelector((state) => state.students);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(
      deleteStudent({
        id: id,
      })
    );
  };
  return (
    <div>
      <div className="container">
        <h1>CRUD with React Redux-Toolkit</h1>
        <Link to="/create" className="btn btn-success my-3">
          Create +
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Roll</th>
              <th>Favorite Subject</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.roll}</td>
                <td>{student.fav_subject}</td>
                <td>
                  <Link
                    to={`/update/${student.id}`}
                    className="btn btn-sm btn-warning"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(student.id)}
                    className="btn btn-sm btn-danger ms-3"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
