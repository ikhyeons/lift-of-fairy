import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type TCharactor = {
  id: number;
  name: string;
  model: NodeRequire;
  status: { atk: number; def: number; lck: number; spd: number; act: number };
};

export type TArk = {
  id: number;
  name: string;
  cost: number;
};

export namespace StackParamList {
  export type Root = {
    Home: undefined;
    InGame: undefined;
    Achieve: undefined;
    Encyclopedia: undefined;
    Settings: undefined;
  };
  export type InGame = {
    Select: undefined;
    Map: undefined;
    Battle: undefined;
    Shop: undefined;
    Heal: undefined;
    REvent: undefined;
    Ending: undefined;
  };

  export type all = {
    Select: undefined;
    Battle: undefined;
    Shop: undefined;
    Heal: undefined;
    REvent: undefined;
    Ending: undefined;
    Home: undefined;
    InGame: undefined;
    Achieve: undefined;
    Encyclopedia: undefined;
    Settings: undefined;
  };
}

export type RSNC = React.FC<
  NativeStackScreenProps<StackParamList.Root, keyof StackParamList.Root>
>;

export type IGSNC = React.FC<
  NativeStackScreenProps<StackParamList.InGame, keyof StackParamList.InGame>
>;

export default {};
