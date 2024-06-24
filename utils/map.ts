import { create } from "zustand";

class Node {
  constructor(
    public id: number,
    public next: number[],
    public prev: number[]
  ) {}
}

const selectIndex = (totalIndex: number, selectingNumber: number) => {
  let randomIndexArray = [];
  for (let i = 0; i < selectingNumber; i++) {
    let randomNum = Math.floor(Math.random() * totalIndex);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum);
    } else {
      i--;
    }
  }
  return randomIndexArray;
};

function createArr() {
  const result: Node[][] = [];
  const nodeNumList: number[] = [];
  for (let i = 0; i < 9; i++) {
    const ranNum = Math.floor(Math.random() * 4) + 1;
    if (i == 0 && ranNum == 1) {
      i--;
      continue;
    }
    if (i == 8 && ranNum == 1) {
      i--;
      continue;
    }

    if (nodeNumList[i - 1] == ranNum && i >= 1) {
      i--;
      continue;
    }
    nodeNumList.push(ranNum);
  }
  nodeNumList.map(() => {}, []);

  result.push([new Node(0, [], [])]);
  nodeNumList.map((data) => {
    const arr = [];
    for (let i = 0; i < data; i++) {
      arr.push(new Node(i, [], []));
    }
    result.push(arr);
  });
  result.push([new Node(0, [], [])]);

  return result;
}
export function createMap() {
  const arr = createArr();

  //각 노드별 경로 생성
  arr.map((depth, depthIndex) => {
    if (depthIndex == arr.length - 1) return;

    const currentNode = arr[depthIndex];
    const nextNode = arr[depthIndex + 1];
    const currentLength = currentNode.length;
    const nextLength = nextNode.length;

    if (currentLength < nextLength) {
      const selectedIndex = selectIndex(nextLength - 1, currentLength);
      //추출된 인덱스 먼저 할당
      selectedIndex.map((index, i) => {
        currentNode[i].next.push(nextNode[index].id);
        nextNode[index].prev.push(currentNode[i].id);
      });
      //나머지 인덱스 추출
      const lastNode = nextNode.filter((data, i) => !selectedIndex.includes(i));
      lastNode.map((node, i) => {
        const index = selectIndex(currentNode.length - 1, 1);
        node.prev.push(currentNode[index[0]].id);
        currentNode[index[0]].next.push(node.id);
      });
      return;
    } else if (currentLength > nextLength) {
      //현재노드에서 먼저 할당할 다음 노드 갯수만큼의 인덱스를 추출
      const selectedIndex = selectIndex(currentLength - 1, nextLength);
      //추출된 인덱스 먼저 할당
      selectedIndex.map((index, i) => {
        currentNode[index].next.push(nextNode[i].id);
        nextNode[i].prev.push(currentNode[index].id);
      });
      //나머지 인덱스 추출
      const lastNode = currentNode.filter(
        (data, i) => !selectedIndex.includes(i)
      );
      lastNode.map((node, i) => {
        const index = selectIndex(nextNode.length - 1, 1);
        node.next.push(nextNode[index[0]].id);
        nextNode[index[0]].prev.push(node.id);
      });
    }
  });
  return arr;
}
