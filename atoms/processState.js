import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const processState = atom({
  key: "whichProcess",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
