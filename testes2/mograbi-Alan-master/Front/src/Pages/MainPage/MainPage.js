import { useContext } from "react";
import Context from "../../GlobalState/Context";
import Header from "../../Components/Header/Header";
import BodyMain from "../../Components/BodyMain/BodyMain";
import BodyQuemSomos from "../../Components/BodyQuemSomos/BodyQuemSomos.js";
import AllProductsGrid from "../../Components/AllProductsGrid/AllProductsGrid.js"
import Footer from "../../Components/Footer/Footer.js"
import CarrosselTarjaELead from "../../Components/CarrosselTarjaELead/CarrosselTarjaELead.js"

import { Screen } from "./Screen/screen_styled";

const MainPage = () => {
  const { states, setters, requests } = useContext(Context);

  return (
    <>
      {/* <Screen style={{ backgroundColor: "orange" }}> */}
        <Header />
        <BodyMain />
      {/* </Screen> */}

      {/* <Screen style={{backgroundColor: "#4444"}}> */}
        <BodyQuemSomos/>
      {/* </Screen> */}

      {/* <Screen style={{backgroundColor: "#1231"}}> */}
        <AllProductsGrid/>
      {/* </Screen> */}
        <CarrosselTarjaELead/>

      {/* <Screen style={{backgroundColor: "#3212"}}> */}
      <Footer/>
      {/* </Screen> */}

    </>
  );
};

export default MainPage;
