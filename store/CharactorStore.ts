import { create } from "zustand";
import charactorDummy from "../dummyData/charactorDummy";
import { TCharactor } from "../types";

type State = {
  charactors: TCharactor[];
  selectedCharactor: TCharactor | null;
};

type Action = {
  selectCharactor: (charactor: TCharactor) => void;
};

export const useCharactorStore = create<State & Action>((set) => ({
  charactors: charactorDummy,
  selectedCharactor: null,

  selectCharactor: (charactor: TCharactor) =>
    set(() => ({ selectedCharactor: charactor })),
}));
