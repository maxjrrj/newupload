import {
  BoxTags,
  BoxTitleQty,
  Title,
  Qty,
  BoxSubCategories,
  InputCheckbox,
  LabelSub,
  MiniBoxCategories,
} from "./BoxFiltroTags_styled.js";
import setaBaixo from "../../../Images/setaBaixo.svg";
import { entrada } from "../../../Constants/ProdutosTeste";

const BoxFiltroTags = () => {
  return (
    <>
      <BoxTags>
        <BoxTitleQty>
          <Title>Estampada</Title>
          <Qty>
            Ver Tudo: Qtde
            <img src={setaBaixo} />
          </Qty>
        </BoxTitleQty>
        <BoxSubCategories>
          <MiniBoxCategories>
            <InputCheckbox type="checkbox" />
            <LabelSub>Floral</LabelSub>
            <LabelSub > 2</LabelSub>
          </MiniBoxCategories>
          <MiniBoxCategories>
            <InputCheckbox type="checkbox" />
            <LabelSub>Lisa</LabelSub>
            <LabelSub > 2</LabelSub>
          </MiniBoxCategories>
        </BoxSubCategories>
      </BoxTags>

      <BoxTags>
        <BoxTitleQty>
          <Title>Cor</Title>
          <Qty>
            Ver Tudo: Qtde
            <img src={setaBaixo} />
          </Qty>
        </BoxTitleQty>
        <BoxSubCategories>
          <MiniBoxCategories>
            <InputCheckbox type="checkbox" />
            <LabelSub>Azul</LabelSub>
            <LabelSub > 1</LabelSub>
          </MiniBoxCategories>
          <MiniBoxCategories>
            <InputCheckbox type="checkbox" />
            <LabelSub>Amarelo</LabelSub>
            <LabelSub > 5</LabelSub>
          </MiniBoxCategories>
        </BoxSubCategories>
      </BoxTags>
    </>
  );
};

export default BoxFiltroTags;
