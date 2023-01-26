import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function EditAuthor() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [author, setAuthor] = useState({
    name: "",
    // price: "",
    // description: "",
    isComplete: false,
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get(`http://localhost:5001/api/authors/${id}`, {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res.data);
        setAuthor(res.data);
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [id]);

  const handleChange = (e) => {
    setAuthor({
      ...author,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheck = (e) => {
    setAuthor({
      ...author,
      isComplete: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:5001/api/authors/${id}`, author)

      //instead of writing manager next to id u can write the long version like this too
      // subtitle: manager.subtitle,
      // price: manager.price,
      // description: manager.description,
      // isComplete: manager.isComplete,

      .then((res) => {
        console.log(res.data);
        navigate('/authors')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Edit Author</h1>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                value={author.name}
                onChange={handleChange}
              />
            </div>

            {/* <div className="mb-3">
              <label htmlFor="price" className="form-label">
                Price:
              </label>
              <input
                type="number"
                name="price"
                id="price"
                className="form-control"
                value={manager.price}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description:
              </label>
              <input
                type="text"
                name="description"
                id="description"
                className="form-control"
                value={manager.description}
                onChange={handleChange}
              />
            </div> */}
            <div className="form-check mb-3">
              <input
                type="checkbox"
                name="isComplete"
                id="isComplete"
                className="form-check-input"
                checked={author.isComplete}
                onChange={handleCheck}
              />
              <label htmlFor="isComplete" className="form-check-label">
                Completed?
              </label>
            </div>

            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-danger me-2">
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Submit Author
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAuthor;
