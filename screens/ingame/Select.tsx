import React from "react";
import styled from "styled-components/native";
import CharactorSelect from "../../widget/CharactorSelect";

const SelectContainer = styled.View`
  flex: 1;
  align-items: center;
`;

const Select = () => {
  return (
    <SelectContainer>
      <CharactorSelect />
    </SelectContainer>
  );
};

export default Select;
