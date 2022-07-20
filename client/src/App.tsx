import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar/NavBar";
import { useActions } from "./hooks/useActions";
import { check } from "./http/userApi";

const App = () => {
  const [loading, setLoading] = useState(true);

  const { setIsAuth } = useActions();

  useEffect(() => {
    check()
      .then((data) => {
        setIsAuth(true);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Spinner animation={"grow"} />;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
