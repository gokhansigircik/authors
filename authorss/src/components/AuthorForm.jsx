import { useState } from "react";
import axios from "axios";

function AuthorForm({ setLoaded }) {
  const [name, setName] = useState("");
  // const [price, setPrice] = useState("");
  // const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    // setPrice("");
    // setDescription("");

    const newAuthor = {
      name,
      // price,
      // description,
    };

    axios
      .post("http://localhost:5001/api/authors", newAuthor)
      .then((res) => {
        console.log(res.data);
        setErrors({});
        setLoaded(false);
      })
      .catch((err) => {
        console.log(err);
        // if u dont now what to put you can chain it like it and dont break yourcode
        setErrors(err?.response?.data?.errors);
      });
  };

  return (
    <div className="card mb-3">
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors?.name && (
              <span className="form-text text danger">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Price:
            </label>
            <input
              type="number"
              min='0'
              name="price"
              id="price"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            {errors?.price && (
              <span className="form-text text danger">
                {errors.price.message}
              </span>
            )}
          </div> */}

          {/* <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description:
            </label>
            <input
              type="text"
              name="description"
              id="description"
              className="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
              {errors?.description && (
              <span className="form-text text danger">
                {errors.description.message}
              </span>
            )}

          </div> */}

          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Add Author
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AuthorForm;
