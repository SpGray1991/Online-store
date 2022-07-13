import { useTypedSelector } from "../../hooks/useTypedSelector";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../utils/consts";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  const { user, isAuth } = useTypedSelector((state) => state.user);

  const navigate = useNavigate();

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
              onClick={() => navigate(LOGIN_ROUTE)}
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
