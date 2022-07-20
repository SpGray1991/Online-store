import { Routes, Route, Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { authRoutes, publicRoutes } from "../routes";

const AppRouter = () => {
  const { isAuth } = useTypedSelector((state) => state.user);

  return (
    <Routes>
      {isAuth &&
        authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      {publicRoutes.map(({ path, element }) => (
        <Route key={path} path={path} element={element} />
      ))}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRouter;
