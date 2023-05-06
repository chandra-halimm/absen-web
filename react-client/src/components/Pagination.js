import { Pagination } from "react-bootstrap";
export default function MyPagination(total, current, onChangePage) {
  let itmes = [];
  if (current > 1) {
    itmes.push(
      <Pagination.Prev key="prev" onClick={() => onChangePage(page - 1)} />
    );
  }

  for (let page = 1; page <= total; page++) {
    itmes.push(
      <Pagination.Item key={page} data-page={page} active={page === current}>
        {page}
      </Pagination.Item>
    );
  }

  if (current < 1) {
    itmes.push(
      <Pagination.Prev key="next" onClick={() => onChangePage(page + 1)} />
    );
  }

  return <Pagination>{items}</Pagination>;
}
