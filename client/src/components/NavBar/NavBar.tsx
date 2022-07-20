import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Button, Nav, Container, Navbar } from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { useActions } from "../../hooks/useActions";

const NavBar = () => {
  const { isAuth } = useTypedSelector((state) => state.user);

  const navigate = useNavigate();

  const { setUser, setIsAuth } = useActions();

  const logOut = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="title_shop" to={SHOP_ROUTE}>
          TopShop
        </NavLink>
        {isAuth ? (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ms-2"
            >
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ml-auto">
            <Button
              variant={"outline-light"}
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
