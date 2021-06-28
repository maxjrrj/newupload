import { ContainerPages, Paginacao, PaginaItem } from "./Pagination_styled";
import Context from "../../../GlobalState/Context";
import { useContext, useEffect } from "react";

const Pagination = () => {
  const { states, setters, requests } = useContext(Context);

  let pageCount = states.pagination/12 + 1;
  console.log("states.pagination", states.pagination)
  console.log("pageCount", pageCount)
  const currentPage = states.page;

  const displayAllPagesLessThan5 = () => {
    for (let i = 1; i <= pageCount; i++) {
      return <div>{i}</div>;
    }
  };

  const displayAllPagesmoreThan5 = () => {
      return (
          <div></div>
      )
  };

  useEffect(() => {
    let pageCount = states.pagination/12 + 1;

  }, [states.pagination]);
  if (pageCount <= 5) {
          return(
    <ContainerPages>{displayAllPagesLessThan5()}</ContainerPages>);
  } else {
    return <ContainerPages>{displayAllPagesmoreThan5()}</ContainerPages>;
  }
};

export default Pagination;
