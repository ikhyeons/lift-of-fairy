import React from "react";
import styled from "styled-components/native";
import { RSNC } from "../types";
import NavBtn from "../components/NavBtn";

const HomeContainer = styled.View`
  flex: 1;
`;
const BtnContainer = styled.View`
  position: absolute;
  right: 10px;
  bottom: 150px;
`;

const Home: RSNC = ({ navigation: { navigate } }) => {
  return (
    <HomeContainer>
      <BtnContainer>
        <NavBtn text="START" to={"InGame"} />
        <NavBtn text="ACHIVEMENT" to={"Achieve"} />
        <NavBtn text="ENCYCLOPEDIA" to={"Encyclopedia"} />
        <NavBtn text="SETTINGS" to={"Settings"} />
      </BtnContainer>
    </HomeContainer>
  );
};

export default Home;
