import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./page/Home";
import About from "./page/About";
import Experience from "./page/Experience";

function App() {
  const route = [
    { path: "/", element: <Home /> },
    { path: "/about-me", element: <About /> },
    { path: "/experience-me", element: <Experience /> },
  ];
  return (
    <>
      <Router>
        <Routes>
          {route?.map((routes) => {
            return <Route path={routes.path} element={routes.element} />;
          })}
        </Routes>
      </Router>
    </>
  );
}

export default App;
