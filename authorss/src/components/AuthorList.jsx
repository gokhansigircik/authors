import { Link } from "react-router-dom";
import axios from "axios";
// import { useParams } from 'react-router-dom';

function AuthorList({ authors, setLoaded }) {
  const handleCheck = (e, id) => {
    axios
      .put(`http://localhost:5001/api/authors/${id}`, {
        isComplete: e.target.checked,
      })
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        setLoaded(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    authors &&
    authors.map((author) => {
      return (
        <div key={author._id} className="card mb-3">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="form-check">
                <input
                  type="checkbox"
                  name="isComplete"
                  id="isComplete"
                  className="form-check-input"
                  checked={author.isComplete}
                  onChange={(e) => handleCheck(e, author._id)}
                />
                <label htmlFor="isComplete" className="form-check-label">
                  <Link to={`/authors/${author._id}`}>{author.name}</Link>
                </label>
              </div>
              <div className="d-flex justify-content-end">
              <div>
                <Link
                  to={`/authors/${author._id}/edit`}
                  className="btn btn-warning me-2"
                >
                  Edit
                </Link>
              </div>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(author._id)}
              >
                Delete
              </button>
            </div>
            </div>
          </div>
        </div>
      );
    })
  );
}

export default AuthorList;
