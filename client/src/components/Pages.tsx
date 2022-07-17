import { Pagination } from "react-bootstrap";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const Pages = () => {
  const { totalCount, limit, page } = useTypedSelector((state) => state.device);

  const { setPage } = useActions();

  const pageCount = Math.ceil(totalCount / limit);
  const pages = [];

  for (let i = 0; i < pageCount; i++) {
    pages.push(i + 1);
  }

  return (
    <Pagination className="mt-3">
      {pages.map((p) => (
        <Pagination.Item key={p} active={page === p} onClick={() => setPage(p)}>
          {p}
        </Pagination.Item>
      ))}
    </Pagination>
  );
};

export default Pages;
