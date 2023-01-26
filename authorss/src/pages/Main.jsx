import axios from "axios";
import { useEffect, useState } from "react";
import AuthorList from "../components/AuthorList";

function Main() {
  // const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get("http://localhost:5001/api/authors", {signal: controller.signal})
      .then((res) => {
        setAuthors(res.data);
        setLoaded(true)
      })
      .catch((err) => console.log(err));
    return () => controller.abort();
  }, [loaded]);

  const reversedAuthors = [...authors].reverse();

  return (
    <div>
      <h1>Authers List</h1>
      {loaded && <AuthorList authors={reversedAuthors} setLoaded={setLoaded}/>}
    </div>
  );
}

export default Main;
