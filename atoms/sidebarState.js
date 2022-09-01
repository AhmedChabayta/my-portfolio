import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const sidebarState = atom({
  key: "showSidebar",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
