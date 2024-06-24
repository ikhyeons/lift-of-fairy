import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { TCharactor } from "../types";

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SCREEN_HEIGHT = Dimensions.get("screen").height;

const CharactorContainer = styled.View`
  flex: 1;
  position: relative;
`;

const CharactorCard = styled.View`
  width: 150px;
  height: 200px;
  background-color: blue;
  border-radius: 12px;
  margin: 10px;
`;

const CharactorModel = styled.Image`
  position: absolute;
  margin: 0 auto;
  bottom: 40px;
  left: ${SCREEN_WIDTH / 2 - 155}px;
  width: 200px;
  height: 200px;
  z-index: 2;
`;

const CharactorName = styled.Text`
  position: absolute;
  top: 15px;
  left: ${SCREEN_WIDTH / 2 - 40}px;
  font-size: 24px;
`;

const CharactorStatus = styled.View`
  position: absolute;
  width: 170px;
  height: 230px;
  top: 20px;
  right: 0;
  padding: 10px;
  background-color: red;
  border-radius: 10px;
`;

const Text = styled.Text`
  margin: 10px;
  text-align: center;
`;

const CharactorSlide = ({ data }: { data: TCharactor }) => {
  return (
    <CharactorContainer>
      <CharactorCard />
      <CharactorName>{data.name}</CharactorName>
      <CharactorModel source={data.model as any} />
      <CharactorStatus>
        <Text>공격 : {data.status.act}</Text>
        <Text>수비 : {data.status.def}</Text>
        <Text>속도 : {data.status.spd}</Text>
        <Text>운 : {data.status.lck}</Text>
        <Text>행동 : {data.status.act}</Text>
      </CharactorStatus>
    </CharactorContainer>
  );
};

export default CharactorSlide;
