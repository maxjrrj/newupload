import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Line from "../../../Images/Line.svg";

import { ImgLine, TitleCategory, BoxCategoryName } from "./CategoryName_styled";

const CategoryName = () => {
  const category = useParams();
  console.log("category", category);
  let titleCategory = "";
  if (category.categoryName) {
    titleCategory = category.categoryName 
  } else {
    titleCategory = "Ver Todos";
  }
  //category.categoryName}/{category.subCategoryName
  return (
    <BoxCategoryName>
      <ImgLine src={Line} />
      <TitleCategory>{titleCategory}</TitleCategory>
      <ImgLine src={Line} />
    </BoxCategoryName>
  );
};

export default CategoryName;
