import { useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import Context from "../../../GlobalState/Context";
import iconeSeta from "../../../Images/iconeSeta.svg";
import { goToPage } from "../../../Router/Walker";
import { BASE_URL } from "../../../Constants/url";

import {
  BreadcrumbBar,
  BreadcrumbItem,
  ContainerBreadcrumb,
  ImgIcon,
} from "./Breadcrumbs_styled";

const Breadcrumbs = () => {
  const history = useHistory();
  

  const allPaths = history.location.pathname.split("/");
  let pathGlobal = BASE_URL;
 
 
  const { states, setters, requests } = useContext(Context);
  return (
    <ContainerBreadcrumb>
      <BreadcrumbBar>
        {allPaths.map((path) => {
          if (path === "")
            return (
              <BreadcrumbItem onClick={() => goToPage(history, "/")}>
                Home
              </BreadcrumbItem>
            );
          else {
            return (
              <>
                <ImgIcon src={iconeSeta} />
                <BreadcrumbItem onClick={goToPage(history, `/${path}`)} active>
                  {path}
                </BreadcrumbItem>
              </>
            );
          }
        })}
      </BreadcrumbBar>
    </ContainerBreadcrumb>
  );
};

export default Breadcrumbs;
