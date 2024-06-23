import React from "react";
import styled from "styled-components/native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../types";

const Button = styled.Pressable`
  margin-bottom: 20px;
`;
const BtnText = styled.Text`
  font-size: 24px;
  font-weight: 600;
`;

const NavBtn = (props: { text: string; to: any }) => {
  const navigater =
    useNavigation<
      NativeStackNavigationProp<StackParamList.Root & StackParamList.InGame>
    >();
  return (
    <Button onPress={() => navigater.navigate(props.to, {})}>
      <BtnText>{props.text}</BtnText>
    </Button>
  );
};

export default NavBtn;
