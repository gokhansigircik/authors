import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./pages/Main";
import { Navigate, Routes, Route } from "react-router-dom";
import AuthorDetail from "./pages/AuthorDetail";
import EditAuthor from "./pages/EditAuthor";
import Navbar from "./components/Navbar";
import NewAuthor from "./pages/NewAuthor";

function App() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/authors" />} />
          {/* <Route path="/" element={<Navigate to="/authors" />} /> */}
          <Route path="/authors" element={<Main />} />
          <Route path="/authors/:id" element={<AuthorDetail />} />
          <Route path="/authors/:id/edit" element={<EditAuthor />} />
          <Route path="/authors/new" element={<NewAuthor />} />

        </Routes>
      </div>
    </>
  );
}

export default App;
