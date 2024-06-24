import React from "react";
import styled from "styled-components/native";
import { TArk, TCharactor } from "../types";
import Swiper from "react-native-swiper";
import CharactorSlide from "../components/CharactorSlide";
import NavBtn from "../components/NavBtn";
import { useCharactorStore } from "../store/CharactorStore";
import { useArkStore } from "../store/ArkStore";

const Container = styled.View`
  flex: 1;
  background-color: #2e2e2e;
`;

const SwiperContainer = styled.View`
  height: 290px;
`;

const ArkContainer = styled.View`
  flex: 1;
`;
const SelectArkContainer = styled.View``;
const SelectedArkList = styled.FlatList``;
const ArkList = styled.FlatList``;
const Ark = styled.TouchableOpacity<{ w: number; h: number }>`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  margin: 5px;
  border-radius: 7px;
  background-color: white;
`;

const DummyArk = styled.View<{ w: number; h: number }>`
  width: ${(props) => props.w}px;
  height: ${(props) => props.h}px;
  margin: 5px;
  border-radius: 7px;
  background-color: #909090;
`;

const Cost = styled.View``;
const CostText = styled.Text`
  color: white;
`;

const BtnContainer = styled.View`
  background-color: yellow;
  border-radius: 10px;
  padding: 10px;
  align-items: center;
  justify-content: right;
`;
const CharactorSelect = () => {
  const charList = useCharactorStore((state) => state.charactors);
  const arkList = useArkStore((state) => state.arks);
  const selectedArkList = useArkStore((state) => state.selectedArks);
  const cost = useArkStore((state) => state.costs);
  const selectArk = useArkStore((state) => state.addArk);
  const removeArk = useArkStore((state) => state.removeArk);

  return (
    <Container>
      <SwiperContainer>
        <Swiper
          showsPagination
          dotColor="black"
          activeDotColor="white"
          dotStyle={{ marginBottom: -10 }}
          activeDotStyle={{ marginBottom: -10 }}
          showsButtons
          buttonWrapperStyle={{ marginTop: 120 }}
        >
          {charList?.map((data, i) => (
            <CharactorSlide data={data} key={i} />
          ))}
        </Swiper>
      </SwiperContainer>

      <ArkContainer>
        <SelectArkContainer>
          <Cost style={{}}>
            <CostText>Cost {cost} / 10</CostText>
          </Cost>
          <SelectedArkList
            data={selectedArkList}
            horizontal
            ListEmptyComponent={<DummyArk w={45} h={45} />}
            keyExtractor={(item) => `${(item as TArk).id}`}
            renderItem={({ item, index }) => (
              <Ark
                onPress={() => {
                  removeArk(item as TArk);
                }}
                w={45}
                h={45}
              />
            )}
          />
        </SelectArkContainer>

        <ArkList
          data={arkList}
          numColumns={8}
          keyExtractor={(item) => `${(item as TArk).id}`}
          renderItem={({ item }) => (
            <Ark
              w={40}
              h={40}
              onPress={() => {
                selectArk(item as TArk);
              }}
            />
          )}
        />
      </ArkContainer>
      <BtnContainer>
        <NavBtn text="Start" to={"Map"} />
      </BtnContainer>
    </Container>
  );
};

export default CharactorSelect;
