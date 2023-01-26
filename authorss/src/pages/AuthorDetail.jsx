import React from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function AuthorDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/authors/${id}`, {
        signal: controller.signal,
      })
      .then((res) => setAuthor(res.data))
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/authors/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/authors");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Details</h1>
      {author && (
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">{author.name}</h4>
            {/* <h5 className="card-title">Price:$ {manager.price}</h5> */}
            {/* <h5 className="card-title">Description: {manager.description}</h5> */}
            <p>{ author.isComplete ? 'Completed.' : 'Not Completed.'}</p>
          </div>
          <div className="card-footer d-flex justify-content-end">
            <Link
              to={`/authors/${author._id}/edit`}
              className="btn btn-warning me-2"
            >
              Edit
            </Link>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(author._id)}
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AuthorDetail;
