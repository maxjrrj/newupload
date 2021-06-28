import styled from "styled-components";

export const BoxTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border: 2px solid #cccccc;
  margin-bottom: 3vh;
  background-color: white;
`;

export const BoxTitleQty = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 15vw;

  padding: 1vh 1vw 2vh 1vw;
  border-bottom: 1px solid #eeeeee;
`;

export const Title = styled.div`
  font-size: 1vw;
  font-weight: bold;
`;

export const Qty = styled.div`
  font-size: 0.9vw;
  color: #888888;
  text-decoration: underline;
  cursor: pointer;
`;

export const BoxSubCategories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1vh 1vw;
`;

export const InputCheckbox = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1vw;
  height: 1vw;
`;

export const LabelSub = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1vw;
  padding-top: 1vh;

  font-size: 1vw;
`;

export const MiniBoxCategories = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 2vw;
  width: 100%;
  height: 100%;
`;
