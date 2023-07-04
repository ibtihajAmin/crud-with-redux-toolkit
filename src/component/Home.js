import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Home() {
  const students = useSelector((state) => state.students);
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
                  <button className="btn btn-sm btn-danger ms-3">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
