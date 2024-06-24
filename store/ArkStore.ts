import { create } from "zustand";
import arkDummy from "../dummyData/arkDummy";
import { TArk } from "../types";

type State = {
  arks: TArk[];
  selectedArks: TArk[];
  costs: number;
};

type Action = {
  addArk: (ark: TArk) => void;
  removeArk: (ark: TArk) => void;
};

export const useArkStore = create<State & Action>((set) => ({
  arks: arkDummy,
  selectedArks: [],
  costs: 0,
  addArk: (ark) =>
    set((state) => ({
      selectedArks: [...state.selectedArks, ark],
      costs: state.costs + ark.cost,
    })),
  removeArk: (ark) =>
    set((state) => ({
      costs: state.costs - ark.cost,
      selectedArks: state.selectedArks.filter((data, i) => data.id != ark.id),
    })),
}));
