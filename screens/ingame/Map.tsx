import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { createMap } from "../../utils/map";
import { Dimensions } from "react-native";
import Svg, { Line } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "../../types";

const SCREEN_HEIGHT = Dimensions.get("screen").height;
const SCREEN_WIDTH = Dimensions.get("screen").width;
const Conatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const MapContainer = styled.View`
  position: relative;
  width: ${(SCREEN_WIDTH * 4) / 5}px;
  height: ${(SCREEN_HEIGHT * 4) / 5}px;
`;

const Floor = styled.View`
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 1;
`;

const NodeContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Node = styled.TouchableOpacity`
  background-color: red;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  z-index: 2;
`;
const Map = () => {
  const navigator =
    useNavigation<
      NativeStackNavigationProp<StackParamList.Root & StackParamList.InGame>
    >();

  const [mapData, setMapData] = useState(createMap().reverse());
  const [position, setPosition] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  let allArr: { id: number; x: number; y: number }[][] = [];
  let iv = 0;
  mapData.map((data, i) => {
    let arr: { id: number; x: number; y: number }[] = [];
    for (let ii = 0; ii < mapData[i].length; ii++) {
      arr.push(position[iv++]);
    }
    allArr.push(arr);
  });

  return (
    <Conatiner>
      <Svg
        style={{
          position: "absolute",
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "yellow",
        }}
      >
        {mapData.map((data, i) => {
          return data.map((data2, i2) => {
            //노드
            return data2.prev.map((data3, i3) => {
              //선택한 노드 인덱스
              return (
                <Line
                  key={i3}
                  x1={allArr[i][i2]?.x}
                  x2={allArr[i + 1][data3]?.x}
                  y1={allArr[i][i2]?.y}
                  y2={allArr[i + 1][data3]?.y}
                  stroke={"green"}
                  strokeWidth={2}
                  originX={SCREEN_WIDTH / 2}
                  originY={SCREEN_HEIGHT / 2}
                  scale={1.12}
                  translateY={6}
                  translateX={7.5}
                />
              );
            });
          });
        })}
      </Svg>

      <MapContainer>
        {mapData.map((data, i) => {
          //층 배열
          return (
            <Floor key={i}>
              {data.map((data2, i2) => {
                return (
                  //노드 배열
                  <NodeContainer key={i2}>
                    <Node
                      onPress={() => navigator.navigate("Battle")}
                      onLayout={(e) => {
                        e.currentTarget.measure((x, y, _1, _2, px, py) => {
                          setPosition((prev) => [
                            ...prev,
                            { id: data2.id, x: px, y: py },
                          ]);
                        });
                      }}
                    />
                  </NodeContainer>
                );
              })}
            </Floor>
          );
        })}
      </MapContainer>
    </Conatiner>
  );
};

export default Map;
